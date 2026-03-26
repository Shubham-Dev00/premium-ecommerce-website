
(function () {
  const KEYS = {
    cart: "auren_cart",
    wishlist: "auren_wishlist",
    saved: "auren_saved",
    coupon: "auren_coupon"
  };

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (error) {
        return fallback;
      }
    },
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const getProducts = () => (window.APP_DATA?.products || []);

  const api = {
    getCart() {
      return store.get(KEYS.cart, []);
    },
    getWishlist() {
      return store.get(KEYS.wishlist, []);
    },
    getSaved() {
      return store.get(KEYS.saved, []);
    },
    getCoupon() {
      return store.get(KEYS.coupon, null);
    },
    getCartDetailed() {
      return api.getCart().map((item) => ({ ...item, product: getProducts().find((product) => product.id === item.id) })).filter((item) => item.product);
    },
    getWishlistDetailed() {
      return api.getWishlist().map((id) => getProducts().find((product) => product.id === id)).filter(Boolean);
    },
    getSavedDetailed() {
      return api.getSaved().map((id) => ({ product: getProducts().find((product) => product.id === id) })).filter((item) => item.product);
    },
    addToCart(productId, quantity = 1) {
      const product = getProducts().find((item) => item.id === Number(productId));
      if (!product) return;
      if (product.stock === 0) {
        window.showToast?.(`Waitlist joined for ${product.name}.`, "info");
        return;
      }
      const cart = api.getCart();
      const existing = cart.find((item) => item.id === product.id);
      if (existing) existing.qty += quantity;
      else cart.push({ id: product.id, qty: quantity });
      store.set(KEYS.cart, cart);
      window.showToast?.(`${product.name} added to cart.`, "success");
      api.pingCartBadge();
      api.broadcast();
    },
    updateQty(productId, delta) {
      const cart = api.getCart();
      const item = cart.find((entry) => entry.id === Number(productId));
      if (!item) return;
      item.qty += delta;
      if (item.qty <= 0) {
        store.set(KEYS.cart, cart.filter((entry) => entry.id !== Number(productId)));
        window.showToast?.("Item removed from cart.", "warning");
      } else {
        store.set(KEYS.cart, cart);
      }
      api.broadcast();
    },
    removeFromCart(productId) {
      const cart = api.getCart().filter((item) => item.id !== Number(productId));
      store.set(KEYS.cart, cart);
      window.showToast?.("Removed from cart.", "warning");
      api.broadcast();
    },
    clearCart() {
      store.set(KEYS.cart, []);
      store.set(KEYS.coupon, null);
      api.broadcast();
    },
    toggleWishlist(productId, button) {
      const product = getProducts().find((item) => item.id === Number(productId));
      let wishlist = api.getWishlist();
      const exists = wishlist.includes(Number(productId));
      if (exists) {
        wishlist = wishlist.filter((id) => id !== Number(productId));
        window.showToast?.(`${product?.name || "Item"} removed from wishlist.`, "warning");
      } else {
        wishlist = [Number(productId), ...wishlist];
        window.showToast?.(`${product?.name || "Item"} saved to wishlist.`, "success");
      }
      store.set(KEYS.wishlist, wishlist);
      if (button) button.classList.toggle("active", !exists);
      api.broadcast();
    },
    saveForLater(productId) {
      const saved = api.getSaved();
      if (!saved.includes(Number(productId))) store.set(KEYS.saved, [Number(productId), ...saved]);
      api.removeFromCart(productId);
      window.showToast?.("Saved for later.", "info");
      api.broadcast();
    },
    moveSavedToCart(productId) {
      const saved = api.getSaved().filter((id) => id !== Number(productId));
      store.set(KEYS.saved, saved);
      api.addToCart(productId);
      api.broadcast();
    },
    removeSaved(productId) {
      store.set(KEYS.saved, api.getSaved().filter((id) => id !== Number(productId)));
      window.showToast?.("Removed saved item.", "warning");
      api.broadcast();
    },
    applyCoupon(code) {
      const normalized = code.trim().toUpperCase();
      if (!normalized) {
        window.showToast?.("Enter a promo code.", "warning");
        return false;
      }
      if (!["SAVE10", "FREESHIP"].includes(normalized)) {
        window.showToast?.("Promo code not recognized.", "error");
        return false;
      }
      store.set(KEYS.coupon, normalized);
      window.showToast?.(`${normalized} applied successfully.`, "success");
      api.broadcast();
      return true;
    },
    calculateTotals() {
      const settings = window.APP_DATA?.settings || { shippingThreshold: 7500, taxRate: 18 };
      const detailed = api.getCartDetailed();
      const subtotal = detailed.reduce((sum, item) => sum + item.product.price * item.qty, 0);
      const coupon = api.getCoupon();
      const discount = coupon === "SAVE10" ? subtotal * 0.1 : 0;
      const shipping = coupon === "FREESHIP" || subtotal >= settings.shippingThreshold || subtotal === 0 ? 0 : 149;
      const taxable = Math.max(subtotal - discount, 0);
      const tax = taxable * ((settings.taxRate || 18) / 100);
      return {
        subtotal,
        discount: Math.round(discount),
        shipping,
        tax: Math.round(tax),
        total: Math.round(taxable + shipping + tax)
      };
    },
    pingCartBadge() {
      const count = document.querySelector("#cartCount");
      if (!count) return;
      count.classList.remove("count-ping");
      void count.offsetWidth;
      count.classList.add("count-ping");
    },
    broadcast() {
      window.dispatchEvent(new Event("cart:updated"));
      document.querySelectorAll("[data-wishlist]").forEach((btn) => {
        btn.classList.toggle("active", api.getWishlist().includes(Number(btn.dataset.wishlist)));
      });
    }
  };

  window.CartSystem = api;

  document.addEventListener("DOMContentLoaded", () => {
    api.broadcast();
  });
})();
