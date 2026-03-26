
(function () {
  const BRAND = {
    name: "AUREN",
    tagline: "Move Light. Live Sharp.",
    niche: "Premium minimalist sneakers, apparel, and travel essentials"
  };

  const PRODUCTS = [
    {
      id: 101,
      name: "Halo Runner",
      category: "Sneakers",
      brand: "AUREN Core",
      price: 6999,
      oldPrice: 8999,
      rating: 4.8,
      reviewCount: 214,
      stock: 18,
      status: "In Stock",
      colors: ["#111827", "#d6d9e4", "#c49a6c"],
      sizes: ["6", "7", "8", "9", "10", "11"],
      badges: ["Sale", "Hot"],
      gender: "Unisex",
      description: "Feather-light knit sneaker built for long city days, soft landings, and a premium minimalist profile.",
      specs: ["3D knit upper", "Cushion foam midsole", "Anti-slip outsole", "Cloud ankle collar"],
      shipping: "Ships in 24 hours. Free express delivery on orders above ₹7,500.",
      images: [
        "https://picsum.photos/seed/auren-halo-1/900/1000",
        "https://picsum.photos/seed/auren-halo-2/900/1000",
        "https://picsum.photos/seed/auren-halo-3/900/1000",
        "https://picsum.photos/seed/auren-halo-4/900/1000"
      ]
    },
    {
      id: 102,
      name: "Slate Court",
      category: "Sneakers",
      brand: "AUREN Studio",
      price: 7499,
      oldPrice: 7499,
      rating: 4.7,
      reviewCount: 162,
      stock: 22,
      status: "In Stock",
      colors: ["#f3f4f6", "#334155", "#94a3b8"],
      sizes: ["6", "7", "8", "9", "10"],
      badges: ["New"],
      gender: "Unisex",
      description: "A refined court silhouette with buttery comfort and clean panel lines that work from airport to after-hours.",
      specs: ["Premium synthetic leather", "Ortholite footbed", "Rubber traction pods", "Low-cut collar"],
      shipping: "Ships in 24 hours. Easy 7-day returns.",
      images: [
        "https://picsum.photos/seed/auren-slate-1/900/1000",
        "https://picsum.photos/seed/auren-slate-2/900/1000",
        "https://picsum.photos/seed/auren-slate-3/900/1000",
        "https://picsum.photos/seed/auren-slate-4/900/1000"
      ]
    },
    {
      id: 103,
      name: "Drift Knit",
      category: "Sneakers",
      brand: "AUREN Motion",
      price: 6299,
      oldPrice: 7999,
      rating: 4.6,
      reviewCount: 139,
      stock: 12,
      status: "Low Stock",
      colors: ["#0f172a", "#64748b", "#f8fafc"],
      sizes: ["6", "7", "8", "9", "10", "11"],
      badges: ["Sale"],
      gender: "Unisex",
      description: "Breathable, agile, and built to disappear on foot—our best everyday sneaker for heat, speed, and movement.",
      specs: ["Vent knit construction", "Responsive rebound foam", "Heel pull tab", "Sweat-wicking lining"],
      shipping: "Ships in 24 hours. Return pickup available.",
      images: [
        "https://picsum.photos/seed/auren-drift-1/900/1000",
        "https://picsum.photos/seed/auren-drift-2/900/1000",
        "https://picsum.photos/seed/auren-drift-3/900/1000",
        "https://picsum.photos/seed/auren-drift-4/900/1000"
      ]
    },
    {
      id: 104,
      name: "Nova Trek",
      category: "Sneakers",
      brand: "AUREN Motion",
      price: 8499,
      oldPrice: 9999,
      rating: 4.9,
      reviewCount: 302,
      stock: 9,
      status: "Low Stock",
      colors: ["#0b1324", "#365486", "#7c6b58"],
      sizes: ["7", "8", "9", "10", "11"],
      badges: ["Hot"],
      gender: "Unisex",
      description: "Trail-bred grip meets an urban silhouette with rugged geometry and weather-aware comfort.",
      specs: ["Water-resistant upper", "Deep traction lugs", "Reflective accents", "Shock-control heel geometry"],
      shipping: "Ships in 12 hours. Priority dispatch eligible.",
      images: [
        "https://picsum.photos/seed/auren-nova-1/900/1000",
        "https://picsum.photos/seed/auren-nova-2/900/1000",
        "https://picsum.photos/seed/auren-nova-3/900/1000",
        "https://picsum.photos/seed/auren-nova-4/900/1000"
      ]
    },
    {
      id: 105,
      name: "Cloud Slide",
      category: "Sneakers",
      brand: "AUREN Core",
      price: 2499,
      oldPrice: 2999,
      rating: 4.5,
      reviewCount: 88,
      stock: 33,
      status: "In Stock",
      colors: ["#111827", "#e2e8f0", "#d6b18c"],
      sizes: ["6", "7", "8", "9", "10", "11"],
      badges: ["Sale"],
      gender: "Unisex",
      description: "Soft recovery slides with oversized cushioning and a sculpted premium look.",
      specs: ["Molded EVA", "Massage texture footbed", "Quick-clean finish", "Arch support"],
      shipping: "Ships in 24 hours.",
      images: [
        "https://picsum.photos/seed/auren-slide-1/900/1000",
        "https://picsum.photos/seed/auren-slide-2/900/1000",
        "https://picsum.photos/seed/auren-slide-3/900/1000",
        "https://picsum.photos/seed/auren-slide-4/900/1000"
      ]
    },
    {
      id: 106,
      name: "Pulse Jacket",
      category: "Apparel",
      brand: "AUREN Studio",
      price: 5899,
      oldPrice: 6999,
      rating: 4.7,
      reviewCount: 126,
      stock: 21,
      status: "In Stock",
      colors: ["#111827", "#64748b", "#d4d4d8"],
      sizes: ["S", "M", "L", "XL"],
      badges: ["New"],
      gender: "Unisex",
      description: "A clean performance shell made for layering, commuting, and moving through unpredictable weather.",
      specs: ["Wind-resistant shell", "Hidden zip pockets", "2-way stretch fabric", "Packable hood"],
      shipping: "Ships in 24 hours. Free exchange on size mismatch.",
      images: [
        "https://picsum.photos/seed/auren-jacket-1/900/1000",
        "https://picsum.photos/seed/auren-jacket-2/900/1000",
        "https://picsum.photos/seed/auren-jacket-3/900/1000",
        "https://picsum.photos/seed/auren-jacket-4/900/1000"
      ]
    },
    {
      id: 107,
      name: "Studio Tee",
      category: "Apparel",
      brand: "AUREN Studio",
      price: 1999,
      oldPrice: 2499,
      rating: 4.4,
      reviewCount: 71,
      stock: 40,
      status: "In Stock",
      colors: ["#ffffff", "#111827", "#cbd5e1"],
      sizes: ["S", "M", "L", "XL"],
      badges: ["Sale"],
      gender: "Unisex",
      description: "A dense premium tee with a cool-touch hand feel, clean drape, and minimal branding.",
      specs: ["240 GSM cotton blend", "Dropped shoulder", "Easy-care finish", "Soft-touch neck tape"],
      shipping: "Ships in 24 hours.",
      images: [
        "https://picsum.photos/seed/auren-tee-1/900/1000",
        "https://picsum.photos/seed/auren-tee-2/900/1000",
        "https://picsum.photos/seed/auren-tee-3/900/1000",
        "https://picsum.photos/seed/auren-tee-4/900/1000"
      ]
    },
    {
      id: 108,
      name: "Transit Pack",
      category: "Bags",
      brand: "AUREN Carry",
      price: 4799,
      oldPrice: 5799,
      rating: 4.8,
      reviewCount: 149,
      stock: 16,
      status: "In Stock",
      colors: ["#111827", "#475569", "#c2410c"],
      sizes: ["20L", "24L"],
      badges: ["Hot"],
      gender: "Unisex",
      description: "Streamlined backpack with workstation organization, luggage sleeve, and smooth structured shape.",
      specs: ["Water-resistant shell", "Laptop sleeve", "Cable pockets", "Hidden passport pocket"],
      shipping: "Ships in 24 hours. Lifetime zipper support.",
      images: [
        "https://picsum.photos/seed/auren-pack-1/900/1000",
        "https://picsum.photos/seed/auren-pack-2/900/1000",
        "https://picsum.photos/seed/auren-pack-3/900/1000",
        "https://picsum.photos/seed/auren-pack-4/900/1000"
      ]
    },
    {
      id: 109,
      name: "Motion Cap",
      category: "Accessories",
      brand: "AUREN Motion",
      price: 1499,
      oldPrice: 1499,
      rating: 4.3,
      reviewCount: 41,
      stock: 26,
      status: "In Stock",
      colors: ["#111827", "#cbd5e1", "#64748b"],
      sizes: ["One Size"],
      badges: ["New"],
      gender: "Unisex",
      description: "Lightweight cap with curved brim and hidden sweat channel for warm days and travel runs.",
      specs: ["Quick-dry fabric", "Adjustable buckle", "UV cover finish", "Vent eyelets"],
      shipping: "Ships in 24 hours.",
      images: [
        "https://picsum.photos/seed/auren-cap-1/900/1000",
        "https://picsum.photos/seed/auren-cap-2/900/1000",
        "https://picsum.photos/seed/auren-cap-3/900/1000",
        "https://picsum.photos/seed/auren-cap-4/900/1000"
      ]
    },
    {
      id: 110,
      name: "Arc Sock Set",
      category: "Accessories",
      brand: "AUREN Core",
      price: 999,
      oldPrice: 1299,
      rating: 4.6,
      reviewCount: 58,
      stock: 64,
      status: "In Stock",
      colors: ["#ffffff", "#111827", "#94a3b8"],
      sizes: ["S", "M", "L"],
      badges: ["Sale"],
      gender: "Unisex",
      description: "Cushioned everyday socks with compression-knit arch support and seamless comfort.",
      specs: ["3-pair set", "Arch support", "Breathable knit", "Anti-slip cuff"],
      shipping: "Ships in 24 hours.",
      images: [
        "https://picsum.photos/seed/auren-socks-1/900/1000",
        "https://picsum.photos/seed/auren-socks-2/900/1000",
        "https://picsum.photos/seed/auren-socks-3/900/1000",
        "https://picsum.photos/seed/auren-socks-4/900/1000"
      ]
    },
    {
      id: 111,
      name: "Lunar Low",
      category: "Sneakers",
      brand: "AUREN Studio",
      price: 7799,
      oldPrice: 9299,
      rating: 4.9,
      reviewCount: 278,
      stock: 0,
      status: "Out of Stock",
      colors: ["#f8fafc", "#111827", "#93c5fd"],
      sizes: ["6", "7", "8", "9", "10"],
      badges: ["Out"],
      gender: "Unisex",
      description: "An ultra-clean low-profile sneaker with soft lining and a sculpted edge that feels quietly expensive.",
      specs: ["Premium matte upper", "Foam collar", "Cupsole construction", "Noise-reduced outsole"],
      shipping: "Currently out of stock. Join waitlist for the next drop.",
      images: [
        "https://picsum.photos/seed/auren-lunar-1/900/1000",
        "https://picsum.photos/seed/auren-lunar-2/900/1000",
        "https://picsum.photos/seed/auren-lunar-3/900/1000",
        "https://picsum.photos/seed/auren-lunar-4/900/1000"
      ]
    },
    {
      id: 112,
      name: "Commuter Tote",
      category: "Bags",
      brand: "AUREN Carry",
      price: 3899,
      oldPrice: 4599,
      rating: 4.5,
      reviewCount: 93,
      stock: 14,
      status: "Low Stock",
      colors: ["#111827", "#475569", "#b08968"],
      sizes: ["12L"],
      badges: ["New"],
      gender: "Unisex",
      description: "Structured tote with hidden organization for everyday carry, classes, and travel essentials.",
      specs: ["Laptop sleeve", "Magnetic closure", "Water-resistant base", "Internal bottle pocket"],
      shipping: "Ships in 24 hours.",
      images: [
        "https://picsum.photos/seed/auren-tote-1/900/1000",
        "https://picsum.photos/seed/auren-tote-2/900/1000",
        "https://picsum.photos/seed/auren-tote-3/900/1000",
        "https://picsum.photos/seed/auren-tote-4/900/1000"
      ]
    }
  ];

  const TESTIMONIALS = [
    { name: "Rhea Kapoor", role: "Content strategist", quote: "The visual polish feels luxury-grade and the comfort is unreal. AUREN nailed premium minimalism.", rating: 5, image: "https://picsum.photos/seed/auren-user1/200/200" },
    { name: "Arjun Mehta", role: "Product manager", quote: "The Halo Runner became my airport shoe, café shoe, and everyday shoe in one week.", rating: 5, image: "https://picsum.photos/seed/auren-user2/200/200" },
    { name: "Mira Sen", role: "Architect", quote: "I came for the design language, stayed for the fit and the ridiculously fast delivery.", rating: 5, image: "https://picsum.photos/seed/auren-user3/200/200" },
    { name: "Kabir Rao", role: "Founder", quote: "The packaging, product pages, and actual products feel like a proper premium brand.", rating: 5, image: "https://picsum.photos/seed/auren-user4/200/200" }
  ];

  const BLOG_POSTS = [
    { id: 1, title: "How to build a clean capsule sneaker wardrobe", category: "Style", date: "March 18, 2026", excerpt: "A practical framework for buying fewer, better pairs that actually fit your week.", image: "https://picsum.photos/seed/auren-blog1/1200/800", featured: true },
    { id: 2, title: "Travel light: the 5-piece carry system we swear by", category: "Travel", date: "March 10, 2026", excerpt: "AUREN's founders share the exact carry setup they use for 2-day and 7-day trips.", image: "https://picsum.photos/seed/auren-blog2/1200/800", featured: false },
    { id: 3, title: "Materials that feel premium without shouting", category: "Design", date: "February 28, 2026", excerpt: "Texture, drape, grain, and silhouette—the details that make restraint feel expensive.", image: "https://picsum.photos/seed/auren-blog3/1200/800", featured: false },
    { id: 4, title: "The commuter's guide to all-day comfort", category: "Performance", date: "February 16, 2026", excerpt: "What to look for in shoes, outerwear, and carry for long city days.", image: "https://picsum.photos/seed/auren-blog4/1200/800", featured: false },
    { id: 5, title: "Why clean design reduces decision fatigue", category: "Mindset", date: "February 04, 2026", excerpt: "Thoughtful product systems make dressing and moving easier than chasing trends.", image: "https://picsum.photos/seed/auren-blog5/1200/800", featured: false },
    { id: 6, title: "From sketch to shelf: designing the Halo Runner", category: "Behind the Brand", date: "January 22, 2026", excerpt: "A visual walk-through of the design decisions behind our hero silhouette.", image: "https://picsum.photos/seed/auren-blog6/1200/800", featured: false }
  ];

  const FAQS = [
    { category: "Orders", q: "How long does delivery take?", a: "Metro orders usually arrive in 2–4 business days. Tier-2 and Tier-3 destinations take 4–7 business days depending on the pincode." },
    { category: "Orders", q: "Can I cancel after placing an order?", a: "Yes. Orders can be cancelled before they move into packed or shipped status from your account order history." },
    { category: "Payments", q: "Which payment methods are available?", a: "We support cards, UPI, cash on delivery, and wallet-based checkout for eligible locations." },
    { category: "Payments", q: "Is cash on delivery available?", a: "COD is available on selected pincodes and order values below ₹10,000." },
    { category: "Returns", q: "What is your return window?", a: "Unused products can be returned within 7 days of delivery. Final-sale items are not returnable." },
    { category: "Returns", q: "How do size exchanges work?", a: "Request an exchange from order history and we will arrange a pickup and replacement based on stock availability." },
    { category: "Products", q: "How should I choose sneaker size?", a: "For most customers the Halo Runner and Slate Court fit true to size. If you are between sizes, go one size up." },
    { category: "Shipping", q: "Do you ship internationally?", a: "We currently ship to 14 countries through selected fulfilment partners. Duties vary by destination." }
  ];

  const TEAM = [
    { name: "Aisha Varma", role: "Founder & Creative Director", image: "https://picsum.photos/seed/auren-team1/800/900" },
    { name: "Dev Khanna", role: "Head of Product", image: "https://picsum.photos/seed/auren-team2/800/900" },
    { name: "Meera Iyer", role: "Brand Experience Lead", image: "https://picsum.photos/seed/auren-team3/800/900" },
    { name: "Nikhil Suri", role: "Supply & Operations", image: "https://picsum.photos/seed/auren-team4/800/900" }
  ];

  const HERO_LOGOS = ["VANTA", "NOVA", "KITE", "LUMO", "ARC", "SABLE"];

  const BASE_ORDERS = [
    { id: "AUR14628", customer: "Demo User", email: "demo@auren.com", date: "2026-03-24", items: [101, 108], total: 11798, status: "Processing", courier: "BlueDart", tracking: "BD2345089", timeline: ["Placed", "Confirmed", "Shipped"], source: "Instagram" },
    { id: "AUR14612", customer: "Naina Shah", email: "naina@example.com", date: "2026-03-22", items: [104], total: 8499, status: "Shipped", courier: "Delhivery", tracking: "DL2891021", timeline: ["Placed", "Confirmed", "Shipped", "Out for Delivery"], source: "Organic" },
    { id: "AUR14583", customer: "Raghav Gupta", email: "raghav@example.com", date: "2026-03-18", items: [106, 109], total: 7398, status: "Delivered", courier: "Ekart", tracking: "EK4492918", timeline: ["Placed", "Confirmed", "Shipped", "Out for Delivery", "Delivered"], source: "Google Ads" },
    { id: "AUR14517", customer: "Sara Ali", email: "sara@example.com", date: "2026-03-15", items: [112, 110], total: 4898, status: "Delivered", courier: "Xpressbees", tracking: "XB1279821", timeline: ["Placed", "Confirmed", "Shipped", "Delivered"], source: "Email" },
    { id: "AUR14478", customer: "Kabir Das", email: "kabir@example.com", date: "2026-03-11", items: [111], total: 7799, status: "Cancelled", courier: "BlueDart", tracking: "BD9992821", timeline: ["Placed", "Cancelled"], source: "Direct" }
  ];

  const CUSTOMERS = [
    { id: 1, name: "Demo User", email: "demo@auren.com", orders: 6, spent: 31890, joined: "2025-10-12", status: "Active", avatar: "https://picsum.photos/seed/auren-cust1/200/200" },
    { id: 2, name: "Naina Shah", email: "naina@example.com", orders: 4, spent: 22870, joined: "2025-08-19", status: "Active", avatar: "https://picsum.photos/seed/auren-cust2/200/200" },
    { id: 3, name: "Raghav Gupta", email: "raghav@example.com", orders: 3, spent: 16430, joined: "2025-11-03", status: "Active", avatar: "https://picsum.photos/seed/auren-cust3/200/200" },
    { id: 4, name: "Sara Ali", email: "sara@example.com", orders: 2, spent: 10570, joined: "2026-01-24", status: "Active", avatar: "https://picsum.photos/seed/auren-cust4/200/200" },
    { id: 5, name: "Ishaan Kapoor", email: "ishaan@example.com", orders: 1, spent: 3799, joined: "2026-02-18", status: "Banned", avatar: "https://picsum.photos/seed/auren-cust5/200/200" }
  ];

  const COUPONS = [
    { code: "SAVE10", type: "Percentage", value: "10%", usage: 128, expiry: "2026-04-30", active: true },
    { code: "FREESHIP", type: "Shipping", value: "Free shipping", usage: 81, expiry: "2026-05-15", active: true },
    { code: "NEWDROP15", type: "Percentage", value: "15%", usage: 34, expiry: "2026-04-12", active: false }
  ];

  const SETTINGS_DEFAULTS = {
    siteName: "AUREN",
    currency: "INR (₹)",
    shippingThreshold: 7500,
    taxRate: 18,
    emailNotifications: true,
    paymentCards: true,
    paymentUpi: true,
    paymentCod: true,
    paymentWallet: true
  };

  const STORAGE_KEYS = {
    searchHistory: "auren_search_history",
    recentViews: "auren_recent_views",
    addresses: "auren_addresses",
    orders: "auren_orders",
    adminProducts: "auren_admin_products",
    adminCustomers: "auren_admin_customers",
    adminCoupons: "auren_admin_coupons",
    adminSettings: "auren_admin_settings"
  };

  const APP = {
    brand: BRAND,
    products: PRODUCTS,
    testimonials: TESTIMONIALS,
    blogPosts: BLOG_POSTS,
    faqs: FAQS,
    team: TEAM,
    logos: HERO_LOGOS,
    baseOrders: BASE_ORDERS,
    customers: CUSTOMERS,
    coupons: COUPONS,
    settings: SETTINGS_DEFAULTS
  };

  window.APP_DATA = APP;

  window.APP_STORAGE_KEYS = STORAGE_KEYS;

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

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

  function seedStorage() {
    if (!localStorage.getItem(STORAGE_KEYS.orders)) store.set(STORAGE_KEYS.orders, BASE_ORDERS);
    if (!localStorage.getItem(STORAGE_KEYS.adminProducts)) store.set(STORAGE_KEYS.adminProducts, PRODUCTS);
    if (!localStorage.getItem(STORAGE_KEYS.adminCustomers)) store.set(STORAGE_KEYS.adminCustomers, CUSTOMERS);
    if (!localStorage.getItem(STORAGE_KEYS.adminCoupons)) store.set(STORAGE_KEYS.adminCoupons, COUPONS);
    if (!localStorage.getItem(STORAGE_KEYS.addresses)) {
      store.set(STORAGE_KEYS.addresses, [
        { id: 1, name: "Demo User", phone: "9876543210", pincode: "110001", city: "New Delhi", state: "Delhi", address: "28 Connaught Place, Block A" }
      ]);
    }
    if (!localStorage.getItem(STORAGE_KEYS.adminSettings)) store.set(STORAGE_KEYS.adminSettings, SETTINGS_DEFAULTS);
  }

  function currency(value) {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
  }

  function slug(text) {
    return text.toLowerCase().replace(/\s+/g, "-");
  }

  function getProduct(id) {
    return PRODUCTS.find((product) => product.id === Number(id));
  }

  function percentageOff(product) {
    return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  }

  function averageReview(product) {
    return `${product.rating.toFixed(1)} (${product.reviewCount} reviews)`;
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function currentFile() {
    return window.location.pathname.split("/").pop() || "index.html";
  }

  function addSearchHistory(query) {
    if (!query) return;
    const current = store.get(STORAGE_KEYS.searchHistory, []);
    const next = [query, ...current.filter((item) => item.toLowerCase() !== query.toLowerCase())].slice(0, 6);
    store.set(STORAGE_KEYS.searchHistory, next);
  }

  function updateRecentViews(productId) {
    if (!productId) return;
    const current = store.get(STORAGE_KEYS.recentViews, []);
    const next = [productId, ...current.filter((item) => item !== productId)].slice(0, 6);
    store.set(STORAGE_KEYS.recentViews, next);
  }

  function getOrders() {
    return store.get(STORAGE_KEYS.orders, BASE_ORDERS);
  }

  function getAdminProducts() {
    return store.get(STORAGE_KEYS.adminProducts, PRODUCTS);
  }

  function getAdminCustomers() {
    return store.get(STORAGE_KEYS.adminCustomers, CUSTOMERS);
  }

  function getCoupons() {
    return store.get(STORAGE_KEYS.adminCoupons, COUPONS);
  }

  function getSettings() {
    return store.get(STORAGE_KEYS.adminSettings, SETTINGS_DEFAULTS);
  }

  function productCard(product) {
    const badges = product.badges.map((badge) => {
      const cls = badge.toLowerCase() === "sale" ? "sale" : badge.toLowerCase() === "new" ? "new" : badge.toLowerCase() === "hot" ? "hot" : "out";
      const label = badge === "Out" ? "Out of Stock" : badge;
      return `<span class="tag-pill ${cls}">${label}</span>`;
    }).join("");
    return `
      <article class="product-card" data-tilt data-product-id="${product.id}">
        <div class="image-wrap">
          <div class="product-badges">${badges}</div>
          <div class="product-actions">
            <button class="icon-btn heart-btn" data-wishlist="${product.id}" aria-label="Toggle wishlist">❤</button>
            <button class="icon-btn" data-quick-view="${product.id}" aria-label="Quick view">👁</button>
          </div>
          <a href="product-detail.html?id=${product.id}" class="product-link">
            <img src="${product.images[0]}" alt="${product.name}">
          </a>
        </div>
        <div class="stack">
          <div class="product-meta">
            <span>${product.category}</span>
            <span>•</span>
            <span>${product.brand}</span>
          </div>
          <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
          <div class="rating-row">
            <span class="rating-stars">★★★★★</span>
            <span>${averageReview(product)}</span>
          </div>
          <p class="muted">${product.description}</p>
          <div class="price-row">
            <strong>${currency(product.price)}</strong>
            <s>${currency(product.oldPrice)}</s>
            <span class="tag-pill sale">${percentageOff(product)}% off</span>
          </div>
          <div class="card-actions">
            <button class="btn" data-add-cart="${product.id}" ${product.stock === 0 ? "disabled" : ""}>${product.stock === 0 ? "Notify Me" : "Add to Cart"}</button>
            <a class="btn-secondary" href="product-detail.html?id=${product.id}">View Details</a>
          </div>
        </div>
      </article>
    `;
  }

  function simpleProductCard(product) {
    return `
      <article class="product-card" data-tilt data-product-id="${product.id}">
        <div class="image-wrap">
          <a href="product-detail.html?id=${product.id}">
            <img src="${product.images[1] || product.images[0]}" alt="${product.name}">
          </a>
        </div>
        <div class="stack">
          <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
          <div class="price-row"><strong>${currency(product.price)}</strong></div>
          <div class="card-actions">
            <button class="btn" data-add-cart="${product.id}">Move to Cart</button>
            <button class="btn-ghost" data-wishlist="${product.id}">Remove</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderStars(rating) {
    const filled = Math.round(rating);
    return "★★★★★".split("").map((star, index) => `<span style="opacity:${index < filled ? 1 : .25}">${star}</span>`).join("");
  }

  function showToast(message, type = "info") {
    let stack = qs(".toast-stack");
    if (!stack) {
      stack = document.createElement("div");
      stack.className = "toast-stack";
      document.body.appendChild(stack);
    }
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    stack.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  window.showToast = showToast;

  function navigateWithFade(url) {
    document.body.classList.add("page-leaving");
    setTimeout(() => { window.location.href = url; }, 230);
  }

  function bindPageTransitions() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (link.target === "_blank") return;
      if (href.startsWith("http")) return;
      if (href.endsWith(".csv")) return;
      event.preventDefault();
      navigateWithFade(href);
    });
  }

  function initHeaderFooter() {
    if (document.body.classList.contains("admin-body")) return;
    const header = qs(".site-header");
    const footer = qs(".site-footer");
    const active = currentFile();
    const nav = [
      ["index.html", "Home"],
      ["products.html", "Shop"],
      ["wishlist.html", "Wishlist"],
      ["about.html", "About"],
      ["blog.html", "Journal"],
      ["contact.html", "Contact"]
    ];

    const headerHTML = `
      <div class="header-bar">
        <a href="index.html" class="brand">
          <span class="brand-mark">A</span>
          <span class="brand-copy">
            <strong>${BRAND.name}</strong>
            <span>${BRAND.tagline}</span>
          </span>
        </a>
        <nav class="main-nav">
          ${nav.map(([href, label]) => `<a href="${href}" class="${active === href ? "active" : ""}">${label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <div class="header-search desktop-only">
            <span class="search-icon">⌕</span>
            <input type="search" id="navSearchInput" placeholder="Search sneakers, bags, jackets...">
            <div class="search-dropdown" id="searchDropdown"></div>
          </div>
          <a href="wishlist.html" class="icon-btn header-icon-wrap" aria-label="Wishlist">
            ♡
            <span class="badge-count" id="wishlistCount">0</span>
          </a>
          <a href="cart.html" class="icon-btn header-icon-wrap" aria-label="Cart">
            🛒
            <span class="badge-count" id="cartCount">0</span>
          </a>
          <a href="account.html" class="btn-secondary desktop-only" id="authActionBtn">Login</a>
          <button class="icon-btn menu-toggle" id="menuToggle" aria-label="Menu">☰</button>
        </div>
      </div>
      <div class="mobile-drawer" id="mobileDrawer">
        <div class="stack">
          <div class="header-search">
            <span class="search-icon">⌕</span>
            <input type="search" id="navSearchInputMobile" placeholder="Search products...">
            <div class="search-dropdown" id="searchDropdownMobile"></div>
          </div>
          <nav>
            ${nav.map(([href, label]) => `<a href="${href}" class="${active === href ? "active" : ""}">${label}</a>`).join("")}
            <a href="account.html">Account</a>
            <a href="order-history.html">Orders</a>
          </nav>
        </div>
      </div>
    `;
    const footerHTML = `
      <div class="container">
        <div class="footer-shell">
          <div class="footer-grid">
            <div class="stack">
              <a href="index.html" class="brand">
                <span class="brand-mark">A</span>
                <span class="brand-copy">
                  <strong>${BRAND.name}</strong>
                  <span>${BRAND.tagline}</span>
                </span>
              </a>
              <p class="muted">${BRAND.niche}. Premium design, clean motion, and everyday products built to feel quietly expensive.</p>
              <div class="row">
                <a href="https://picsum.photos" target="_blank" class="btn-soft">Image Source</a>
                <a href="admin/dashboard.html" class="btn-ghost">Admin Demo</a>
              </div>
            </div>
            <div class="footer-links">
              <strong>Shop</strong>
              <a href="products.html">All Products</a>
              <a href="wishlist.html">Wishlist</a>
              <a href="cart.html">Cart</a>
              <a href="order-tracking.html">Track Order</a>
            </div>
            <div class="footer-links">
              <strong>Company</strong>
              <a href="about.html">About</a>
              <a href="blog.html">Journal</a>
              <a href="contact.html">Contact</a>
              <a href="faq.html">FAQ</a>
            </div>
            <div class="footer-links">
              <strong>Policies</strong>
              <a href="terms.html">Terms</a>
              <a href="privacy.html">Privacy</a>
              <a href="refund-policy.html">Refund Policy</a>
              <a href="login.html">Login</a>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 ${BRAND.name}. Crafted as a premium front-end demo.</span>
            <span>Dummy credentials: demo@auren.com / Demo@123 • admin@auren.com / Admin@123</span>
          </div>
        </div>
      </div>
    `;
    if (header) header.innerHTML = headerHTML;
    if (footer) footer.innerHTML = footerHTML;

    const toggle = qs("#menuToggle");
    const drawer = qs("#mobileDrawer");
    if (toggle && drawer) {
      toggle.addEventListener("click", () => drawer.classList.toggle("active"));
    }

    window.addEventListener("scroll", () => {
      header?.classList.toggle("scrolled", window.scrollY > 24);
    });
  }

  function updateNavbarMeta() {
    const cartCount = qs("#cartCount");
    const wishlistCount = qs("#wishlistCount");
    const authActionBtn = qs("#authActionBtn");
    const cartItems = window.CartSystem ? window.CartSystem.getCart() : [];
    const wishlistItems = window.CartSystem ? window.CartSystem.getWishlist() : [];
    const user = window.AuthSystem ? window.AuthSystem.getUser() : null;
    if (cartCount) cartCount.textContent = cartItems.reduce((sum, item) => sum + item.qty, 0);
    if (wishlistCount) wishlistCount.textContent = wishlistItems.length;
    if (authActionBtn) authActionBtn.textContent = user ? `Hi, ${user.name.split(" ")[0]}` : "Login";
  }

  function initSearchAutocomplete() {
    const bindSearch = (inputId, dropdownId) => {
      const input = qs(`#${inputId}`);
      const dropdown = qs(`#${dropdownId}`);
      if (!input || !dropdown) return;
      const render = (query = "") => {
        const history = store.get(STORAGE_KEYS.searchHistory, []);
        const results = query
          ? PRODUCTS.filter((product) => `${product.name} ${product.category} ${product.brand}`.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
          : history.map((item) => ({ history: true, name: item }));
        dropdown.innerHTML = results.length
          ? results.map((item) => item.history
              ? `<div class="search-item" data-search-history="${item.name}"><strong>${item.name}</strong><span class="muted">Recent search</span></div>`
              : `<div class="search-item" data-search-go="${item.name}"><strong>${item.name}</strong><span class="muted">${item.category} • ${currency(item.price)}</span></div>`
            ).join("")
          : `<div class="search-item"><strong>No matches</strong><span class="muted">Try sneakers, bags, or jackets</span></div>`;
        dropdown.classList.add("active");
      };
      input.addEventListener("focus", () => render(input.value.trim()));
      input.addEventListener("input", () => render(input.value.trim()));
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const query = input.value.trim();
          if (!query) return;
          addSearchHistory(query);
          navigateWithFade(`search-results.html?q=${encodeURIComponent(query)}`);
        }
      });
      dropdown.addEventListener("click", (event) => {
        const card = event.target.closest("[data-search-go], [data-search-history]");
        if (!card) return;
        const query = card.dataset.searchGo || card.dataset.searchHistory;
        addSearchHistory(query);
        navigateWithFade(`search-results.html?q=${encodeURIComponent(query)}`);
      });
      document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target) && event.target !== input) dropdown.classList.remove("active");
      });
    };
    bindSearch("navSearchInput", "searchDropdown");
    bindSearch("navSearchInputMobile", "searchDropdownMobile");
  }

  function createCookieBanner() {
    if (document.body.classList.contains("admin-body")) return;
    if (localStorage.getItem("auren_cookie_consent")) return;
    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML = `
      <div class="card">
        <div class="stack">
          <strong>We use cookies to personalize your demo experience</strong>
          <span class="muted">This static project uses localStorage for cart, auth, wishlist, and saved preferences.</span>
        </div>
        <div class="row">
          <button class="btn-secondary" data-cookie-action="decline">Later</button>
          <button class="btn" data-cookie-action="accept">Accept</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add("show"));
    banner.addEventListener("click", (event) => {
      const action = event.target.dataset.cookieAction;
      if (!action) return;
      localStorage.setItem("auren_cookie_consent", action);
      banner.classList.remove("show");
      setTimeout(() => banner.remove(), 220);
    });
  }

  function createBackToTop() {
    if (document.body.classList.contains("admin-body")) return;
    const button = document.createElement("button");
    button.className = "back-to-top";
    button.setAttribute("aria-label", "Back to top");
    button.textContent = "↑";
    document.body.appendChild(button);
    window.addEventListener("scroll", () => {
      button.classList.toggle("show", window.scrollY > 400);
    });
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function renderHome() {
    const featured = qs("#bestSellerGrid");
    const arrivals = qs("#newArrivalGrid");
    const categories = qs("#categoryGrid");
    const logos = qs("#logoStrip");
    const testimonials = qs("#testimonialTrack");
    if (categories) {
      const cards = [
        { title: "City Sneakers", copy: "Low-profile icons engineered for long urban days.", image: PRODUCTS[0].images[1], link: "products.html?category=Sneakers" },
        { title: "Minimal Apparel", copy: "Layering pieces with premium drape and quiet detail.", image: PRODUCTS[5].images[1], link: "products.html?category=Apparel" },
        { title: "Travel Carry", copy: "Structured bags for work, class, and quick departures.", image: PRODUCTS[7].images[1], link: "products.html?category=Bags" },
        { title: "Motion Accessories", copy: "Refined essentials for movement, heat, and recovery.", image: PRODUCTS[9].images[1], link: "products.html?category=Accessories" }
      ];
      categories.innerHTML = cards.map((item) => `
        <a class="category-card" href="${item.link}" data-reveal>
          <small>${BRAND.name} Collection</small>
          <h3>${item.title}</h3>
          <p class="muted">${item.copy}</p>
          <img src="${item.image}" alt="${item.title}">
        </a>
      `).join("");
    }
    if (featured) {
      simulateGridLoading(featured, PRODUCTS.slice(0, 8), productCard);
    }
    if (arrivals) {
      simulateGridLoading(arrivals, PRODUCTS.filter((product) => product.badges.includes("New")).concat(PRODUCTS.slice(8, 10)), productCard);
    }
    if (logos) {
      logos.innerHTML = HERO_LOGOS.map((name) => `<div class="logo-chip" data-reveal>${name}</div>`).join("");
    }
    if (testimonials) {
      testimonials.innerHTML = TESTIMONIALS.map((item) => `
        <article class="testimonial-card">
          <div class="rating-stars">${renderStars(item.rating)}</div>
          <p>${item.quote}</p>
          <div class="testimonial-user">
            <img class="avatar" src="${item.image}" alt="${item.name}">
            <div>
              <strong>${item.name}</strong>
              <div class="muted">${item.role}</div>
            </div>
          </div>
        </article>
      `).join("");
      let index = 0;
      setInterval(() => {
        const isMobile = window.innerWidth < 820;
        index = (index + 1) % TESTIMONIALS.length;
        testimonials.style.transform = `translateX(-${index * (isMobile ? 100 : 34)}%)`;
      }, 3500);
    }
    const newsletterForm = qs("#newsletterForm");
    newsletterForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = qs("input", newsletterForm);
      if (!/\S+@\S+\.\S+/.test(input.value.trim())) {
        showToast("Enter a valid email address.", "error");
        return;
      }
      input.value = "";
      showToast("You're in. Early access updates will land in your inbox.", "success");
    });
    initFlashSaleTimer();
  }

  function simulateGridLoading(container, data, renderer) {
    container.innerHTML = Array.from({ length: Math.min(data.length, 4) }).map(() => `<div class="skeleton"></div>`).join("");
    setTimeout(() => {
      container.innerHTML = data.map(renderer).join("");
      document.dispatchEvent(new CustomEvent("content:rendered"));
    }, 380);
  }

  function initFlashSaleTimer() {
    const countdown = qs("#flashSaleTimer");
    if (!countdown) return;
    const target = new Date();
    target.setHours(target.getHours() + 30);
    const update = () => {
      const diff = Math.max(0, target - new Date());
      const hours = String(Math.floor(diff / 36e5)).padStart(2, "0");
      const minutes = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, "0");
      const seconds = String(Math.floor((diff % 6e4) / 1000)).padStart(2, "0");
      const days = String(Math.floor(diff / 864e5)).padStart(2, "0");
      const parts = [{ label: "Days", value: days }, { label: "Hours", value: hours }, { label: "Minutes", value: minutes }, { label: "Seconds", value: seconds }];
      countdown.innerHTML = parts.map((part) => `<div class="countdown-unit"><strong>${part.value}</strong><span>${part.label}</span></div>`).join("");
    };
    update();
    setInterval(update, 1000);
  }

  function buildFilterState() {
    const params = new URLSearchParams(window.location.search);
    return {
      search: params.get("q") || "",
      category: params.get("category") || "",
      sort: params.get("sort") || "popular",
      page: Number(params.get("page") || 1),
      brands: [],
      colors: [],
      sizes: [],
      minPrice: 0,
      rating: 0
    };
  }

  function renderProductsPage(mode = "products") {
    const root = qs("#productsApp");
    if (!root) return;
    const state = buildFilterState();
    const pageSize = 8;
    const categories = [...new Set(PRODUCTS.map((item) => item.category))];
    const brands = [...new Set(PRODUCTS.map((item) => item.brand))];
    const colors = [...new Set(PRODUCTS.flatMap((item) => item.colors))];
    const sizes = [...new Set(PRODUCTS.flatMap((item) => item.sizes))];
    const q = getQueryParam("q");
    if (mode === "search" && q) state.search = q;

    const renderSidebar = () => {
      qs("#filterSidebar", root).innerHTML = `
        <div class="filter-card">
          <div class="filter-group">
            <strong>Search</strong>
            <input type="search" id="productSearchInput" placeholder="Find products..." value="${state.search}">
          </div>
        </div>
        <div class="filter-card">
          <div class="filter-group">
            <strong>Category</strong>
            ${categories.map((item) => `<label class="filter-option"><span>${item}</span><input type="radio" name="categoryFilter" value="${item}" ${state.category === item ? "checked" : ""}></label>`).join("")}
            <label class="filter-option"><span>All categories</span><input type="radio" name="categoryFilter" value="" ${!state.category ? "checked" : ""}></label>
          </div>
        </div>
        <div class="filter-card">
          <div class="filter-group">
            <strong>Price from</strong>
            <input type="range" min="0" max="9000" step="500" id="priceRange" value="${state.minPrice}">
            <div class="muted">Above ${currency(state.minPrice)}</div>
          </div>
        </div>
        <div class="filter-card">
          <div class="filter-group">
            <strong>Brand</strong>
            ${brands.map((item) => `<label class="filter-option"><span>${item}</span><input type="checkbox" value="${item}" data-filter-brand></label>`).join("")}
          </div>
        </div>
        <div class="filter-card">
          <div class="filter-group">
            <strong>Rating</strong>
            <label class="filter-option"><span>4★ & above</span><input type="radio" name="ratingFilter" value="4"></label>
            <label class="filter-option"><span>4.5★ & above</span><input type="radio" name="ratingFilter" value="4.5"></label>
            <label class="filter-option"><span>All ratings</span><input type="radio" name="ratingFilter" value="0" checked></label>
          </div>
        </div>
        <div class="filter-card">
          <div class="filter-group">
            <strong>Color</strong>
            ${colors.map((item) => `<label class="filter-option"><span class="color-swatch" style="background:${item}"></span><input type="checkbox" value="${item}" data-filter-color></label>`).join("")}
          </div>
        </div>
        <div class="filter-card">
          <div class="filter-group">
            <strong>Size</strong>
            ${sizes.map((item) => `<label class="filter-option"><span>${item}</span><input type="checkbox" value="${item}" data-filter-size></label>`).join("")}
          </div>
        </div>
      `;
      const searchInput = qs("#productSearchInput", root);
      searchInput?.addEventListener("input", () => {
        state.search = searchInput.value.trim();
        state.page = 1;
        renderAll();
      });
      qsa('input[name="categoryFilter"]', root).forEach((input) => input.addEventListener("change", () => {
        state.category = input.value;
        state.page = 1;
        renderAll();
      }));
      qs("#priceRange", root)?.addEventListener("input", (event) => {
        state.minPrice = Number(event.target.value);
        state.page = 1;
        renderAll();
      });
      qsa("[data-filter-brand]", root).forEach((input) => input.addEventListener("change", () => {
        state.brands = qsa("[data-filter-brand]:checked", root).map((el) => el.value);
        state.page = 1;
        renderAll();
      }));
      qsa("[data-filter-color]", root).forEach((input) => input.addEventListener("change", () => {
        state.colors = qsa("[data-filter-color]:checked", root).map((el) => el.value);
        state.page = 1;
        renderAll();
      }));
      qsa("[data-filter-size]", root).forEach((input) => input.addEventListener("change", () => {
        state.sizes = qsa("[data-filter-size]:checked", root).map((el) => el.value);
        state.page = 1;
        renderAll();
      }));
      qsa('input[name="ratingFilter"]', root).forEach((input) => input.addEventListener("change", () => {
        state.rating = Number(input.value);
        state.page = 1;
        renderAll();
      }));
    };

    const applyFilters = () => {
      let result = [...PRODUCTS];
      if (state.search) {
        result = result.filter((item) => `${item.name} ${item.category} ${item.brand}`.toLowerCase().includes(state.search.toLowerCase()));
      }
      if (state.category) result = result.filter((item) => item.category === state.category);
      if (state.minPrice) result = result.filter((item) => item.price >= state.minPrice);
      if (state.brands.length) result = result.filter((item) => state.brands.includes(item.brand));
      if (state.colors.length) result = result.filter((item) => item.colors.some((color) => state.colors.includes(color)));
      if (state.sizes.length) result = result.filter((item) => item.sizes.some((size) => state.sizes.includes(size)));
      if (state.rating) result = result.filter((item) => item.rating >= state.rating);

      const sorters = {
        popular: (a, b) => b.reviewCount - a.reviewCount,
        newest: (a, b) => b.id - a.id,
        low: (a, b) => a.price - b.price,
        high: (a, b) => b.price - a.price,
        rating: (a, b) => b.rating - a.rating
      };
      result.sort(sorters[state.sort] || sorters.popular);
      return result;
    };

    const renderAll = () => {
      const data = applyFilters();
      const count = qs("#resultsCount", root);
      const grid = qs("#productsGrid", root);
      const tags = qs("#activeFilterTags", root);
      const pagination = qs("#pagination", root);
      const empty = qs("#productsEmpty", root);
      const title = qs("#resultsHeading", root);

      if (mode === "search" && q) title.textContent = `Results for: “${q}”`;
      count.textContent = `${data.length} results`;

      const activeTags = [
        state.category && { key: "category", label: state.category },
        state.search && { key: "search", label: `Search: ${state.search}` },
        state.minPrice && { key: "minPrice", label: `Above ${currency(state.minPrice)}` },
        ...state.brands.map((value) => ({ key: "brand", label: value })),
        ...state.sizes.map((value) => ({ key: "size", label: value })),
        state.rating && { key: "rating", label: `${state.rating}+ stars` }
      ].filter(Boolean);
      tags.innerHTML = activeTags.map((tag) => `<button class="filter-chip active" data-remove-filter="${tag.key}" data-remove-value="${tag.label}">${tag.label} ✕</button>`).join("");

      if (!data.length) {
        empty.classList.remove("hide");
        grid.innerHTML = "";
        pagination.innerHTML = "";
        return;
      }

      empty.classList.add("hide");
      const pageCount = Math.ceil(data.length / pageSize);
      state.page = Math.min(state.page, pageCount);
      const start = (state.page - 1) * pageSize;
      const pageItems = data.slice(start, start + pageSize);
      simulateGridLoading(grid, pageItems, productCard);
      pagination.innerHTML = Array.from({ length: pageCount }).map((_, index) => `<button class="page-link ${index + 1 === state.page ? "active" : ""}" data-page-go="${index + 1}">${index + 1}</button>`).join("");
    };

    renderSidebar();
    renderAll();

    qs("#sortSelect", root)?.addEventListener("change", (event) => {
      state.sort = event.target.value;
      state.page = 1;
      renderAll();
    });

    root.addEventListener("click", (event) => {
      const pageBtn = event.target.closest("[data-page-go]");
      if (pageBtn) {
        state.page = Number(pageBtn.dataset.pageGo);
        renderAll();
      }
      const removeBtn = event.target.closest("[data-remove-filter]");
      if (removeBtn) {
        const key = removeBtn.dataset.removeFilter;
        if (key === "category") state.category = "";
        if (key === "search") state.search = "";
        if (key === "minPrice") state.minPrice = 0;
        if (key === "brand") state.brands = [];
        if (key === "size") state.sizes = [];
        if (key === "rating") state.rating = 0;
        renderSidebar();
        renderAll();
      }
    });
  }

  function renderProductDetail() {
    const root = qs("#productDetailApp");
    if (!root) return;
    const id = Number(getQueryParam("id") || 101);
    const product = getProduct(id) || PRODUCTS[0];
    updateRecentViews(product.id);
    const related = PRODUCTS.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
    const recent = store.get(STORAGE_KEYS.recentViews, []).filter((item) => item !== product.id).map(getProduct).filter(Boolean).slice(0, 4);

    qs("#productGallery", root).innerHTML = `
      <div class="gallery-stage hero-kenburns">
        <img id="mainProductImage" src="${product.images[0]}" alt="${product.name}">
      </div>
      <div class="thumbnail-row">
        ${product.images.map((image, index) => `<button class="thumbnail ${index === 0 ? "active" : ""}" data-thumb="${image}"><img src="${image}" alt="${product.name} view ${index + 1}"></button>`).join("")}
      </div>
    `;

    qs("#productMeta", root).innerHTML = `
      <div class="stack">
        <div class="rating-row">
          <span class="rating-stars">★★★★★</span>
          <span>${product.rating.toFixed(1)} • ${product.reviewCount} reviews</span>
        </div>
        <h1 class="product-title">${product.name}</h1>
        <p class="muted">${product.description}</p>
        <div class="price-row">
          <strong>${currency(product.price)}</strong>
          <s>${currency(product.oldPrice)}</s>
          <span class="tag-pill sale">${percentageOff(product)}% off</span>
        </div>
        <div class="stock-pill ${product.stock > 0 ? "" : "out"}">${product.stock > 0 ? `${product.stock} pairs left in stock` : "Waitlist open for next drop"}</div>
        <div class="color-row">
          <strong>Color</strong>
          ${product.colors.map((color, index) => `<button class="color-swatch ${index === 0 ? "active" : ""}" data-color style="background:${color}" aria-label="Color option"></button>`).join("")}
        </div>
        <div class="size-row">
          <strong>Size</strong>
          ${product.sizes.map((size, index) => `<button class="size-chip ${index === 2 ? "active" : ""}" data-size>${size}</button>`).join("")}
          <button class="btn-ghost" id="sizeGuideBtn">Size Guide</button>
        </div>
        <div class="qty-row">
          <strong>Quantity</strong>
          <div class="qty-stepper">
            <button data-qty-minus>-</button>
            <span id="detailQty">1</span>
            <button data-qty-plus>+</button>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn" data-add-cart="${product.id}">${product.stock > 0 ? "Add to Cart" : "Join Waitlist"}</button>
          <button class="btn-secondary" id="buyNowBtn">Buy Now</button>
          <button class="btn-ghost" data-wishlist="${product.id}">Add to Wishlist</button>
        </div>
      </div>
      <div class="tab-nav">
        <button class="tab-btn active" data-tab="description">Description</button>
        <button class="tab-btn" data-tab="specs">Specifications</button>
        <button class="tab-btn" data-tab="reviews">Reviews</button>
        <button class="tab-btn" data-tab="shipping">Shipping</button>
      </div>
      <div class="tab-panel active" data-panel="description">
        <p>${product.description} The silhouette is designed to feel premium from the first glance, with comfort details that disappear into everyday use.</p>
      </div>
      <div class="tab-panel" data-panel="specs">
        <ul>${product.specs.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="tab-panel" data-panel="reviews">
        <div class="rating-breakdown">
          <div class="filter-option"><span>5 stars</span><div class="breakdown-bar"><span style="width:76%"></span></div></div>
          <div class="filter-option"><span>4 stars</span><div class="breakdown-bar"><span style="width:18%"></span></div></div>
          <div class="filter-option"><span>3 stars</span><div class="breakdown-bar"><span style="width:5%"></span></div></div>
          <div class="filter-option"><span>2 stars</span><div class="breakdown-bar"><span style="width:1%"></span></div></div>
        </div>
      </div>
      <div class="tab-panel" data-panel="shipping">
        <p>${product.shipping}</p>
      </div>
      <div class="panel">
        <strong>Delivery estimate by pincode</strong>
        <div class="promo-row" style="margin-top:.8rem">
          <input type="text" id="pincodeInput" placeholder="Enter pincode">
          <button class="btn-secondary" id="pincodeCheckBtn">Check</button>
        </div>
        <div class="muted" id="pincodeResult"></div>
      </div>
    `;

    qs("#relatedProducts", root).innerHTML = related.map(productCard).join("");
    qs("#recentProducts", root).innerHTML = recent.length ? recent.map(productCard).join("") : `<div class="empty-state">No recent views yet. Start exploring products to populate this section.</div>`;
    qs("#customerReviewCards", root).innerHTML = TESTIMONIALS.slice(0, 3).map((item) => `
      <article class="testimonial-card">
        <div class="rating-stars">${renderStars(item.rating)}</div>
        <p>${item.quote}</p>
        <div class="testimonial-user">
          <img class="avatar" src="${item.image}" alt="${item.name}">
          <div><strong>${item.name}</strong><div class="muted">${item.role}</div></div>
        </div>
      </article>
    `).join("");

    let qty = 1;
    root.addEventListener("click", (event) => {
      const thumb = event.target.closest("[data-thumb]");
      if (thumb) {
        qs("#mainProductImage").src = thumb.dataset.thumb;
        qsa(".thumbnail", root).forEach((item) => item.classList.toggle("active", item === thumb));
      }
      if (event.target.matches("[data-qty-plus]")) {
        qty += 1;
        qs("#detailQty").textContent = qty;
      }
      if (event.target.matches("[data-qty-minus]")) {
        qty = Math.max(1, qty - 1);
        qs("#detailQty").textContent = qty;
      }
      const tabBtn = event.target.closest("[data-tab]");
      if (tabBtn) {
        qsa(".tab-btn", root).forEach((btn) => btn.classList.toggle("active", btn === tabBtn));
        qsa(".tab-panel", root).forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === tabBtn.dataset.tab));
      }
      if (event.target.id === "sizeGuideBtn") {
        openModal(`
          <div class="stack">
            <div class="row-between">
              <h3 style="margin:0">AUREN Size Guide</h3>
              <button class="icon-btn" data-close-modal>✕</button>
            </div>
            <p class="muted">For snug performance fit, stay true to size. For everyday relaxed wear, size up if you are between two sizes.</p>
            <table>
              <tr><th>EU</th><th>UK/IN</th><th>Foot length</th></tr>
              <tr><td>39</td><td>6</td><td>24.5 cm</td></tr>
              <tr><td>40</td><td>7</td><td>25.2 cm</td></tr>
              <tr><td>42</td><td>8</td><td>26.0 cm</td></tr>
              <tr><td>43</td><td>9</td><td>26.7 cm</td></tr>
              <tr><td>44</td><td>10</td><td>27.4 cm</td></tr>
            </table>
          </div>
        `);
      }
      if (event.target.id === "buyNowBtn") {
        if (window.CartSystem) window.CartSystem.addToCart(product.id, qty);
        navigateWithFade("checkout.html");
      }
      if (event.target.id === "pincodeCheckBtn") {
        const pin = qs("#pincodeInput").value.trim();
        const result = qs("#pincodeResult");
        if (!/^\d{6}$/.test(pin)) {
          result.textContent = "Enter a valid 6-digit pincode.";
          return;
        }
        result.textContent = `Delivery to ${pin} available. Expected arrival: ${Math.random() > 0.5 ? "2–4 business days" : "4–6 business days"}.`;
      }
    });

    const gallery = qs(".gallery-stage", root);
    const img = qs("#mainProductImage", root);
    gallery?.addEventListener("mousemove", (event) => {
      const rect = gallery.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = "scale(1.55)";
    });
    gallery?.addEventListener("mouseleave", () => {
      img.style.transformOrigin = "center";
      img.style.transform = "scale(1)";
    });
  }

  function renderCartPage() {
    const app = qs("#cartApp");
    if (!app || !window.CartSystem) return;
    const render = () => {
      const cart = window.CartSystem.getCartDetailed();
      const saved = window.CartSystem.getSavedDetailed();
      const summary = window.CartSystem.calculateTotals();
      const list = qs("#cartItemsList", app);
      const savedWrap = qs("#savedLaterList", app);
      const recommendations = qs("#cartRecommendations", app);
      if (!cart.length) {
        list.innerHTML = `
          <div class="empty-state">
            <h3>Your cart feels empty</h3>
            <p class="muted">Add premium essentials from the shop to start your order.</p>
            <a class="btn" href="products.html">Browse Products</a>
          </div>
        `;
      } else {
        list.innerHTML = cart.map(({ product, qty }) => `
          <article class="cart-item">
            <img src="${product.images[0]}" alt="${product.name}">
            <div class="stack">
              <div class="product-meta"><span>${product.category}</span><span>•</span><span>${product.brand}</span></div>
              <h3>${product.name}</h3>
              <div class="price-row"><strong>${currency(product.price)}</strong><span class="muted">Qty ${qty}</span></div>
              <div class="card-actions">
                <div class="qty-stepper">
                  <button data-cart-minus="${product.id}">-</button>
                  <span>${qty}</span>
                  <button data-cart-plus="${product.id}">+</button>
                </div>
                <button class="btn-ghost" data-save-later="${product.id}">Save for later</button>
                <button class="btn-danger" data-remove-cart="${product.id}">Remove</button>
              </div>
            </div>
            <strong>${currency(product.price * qty)}</strong>
          </article>
        `).join("");
      }

      savedWrap.innerHTML = saved.length
        ? saved.map(({ product }) => `
          <article class="saved-item">
            <img src="${product.images[0]}" alt="${product.name}">
            <div class="stack">
              <h3>${product.name}</h3>
              <div class="price-row"><strong>${currency(product.price)}</strong></div>
              <div class="card-actions">
                <button class="btn" data-move-cart="${product.id}">Move to Cart</button>
                <button class="btn-ghost" data-remove-saved="${product.id}">Remove</button>
              </div>
            </div>
            <span class="muted">${product.category}</span>
          </article>
        `).join("")
        : `<div class="empty-state"><p class="muted">Nothing saved for later.</p></div>`;

      qs("#summarySubtotal").textContent = currency(summary.subtotal);
      qs("#summaryDiscount").textContent = summary.discount ? `- ${currency(summary.discount)}` : currency(0);
      qs("#summaryShipping").textContent = summary.shipping ? currency(summary.shipping) : "Free";
      qs("#summaryTax").textContent = currency(summary.tax);
      qs("#summaryTotal").textContent = currency(summary.total);
      recommendations.innerHTML = PRODUCTS.slice(4, 8).map(productCard).join("");
    };

    render();

    app.addEventListener("click", (event) => {
      const id = Number(event.target.dataset.cartMinus || event.target.dataset.cartPlus || event.target.dataset.removeCart || event.target.dataset.saveLater || event.target.dataset.moveCart || event.target.dataset.removeSaved);
      if (!id) return;
      if (event.target.dataset.cartMinus) window.CartSystem.updateQty(id, -1);
      if (event.target.dataset.cartPlus) window.CartSystem.updateQty(id, 1);
      if (event.target.dataset.removeCart) {
        if (confirm("Remove this item from cart?")) window.CartSystem.removeFromCart(id);
      }
      if (event.target.dataset.saveLater) window.CartSystem.saveForLater(id);
      if (event.target.dataset.moveCart) window.CartSystem.moveSavedToCart(id);
      if (event.target.dataset.removeSaved) window.CartSystem.removeSaved(id);
      render();
    });

    qs("#promoApplyBtn", app)?.addEventListener("click", () => {
      const code = qs("#promoInput", app).value.trim();
      const ok = window.CartSystem.applyCoupon(code);
      if (ok) render();
    });

    qs("#checkoutBtn", app)?.addEventListener("click", () => {
      if (!window.CartSystem.getCart().length) {
        showToast("Your cart is empty.", "warning");
        return;
      }
      navigateWithFade("checkout.html");
    });
  }

  function renderCheckoutPage() {
    const app = qs("#checkoutApp");
    if (!app || !window.CartSystem) return;
    const addresses = store.get(STORAGE_KEYS.addresses, []);
    let step = 1;
    const data = {
      address: { name: "", phone: "", pincode: "", city: "", state: "", address: "" },
      payment: { method: "card", cardNumber: "", upi: "" }
    };

    function updateStep() {
      qsa(".checkout-step", app).forEach((item) => item.classList.toggle("active", Number(item.dataset.step) === step));
      qsa("[data-step-panel]", app).forEach((panel) => panel.classList.toggle("hide", Number(panel.dataset.stepPanel) !== step));
      qs("#checkoutNextBtn", app).textContent = step === 3 ? "Place Order" : "Next Step";
      qs("#checkoutPrevBtn", app).classList.toggle("hide", step === 1);
      if (step === 3) renderReview();
    }

    function renderSavedAddresses() {
      const wrap = qs("#savedAddressList", app);
      wrap.innerHTML = addresses.map((item) => `
        <button class="address-card card" data-select-address="${item.id}">
          <strong>${item.name}</strong>
          <div class="muted">${item.address}, ${item.city}, ${item.state} - ${item.pincode}</div>
          <div class="muted">${item.phone}</div>
        </button>
      `).join("");
    }

    function validateStep() {
      if (step === 1) {
        const fields = ["name", "phone", "pincode", "city", "state", "address"];
        let valid = true;
        fields.forEach((field) => {
          const input = qs(`[name="${field}"]`, app);
          const error = qs(`[data-error="${field}"]`, app);
          const value = input.value.trim();
          if (!value || (field === "phone" && !/^\d{10}$/.test(value)) || (field === "pincode" && !/^\d{6}$/.test(value))) {
            error.textContent = field === "phone" ? "Enter a valid 10-digit phone number." : field === "pincode" ? "Enter a valid 6-digit pincode." : `Enter ${field}.`;
            valid = false;
          } else {
            error.textContent = "";
            data.address[field] = value;
          }
        });
        return valid;
      }
      if (step === 2) {
        const method = qs('input[name="paymentMethod"]:checked', app)?.value || "card";
        data.payment.method = method;
        if (method === "card") {
          const card = qs('[name="cardNumber"]', app).value.trim();
          if (card.replace(/\s/g, "").length < 16) {
            showToast("Enter a valid card number.", "error");
            return false;
          }
          data.payment.cardNumber = card;
        }
        if (method === "upi") {
          const upi = qs('[name="upiId"]', app).value.trim();
          if (!/.+@.+/.test(upi)) {
            showToast("Enter a valid UPI ID.", "error");
            return false;
          }
          data.payment.upi = upi;
        }
        return true;
      }
      return true;
    }

    function renderReview() {
      const summary = window.CartSystem.calculateTotals();
      const cart = window.CartSystem.getCartDetailed();
      qs("#reviewSummary", app).innerHTML = `
        <div class="summary-card">
          <strong>Delivery details</strong>
          <div class="muted">${data.address.name} • ${data.address.phone}</div>
          <div class="muted">${data.address.address}, ${data.address.city}, ${data.address.state} - ${data.address.pincode}</div>
          <hr>
          <strong>Payment</strong>
          <div class="muted">Method: ${data.payment.method.toUpperCase()}</div>
          <hr>
          <strong>Items</strong>
          ${cart.map(({ product, qty }) => `<div class="filter-option"><span>${product.name} × ${qty}</span><strong>${currency(product.price * qty)}</strong></div>`).join("")}
          <hr>
          <div class="filter-option"><span>Subtotal</span><strong>${currency(summary.subtotal)}</strong></div>
          <div class="filter-option"><span>Discount</span><strong>- ${currency(summary.discount)}</strong></div>
          <div class="filter-option"><span>GST</span><strong>${currency(summary.tax)}</strong></div>
          <div class="filter-option"><span>Total</span><strong>${currency(summary.total)}</strong></div>
        </div>
      `;
    }

    renderSavedAddresses();
    updateStep();

    app.addEventListener("click", (event) => {
      const selectAddress = event.target.closest("[data-select-address]");
      if (selectAddress) {
        const picked = addresses.find((item) => item.id === Number(selectAddress.dataset.selectAddress));
        if (picked) {
          ["name", "phone", "pincode", "city", "state", "address"].forEach((field) => {
            qs(`[name="${field}"]`, app).value = picked[field];
          });
          showToast("Saved address loaded.", "info");
        }
      }
    });

    qs('[name="cardNumber"]', app)?.addEventListener("input", (event) => {
      const value = event.target.value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
      event.target.value = value;
    });

    qs("#checkoutNextBtn", app)?.addEventListener("click", () => {
      if (!validateStep()) return;
      if (step < 3) {
        step += 1;
        updateStep();
        return;
      }
      const button = qs("#checkoutNextBtn", app);
      button.disabled = true;
      button.textContent = "Placing Order...";
      setTimeout(() => {
        const summary = window.CartSystem.calculateTotals();
        const newOrder = {
          id: `AUR${Math.floor(Math.random() * 90000 + 10000)}`,
          customer: data.address.name,
          email: window.AuthSystem?.getUser()?.email || "demo@auren.com",
          date: new Date().toISOString().slice(0, 10),
          items: window.CartSystem.getCart().map((item) => item.id),
          total: summary.total,
          status: "Confirmed",
          courier: "BlueDart",
          tracking: `BD${Math.floor(Math.random() * 9000000 + 1000000)}`,
          timeline: ["Placed", "Confirmed"],
          source: "Direct"
        };
        const orders = getOrders();
        store.set(STORAGE_KEYS.orders, [newOrder, ...orders]);
        window.CartSystem.clearCart();
        showToast("Order placed successfully.", "success");
        navigateWithFade(`order-confirmation.html?order=${newOrder.id}`);
      }, 1200);
    });

    qs("#checkoutPrevBtn", app)?.addEventListener("click", () => {
      step = Math.max(1, step - 1);
      updateStep();
    });
  }

  function renderOrderConfirmation() {
    const root = qs("#orderConfirmationApp");
    if (!root) return;
    const orderId = getQueryParam("order");
    const order = getOrders().find((item) => item.id === orderId) || getOrders()[0];
    if (!order) return;
    const eta = new Date(Date.now() + 4 * 864e5).toLocaleDateString("en-IN", { dateStyle: "long" });
    qs("#confirmationOrderId", root).textContent = order.id;
    qs("#confirmationEta", root).textContent = eta;
    qs("#confirmationSummary", root).innerHTML = order.items.map((id) => {
      const product = getProduct(id);
      return `<div class="filter-option"><span>${product?.name || "Product"}</span><strong>${currency(product?.price || 0)}</strong></div>`;
    }).join("") + `<hr><div class="filter-option"><span>Total</span><strong>${currency(order.total)}</strong></div>`;
  }

  function renderTrackingPage() {
    const root = qs("#trackingApp");
    if (!root) return;
    const input = qs("#trackOrderInput", root);
    const result = qs("#trackingResult", root);
    const queryId = getQueryParam("order");
    if (queryId) input.value = queryId;
    const run = () => {
      const order = getOrders().find((item) => item.id.toLowerCase() === input.value.trim().toLowerCase());
      if (!order) {
        result.innerHTML = `<div class="empty-state"><h3>Order not found</h3><p class="muted">Check the order ID and try again.</p></div>`;
        return;
      }
      const steps = ["Placed", "Confirmed", "Shipped", "Out for Delivery", "Delivered"];
      result.innerHTML = `
        <div class="panel">
          <div class="row-between">
            <div>
              <strong>Tracking ${order.id}</strong>
              <div class="muted">${order.courier} • ${order.tracking}</div>
            </div>
            <span class="status-badge ${order.status.toLowerCase().replace(/\s+/g, "")}">${order.status}</span>
          </div>
          <div class="timeline" style="margin-top:1rem">
            ${steps.map((step) => `
              <div class="timeline-item ${order.timeline.includes(step) ? "active" : ""}">
                <h4>${step}</h4>
                <p class="muted">${order.timeline.includes(step) ? "Completed successfully." : "Pending update."}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `;
      document.dispatchEvent(new CustomEvent("content:rendered"));
    };
    qs("#trackOrderBtn", root)?.addEventListener("click", run);
    if (queryId) run();
  }

  function renderWishlistPage() {
    const root = qs("#wishlistApp");
    if (!root || !window.CartSystem) return;
    const render = () => {
      const wishlist = window.CartSystem.getWishlistDetailed();
      const grid = qs("#wishlistGrid", root);
      if (!wishlist.length) {
        grid.innerHTML = `<div class="empty-state"><h3>Your wishlist is empty</h3><p class="muted">Save products you love and come back anytime.</p><a class="btn" href="products.html">Shop Now</a></div>`;
        return;
      }
      grid.innerHTML = wishlist.map((product) => simpleProductCard(product)).join("");
      document.dispatchEvent(new CustomEvent("content:rendered"));
    };
    render();
  }

  function renderAccountPage() {
    const root = qs("#accountApp");
    if (!root || !window.AuthSystem) return;
    const user = window.AuthSystem.getUser();
    if (!user) return;
    const addresses = store.get(STORAGE_KEYS.addresses, []);
    qs("#profileName", root).value = user.name;
    qs("#profileEmail", root).value = user.email;
    qs("#profilePhone", root).value = user.phone || "9876543210";
    const wrap = qs("#addressManager", root);
    const renderAddresses = () => {
      wrap.innerHTML = addresses.map((item) => `
        <article class="address-card card">
          <div class="row-between">
            <div>
              <strong>${item.name}</strong>
              <div class="muted">${item.address}, ${item.city}, ${item.state} - ${item.pincode}</div>
              <div class="muted">${item.phone}</div>
            </div>
            <div class="row">
              <button class="btn-secondary" data-edit-address="${item.id}">Edit</button>
              <button class="btn-danger" data-delete-address="${item.id}">Delete</button>
            </div>
          </div>
        </article>
      `).join("");
    };
    renderAddresses();
    root.addEventListener("click", (event) => {
      const editId = Number(event.target.dataset.editAddress);
      const deleteId = Number(event.target.dataset.deleteAddress);
      if (editId) {
        const current = addresses.find((item) => item.id === editId);
        const city = prompt("Update city", current.city);
        if (city) {
          current.city = city;
          store.set(STORAGE_KEYS.addresses, addresses);
          renderAddresses();
          showToast("Address updated.", "success");
        }
      }
      if (deleteId) {
        const next = addresses.filter((item) => item.id !== deleteId);
        store.set(STORAGE_KEYS.addresses, next);
        showToast("Address deleted.", "warning");
        location.reload();
      }
    });
    qs("#saveProfileBtn", root)?.addEventListener("click", () => {
      showToast("Profile details saved locally.", "success");
    });
    qs("#addAddressBtn", root)?.addEventListener("click", () => {
      const newAddress = { id: Date.now(), name: user.name, phone: "9999999999", pincode: "400001", city: "Mumbai", state: "Maharashtra", address: "New saved address" };
      store.set(STORAGE_KEYS.addresses, [newAddress, ...addresses]);
      showToast("New address added.", "success");
      location.reload();
    });
  }

  function renderOrderHistory() {
    const root = qs("#orderHistoryApp");
    if (!root) return;
    const list = qs("#orderHistoryList", root);
    const userEmail = window.AuthSystem?.getUser()?.email || "demo@auren.com";
    const data = getOrders().filter((order) => order.email === userEmail || order.customer === "Demo User");
    list.innerHTML = data.map((order) => `
      <article class="order-card card">
        <div class="row-between">
          <div>
            <strong>${order.id}</strong>
            <div class="muted">${order.date}</div>
          </div>
          <span class="status-badge ${order.status.toLowerCase().replace(/\s+/g, "")}">${order.status}</span>
        </div>
        <div class="muted" style="margin:.75rem 0">Items: ${order.items.map((id) => getProduct(id)?.name || "Product").join(", ")}</div>
        <div class="row-between">
          <strong>${currency(order.total)}</strong>
          <div class="order-actions">
            <button class="btn-secondary" data-order-expand="${order.id}">View details</button>
            <button class="btn-ghost" data-order-track="${order.id}">Track</button>
            <button class="btn-danger" data-order-cancel="${order.id}">Cancel</button>
            <button class="btn-soft" data-order-return="${order.id}">Return / Exchange</button>
            <button class="btn-ghost" data-order-invoice="${order.id}">Download invoice</button>
          </div>
        </div>
        <div class="hide" id="expand-${order.id}">
          <hr>
          <div class="stack">
            ${order.items.map((id) => {
              const product = getProduct(id);
              return `<div class="filter-option"><span>${product?.name}</span><strong>${currency(product?.price || 0)}</strong></div>`;
            }).join("")}
          </div>
        </div>
      </article>
    `).join("");
    root.addEventListener("click", (event) => {
      const expand = event.target.dataset.orderExpand;
      const track = event.target.dataset.orderTrack;
      const cancel = event.target.dataset.orderCancel;
      const ret = event.target.dataset.orderReturn;
      const invoice = event.target.dataset.orderInvoice;
      if (expand) qs(`#expand-${expand}`, root)?.classList.toggle("hide");
      if (track) navigateWithFade(`order-tracking.html?order=${track}`);
      if (cancel) showToast(`Cancellation request submitted for ${cancel}.`, "warning");
      if (ret) showToast(`Return / exchange request opened for ${ret}.`, "success");
      if (invoice) showToast("Invoice download is a demo UI action.", "info");
    });
  }

  function renderAboutPage() {
    const stats = qs("#aboutStats");
    const team = qs("#teamGrid");
    if (team) {
      team.innerHTML = TEAM.map((member) => `
        <article class="team-card card" data-reveal>
          <img src="${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p class="muted">${member.role}</p>
        </article>
      `).join("");
    }
    if (stats) {
      stats.innerHTML = [
        { label: "Happy customers", value: 42000 },
        { label: "Products shipped", value: 126000 },
        { label: "Cities served", value: 91 }
      ].map((item) => `
        <article class="stat-card">
          <strong class="counter-value" data-count="${item.value}">0</strong>
          <span class="muted">${item.label}</span>
        </article>
      `).join("");
      document.dispatchEvent(new CustomEvent("content:rendered"));
    }
  }

  function renderContactPage() {
    const form = qs("#contactForm");
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form).entries());
      const valid = values.name && /\S+@\S+\.\S+/.test(values.email) && values.subject && values.message;
      if (!valid) {
        showToast("Fill out all contact fields correctly.", "error");
        return;
      }
      form.reset();
      showToast("Message sent. We’ll reach out soon.", "success");
    });
  }

  function renderFaqPage() {
    const wrap = qs("#faqGroups");
    if (!wrap) return;
    const categories = [...new Set(FAQS.map((item) => item.category))];
    wrap.innerHTML = categories.map((category) => `
      <section class="stack">
        <h3>${category}</h3>
        <div class="faq-group">
          ${FAQS.filter((item) => item.category === category).map((item) => `
            <article class="faq-item">
              <button>
                <span>${item.q}</span>
                <span>＋</span>
              </button>
              <div class="faq-answer">${item.a}</div>
            </article>
          `).join("")}
        </div>
      </section>
    `).join("");
    wrap.addEventListener("click", (event) => {
      const item = event.target.closest(".faq-item");
      if (!item) return;
      item.classList.toggle("active");
    });
    qs("#faqSearchInput")?.addEventListener("input", (event) => {
      const query = event.target.value.toLowerCase();
      qsa(".faq-item", wrap).forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.classList.toggle("hide", !text.includes(query));
      });
    });
  }

  function renderBlogPage() {
    const featured = qs("#featuredPost");
    const tabs = qs("#blogCategoryTabs");
    const grid = qs("#blogGrid");
    if (!grid) return;
    const categories = ["All", ...new Set(BLOG_POSTS.map((item) => item.category))];
    tabs.innerHTML = categories.map((category, index) => `<button class="tab-btn ${index === 0 ? "active" : ""}" data-blog-cat="${category}">${category}</button>`).join("");
    const featuredPost = BLOG_POSTS.find((item) => item.featured) || BLOG_POSTS[0];
    featured.innerHTML = `
      <div class="banner-parallax">
        <div class="overlay-card">
          <span class="eyebrow">Featured Story</span>
          <h2>${featuredPost.title}</h2>
          <p>${featuredPost.excerpt}</p>
          <div class="muted">${featuredPost.date} • ${featuredPost.category}</div>
        </div>
      </div>
    `;
    const render = (category = "All") => {
      const list = category === "All" ? BLOG_POSTS : BLOG_POSTS.filter((item) => item.category === category);
      grid.innerHTML = list.map((item) => `
        <article class="blog-card card" data-reveal>
          <img src="${item.image}" alt="${item.title}">
          <div class="product-meta"><span>${item.category}</span><span>•</span><span>${item.date}</span></div>
          <h3>${item.title}</h3>
          <p class="muted">${item.excerpt}</p>
          <a href="blog.html" class="link-arrow">Read story →</a>
        </article>
      `).join("");
      document.dispatchEvent(new CustomEvent("content:rendered"));
    };
    render();
    tabs.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-blog-cat]");
      if (!btn) return;
      qsa("[data-blog-cat]", tabs).forEach((item) => item.classList.toggle("active", item === btn));
      render(btn.dataset.blogCat);
    });
  }

  function openModal(content) {
    let modal = qs("#globalModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "globalModal";
      modal.className = "modal";
      document.body.appendChild(modal);
      modal.addEventListener("click", (event) => {
        if (event.target === modal || event.target.dataset.closeModal !== undefined) {
          modal.classList.remove("active");
        }
      });
    }
    modal.innerHTML = `<div class="modal-sheet">${content}</div>`;
    modal.classList.add("active");
  }

  function initQuickView() {
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-quick-view]");
      if (!button) return;
      const product = getProduct(button.dataset.quickView);
      if (!product) return;
      openModal(`
        <div class="quick-view-grid">
          <div class="gallery-stage"><img src="${product.images[0]}" alt="${product.name}"></div>
          <div class="stack">
            <div class="product-meta"><span>${product.category}</span><span>•</span><span>${product.brand}</span></div>
            <h2 style="margin:0">${product.name}</h2>
            <div class="price-row"><strong>${currency(product.price)}</strong><s>${currency(product.oldPrice)}</s></div>
            <div class="rating-row"><span class="rating-stars">★★★★★</span><span>${averageReview(product)}</span></div>
            <p class="muted">${product.description}</p>
            <div class="card-actions">
              <button class="btn" data-add-cart="${product.id}">Add to Cart</button>
              <a class="btn-secondary" href="product-detail.html?id=${product.id}">Open Details</a>
            </div>
          </div>
        </div>
      `);
    });
  }

  function renderPolicyDate() {
    qsa("[data-policy-date]").forEach((item) => {
      item.textContent = "Last updated: March 26, 2026";
    });
  }

  function markPageReady() {
    requestAnimationFrame(() => document.body.classList.add("page-ready"));
  }

  function bindGlobalForms() {
    qs("#forgotPasswordForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = qs('[name="email"]', event.currentTarget);
      if (!/\S+@\S+\.\S+/.test(input.value.trim())) {
        showToast("Enter a valid email address.", "error");
        return;
      }
      qs("#forgotSuccess").classList.remove("hide");
      event.currentTarget.reset();
      showToast("Reset link UI sent successfully.", "success");
    });
  }

  function initGlobalDelegation() {
    document.addEventListener("click", (event) => {
      const addBtn = event.target.closest("[data-add-cart]");
      const wishBtn = event.target.closest("[data-wishlist]");
      if (addBtn && window.CartSystem) {
        const id = Number(addBtn.dataset.addCart);
        window.CartSystem.addToCart(id);
      }
      if (wishBtn && window.CartSystem) {
        const id = Number(wishBtn.dataset.wishlist);
        window.CartSystem.toggleWishlist(id, wishBtn);
      }
      if (event.target.matches("#logoutBtn") && window.AuthSystem) {
        window.AuthSystem.logout();
      }
    });

    window.addEventListener("cart:updated", updateNavbarMeta);
    window.addEventListener("auth:updated", updateNavbarMeta);
  }

  function runPageRenderers() {
    const page = document.body.dataset.page;
    if (page === "home") renderHome();
    if (page === "products") renderProductsPage("products");
    if (page === "search") renderProductsPage("search");
    if (page === "product-detail") renderProductDetail();
    if (page === "cart") renderCartPage();
    if (page === "checkout") renderCheckoutPage();
    if (page === "order-confirmation") renderOrderConfirmation();
    if (page === "tracking") renderTrackingPage();
    if (page === "wishlist") renderWishlistPage();
    if (page === "account") renderAccountPage();
    if (page === "order-history") renderOrderHistory();
    if (page === "about") renderAboutPage();
    if (page === "contact") renderContactPage();
    if (page === "faq") renderFaqPage();
    if (page === "blog") renderBlogPage();
    if (["terms", "privacy", "refund-policy"].includes(page)) renderPolicyDate();
  }

  document.addEventListener("DOMContentLoaded", () => {
    seedStorage();
    initHeaderFooter();
    initSearchAutocomplete();
    createCookieBanner();
    createBackToTop();
    bindPageTransitions();
    initQuickView();
    initGlobalDelegation();
    bindGlobalForms();
    runPageRenderers();
    updateNavbarMeta();
    markPageReady();
  });
})();
