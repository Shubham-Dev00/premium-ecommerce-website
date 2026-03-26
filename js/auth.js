
(function () {
  const KEYS = {
    users: "auren_users",
    currentUser: "auren_current_user"
  };

  const DEFAULT_USERS = [
    { id: 1, name: "Demo User", email: "demo@auren.com", password: "Demo@123", role: "user", phone: "9876543210" },
    { id: 2, name: "Admin Auren", email: "admin@auren.com", password: "Admin@123", role: "admin", phone: "9999999999" }
  ];

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

  function seedUsers() {
    if (!localStorage.getItem(KEYS.users)) store.set(KEYS.users, DEFAULT_USERS);
  }

  const api = {
    getUsers() {
      return store.get(KEYS.users, DEFAULT_USERS);
    },
    getUser() {
      return store.get(KEYS.currentUser, null);
    },
    setUser(user) {
      store.set(KEYS.currentUser, user);
      window.dispatchEvent(new Event("auth:updated"));
    },
    login(email, password) {
      const user = api.getUsers().find((item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password);
      if (!user) return null;
      api.setUser({ id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone || "" });
      return user;
    },
    signup(payload) {
      const users = api.getUsers();
      if (users.some((user) => user.email.toLowerCase() === payload.email.toLowerCase())) return { error: "Account already exists with this email." };
      const next = {
        id: Date.now(),
        name: payload.name,
        email: payload.email,
        password: payload.password,
        role: "user",
        phone: payload.phone || ""
      };
      users.push(next);
      store.set(KEYS.users, users);
      api.setUser({ id: next.id, name: next.name, email: next.email, role: next.role, phone: next.phone });
      return { user: next };
    },
    logout() {
      localStorage.removeItem(KEYS.currentUser);
      window.dispatchEvent(new Event("auth:updated"));
      window.showToast?.("You have been logged out.", "info");
      setTimeout(() => {
        const to = window.location.pathname.includes("/admin/") ? "../login.html?admin=1" : "login.html";
        window.location.href = to;
      }, 260);
    },
    requireAuth({ admin = false } = {}) {
      const user = api.getUser();
      if (!user || (admin && user.role !== "admin")) {
        const loginPath = window.location.pathname.includes("/admin/") ? "../login.html?admin=1" : "login.html";
        window.location.href = `${loginPath}${window.location.pathname.includes("/admin/") ? "" : `?next=${encodeURIComponent(window.location.pathname.split("/").pop())}`}`;
        return false;
      }
      return true;
    }
  };

  window.AuthSystem = api;

  function strengthScore(password) {
    let score = 0;
    if (password.length >= 8) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;
    return score;
  }

  function initLogin() {
    const form = document.querySelector("#loginForm");
    if (!form) return;
    const adminMode = new URLSearchParams(window.location.search).get("admin") === "1";
    const title = document.querySelector("#loginTitle");
    const hint = document.querySelector("#loginHint");
    if (adminMode && title && hint) {
      title.textContent = "Admin Sign In";
      hint.textContent = "Use the admin demo credentials to access the dashboard.";
    }

    const passwordInput = document.querySelector("#loginPassword");
    const toggle = document.querySelector("#toggleLoginPassword");
    toggle?.addEventListener("click", () => {
      passwordInput.type = passwordInput.type === "password" ? "text" : "password";
      toggle.textContent = passwordInput.type === "password" ? "Show" : "Hide";
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = form.email.value.trim();
      const password = form.password.value.trim();
      if (!/\S+@\S+\.\S+/.test(email) || !password) {
        window.showToast?.("Enter valid login details.", "error");
        return;
      }
      const user = api.login(email, password);
      if (!user) {
        window.showToast?.("Invalid email or password.", "error");
        return;
      }
      window.showToast?.(`Welcome back, ${user.name.split(" ")[0]}.`, "success");
      const next = new URLSearchParams(window.location.search).get("next");
      setTimeout(() => {
        if (adminMode || user.role === "admin") window.location.href = "admin/dashboard.html";
        else window.location.href = next || "account.html";
      }, 260);
    });

    document.querySelectorAll("[data-social-login]").forEach((button) => {
      button.addEventListener("click", () => window.showToast?.("Social login is a demo-only UI.", "info"));
    });
  }

  function initSignup() {
    const form = document.querySelector("#signupForm");
    if (!form) return;
    const password = document.querySelector("#signupPassword");
    const strength = document.querySelector("#passwordStrengthFill");
    const toggle = document.querySelector("#toggleSignupPassword");
    toggle?.addEventListener("click", () => {
      password.type = password.type === "password" ? "text" : "password";
      toggle.textContent = password.type === "password" ? "Show" : "Hide";
    });
    password?.addEventListener("input", () => {
      strength.style.width = `${strengthScore(password.value)}%`;
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const payload = {
        name: form.fullName.value.trim(),
        email: form.email.value.trim(),
        password: form.password.value,
        confirmPassword: form.confirmPassword.value,
        phone: form.phone?.value.trim() || ""
      };
      const termsAccepted = form.terms.checked;
      let valid = true;
      const setError = (field, message = "") => {
        const target = document.querySelector(`[data-error="${field}"]`);
        if (target) target.textContent = message;
        if (message) valid = false;
      };
      setError("fullName", payload.name ? "" : "Full name is required.");
      setError("email", /\S+@\S+\.\S+/.test(payload.email) ? "" : "Enter a valid email.");
      setError("password", payload.password.length >= 8 ? "" : "Use at least 8 characters.");
      setError("confirmPassword", payload.password === payload.confirmPassword ? "" : "Passwords do not match.");
      setError("terms", termsAccepted ? "" : "You must accept the terms.");
      if (!valid) {
        window.showToast?.("Please fix the highlighted fields.", "error");
        return;
      }
      const result = api.signup(payload);
      if (result.error) {
        window.showToast?.(result.error, "error");
        return;
      }
      window.showToast?.("Account created successfully.", "success");
      setTimeout(() => window.location.href = "account.html", 260);
    });
  }

  function protectRoutes() {
    const file = window.location.pathname.split("/").pop();
    const protectedCustomer = ["account.html", "order-history.html", "checkout.html"];
    const isAdminPage = window.location.pathname.includes("/admin/");
    if (protectedCustomer.includes(file)) api.requireAuth();
    if (isAdminPage) api.requireAuth({ admin: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    seedUsers();
    protectRoutes();
    initLogin();
    initSignup();
  });
})();
