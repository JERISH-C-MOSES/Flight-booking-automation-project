const ADMIN_USERNAME = "JERISH";
const ADMIN_PASSWORD = "Orange@123";

const storageKeys = {
  adminAuth: "jcmAdminAuth",
  users: "projectPortalUsers",
  bookings: "projectBookings",
  events: "projectActivityEvents"
};

const getJson = (key, fallback = []) => {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;

  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
};

const setAdminStatus = (id, text, level = "") => {
  const node = document.getElementById(id);
  if (!node) return;
  node.textContent = text;
  node.className = "project-status";
  if (level) node.classList.add(level);
};

const initPasswordToggles = () => {
  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.passwordToggle);
      if (!input) return;

      const showPassword = input.type === "password";
      input.type = showPassword ? "text" : "password";
      button.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
      button.setAttribute("aria-pressed", showPassword ? "true" : "false");
      button.classList.toggle("is-active", showPassword);
    });
  });
};

const initAdminLogin = () => {
  const form = document.getElementById("admin-login-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("admin-username").value.trim();
    const password = document.getElementById("admin-password").value.trim();

    if (!username || !password) {
      setAdminStatus("admin-login-status", "Enter admin username and password.", "danger");
      return;
    }

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(storageKeys.adminAuth, "true");
      window.location.href = "admin-dashboard.html";
      return;
    }

    setAdminStatus("admin-login-status", "Invalid admin credentials.", "danger");
  });
};

const renderSummary = () => {
  const node = document.getElementById("admin-summary-cards");
  if (!node) return;

  const users = getJson(storageKeys.users, []);
  const bookings = getJson(storageKeys.bookings, []);
  const events = getJson(storageKeys.events, []);

  node.innerHTML = `
    <div class="project-highlight"><strong>${users.length}</strong><span>registered users</span></div>
    <div class="project-highlight"><strong>${bookings.length}</strong><span>bookings stored</span></div>
    <div class="project-highlight"><strong>${events.length}</strong><span>recent events</span></div>
    <div class="project-highlight"><strong>${sessionStorage.getItem(storageKeys.adminAuth) === "true" ? 1 : 0}</strong><span>active admin session</span></div>
  `;
};

const fillTable = (id, rows, emptyCols) => {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = rows.length ? rows.join("") : `<tr><td colspan="${emptyCols}">No data available.</td></tr>`;
};

const initAdminDashboard = () => {
  if (sessionStorage.getItem(storageKeys.adminAuth) !== "true") {
    window.location.href = "admin-login.html";
    return;
  }

  document.getElementById("admin-logout")?.addEventListener("click", () => {
    sessionStorage.removeItem(storageKeys.adminAuth);
    window.location.href = "admin-login.html";
  });

  const users = getJson(storageKeys.users, []);
  const bookings = getJson(storageKeys.bookings, []);
  const events = getJson(storageKeys.events, []);

  renderSummary();
  fillTable(
    "admin-events-body",
    events.map(
      (event) =>
        `<tr><td>${new Date(event.timestamp).toLocaleString("en-IN")}</td><td>${event.app || "-"}</td><td>${event.type || "-"}</td><td>${event.username || "-"}</td><td>${event.details || "-"}</td></tr>`
    ),
    5
  );
  fillTable(
    "admin-users-body",
    users.map(
      (user) =>
        `<tr><td>${user.username}</td><td>${user.email}</td><td>${user.phone}</td><td>${user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-IN") : "-"}</td></tr>`
    ),
    4
  );
  fillTable(
    "admin-bookings-body",
    bookings.map((booking) => {
      const route = booking.search ? `${booking.search.from} to ${booking.search.to}` : "-";
      return `<tr><td>${booking.bookingId}</td><td>${booking.ownerUsername || "-"}</td><td>${route}</td><td>${booking.status || "-"}</td><td>${booking.totalAmount || "-"}</td><td>${booking.createdAt ? new Date(booking.createdAt).toLocaleString("en-IN") : "-"}</td></tr>`;
    }),
    6
  );
};

document.addEventListener("DOMContentLoaded", () => {
  initPasswordToggles();
  if (document.getElementById("admin-login-form")) initAdminLogin();
  if (document.getElementById("admin-summary-cards")) initAdminDashboard();
});
