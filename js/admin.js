(function () {
  const KEYS = window.APP_STORAGE_KEYS || {
    orders: 'auren_orders',
    adminProducts: 'auren_admin_products',
    adminCustomers: 'auren_admin_customers',
    adminCoupons: 'auren_admin_coupons',
    adminSettings: 'auren_admin_settings'
  };

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

  const APP = window.APP_DATA || { products: [], customers: [], coupons: [], settings: {} };
  const currency = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Number(value || 0));

  const state = {
    products: store.get(KEYS.adminProducts, APP.products || []),
    orders: store.get(KEYS.orders, APP.baseOrders || []),
    customers: store.get(KEYS.adminCustomers, APP.customers || []),
    coupons: store.get(KEYS.adminCoupons, APP.coupons || []),
    settings: store.get(KEYS.adminSettings, APP.settings || {})
  };

  function persist() {
    store.set(KEYS.adminProducts, state.products);
    store.set(KEYS.orders, state.orders);
    store.set(KEYS.adminCustomers, state.customers);
    store.set(KEYS.adminCoupons, state.coupons);
    store.set(KEYS.adminSettings, state.settings);
  }

  function dashboardMetrics() {
    const revenue = state.orders.filter((o) => o.status !== 'Cancelled').reduce((sum, order) => sum + Number(order.total || 0), 0);
    const orders = state.orders.length;
    const customers = state.customers.length;
    const products = state.products.length;
    return { revenue, orders, customers, products };
  }

  function createModal(html) {
    let modal = qs('#adminGlobalModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'adminGlobalModal';
      modal.className = 'modal';
      document.body.appendChild(modal);
      modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.dataset.closeModal !== undefined) modal.classList.remove('active');
      });
    }
    modal.innerHTML = `<div class="modal-sheet">${html}</div>`;
    modal.classList.add('active');
  }

  function bindSidebar() {
    const toggle = qs('#adminMenuToggle');
    const sidebar = qs('#adminSidebar');
    toggle?.addEventListener('click', () => sidebar?.classList.toggle('active'));
  }

  function hydrateAdminChrome() {
    const user = window.AuthSystem?.getUser();
    const greeting = qs('#adminGreeting');
    const mail = qs('#adminProfileMail');
    if (greeting) greeting.textContent = user ? `Welcome back, ${user.name.split(' ')[0]}` : 'AUREN Control Center';
    if (mail) mail.textContent = user?.email || 'admin@auren.com';
    qs('#adminLogoutBtn')?.addEventListener('click', () => window.AuthSystem?.logout());
  }

  function buildRecentOrdersRows(list) {
    return list.map((order) => `
      <tr>
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.date}</td>
        <td>${currency(order.total)}</td>
        <td><span class="status-badge ${String(order.status).toLowerCase().replace(/\s+/g, '')}">${order.status}</span></td>
      </tr>
    `).join('');
  }

  function renderDashboard() {
    const root = qs('#adminDashboardApp');
    if (!root) return;
    const metrics = dashboardMetrics();
    const metricWrap = qs('#dashboardStats', root);
    const lowStock = state.products.filter((item) => Number(item.stock) <= 12).slice(0, 5);
    const topProducts = [...state.products].sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0)).slice(0, 5);
    metricWrap.innerHTML = [
      ['Revenue', metrics.revenue],
      ['Orders', metrics.orders],
      ['Customers', metrics.customers],
      ['Products', metrics.products]
    ].map(([label, value]) => `
      <article class="admin-card metric" data-reveal>
        <small>${label}</small>
        <strong data-count="${value}">0</strong>
        <span class="muted">Updated from local demo data</span>
      </article>
    `).join('');

    qs('#recentOrdersTable tbody', root).innerHTML = buildRecentOrdersRows(state.orders.slice(0, 5));
    qs('#topProductsList', root).innerHTML = topProducts.map((product, index) => `
      <div>
        <div class="row-between"><strong>${product.name}</strong><span>${76 - index * 9}%</span></div>
        <div class="progress-bar"><span style="display:block;height:100%;width:${76 - index * 9}%;background:linear-gradient(90deg,var(--accent),rgba(77,124,255,.4))"></span></div>
      </div>
    `).join('');
    qs('#lowStockList', root).innerHTML = lowStock.map((product) => `
      <div class="low-stock-item">
        <div>
          <strong>${product.name}</strong>
          <div class="muted">${product.category}</div>
        </div>
        <span class="status-badge lowstock">${product.stock} left</span>
      </div>
    `).join('') || `<div class="empty-state"><p class="muted">No low-stock products right now.</p></div>`;

    qsa('[data-admin-action]', root).forEach((button) => {
      button.addEventListener('click', () => {
        const href = button.dataset.adminAction;
        if (href) window.location.href = href;
      });
    });

    if (window.Chart) {
      const revenueCtx = qs('#revenueLineChart');
      const ordersCtx = qs('#ordersBarChart');
      if (revenueCtx && !revenueCtx.dataset.chartBound) {
        revenueCtx.dataset.chartBound = '1';
        new Chart(revenueCtx, {
          type: 'line',
          data: {
            labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
            datasets: [{
              label: 'Revenue',
              data: [4.2, 5.1, 6.3, 7.5, 8.1, 9.4].map((n) => n * 100000),
              fill: true,
              tension: 0.35,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { ticks: { callback: (v) => `₹${(v / 1000)}k` } } }
          }
        });
      }
      if (ordersCtx && !ordersCtx.dataset.chartBound) {
        ordersCtx.dataset.chartBound = '1';
        new Chart(ordersCtx, {
          type: 'bar',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{ label: 'Orders', data: [14, 17, 11, 19, 23, 16, 12], borderWidth: 1 }]
          },
          options: { plugins: { legend: { display: false } }, responsive: true }
        });
      }
    }
    document.dispatchEvent(new CustomEvent('content:rendered'));
  }

  function renderProductsAdmin() {
    const root = qs('#adminProductsApp');
    if (!root) return;
    const tbody = qs('#adminProductsTable tbody', root);
    const search = qs('#adminProductSearch', root);
    const category = qs('#adminProductCategory', root);
    const selected = new Set();

    function tableRows(items) {
      return items.map((product) => `
        <tr>
          <td><input type="checkbox" data-select-product="${product.id}"></td>
          <td><img src="${product.images[0]}" alt="${product.name}"></td>
          <td><strong>${product.name}</strong><div class="muted">${product.brand}</div></td>
          <td>${product.category}</td>
          <td>${currency(product.price)}</td>
          <td>${product.stock}</td>
          <td><span class="status-badge ${product.stock === 0 ? 'outofstock' : product.stock < 12 ? 'lowstock' : 'instock'}">${product.stock === 0 ? 'Out' : product.stock < 12 ? 'Low' : 'In Stock'}</span></td>
          <td>
            <div class="row">
              <button class="btn-secondary" data-edit-product="${product.id}">Edit</button>
              <button class="btn-danger" data-delete-product="${product.id}">Delete</button>
            </div>
          </td>
        </tr>
      `).join('');
    }

    function filtered() {
      return state.products.filter((item) => {
        const matchesSearch = !search.value.trim() || `${item.name} ${item.brand}`.toLowerCase().includes(search.value.trim().toLowerCase());
        const matchesCategory = !category.value || item.category === category.value;
        return matchesSearch && matchesCategory;
      });
    }

    function render() {
      tbody.innerHTML = tableRows(filtered()) || `<tr><td colspan="8"><div class="empty-state"><p class="muted">No products match your filters.</p></div></td></tr>`;
      qs('#bulkDeleteBtn', root).disabled = selected.size === 0;
      document.dispatchEvent(new CustomEvent('content:rendered'));
    }

    function productForm(product = null) {
      const isEdit = Boolean(product);
      createModal(`
        <div class="stack">
          <div class="row-between">
            <h3 style="margin:0">${isEdit ? 'Edit Product' : 'Add New Product'}</h3>
            <button class="icon-btn" data-close-modal>✕</button>
          </div>
          <form id="adminProductForm" class="admin-modal-form">
            <div class="form-grid">
              <div><label>Name</label><input name="name" value="${product?.name || ''}" required></div>
              <div><label>Category</label><input name="category" value="${product?.category || ''}" required></div>
              <div><label>Brand</label><input name="brand" value="${product?.brand || ''}" required></div>
              <div><label>Price</label><input name="price" type="number" value="${product?.price || ''}" required></div>
              <div><label>Stock</label><input name="stock" type="number" value="${product?.stock ?? 0}" required></div>
              <div><label>Status badge</label><input name="badge" value="${product?.badges?.[0] || 'New'}"></div>
            </div>
            <div><label>Description</label><textarea name="description" rows="4">${product?.description || ''}</textarea></div>
            <button class="btn" type="submit">${isEdit ? 'Save changes' : 'Create product'}</button>
          </form>
        </div>
      `);
      qs('#adminProductForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget).entries());
        if (isEdit) {
          Object.assign(product, {
            name: data.name,
            category: data.category,
            brand: data.brand,
            price: Number(data.price),
            stock: Number(data.stock),
            description: data.description,
            badges: [data.badge || 'New'],
            status: Number(data.stock) === 0 ? 'Out of Stock' : Number(data.stock) < 12 ? 'Low Stock' : 'In Stock'
          });
        } else {
          state.products.unshift({
            id: Date.now(),
            name: data.name,
            category: data.category,
            brand: data.brand,
            price: Number(data.price),
            oldPrice: Number(data.price) + 1200,
            rating: 4.6,
            reviewCount: 24,
            stock: Number(data.stock),
            status: Number(data.stock) === 0 ? 'Out of Stock' : Number(data.stock) < 12 ? 'Low Stock' : 'In Stock',
            colors: ['#111827', '#d6d9e4'],
            sizes: ['S', 'M', 'L'],
            badges: [data.badge || 'New'],
            gender: 'Unisex',
            description: data.description,
            specs: ['Premium finish', 'Demo product', 'Fast dispatch'],
            shipping: 'Ships in 24 hours.',
            images: [`https://picsum.photos/seed/auren-${Date.now()}/900/1000`]
          });
        }
        persist();
        qs('#adminGlobalModal')?.classList.remove('active');
        window.showToast?.(`Product ${isEdit ? 'updated' : 'added'} successfully.`, 'success');
        render();
      });
    }

    search?.addEventListener('input', render);
    category?.addEventListener('change', render);
    qs('#addProductBtn', root)?.addEventListener('click', () => productForm());
    qs('#bulkDeleteBtn', root)?.addEventListener('click', () => {
      state.products = state.products.filter((item) => !selected.has(item.id));
      selected.clear();
      persist();
      window.showToast?.('Selected products deleted.', 'warning');
      render();
    });
    root.addEventListener('change', (event) => {
      if (event.target.matches('[data-select-product]')) {
        const id = Number(event.target.dataset.selectProduct);
        if (event.target.checked) selected.add(id); else selected.delete(id);
        qs('#bulkDeleteBtn', root).disabled = selected.size === 0;
      }
    });
    root.addEventListener('click', (event) => {
      const edit = event.target.closest('[data-edit-product]');
      const del = event.target.closest('[data-delete-product]');
      if (edit) {
        const product = state.products.find((item) => item.id === Number(edit.dataset.editProduct));
        if (product) productForm(product);
      }
      if (del) {
        const id = Number(del.dataset.deleteProduct);
        state.products = state.products.filter((item) => item.id !== id);
        persist();
        render();
        window.showToast?.('Product deleted.', 'warning');
      }
    });
    render();
  }

  function renderOrdersAdmin() {
    const root = qs('#adminOrdersApp');
    if (!root) return;
    const tbody = qs('#adminOrdersTable tbody', root);
    const statusFilter = qs('#orderStatusFilter', root);
    const dateFilter = qs('#orderDateFilter', root);

    const filterOrders = () => state.orders.filter((order) => {
      const matchStatus = !statusFilter.value || order.status === statusFilter.value;
      const matchDate = !dateFilter.value || order.date >= dateFilter.value;
      return matchStatus && matchDate;
    });

    function render() {
      tbody.innerHTML = filterOrders().map((order) => `
        <tr>
          <td>${order.id}</td>
          <td>${order.customer}</td>
          <td>${order.date}</td>
          <td>${order.items.length}</td>
          <td>${currency(order.total)}</td>
          <td>
            <select data-order-status="${order.id}">
              ${['Processing','Confirmed','Shipped','Out for Delivery','Delivered','Cancelled'].map((status) => `<option value="${status}" ${status === order.status ? 'selected' : ''}>${status}</option>`).join('')}
            </select>
          </td>
          <td><button class="btn-secondary" data-view-order="${order.id}">View</button></td>
        </tr>
      `).join('');
    }

    statusFilter?.addEventListener('change', render);
    dateFilter?.addEventListener('change', render);
    qs('#exportOrdersBtn', root)?.addEventListener('click', () => window.showToast?.('CSV export is a demo UI action.', 'info'));
    root.addEventListener('change', (event) => {
      if (event.target.matches('[data-order-status]')) {
        const order = state.orders.find((item) => item.id === event.target.dataset.orderStatus);
        if (order) {
          order.status = event.target.value;
          persist();
          window.showToast?.(`Order ${order.id} marked ${order.status}.`, 'success');
        }
      }
    });
    root.addEventListener('click', (event) => {
      const view = event.target.closest('[data-view-order]');
      if (!view) return;
      const order = state.orders.find((item) => item.id === view.dataset.viewOrder);
      if (!order) return;
      createModal(`
        <div class="stack">
          <div class="row-between"><h3 style="margin:0">Order ${order.id}</h3><button class="icon-btn" data-close-modal>✕</button></div>
          <div class="customer-summary">
            <div><strong>Customer</strong><div class="muted">${order.customer} • ${order.email}</div></div>
            <div><strong>Courier</strong><div class="muted">${order.courier} • ${order.tracking}</div></div>
            <div><strong>Total</strong><div class="muted">${currency(order.total)}</div></div>
            <div><strong>Items</strong><div class="muted">${order.items.map((id) => state.products.find((product) => product.id === id)?.name || `#${id}`).join(', ')}</div></div>
          </div>
        </div>
      `);
    });
    render();
  }

  function renderCustomersAdmin() {
    const root = qs('#adminCustomersApp');
    if (!root) return;
    const tbody = qs('#adminCustomersTable tbody', root);
    const search = qs('#customerSearchInput', root);
    function list() {
      return state.customers.filter((customer) => !search.value.trim() || `${customer.name} ${customer.email}`.toLowerCase().includes(search.value.trim().toLowerCase()));
    }
    function render() {
      tbody.innerHTML = list().map((customer) => `
        <tr>
          <td><div class="row"><img src="${customer.avatar}" alt="${customer.name}"><div><strong>${customer.name}</strong><div class="muted">${customer.joined}</div></div></div></td>
          <td>${customer.email}</td>
          <td>${customer.orders}</td>
          <td>${currency(customer.spent)}</td>
          <td><span class="status-badge ${String(customer.status).toLowerCase()}">${customer.status}</span></td>
          <td>
            <div class="row">
              <button class="btn-secondary" data-view-customer="${customer.id}">Profile</button>
              <button class="btn-ghost" data-toggle-customer="${customer.id}">${customer.status === 'Banned' ? 'Activate' : 'Ban'}</button>
            </div>
          </td>
        </tr>
      `).join('');
    }
    search?.addEventListener('input', render);
    root.addEventListener('click', (event) => {
      const view = event.target.closest('[data-view-customer]');
      const toggle = event.target.closest('[data-toggle-customer]');
      if (view) {
        const customer = state.customers.find((item) => item.id === Number(view.dataset.viewCustomer));
        if (!customer) return;
        createModal(`
          <div class="stack">
            <div class="row-between"><h3 style="margin:0">${customer.name}</h3><button class="icon-btn" data-close-modal>✕</button></div>
            <div class="customer-summary">
              <img src="${customer.avatar}" alt="${customer.name}" style="width:84px;height:84px;border-radius:24px;object-fit:cover;">
              <div><strong>Email</strong><div class="muted">${customer.email}</div></div>
              <div><strong>Orders</strong><div class="muted">${customer.orders}</div></div>
              <div><strong>Total spent</strong><div class="muted">${currency(customer.spent)}</div></div>
              <div><strong>Status</strong><div class="muted">${customer.status}</div></div>
            </div>
          </div>
        `);
      }
      if (toggle) {
        const customer = state.customers.find((item) => item.id === Number(toggle.dataset.toggleCustomer));
        if (!customer) return;
        customer.status = customer.status === 'Banned' ? 'Active' : 'Banned';
        persist();
        render();
        window.showToast?.(`Customer ${customer.status === 'Banned' ? 'banned' : 'activated'}.`, customer.status === 'Banned' ? 'warning' : 'success');
      }
    });
    render();
  }

  function renderCouponsAdmin() {
    const root = qs('#adminCouponsApp');
    if (!root) return;
    const tbody = qs('#adminCouponsTable tbody', root);

    function render() {
      tbody.innerHTML = state.coupons.map((coupon) => `
        <tr>
          <td><strong>${coupon.code}</strong></td>
          <td>${coupon.type}</td>
          <td>${coupon.value}</td>
          <td>${coupon.usage}</td>
          <td>${coupon.expiry}</td>
          <td><span class="status-badge ${coupon.active ? 'active' : 'inactive'}">${coupon.active ? 'Active' : 'Inactive'}</span></td>
          <td>
            <div class="row">
              <button class="btn-secondary" data-toggle-coupon="${coupon.code}">${coupon.active ? 'Disable' : 'Enable'}</button>
              <button class="btn-danger" data-delete-coupon="${coupon.code}">Delete</button>
            </div>
          </td>
        </tr>
      `).join('');
    }

    qs('#addCouponBtn', root)?.addEventListener('click', () => {
      createModal(`
        <div class="stack">
          <div class="row-between"><h3 style="margin:0">Add Coupon</h3><button class="icon-btn" data-close-modal>✕</button></div>
          <form id="couponForm" class="admin-modal-form">
            <div class="form-grid">
              <div><label>Code</label><input name="code" required></div>
              <div><label>Type</label><select name="type"><option>Percentage</option><option>Shipping</option><option>Flat</option></select></div>
              <div><label>Value</label><input name="value" placeholder="10% or ₹500" required></div>
              <div><label>Expiry</label><input name="expiry" type="date" required></div>
            </div>
            <button class="btn" type="submit">Create Coupon</button>
          </form>
        </div>
      `);
      qs('#couponForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget).entries());
        state.coupons.unshift({ code: data.code.toUpperCase(), type: data.type, value: data.value, usage: 0, expiry: data.expiry, active: true });
        persist();
        qs('#adminGlobalModal')?.classList.remove('active');
        render();
        window.showToast?.('Coupon added.', 'success');
      });
    });

    root.addEventListener('click', (event) => {
      const toggle = event.target.closest('[data-toggle-coupon]');
      const del = event.target.closest('[data-delete-coupon]');
      if (toggle) {
        const coupon = state.coupons.find((item) => item.code === toggle.dataset.toggleCoupon);
        if (!coupon) return;
        coupon.active = !coupon.active;
        persist();
        render();
      }
      if (del) {
        state.coupons = state.coupons.filter((item) => item.code !== del.dataset.deleteCoupon);
        persist();
        render();
        window.showToast?.('Coupon removed.', 'warning');
      }
    });
    render();
  }

  function renderAnalyticsAdmin() {
    const root = qs('#adminAnalyticsApp');
    if (!root) return;
    const topTable = qs('#topProductsAnalytics tbody', root);
    topTable.innerHTML = [...state.products].sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0)).slice(0, 6).map((product, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${currency(product.price)}</td>
        <td>${product.reviewCount}</td>
      </tr>
    `).join('');

    qs('#trafficSources', root).innerHTML = [
      ['Organic Search', '41%'],
      ['Instagram', '22%'],
      ['Direct', '18%'],
      ['Email', '11%'],
      ['Referrals', '8%']
    ].map(([name, value]) => `<div class="low-stock-item"><strong>${name}</strong><span>${value}</span></div>`).join('');

    qs('#conversionFunnel', root).innerHTML = [
      ['Visits', '58,200'],
      ['Product views', '24,600'],
      ['Add to cart', '7,440'],
      ['Checkout started', '2,930'],
      ['Orders placed', '1,280']
    ].map(([name, value]) => `<div class="funnel-step"><div class="row-between"><strong>${name}</strong><span>${value}</span></div></div>`).join('');

    if (window.Chart) {
      const line = qs('#analyticsRevenueChart');
      const pie = qs('#analyticsCategoryChart');
      if (line && !line.dataset.chartBound) {
        line.dataset.chartBound = '1';
        new Chart(line, {
          type: 'line',
          data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{ label: 'Revenue', data: [420000, 510000, 468000, 590000, 628000, 711000], tension: 0.35, fill: true, borderWidth: 2 }]
          },
          options: { plugins: { legend: { display: false } }, responsive: true }
        });
      }
      if (pie && !pie.dataset.chartBound) {
        pie.dataset.chartBound = '1';
        const counts = state.products.reduce((acc, item) => {
          acc[item.category] = (acc[item.category] || 0) + 1;
          return acc;
        }, {});
        new Chart(pie, {
          type: 'pie',
          data: { labels: Object.keys(counts), datasets: [{ data: Object.values(counts) }] },
          options: { responsive: true }
        });
      }
    }
  }

  function renderSettingsAdmin() {
    const root = qs('#adminSettingsApp');
    if (!root) return;
    const form = qs('#adminSettingsForm', root);
    if (!form) return;
    form.siteName.value = state.settings.siteName || 'AUREN';
    form.currency.value = state.settings.currency || 'INR (₹)';
    form.shippingThreshold.value = state.settings.shippingThreshold || 7500;
    form.taxRate.value = state.settings.taxRate || 18;
    form.emailNotifications.checked = Boolean(state.settings.emailNotifications);
    form.paymentCards.checked = Boolean(state.settings.paymentCards);
    form.paymentUpi.checked = Boolean(state.settings.paymentUpi);
    form.paymentCod.checked = Boolean(state.settings.paymentCod);
    form.paymentWallet.checked = Boolean(state.settings.paymentWallet);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      state.settings = {
        siteName: data.siteName,
        currency: data.currency,
        shippingThreshold: Number(data.shippingThreshold),
        taxRate: Number(data.taxRate),
        emailNotifications: form.emailNotifications.checked,
        paymentCards: form.paymentCards.checked,
        paymentUpi: form.paymentUpi.checked,
        paymentCod: form.paymentCod.checked,
        paymentWallet: form.paymentWallet.checked
      };
      persist();
      window.showToast?.('Settings saved successfully.', 'success');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindSidebar();
    hydrateAdminChrome();
    renderDashboard();
    renderProductsAdmin();
    renderOrdersAdmin();
    renderCustomersAdmin();
    renderCouponsAdmin();
    renderAnalyticsAdmin();
    renderSettingsAdmin();
  });
})();
