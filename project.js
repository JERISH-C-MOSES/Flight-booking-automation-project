const PROJECT_USERNAME = "JERISH";
const PROJECT_PASSWORD = "Jerish@123";

const projectStorageKeys = {
  auth: "projectPortalAuth",
  currentUser: "projectCurrentUser",
  users: "projectPortalUsers",
  events: "projectActivityEvents",
  search: "projectFlightSearch",
  selectedFlight: "projectSelectedFlight",
  passengers: "projectPassengerData",
  seats: "projectSeatSelection",
  payment: "projectPaymentData",
  bookings: "projectBookings",
  lastBooking: "projectLastBookingId"
};

const projectProtectedPages = [
  "project-home.html",
  "project-results.html",
  "project-passengers.html",
  "project-seats.html",
  "project-payment.html",
  "project-confirmation.html",
  "project-manage-booking.html"
];

const cities = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Goa",
  "Jaipur",
  "Pune",
  "Lucknow",
  "Kochi"
];

const flights = [
  {
    id: "FL-AI-201",
    airline: "Air India",
    airlineCode: "AI",
    from: "Mumbai",
    to: "Delhi",
    departTime: "06:10",
    arriveTime: "08:20",
    duration: "2h 10m",
    stops: 0,
    price: 6120,
    baggage: "15kg cabin • 20kg check-in",
    terminal: "T2",
    refundable: true,
    cabin: "Economy Flex"
  },
  {
    id: "FL-6E-402",
    airline: "IndiGo",
    airlineCode: "6E",
    from: "Mumbai",
    to: "Delhi",
    departTime: "09:05",
    arriveTime: "11:20",
    duration: "2h 15m",
    stops: 0,
    price: 5450,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Saver"
  },
  {
    id: "FL-AK-118",
    airline: "Akasa Air",
    airlineCode: "QP",
    from: "Mumbai",
    to: "Bengaluru",
    departTime: "07:45",
    arriveTime: "09:35",
    duration: "1h 50m",
    stops: 0,
    price: 4880,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Economy Lite"
  },
  {
    id: "FL-SG-907",
    airline: "SpiceJet",
    airlineCode: "SG",
    from: "Delhi",
    to: "Goa",
    departTime: "13:30",
    arriveTime: "16:15",
    duration: "2h 45m",
    stops: 0,
    price: 5930,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T3",
    refundable: false,
    cabin: "SpiceSaver"
  },
  {
    id: "FL-IX-551",
    airline: "Air India Express",
    airlineCode: "IX",
    from: "Chennai",
    to: "Kochi",
    departTime: "18:20",
    arriveTime: "19:30",
    duration: "1h 10m",
    stops: 0,
    price: 3820,
    baggage: "7kg cabin • 20kg check-in",
    terminal: "T4",
    refundable: true,
    cabin: "Express Value"
  },
  {
    id: "FL-9I-311",
    airline: "Alliance Air",
    airlineCode: "9I",
    from: "Kolkata",
    to: "Jaipur",
    departTime: "10:55",
    arriveTime: "14:55",
    duration: "4h 00m",
    stops: 1,
    price: 5260,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T2",
    refundable: true,
    cabin: "Regional Flex"
  },
  {
    id: "FL-AI-644",
    airline: "Air India",
    airlineCode: "AI",
    from: "Bengaluru",
    to: "Hyderabad",
    departTime: "05:50",
    arriveTime: "07:05",
    duration: "1h 15m",
    stops: 0,
    price: 4260,
    baggage: "15kg cabin • 20kg check-in",
    terminal: "T2",
    refundable: true,
    cabin: "Economy Flex"
  },
  {
    id: "FL-6E-770",
    airline: "IndiGo",
    airlineCode: "6E",
    from: "Delhi",
    to: "Mumbai",
    departTime: "17:40",
    arriveTime: "19:55",
    duration: "2h 15m",
    stops: 0,
    price: 5690,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Saver"
  },
  {
    id: "FL-QP-620",
    airline: "Akasa Air",
    airlineCode: "QP",
    from: "Delhi",
    to: "Pune",
    departTime: "15:10",
    arriveTime: "17:15",
    duration: "2h 05m",
    stops: 0,
    price: 5010,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Economy Lite"
  },
  {
    id: "FL-SG-114",
    airline: "SpiceJet",
    airlineCode: "SG",
    from: "Mumbai",
    to: "Goa",
    departTime: "20:40",
    arriveTime: "21:55",
    duration: "1h 15m",
    stops: 0,
    price: 4550,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "SpiceSaver"
  },
  {
    id: "FL-IX-812",
    airline: "Air India Express",
    airlineCode: "IX",
    from: "Hyderabad",
    to: "Chennai",
    departTime: "11:45",
    arriveTime: "13:05",
    duration: "1h 20m",
    stops: 0,
    price: 4090,
    baggage: "7kg cabin • 20kg check-in",
    terminal: "T3",
    refundable: true,
    cabin: "Express Value"
  },
  {
    id: "FL-9I-401",
    airline: "Alliance Air",
    airlineCode: "9I",
    from: "Lucknow",
    to: "Delhi",
    departTime: "08:25",
    arriveTime: "09:40",
    duration: "1h 15m",
    stops: 0,
    price: 3610,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T2",
    refundable: true,
    cabin: "Regional Flex"
  },
  {
    id: "FL-AI-226",
    airline: "Air India",
    airlineCode: "AI",
    from: "Mumbai",
    to: "Delhi",
    departTime: "14:20",
    arriveTime: "16:35",
    duration: "2h 15m",
    stops: 0,
    price: 6480,
    baggage: "15kg cabin • 20kg check-in",
    terminal: "T2",
    refundable: true,
    cabin: "Economy Flex"
  },
  {
    id: "FL-QP-144",
    airline: "Akasa Air",
    airlineCode: "QP",
    from: "Mumbai",
    to: "Delhi",
    departTime: "21:15",
    arriveTime: "23:30",
    duration: "2h 15m",
    stops: 0,
    price: 5320,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Economy Lite"
  },
  {
    id: "FL-AI-733",
    airline: "Air India",
    airlineCode: "AI",
    from: "Delhi",
    to: "Mumbai",
    departTime: "06:30",
    arriveTime: "08:45",
    duration: "2h 15m",
    stops: 0,
    price: 6250,
    baggage: "15kg cabin • 20kg check-in",
    terminal: "T3",
    refundable: true,
    cabin: "Economy Flex"
  },
  {
    id: "FL-SG-220",
    airline: "SpiceJet",
    airlineCode: "SG",
    from: "Delhi",
    to: "Mumbai",
    departTime: "12:45",
    arriveTime: "15:05",
    duration: "2h 20m",
    stops: 0,
    price: 5140,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "SpiceSaver"
  },
  {
    id: "FL-6E-515",
    airline: "IndiGo",
    airlineCode: "6E",
    from: "Mumbai",
    to: "Bengaluru",
    departTime: "16:25",
    arriveTime: "18:15",
    duration: "1h 50m",
    stops: 0,
    price: 4620,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Saver"
  },
  {
    id: "FL-AI-889",
    airline: "Air India",
    airlineCode: "AI",
    from: "Bengaluru",
    to: "Mumbai",
    departTime: "08:10",
    arriveTime: "10:00",
    duration: "1h 50m",
    stops: 0,
    price: 4980,
    baggage: "15kg cabin • 20kg check-in",
    terminal: "T2",
    refundable: true,
    cabin: "Economy Flex"
  },
  {
    id: "FL-QP-355",
    airline: "Akasa Air",
    airlineCode: "QP",
    from: "Bengaluru",
    to: "Mumbai",
    departTime: "19:05",
    arriveTime: "20:55",
    duration: "1h 50m",
    stops: 0,
    price: 4380,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Economy Lite"
  },
  {
    id: "FL-6E-932",
    airline: "IndiGo",
    airlineCode: "6E",
    from: "Bengaluru",
    to: "Hyderabad",
    departTime: "12:05",
    arriveTime: "13:20",
    duration: "1h 15m",
    stops: 0,
    price: 3890,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Saver"
  },
  {
    id: "FL-IX-702",
    airline: "Air India Express",
    airlineCode: "IX",
    from: "Hyderabad",
    to: "Bengaluru",
    departTime: "20:15",
    arriveTime: "21:30",
    duration: "1h 15m",
    stops: 0,
    price: 3710,
    baggage: "7kg cabin • 20kg check-in",
    terminal: "T3",
    refundable: true,
    cabin: "Express Value"
  },
  {
    id: "FL-6E-284",
    airline: "IndiGo",
    airlineCode: "6E",
    from: "Chennai",
    to: "Kochi",
    departTime: "07:35",
    arriveTime: "08:50",
    duration: "1h 15m",
    stops: 0,
    price: 3480,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Saver"
  },
  {
    id: "FL-IX-622",
    airline: "Air India Express",
    airlineCode: "IX",
    from: "Kochi",
    to: "Chennai",
    departTime: "09:40",
    arriveTime: "10:55",
    duration: "1h 15m",
    stops: 0,
    price: 3640,
    baggage: "7kg cabin • 20kg check-in",
    terminal: "T3",
    refundable: true,
    cabin: "Express Value"
  },
  {
    id: "FL-SG-512",
    airline: "SpiceJet",
    airlineCode: "SG",
    from: "Mumbai",
    to: "Goa",
    departTime: "07:20",
    arriveTime: "08:35",
    duration: "1h 15m",
    stops: 0,
    price: 4320,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "SpiceSaver"
  },
  {
    id: "FL-9I-208",
    airline: "Alliance Air",
    airlineCode: "9I",
    from: "Goa",
    to: "Mumbai",
    departTime: "17:25",
    arriveTime: "18:45",
    duration: "1h 20m",
    stops: 0,
    price: 4140,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T2",
    refundable: true,
    cabin: "Regional Flex"
  },
  {
    id: "FL-AI-318",
    airline: "Air India",
    airlineCode: "AI",
    from: "Kolkata",
    to: "Jaipur",
    departTime: "06:50",
    arriveTime: "09:45",
    duration: "2h 55m",
    stops: 0,
    price: 5770,
    baggage: "15kg cabin • 20kg check-in",
    terminal: "T2",
    refundable: true,
    cabin: "Economy Flex"
  },
  {
    id: "FL-6E-690",
    airline: "IndiGo",
    airlineCode: "6E",
    from: "Jaipur",
    to: "Kolkata",
    departTime: "18:35",
    arriveTime: "21:25",
    duration: "2h 50m",
    stops: 0,
    price: 5390,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Saver"
  },
  {
    id: "FL-QP-744",
    airline: "Akasa Air",
    airlineCode: "QP",
    from: "Delhi",
    to: "Pune",
    departTime: "08:55",
    arriveTime: "11:00",
    duration: "2h 05m",
    stops: 0,
    price: 4860,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Economy Lite"
  },
  {
    id: "FL-AI-556",
    airline: "Air India",
    airlineCode: "AI",
    from: "Pune",
    to: "Delhi",
    departTime: "19:30",
    arriveTime: "21:40",
    duration: "2h 10m",
    stops: 0,
    price: 5210,
    baggage: "15kg cabin • 20kg check-in",
    terminal: "T2",
    refundable: true,
    cabin: "Economy Flex"
  },
  {
    id: "FL-9I-765",
    airline: "Alliance Air",
    airlineCode: "9I",
    from: "Lucknow",
    to: "Delhi",
    departTime: "16:05",
    arriveTime: "17:20",
    duration: "1h 15m",
    stops: 0,
    price: 3440,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T2",
    refundable: true,
    cabin: "Regional Flex"
  },
  {
    id: "FL-6E-188",
    airline: "IndiGo",
    airlineCode: "6E",
    from: "Delhi",
    to: "Lucknow",
    departTime: "21:00",
    arriveTime: "22:10",
    duration: "1h 10m",
    stops: 0,
    price: 3280,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "Saver"
  },
  {
    id: "FL-SG-448",
    airline: "SpiceJet",
    airlineCode: "SG",
    from: "Ahmedabad",
    to: "Goa",
    departTime: "10:30",
    arriveTime: "12:05",
    duration: "1h 35m",
    stops: 0,
    price: 4120,
    baggage: "7kg cabin • 15kg check-in",
    terminal: "T1",
    refundable: false,
    cabin: "SpiceSaver"
  },
  {
    id: "FL-IX-260",
    airline: "Air India Express",
    airlineCode: "IX",
    from: "Goa",
    to: "Ahmedabad",
    departTime: "14:45",
    arriveTime: "16:20",
    duration: "1h 35m",
    stops: 0,
    price: 4290,
    baggage: "7kg cabin • 20kg check-in",
    terminal: "T3",
    refundable: true,
    cabin: "Express Value"
  }
];

const airlineProfiles = [
  {
    airline: "Air India",
    airlineCode: "AI",
    baggage: "15kg cabin • 20kg check-in",
    refundable: true,
    cabin: "Economy Flex"
  },
  {
    airline: "IndiGo",
    airlineCode: "6E",
    baggage: "7kg cabin • 15kg check-in",
    refundable: false,
    cabin: "Saver"
  },
  {
    airline: "Akasa Air",
    airlineCode: "QP",
    baggage: "7kg cabin • 15kg check-in",
    refundable: false,
    cabin: "Economy Lite"
  },
  {
    airline: "SpiceJet",
    airlineCode: "SG",
    baggage: "7kg cabin • 15kg check-in",
    refundable: false,
    cabin: "SpiceSaver"
  },
  {
    airline: "Air India Express",
    airlineCode: "IX",
    baggage: "7kg cabin • 20kg check-in",
    refundable: true,
    cabin: "Express Value"
  },
  {
    airline: "Alliance Air",
    airlineCode: "9I",
    baggage: "7kg cabin • 15kg check-in",
    refundable: true,
    cabin: "Regional Flex"
  }
];

const generatedDepartureTimes = [
  "05:45",
  "07:10",
  "08:35",
  "10:20",
  "12:05",
  "13:50",
  "15:25",
  "17:40",
  "19:15",
  "21:05"
];

const generatedDurations = [
  { label: "1h 05m", minutes: 65 },
  { label: "1h 20m", minutes: 80 },
  { label: "1h 35m", minutes: 95 },
  { label: "1h 50m", minutes: 110 },
  { label: "2h 05m", minutes: 125 },
  { label: "2h 20m", minutes: 140 },
  { label: "2h 45m", minutes: 165 },
  { label: "3h 10m", minutes: 190 },
  { label: "3h 35m", minutes: 215 },
  { label: "4h 00m", minutes: 240 }
];

const addMinutesToTime = (time, minutesToAdd) => {
  const [hours, minutes] = time.split(":").map(Number);
  const total = hours * 60 + minutes + minutesToAdd;
  const nextHours = Math.floor((total % 1440) / 60);
  const nextMinutes = total % 60;
  return `${String(nextHours).padStart(2, "0")}:${String(nextMinutes).padStart(2, "0")}`;
};

const generatedFlights = cities
  .flatMap((from) => cities.filter((to) => to !== from).map((to) => ({ from, to })))
  .slice(0, 100)
  .map((route, index) => {
    const airline = airlineProfiles[index % airlineProfiles.length];
    const departTime = generatedDepartureTimes[index % generatedDepartureTimes.length];
    const duration = generatedDurations[(index + route.from.length + route.to.length) % generatedDurations.length];
    const stops = index % 9 === 0 ? 1 : 0;
    const price = 3200 + ((index * 370 + route.from.length * 95 + route.to.length * 80) % 5200) + stops * 450;

    return {
      id: `FL-${airline.airlineCode}-G${String(index + 1).padStart(3, "0")}`,
      airline: airline.airline,
      airlineCode: airline.airlineCode,
      from: route.from,
      to: route.to,
      departTime,
      arriveTime: addMinutesToTime(departTime, duration.minutes + stops * 40),
      duration: stops ? `${duration.label} + stop` : duration.label,
      stops,
      price,
      baggage: airline.baggage,
      terminal: `T${(index % 4) + 1}`,
      refundable: airline.refundable,
      cabin: airline.cabin
    };
  });

flights.push(...generatedFlights);

const bookedSeatIds = ["2B", "3D", "4A", "5F", "6C", "8E"];
const seatLayout = [
  "1A", "1B", "1C", "1D", "1E", "1F",
  "2A", "2B", "2C", "2D", "2E", "2F",
  "3A", "3B", "3C", "3D", "3E", "3F",
  "4A", "4B", "4C", "4D", "4E", "4F",
  "5A", "5B", "5C", "5D", "5E", "5F",
  "6A", "6B", "6C", "6D", "6E", "6F",
  "7A", "7B", "7C", "7D", "7E", "7F",
  "8A", "8B", "8C", "8D", "8E", "8F"
];

const currentProjectPage = window.location.pathname.split("/").pop() || "project-login.html";
let projectCatalog = {
  cities: [...cities],
  airlines: Array.from(new Set(flights.map((flight) => flight.airline))).sort(),
  flights: [...flights]
};
let currentFlightResults = {
  outbound: [],
  returning: []
};
let currentSeatInventory = {
  seatLayout,
  bookedSeats: [...bookedSeatIds]
};
let currentUserBookings = [];

const loadProjectCatalog = async () => {
  projectCatalog = {
    cities: [...cities],
    airlines: Array.from(new Set(flights.map((flight) => flight.airline))).sort(),
    flights: [...flights]
  };
};

const loadFlightResults = async (filters = {}) => {
  const search = getProjectSearch();
  currentFlightResults = {
    outbound: getFilteredFlights("outbound", filters),
    returning: search.tripType === "round-trip" ? getFilteredFlights("return", filters) : []
  };
};

const loadSeatInventory = async (flightId) => {
  const dynamicBookedSeats = getBookings()
    .filter((booking) => booking.status !== "Cancelled")
    .flatMap((booking) => (booking.outboundFlightId === flightId ? booking.seats || [] : []));

  currentSeatInventory = {
    seatLayout,
    bookedSeats: Array.from(new Set([...bookedSeatIds, ...dynamicBookedSeats]))
  };
};

const loadUserBookings = async () => {
  const currentUser = sessionStorage.getItem(projectStorageKeys.currentUser);
  currentUserBookings = getBookings().filter((booking) => !currentUser || booking.ownerUsername === currentUser);
};

const getJson = (key, fallback = null) => {
  const raw = localStorage.getItem(key) || sessionStorage.getItem(key);
  if (!raw) {
    return fallback;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
};

const setSessionJson = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const setLocalJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const setProjectStatus = (id, text, level = "") => {
  const node = document.getElementById(id);
  if (!node) {
    return;
  }
  if (level === "success") {
    node.textContent = "";
    node.className = "project-status";
    return;
  }
  node.textContent = text;
  node.className = "project-status";
  if (level) {
    node.classList.add(level);
  }
};

const requireProjectAuth = async () => {
  if (!projectProtectedPages.includes(currentProjectPage)) {
    return true;
  }

  if (sessionStorage.getItem(projectStorageKeys.auth) === "true") {
    return true;
  }

  sessionStorage.removeItem(projectStorageKeys.auth);
  window.location.href = "project-login.html";
  return false;
};

const projectLogout = () => {
  sessionStorage.removeItem(projectStorageKeys.auth);
  sessionStorage.removeItem(projectStorageKeys.currentUser);
  window.location.href = "project-login.html";
};

const formatCurrency = (value) => `Rs ${Number(value).toLocaleString("en-IN")}`;

const formatDate = (value) => {
  if (!value) {
    return "-";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const getToday = () => new Date().toISOString().split("T")[0];

const getProjectSearch = () =>
  getJson(projectStorageKeys.search, {
    tripType: "one-way",
    from: "Mumbai",
    to: "Delhi",
    departureDate: getToday(),
    returnDate: "",
    travellers: 1,
    cabinClass: "Economy"
  });

const getRegisteredUsers = () => {
  const users = getJson(projectStorageKeys.users, []);
  const hasDefaultUser = users.some((user) => user.username.toLowerCase() === PROJECT_USERNAME.toLowerCase());

  if (hasDefaultUser) {
    return users;
  }

  const seededUsers = [
    {
      username: PROJECT_USERNAME,
      email: "jerish@jcmtravels.local",
      password: PROJECT_PASSWORD,
      phone: "9876543210",
      createdAt: new Date().toISOString()
    },
    ...users
  ];
  setLocalJson(projectStorageKeys.users, seededUsers);
  return seededUsers;
};
const getSelectedFlight = () => getJson(projectStorageKeys.selectedFlight);
const getPassengerData = () => getJson(projectStorageKeys.passengers, []);
const getSeatSelection = () => getJson(projectStorageKeys.seats, []);
const getPaymentData = () => getJson(projectStorageKeys.payment);
const getBookings = () => getJson(projectStorageKeys.bookings, []);

const getFlightById = (flightId) => projectCatalog.flights.find((flight) => flight.id === flightId);

const buildTopbar = (activePage) => {
  const topbar = document.getElementById("project-topbar");
  if (!topbar) {
    return;
  }

  topbar.innerHTML = `
    <div class="project-brand">
      <div class="project-brand-copy">
        <strong>JCM Travels</strong>
        <span>Domestic flight booking for India</span>
      </div>
    </div>
    <div class="project-actions">
      <a class="project-button secondary small" href="project-manage-booking.html">My Trips</a>
      <a class="project-button secondary small" href="project-home.html">Search Flights</a>
      <button class="project-button ghost small" type="button" data-project-logout>Logout</button>
    </div>
  `;
};

const initProjectCommon = () => {
  document.querySelector("[data-project-logout]")?.addEventListener("click", projectLogout);
};

const initPasswordToggles = () => {
  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.passwordToggle);
      if (!input) {
        return;
      }

      const showPassword = input.type === "password";
      input.type = showPassword ? "text" : "password";
      button.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
      button.setAttribute("aria-pressed", showPassword ? "true" : "false");
      button.classList.toggle("is-active", showPassword);
    });
  });
};

const initProjectLogin = () => {
  const form = document.getElementById("project-login-form");
  if (!form) {
    return;
  }
  initPasswordToggles();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("project-username").value.trim();
    const password = document.getElementById("project-password").value.trim();

    if (!username && !password) {
      setProjectStatus("project-login-status", "Enter username and password.", "danger");
      return;
    }

    if (!username) {
      setProjectStatus("project-login-status", "Enter username.", "danger");
      return;
    }

    if (!password) {
      setProjectStatus("project-login-status", "Enter password.", "danger");
      return;
    }

    const user = getRegisteredUsers().find(
      (entry) => entry.username.toLowerCase() === username.toLowerCase() && entry.password === password
    );

    if (user) {
      sessionStorage.setItem(projectStorageKeys.auth, "true");
      sessionStorage.setItem(projectStorageKeys.currentUser, user.username);
      trackProjectEvent("login_success", user.username);
      setProjectStatus("project-login-status", "Login successful. Opening travel workspace...", "success");
      window.setTimeout(() => {
        window.location.href = "project-home.html";
      }, 350);
      return;
    }

    trackProjectEvent("login_failed", username);
    setProjectStatus("project-login-status", "Invalid credentials. Please try again.", "danger");
  });
};

const initProjectSignup = () => {
  const form = document.getElementById("project-signup-form");
  if (!form) {
    return;
  }
  initPasswordToggles();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim().toLowerCase();
    const password = document.getElementById("signup-password").value.trim();
    const phone = document.getElementById("signup-phone").value.trim();

    if (!username || !email || !password || !phone) {
      setProjectStatus("project-signup-status", "Fill username, email, password, and phone number.", "danger");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setProjectStatus("project-signup-status", "Enter a valid email address.", "danger");
      return;
    }
    if (password.length < 6) {
      setProjectStatus("project-signup-status", "Password must contain at least 6 characters.", "danger");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setProjectStatus("project-signup-status", "Phone number must be 10 digits.", "danger");
      return;
    }

    const users = getRegisteredUsers();
    const exists = users.some(
      (user) => user.username.toLowerCase() === username.toLowerCase() || user.email.toLowerCase() === email
    );

    if (exists) {
      setProjectStatus("project-signup-status", "Username or email already exists.", "danger");
      return;
    }

    users.push({ username, email, password, phone, createdAt: new Date().toISOString() });
    setLocalJson(projectStorageKeys.users, users);
    trackProjectEvent("signup", username);
    setProjectStatus("project-signup-status", "Account created successfully. You can sign in now.", "success");
    form.reset();
  });
};

const populateCityOptions = (select, currentValue) => {
  if (!select) {
    return;
  }

  select.innerHTML = projectCatalog.cities
    .map((city) => `<option value="${city}" ${city === currentValue ? "selected" : ""}>${city}</option>`)
    .join("");
};

const renderSearchSummary = () => {
  const summaryNode = document.getElementById("project-search-summary");
  if (!summaryNode) {
    return;
  }
  const search = getProjectSearch();
  summaryNode.innerHTML = `
    <span class="project-chip">${search.tripType === "round-trip" ? "Round trip" : "One way"}</span>
    <span class="project-chip">${search.from} to ${search.to}</span>
    <span class="project-chip">${formatDate(search.departureDate)}</span>
    ${search.tripType === "round-trip" && search.returnDate ? `<span class="project-chip">Return ${formatDate(search.returnDate)}</span>` : ""}
    <span class="project-chip">${search.travellers} traveller${search.travellers > 1 ? "s" : ""}</span>
    <span class="project-chip">${search.cabinClass}</span>
  `;
};

const validateSearch = (search) => {
  if (!search.from || !search.to || !search.departureDate) {
    return "Fill origin, destination, and departure date.";
  }
  if (search.from === search.to) {
    return "Origin and destination cannot be the same.";
  }
  if (search.departureDate < getToday()) {
    return "Departure date cannot be in the past.";
  }
  if (search.tripType === "round-trip") {
    if (!search.returnDate) {
      return "Select a return date for round trip.";
    }
    if (search.returnDate < search.departureDate) {
      return "Return date cannot be before departure date.";
    }
  }
  return "";
};

const handleSearchSubmit = (formId, statusId) => {
  const form = document.getElementById(formId);
  if (!form) {
    return;
  }

  const saved = getProjectSearch();
  const fromField = document.getElementById("trip-from");
  const toField = document.getElementById("trip-to");
  const dateField = document.getElementById("trip-date");
  const returnDateField = document.getElementById("trip-return-date");
  const returnWrap = document.getElementById("trip-return-wrap");
  const travellersField = document.getElementById("trip-travellers");
  const cabinField = document.getElementById("trip-cabin");
  const tripTypeInputs = Array.from(document.querySelectorAll('input[name="tripType"]'));

  populateCityOptions(fromField, saved.from);
  populateCityOptions(toField, saved.to);
  if (dateField) {
    dateField.min = getToday();
    dateField.value = saved.departureDate;
  }
  if (returnDateField) {
    returnDateField.min = saved.departureDate || getToday();
    returnDateField.value = saved.returnDate || "";
  }
  if (travellersField) {
    travellersField.value = saved.travellers;
  }
  if (cabinField) {
    cabinField.value = saved.cabinClass;
  }
  tripTypeInputs.forEach((input) => {
    input.checked = input.value === saved.tripType;
  });

  const syncTripType = () => {
    const tripType = document.querySelector('input[name="tripType"]:checked')?.value || "one-way";
    if (returnWrap) {
      returnWrap.classList.toggle("project-hidden", tripType !== "round-trip");
    }
    if (returnDateField) {
      returnDateField.min = dateField.value || getToday();
      if (tripType !== "round-trip") {
        returnDateField.value = "";
      }
    }
  };

  dateField?.addEventListener("change", () => {
    if (returnDateField) {
      returnDateField.min = dateField.value || getToday();
    }
  });
  tripTypeInputs.forEach((input) => input.addEventListener("change", syncTripType));
  syncTripType();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const search = {
      tripType: document.querySelector('input[name="tripType"]:checked')?.value || "one-way",
      from: fromField.value,
      to: toField.value,
      departureDate: dateField.value,
      returnDate: returnDateField?.value || "",
      travellers: Number(travellersField.value),
      cabinClass: cabinField.value
    };

    const error = validateSearch(search);
    if (error) {
      setProjectStatus(statusId, error, "danger");
      return;
    }

    setSessionJson(projectStorageKeys.search, search);
    sessionStorage.removeItem(projectStorageKeys.selectedFlight);
    sessionStorage.removeItem(projectStorageKeys.passengers);
    sessionStorage.removeItem(projectStorageKeys.seats);
    sessionStorage.removeItem(projectStorageKeys.payment);
    trackProjectEvent("search_submitted", `${search.tripType} | ${search.from} -> ${search.to}`);
    window.location.href = "project-results.html";
  });
};

const initProjectHome = async () => {
  buildTopbar("home");
  initProjectCommon();
  await loadProjectCatalog();
  renderSearchSummary();
  handleSearchSubmit("project-search-form", "project-search-status");
};

const getFilteredFlights = (direction = "outbound") => {
  const search = getProjectSearch();
  const route =
    direction === "return"
      ? { from: search.to, to: search.from }
      : { from: search.from, to: search.to };
  let result = flights.filter((flight) => flight.from === route.from && flight.to === route.to);

  const stops = document.querySelector('input[name="stops-filter"]:checked')?.value || "all";
  if (stops === "non-stop") {
    result = result.filter((flight) => flight.stops === 0);
  } else if (stops === "one-stop") {
    result = result.filter((flight) => flight.stops === 1);
  }

  const maxPrice = Number(document.getElementById("filter-price")?.value || 9000);
  result = result.filter((flight) => flight.price <= maxPrice);

  const departureSlot = document.getElementById("filter-departure")?.value || "all";
  if (departureSlot !== "all") {
    result = result.filter((flight) => {
      const hour = Number(flight.departTime.split(":")[0]);
      if (departureSlot === "morning") return hour < 12;
      if (departureSlot === "afternoon") return hour >= 12 && hour < 18;
      if (departureSlot === "evening") return hour >= 18;
      return true;
    });
  }

  const preferredAirline = document.getElementById("filter-airline")?.value || "all";
  if (preferredAirline !== "all") {
    result = result.filter((flight) => flight.airline === preferredAirline);
  }

  return result;
};

const getTripSelection = () =>
  getSelectedFlight() || {
    outboundFlightId: "",
    returnFlightId: "",
    action: ""
  };

const setTripSelection = (selection) => {
  setSessionJson(projectStorageKeys.selectedFlight, {
    ...getTripSelection(),
    ...selection
  });
};

const trackProjectEvent = (type, details = "") => {
  const events = getJson(projectStorageKeys.events, []);
  events.unshift({
    id: `EVT${Date.now()}`,
    timestamp: new Date().toISOString(),
    app: "flight-project",
    type,
    username: sessionStorage.getItem(projectStorageKeys.currentUser) || "guest",
    details
  });
  setLocalJson(projectStorageKeys.events, events.slice(0, 100));
};

const rememberBooking = () => {};

const rememberCancellation = () => {};

const renderSelectionBanner = () => {
  const banner = document.getElementById("project-selection-banner");
  if (!banner) {
    return;
  }

  const search = getProjectSearch();
  const selection = getTripSelection();
  if (search.tripType !== "round-trip") {
    banner.innerHTML = "";
    return;
  }

  const outbound = getFlightById(selection.outboundFlightId);
  const returning = getFlightById(selection.returnFlightId);
  banner.innerHTML = `
    <div class="project-banner">
      <div class="project-meta-row project-meta-row-plain">
        <div>
          <strong>Round-trip selection</strong>
          <div class="project-helper">
            Onward: ${outbound ? `${outbound.airline} ${outbound.departTime}` : "Not selected"} |
            Return: ${returning ? `${returning.airline} ${returning.departTime}` : "Not selected"}
          </div>
        </div>
        <div class="project-flight-actions">
          <button class="project-button primary small" type="button" id="project-roundtrip-continue" ${outbound && returning ? "" : "disabled"}>Continue</button>
        </div>
      </div>
    </div>
  `;

  banner.querySelector("#project-roundtrip-continue")?.addEventListener("click", () => {
    window.location.href = "project-passengers.html";
  });
};

const renderFlights = () => {
  const list = document.getElementById("project-flight-list");
  const count = document.getElementById("project-results-count");
  if (!list || !count) {
    return;
  }

  const search = getProjectSearch();
  const selection = getTripSelection();
  const outboundFlights = currentFlightResults.outbound || [];
  const returnFlights = search.tripType === "round-trip" ? currentFlightResults.returning || [] : [];
  const totalCount = outboundFlights.length + returnFlights.length;
  count.textContent = `${totalCount} flight${totalCount === 1 ? "" : "s"} available`;

  if (!outboundFlights.length && (!returnFlights.length || search.tripType !== "round-trip")) {
    list.innerHTML = `<div class="project-empty">No flights matched your filters. Try another airline, time, or price range.</div>`;
    return;
  }

  const renderFlightCard = (flight, direction) => `
        <article class="project-flight-card">
          <div class="project-flight-top">
            <div class="project-airline">
              <div class="project-airline-mark">${flight.airlineCode}</div>
              <div class="project-airline-copy">
                <strong>${flight.airline}</strong>
                <span>${flight.id} • ${flight.cabin}</span>
              </div>
            </div>
            <div class="project-route-line">
              <div>
                <strong>${flight.departTime}</strong>
                <span>${flight.from}</span>
              </div>
              <div class="project-route-bar"></div>
              <div>
                <strong>${flight.arriveTime}</strong>
                <span>${flight.to}</span>
              </div>
            </div>
            <div class="project-price">
              <strong>${formatCurrency(flight.price)}</strong>
              <span>${flight.duration} • ${flight.stops === 0 ? "Non-stop" : "1 stop"}</span>
            </div>
          </div>
          <div class="project-meta-row">
            <div class="project-inline">
              <span class="project-tag">${flight.baggage}</span>
              <span class="project-tag">${flight.refundable ? "Refundable" : "Non-refundable"}</span>
              <span class="project-tag">Terminal ${flight.terminal}</span>
            </div>
            <div class="project-flight-actions">
              <button class="project-button secondary small" type="button" data-flight-details="${flight.id}">View details</button>
              <button class="project-button ghost small" type="button" data-flight-lock="${flight.id}" data-direction="${direction}">Lock price</button>
              ${
                search.tripType === "round-trip"
                  ? `<button class="project-button warm small" type="button" data-flight-select="${flight.id}" data-direction="${direction}">${
                      direction === "return"
                        ? selection.returnFlightId === flight.id
                          ? "Return selected"
                          : "Select return"
                        : selection.outboundFlightId === flight.id
                          ? "Onward selected"
                          : "Select onward"
                    }</button>`
                  : `<button class="project-button warm small" type="button" data-flight-book="${flight.id}">Book now</button>`
              }
            </div>
          </div>
          <div class="project-details-box project-hidden" id="details-${flight.id}">
            <div class="project-grid-three">
              <div><strong>Fare type</strong><p>${flight.refundable ? "Flexible fare with refund after cancellation." : "Value fare with no refund after cancellation."}</p></div>
              <div><strong>Meal and seat</strong><p>Seat selection available in next step. Meal add-ons simulated during payment.</p></div>
              <div><strong>Automation hook</strong><p>Use stable button ids and flight ids for result validation and selection.</p></div>
            </div>
          </div>
        </article>
      `;

  const outboundSection = outboundFlights.length
    ? `
      <section class="project-flight-list-section">
        <div class="project-meta-row project-meta-row-plain">
          <strong>Onward flights</strong>
          <span>${search.from} to ${search.to}</span>
        </div>
        <div class="project-flight-list">
          ${outboundFlights.map((flight) => renderFlightCard(flight, "outbound")).join("")}
        </div>
      </section>`
    : `<div class="project-empty">No onward flights matched your filters.</div>`;

  const returnSection =
    search.tripType === "round-trip"
      ? returnFlights.length
        ? `
      <section class="project-flight-list-section">
        <div class="project-meta-row">
          <strong>Return flights</strong>
          <span>${search.to} to ${search.from}</span>
        </div>
        <div class="project-flight-list">
          ${returnFlights.map((flight) => renderFlightCard(flight, "return")).join("")}
        </div>
      </section>`
        : `<div class="project-empty">No return flights matched your filters.</div>`
      : "";

  list.innerHTML = `${outboundSection}${returnSection}`;
  renderSelectionBanner();

  list.querySelectorAll("[data-flight-details]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById(`details-${button.dataset.flightDetails}`)?.classList.toggle("project-hidden");
    });
  });

  list.querySelectorAll("[data-flight-lock]").forEach((button) => {
    button.addEventListener("click", () => {
      const flight = getFlightById(button.dataset.flightLock);
      setTripSelection(
        button.dataset.direction === "return"
          ? { returnFlightId: flight.id, action: "lock-price" }
          : { outboundFlightId: flight.id, action: "lock-price" }
      );
      setProjectStatus(
        "project-results-status",
        `${flight.airline} ${button.dataset.direction === "return" ? "return" : "onward"} fare locked for 15 minutes at ${formatCurrency(flight.price)}.`,
        "warning"
      );
      trackProjectEvent("fare_locked", `${flight.id} | ${button.dataset.direction}`);
      renderSelectionBanner();
    });
  });

  list.querySelectorAll("[data-flight-book]").forEach((button) => {
    button.addEventListener("click", () => {
      setSessionJson(projectStorageKeys.selectedFlight, {
        outboundFlightId: button.dataset.flightBook,
        returnFlightId: "",
        action: "book-now"
      });
      trackProjectEvent("flight_selected", `${button.dataset.flightBook} | one-way`);
      window.location.href = "project-passengers.html";
    });
  });

  list.querySelectorAll("[data-flight-select]").forEach((button) => {
    button.addEventListener("click", () => {
      setTripSelection(
        button.dataset.direction === "return"
          ? { returnFlightId: button.dataset.flightSelect, action: "round-trip" }
          : { outboundFlightId: button.dataset.flightSelect, action: "round-trip" }
      );
      setProjectStatus(
        "project-results-status",
        `${button.dataset.direction === "return" ? "Return" : "Onward"} flight selected successfully.`,
        "success"
      );
      trackProjectEvent("flight_selected", `${button.dataset.flightSelect} | ${button.dataset.direction}`);
      renderFlights();
    });
  });
};

const collectResultFilters = () => ({
  stops: document.querySelector('input[name="stops-filter"]:checked')?.value || "all",
  maxPrice: Number(document.getElementById("filter-price")?.value || 9000),
  departureSlot: document.getElementById("filter-departure")?.value || "all",
  airline: document.getElementById("filter-airline")?.value || "all"
});

const refreshProjectResults = async () => {
  await loadFlightResults(collectResultFilters());
  renderFlights();
};

const initProjectResults = async () => {
  buildTopbar("results");
  initProjectCommon();
  renderSearchSummary();

  const filterPrice = document.getElementById("filter-price");
  const filterPriceValue = document.getElementById("filter-price-value");
  if (filterPrice && filterPriceValue) {
    filterPriceValue.textContent = formatCurrency(filterPrice.value);
    filterPrice.addEventListener("input", async () => {
      filterPriceValue.textContent = formatCurrency(filterPrice.value);
      await refreshProjectResults();
    });
  }

  document.querySelectorAll('input[name="stops-filter"]').forEach((input) => {
    input.addEventListener("change", refreshProjectResults);
  });
  document.getElementById("filter-departure")?.addEventListener("change", refreshProjectResults);
  document.getElementById("filter-airline")?.addEventListener("change", refreshProjectResults);
  document.getElementById("clear-filters")?.addEventListener("click", async () => {
    document.querySelector('input[name="stops-filter"][value="all"]').checked = true;
    document.getElementById("filter-price").value = 9000;
    document.getElementById("filter-price-value").textContent = formatCurrency(9000);
    document.getElementById("filter-departure").value = "all";
    document.getElementById("filter-airline").value = "all";
    await refreshProjectResults();
  });

  await refreshProjectResults();
};

const renderPassengerForms = () => {
  const container = document.getElementById("project-passenger-forms");
  const search = getProjectSearch();
  if (!container || !search.travellers) {
    return;
  }

  const savedPassengers = getPassengerData();
  container.innerHTML = Array.from({ length: search.travellers }, (_, index) => {
    const saved = savedPassengers[index] || {};
    return `
      <section class="project-passenger-block">
        <h3 class="project-section-title">Passenger ${index + 1}</h3>
        <div class="project-form-grid">
          <div class="project-field">
            <label for="passenger-title-${index}">Title</label>
            <select id="passenger-title-${index}">
              <option value="">Select title</option>
              <option value="Mr" ${saved.title === "Mr" ? "selected" : ""}>Mr</option>
              <option value="Ms" ${saved.title === "Ms" ? "selected" : ""}>Ms</option>
              <option value="Mrs" ${saved.title === "Mrs" ? "selected" : ""}>Mrs</option>
            </select>
          </div>
          <div class="project-field">
            <label for="passenger-first-${index}">First name</label>
            <input id="passenger-first-${index}" type="text" value="${saved.firstName || ""}" placeholder="Enter first name" />
          </div>
          <div class="project-field">
            <label for="passenger-last-${index}">Last name</label>
            <input id="passenger-last-${index}" type="text" value="${saved.lastName || ""}" placeholder="Enter last name" />
          </div>
          <div class="project-field">
            <label for="passenger-age-${index}">Age</label>
            <input id="passenger-age-${index}" type="number" min="1" max="99" value="${saved.age || ""}" placeholder="Age" />
          </div>
          <div class="project-field">
            <label for="passenger-gender-${index}">Gender</label>
            <select id="passenger-gender-${index}">
              <option value="">Select gender</option>
              <option value="Male" ${saved.gender === "Male" ? "selected" : ""}>Male</option>
              <option value="Female" ${saved.gender === "Female" ? "selected" : ""}>Female</option>
              <option value="Other" ${saved.gender === "Other" ? "selected" : ""}>Other</option>
            </select>
          </div>
          <div class="project-field">
            <label for="passenger-mobile-${index}">Mobile</label>
            <input id="passenger-mobile-${index}" type="tel" value="${saved.mobile || ""}" placeholder="10-digit mobile number" />
          </div>
          <div class="project-field">
            <label for="passenger-email-${index}">Email</label>
            <input id="passenger-email-${index}" type="email" value="${saved.email || ""}" placeholder="name@email.com" />
          </div>
          <div class="project-field">
            <label for="passenger-city-${index}">City</label>
            <input id="passenger-city-${index}" type="text" value="${saved.city || ""}" placeholder="City" />
          </div>
        </div>
      </section>
    `;
  }).join("");
};

const collectPassengerData = () => {
  const count = getProjectSearch().travellers;
  return Array.from({ length: count }, (_, index) => ({
    title: document.getElementById(`passenger-title-${index}`).value,
    firstName: document.getElementById(`passenger-first-${index}`).value.trim(),
    lastName: document.getElementById(`passenger-last-${index}`).value.trim(),
    age: Number(document.getElementById(`passenger-age-${index}`).value),
    gender: document.getElementById(`passenger-gender-${index}`).value,
    mobile: document.getElementById(`passenger-mobile-${index}`).value.trim(),
    email: document.getElementById(`passenger-email-${index}`).value.trim(),
    city: document.getElementById(`passenger-city-${index}`).value.trim()
  }));
};

const validatePassengers = (passengers) => {
  for (const passenger of passengers) {
    if (
      !passenger.title ||
      !passenger.firstName ||
      !passenger.lastName ||
      !passenger.gender ||
      !passenger.city ||
      !passenger.mobile ||
      !passenger.email ||
      !passenger.age
    ) {
      return "Fill all mandatory passenger fields.";
    }
    if (!/^[A-Za-z ]+$/.test(passenger.firstName) || !/^[A-Za-z ]+$/.test(passenger.lastName)) {
      return "Passenger names should contain letters only.";
    }
    if (!/^\d{10}$/.test(passenger.mobile)) {
      return "Enter a valid 10-digit mobile number.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passenger.email)) {
      return "Enter a valid email address.";
    }
    if (passenger.age < 1 || passenger.age > 99) {
      return "Passenger age should be between 1 and 99.";
    }
  }
  return "";
};

const initProjectPassengers = async () => {
  buildTopbar("passengers");
  initProjectCommon();
  await loadProjectCatalog();
  renderSearchSummary();
  renderPassengerForms();

  const selectedFlight = getSelectedFlight();
  if (!selectedFlight?.outboundFlightId) {
    window.location.href = "project-results.html";
    return;
  }

  const flight = getFlightById(selectedFlight.outboundFlightId);
  const returnFlight = getFlightById(selectedFlight.returnFlightId);
  const summary = document.getElementById("project-selected-flight");
  if (flight && summary) {
    summary.innerHTML = `
      <div class="project-summary-row">
        <strong>${flight.airline} ${flight.id}</strong>
        <span>${flight.from} to ${flight.to} • ${flight.departTime} - ${flight.arriveTime}</span>
      </div>
      <div class="project-summary-row">
        <strong>Fare selected</strong>
        <span>${flight.cabin} • ${flight.refundable ? "Refundable" : "Non-refundable"} • ${formatCurrency(flight.price)}</span>
      </div>
      ${
        returnFlight
          ? `<div class="project-summary-row">
              <strong>Return flight</strong>
              <span>${returnFlight.airline} ${returnFlight.id} • ${returnFlight.departTime} - ${returnFlight.arriveTime}</span>
            </div>`
          : ""
      }
    `;
  }

  document.getElementById("project-passenger-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const passengers = collectPassengerData();
    const error = validatePassengers(passengers);

    if (error) {
      setProjectStatus("project-passenger-status", error, "danger");
      return;
    }

    setSessionJson(projectStorageKeys.passengers, passengers);
    window.location.href = "project-seats.html";
  });
};

const renderSeats = () => {
  const container = document.getElementById("project-seat-grid");
  const selected = getSeatSelection();
  if (!container) {
    return;
  }

  container.innerHTML = currentSeatInventory.seatLayout
    .map((seatId) => {
      const isBooked = currentSeatInventory.bookedSeats.includes(seatId);
      const isSelected = selected.includes(seatId);
      return `<button class="project-seat ${isSelected ? "selected" : ""} ${isBooked ? "booked" : ""}" type="button" data-seat-id="${seatId}" ${isBooked ? "disabled" : ""}>${seatId}</button>`;
    })
    .join("");

  container.querySelectorAll("[data-seat-id]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) {
        setProjectStatus("project-seat-status", "This seat is already booked. Choose another seat.", "danger");
        return;
      }

      const travellers = getProjectSearch().travellers;
      let seats = getSeatSelection();
      const seatId = button.dataset.seatId;

      if (seats.includes(seatId)) {
        seats = seats.filter((seat) => seat !== seatId);
      } else {
        if (seats.length >= travellers) {
          setProjectStatus("project-seat-status", `Select only ${travellers} seat(s) for this booking.`, "warning");
          return;
        }
        seats = [...seats, seatId];
      }

      setSessionJson(projectStorageKeys.seats, seats);
      renderSeats();
      renderSeatSummary();
    });
  });
};

const renderSeatSummary = () => {
  const summary = document.getElementById("project-seat-summary");
  if (!summary) {
    return;
  }
  const selected = getSeatSelection();
  summary.innerHTML = selected.length
    ? `<div class="project-banner">Selected seats: <strong>${selected.join(", ")}</strong></div>`
    : `<div class="project-empty">Select seat${getProjectSearch().travellers > 1 ? "s" : ""} to continue.</div>`;
};

const initProjectSeats = async () => {
  buildTopbar("passengers");
  initProjectCommon();
  await loadProjectCatalog();
  renderSearchSummary();
  if (!getPassengerData().length) {
    window.location.href = "project-passengers.html";
    return;
  }
  const selectedFlight = getSelectedFlight();
  const seatFlightId = selectedFlight?.outboundFlightId;
  if (seatFlightId) {
    await loadSeatInventory(seatFlightId);
  }
  renderSeats();
  renderSeatSummary();

  document.getElementById("project-seat-continue")?.addEventListener("click", () => {
    const seats = getSeatSelection();
    if (seats.length !== getProjectSearch().travellers) {
      setProjectStatus("project-seat-status", `Select ${getProjectSearch().travellers} seat(s) to continue.`, "danger");
      return;
    }
    window.location.href = "project-payment.html";
  });
};

const renderPaymentSummary = () => {
  const node = document.getElementById("project-payment-summary");
  const selectedFlight = getSelectedFlight();
  const flight = getFlightById(selectedFlight?.outboundFlightId);
  const returnFlight = getFlightById(selectedFlight?.returnFlightId);
  if (!node || !flight) {
    return;
  }

  const travellers = getProjectSearch().travellers;
  const baseFare = (flight.price + (returnFlight?.price || 0)) * travellers;
  const convenience = 399;
  const seatCharge = getSeatSelection().length * 250;
  const total = baseFare + convenience + seatCharge;

  node.innerHTML = `
    <div class="project-summary-list">
      <div class="project-summary-row"><strong>Flight fare</strong><span>${travellers} x ${formatCurrency(flight.price)}</span></div>
      <div class="project-summary-row"><strong>Seat selection</strong><span>${formatCurrency(seatCharge)}</span></div>
      <div class="project-summary-row"><strong>Convenience fee</strong><span>${formatCurrency(convenience)}</span></div>
    </div>
    <div class="project-summary-total">
      <div class="project-meta-row">
        <strong>Total payable</strong>
        <span class="project-summary-amount">${formatCurrency(total)}</span>
      </div>
    </div>
  `;
};

const initProjectPayment = async () => {
  buildTopbar("payment");
  initProjectCommon();
  await loadProjectCatalog();
  renderSearchSummary();
  if (!getSeatSelection().length) {
    window.location.href = "project-seats.html";
    return;
  }

  renderPaymentSummary();
  const paymentForm = document.getElementById("project-payment-form");
  paymentForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const method = document.querySelector('input[name="paymentMethod"]:checked')?.value || "";
    const cardName = document.getElementById("payment-card-name").value.trim();
    const cardNumber = document.getElementById("payment-card-number").value.trim();
    const expiry = document.getElementById("payment-expiry").value.trim();
    const cvv = document.getElementById("payment-cvv").value.trim();
    const refundPlan = document.querySelector('input[name="refundPlan"]:checked')?.value || "";

    if (!method || !cardName || !cardNumber || !expiry || !cvv || !refundPlan) {
      setProjectStatus("project-payment-status", "Complete payment method, card fields, and refund selection.", "danger");
      return;
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      setProjectStatus("project-payment-status", "Card number must be 16 digits.", "danger");
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      setProjectStatus("project-payment-status", "CVV must be 3 digits.", "danger");
      return;
    }

    setSessionJson(projectStorageKeys.payment, {
      method,
      cardName,
      refundPlan,
      paidAt: new Date().toISOString()
    });
    window.location.href = "project-confirmation.html";
  });
};

const createBooking = () => {
  const existingLast = sessionStorage.getItem(projectStorageKeys.lastBooking);
  const existingBookings = getBookings();
  if (existingLast && existingBookings.find((booking) => booking.bookingId === existingLast)) {
    return existingBookings.find((booking) => booking.bookingId === existingLast);
  }

  const selectedFlight = getSelectedFlight();
  const flight = getFlightById(selectedFlight?.outboundFlightId);
  const returnFlight = getFlightById(selectedFlight?.returnFlightId);
  const search = getProjectSearch();
  const passengers = getPassengerData();
  const seats = getSeatSelection();
  const payment = getPaymentData();

  if (!flight || !passengers.length || !payment) {
    return null;
  }

  const bookingId = `JT${Date.now().toString().slice(-8)}`;
  const totalAmount = (flight.price + (returnFlight?.price || 0)) * search.travellers + 399 + seats.length * 250;
  const refundable = payment.refundPlan === "refundable" && flight.refundable;
  const refundAmount = refundable ? totalAmount - 650 : 0;

  const booking = {
    bookingId,
    ownerUsername: sessionStorage.getItem(projectStorageKeys.currentUser) || PROJECT_USERNAME,
    outboundFlightId: flight.id,
    returnFlightId: returnFlight?.id || "",
    search,
    passengers,
    seats,
    payment,
    totalAmount,
    refundable,
    refundAmount,
    status: "Confirmed",
    createdAt: new Date().toISOString()
  };

  const bookings = [booking, ...existingBookings];
  setLocalJson(projectStorageKeys.bookings, bookings);
  sessionStorage.setItem(projectStorageKeys.lastBooking, bookingId);
  rememberBooking(booking);
  trackProjectEvent("booking_created", bookingId);
  return booking;
};

const renderConfirmation = () => {
  const booking = createBooking();
  const node = document.getElementById("project-confirmation-card");
  if (!node || !booking) {
    return;
  }

  const flight = getFlightById(booking.outboundFlightId);
  const returnFlight = getFlightById(booking.returnFlightId);
  node.innerHTML = `
    <div class="project-confirm-icon">✓</div>
    <p class="project-kicker">Booking confirmed</p>
    <h1 class="project-confirm-title">${booking.bookingId}</h1>
    <p>Your domestic flight is booked successfully. Use this page and Manage Booking to continue cancellation and refund testing.</p>
    <div class="project-summary-grid">
      <div class="project-panel">
        <p class="project-kicker">Route</p>
        <strong>${flight.from} to ${flight.to}</strong>
        <p>${formatDate(booking.search.departureDate)} • ${flight.departTime} - ${flight.arriveTime}</p>
        ${returnFlight ? `<p>Return: ${formatDate(booking.search.returnDate)} • ${returnFlight.departTime} - ${returnFlight.arriveTime}</p>` : ""}
      </div>
      <div class="project-panel">
        <p class="project-kicker">Travellers</p>
        <strong>${booking.passengers.length} passenger${booking.passengers.length > 1 ? "s" : ""}</strong>
        <p>Seats: ${booking.seats.join(", ")}</p>
      </div>
      <div class="project-panel">
        <p class="project-kicker">Payment</p>
        <strong>${formatCurrency(booking.totalAmount)}</strong>
        <p>${booking.payment.refundPlan === "refundable" ? "Refund assist enabled" : "Saver fare selected"}</p>
      </div>
    </div>
  `;

  const refundBox = document.getElementById("project-refund-note");
  if (refundBox) {
    refundBox.innerHTML = booking.refundable
      ? `<div class="project-banner">This booking is refundable. Expected refund after cancellation: <strong>${formatCurrency(booking.refundAmount)}</strong>.</div>`
      : `<div class="project-banner">This booking is non-refundable. Cancellation will show zero refund.</div>`;
  }
};

const cancelBooking = (bookingId) => {
  const bookings = getBookings();
  const updatedBookings = bookings.map((booking) => {
    if (booking.bookingId !== bookingId || booking.status === "Cancelled") {
      return booking;
    }

    return {
      ...booking,
      status: "Cancelled",
      cancelledAt: new Date().toISOString()
    };
  });

  setLocalJson(projectStorageKeys.bookings, updatedBookings);
  rememberCancellation(bookingId);
  trackProjectEvent("booking_cancelled", bookingId);
  return updatedBookings.find((booking) => booking.bookingId === bookingId);
};

const initProjectConfirmation = async () => {
  buildTopbar("payment");
  initProjectCommon();
  await loadProjectCatalog();
  renderSearchSummary();
  renderConfirmation();

  document.getElementById("project-cancel-booking")?.addEventListener("click", () => {
    const bookingId = sessionStorage.getItem(projectStorageKeys.lastBooking);
    if (!bookingId) {
      setProjectStatus("project-confirmation-status", "No active booking found to cancel.", "danger");
      return;
    }
    const booking = cancelBooking(bookingId);
    if (!booking) {
      setProjectStatus("project-confirmation-status", "Booking could not be cancelled.", "danger");
      return;
    }
    setProjectStatus(
      "project-confirmation-status",
      booking.refundable
        ? `Booking cancelled. Refund amount ${formatCurrency(booking.refundAmount)} will be processed.`
        : "Booking cancelled. This fare is non-refundable, so no refund is applicable.",
      booking.refundable ? "success" : "warning"
    );
  });
};

const renderManageBookings = () => {
  const list = document.getElementById("project-booking-list");
  if (!list) {
    return;
  }
  const bookings = currentUserBookings;
  if (!bookings.length) {
    list.innerHTML = `<div class="project-empty">No bookings found yet. Complete a booking flow to manage it here.</div>`;
    return;
  }

  list.innerHTML = bookings
    .map((booking) => {
      const flight = getFlightById(booking.outboundFlightId);
      return `
        <article class="project-manage-card">
          <div class="project-meta-row project-meta-row-plain">
            <div>
              <strong>${booking.bookingId}</strong>
              <div class="project-helper">${flight.from} to ${flight.to} • ${formatDate(booking.search.departureDate)}</div>
            </div>
            <span class="project-tag">${booking.status}</span>
          </div>
          <div class="project-summary-list">
            <div class="project-summary-row"><strong>Airline</strong><span>${flight.airline} • ${flight.id}</span></div>
            <div class="project-summary-row"><strong>Travellers</strong><span>${booking.passengers.length} • Seats ${booking.seats.join(", ")}</span></div>
            <div class="project-summary-row"><strong>Fare policy</strong><span>${booking.refundable ? `Refund ${formatCurrency(booking.refundAmount)}` : "Non-refundable"}</span></div>
          </div>
          <div class="project-flight-actions project-card-actions">
            <button class="project-button secondary small" type="button" data-view-booking="${booking.bookingId}">View details</button>
            <button class="project-button ghost small" type="button" data-cancel-booking="${booking.bookingId}" ${booking.status === "Cancelled" ? "disabled" : ""}>Cancel booking</button>
          </div>
          <div class="project-details-box project-hidden" id="booking-${booking.bookingId}">
            <p><strong>Passengers:</strong> ${booking.passengers.map((passenger) => `${passenger.firstName} ${passenger.lastName}`).join(", ")}</p>
            <p><strong>Payment:</strong> ${booking.payment.method} • ${booking.payment.refundPlan}</p>
            <p><strong>Refund status:</strong> ${booking.status === "Cancelled" ? (booking.refundable ? `Refund initiated for ${formatCurrency(booking.refundAmount)}` : "No refund for saver fare") : "Not cancelled yet"}</p>
          </div>
        </article>
      `;
    })
    .join("");

  list.querySelectorAll("[data-view-booking]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById(`booking-${button.dataset.viewBooking}`)?.classList.toggle("project-hidden");
    });
  });

  list.querySelectorAll("[data-cancel-booking]").forEach((button) => {
    button.addEventListener("click", () => {
      const booking = cancelBooking(button.dataset.cancelBooking);
      setProjectStatus(
        "project-manage-status",
        booking.refundable
          ? `Booking ${booking.bookingId} cancelled. Refund ${formatCurrency(booking.refundAmount)} has been initiated.`
          : `Booking ${booking.bookingId} cancelled. This fare was non-refundable.`,
        booking.refundable ? "success" : "warning"
      );
      loadUserBookings().then(renderManageBookings);
    });
  });
};

const initProjectManageBooking = async () => {
  buildTopbar("manage");
  initProjectCommon();
  await loadProjectCatalog();
  renderSearchSummary();
  await loadUserBookings();
  renderManageBookings();

  document.getElementById("project-manage-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const bookingId = document.getElementById("manage-booking-id").value.trim();
    const email = document.getElementById("manage-email").value.trim().toLowerCase();
    const booking = currentUserBookings.find(
      (item) =>
        item.bookingId.toLowerCase() === bookingId.toLowerCase() &&
        item.passengers.some((passenger) => passenger.email.toLowerCase() === email)
    );

    if (!booking) {
      setProjectStatus("project-manage-status", "No booking found for the provided booking ID and email.", "danger");
      return;
    }

    setProjectStatus("project-manage-status", `Booking ${booking.bookingId} found successfully. Scroll down to manage it.`, "success");
    const detail = document.getElementById(`booking-${booking.bookingId}`);
    detail?.classList.remove("project-hidden");
    detail?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  if (!currentProjectPage.startsWith("project-")) {
    return;
  }

  if (currentProjectPage === "project-login.html") {
    initProjectLogin();
    return;
  }

  if (currentProjectPage === "project-signup.html") {
    initProjectSignup();
    return;
  }

  const allowed = await requireProjectAuth();
  if (!allowed) {
    return;
  }

  if (currentProjectPage === "project-home.html") {
    initProjectHome();
  } else if (currentProjectPage === "project-results.html") {
    initProjectResults();
  } else if (currentProjectPage === "project-passengers.html") {
    initProjectPassengers();
  } else if (currentProjectPage === "project-seats.html") {
    initProjectSeats();
  } else if (currentProjectPage === "project-payment.html") {
    initProjectPayment();
  } else if (currentProjectPage === "project-confirmation.html") {
    initProjectConfirmation();
  } else if (currentProjectPage === "project-manage-booking.html") {
    initProjectManageBooking();
  }
});
