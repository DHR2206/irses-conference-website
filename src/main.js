import { conference } from "./data/conference.js";

/* ─── Helpers ──────────────────────────────────────────────────────────────── */
const text = (selector, value) => {
  const element = document.querySelector(selector);
  if (!element) return;
  element.textContent = value;
  if (value === "") element.hidden = true;
};

const initials = (name) =>
  name
    .replace(/^(Prof\.|Dr\.)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

/* ─── Text content ─────────────────────────────────────────────────────────── */
text("[data-event-label]", conference.label);

const heroTitle = document.querySelector("[data-event-title]");
if (heroTitle && conference.heroTitleLines) {
  heroTitle.innerHTML = conference.heroTitleLines
    .map((line) => `<span>${line}</span>`)
    .join("");
} else {
  text("[data-event-title]", conference.title);
}

text("[data-event-theme]", conference.theme);
text("[data-event-dates]", conference.dates);
text("[data-event-venue]", conference.venue);
text("[data-event-host]", conference.host);
text("[data-event-description]", conference.description);
text("[data-event-purpose]", conference.purpose);
text("[data-registration-note]", conference.registrationNote);
text("[data-venue-title]", conference.venueDetails.title);
text("[data-venue-description]", conference.venueDetails.description);
text("[data-footer-copy]", conference.footer);
text("[data-no-show-policy]", conference.registrationGuidelines.noShow);

/* ─── Logo strip — duplicate for seamless marquee ─────────────────────────── */
const logoMarkup = (logo) =>
  `<figure class="logo-card">
    <img src="${logo.src}" alt="${logo.name}" loading="lazy" />
  </figure>`;

const logos = document.querySelector("[data-logos]");
// Duplicate the logos array so the marquee loops seamlessly
const allLogos = [...conference.logos, ...conference.logos];
logos.innerHTML = allLogos.map(logoMarkup).join("");

/* ─── Important Dates — vertical timeline ─────────────────────────────────── */
const dates = document.querySelector("[data-important-dates]");
dates.innerHTML = conference.importantDates
  .map(
    (item) => `
    <article class="date-card">
      <div class="date-card-inner">
        <p>${item.label}</p>
        <strong>${item.date}</strong>
        <span>${item.note}</span>
      </div>
    </article>
  `,
  )
  .join("");

/* ─── Technical Tracks ─────────────────────────────────────────────────────── */
const tracks = document.querySelector("[data-tracks]");
tracks.innerHTML = conference.tracks
  .map(
    (track, index) => `
    <article class="track-card" data-index="${String(index + 1).padStart(2, "0")}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${track.title}</h3>
      <ul>
        ${track.scope.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `,
  )
  .join("");

/* ─── Committees ───────────────────────────────────────────────────────────── */
const memberMarkup = (member) => {
  const person = typeof member === "string" ? { name: member } : member;
  const media = person.image
    ? `<img src="${person.image}" alt="${person.name}" loading="lazy" />`
    : `<span class="member-initials" aria-hidden="true">${initials(person.name)}</span>`;

  const infoLink = person.infoLink
    ? `<a class="member-link" href="${person.infoLink}" target="_blank" rel="noopener" aria-label="View ${person.name}'s profile">More info</a>`
    : "";
  const institute = person.institute
    ? `<span class="member-institute">${person.institute}</span>`
    : "";

  return `
    <li class="committee-member">
      <div class="member-photo">${media}</div>
      <div class="member-info">
        <span class="member-name">${person.name}</span>
        ${institute}
        ${infoLink}
      </div>
    </li>
  `;
};

const committees = document.querySelector("[data-committees]");
committees.innerHTML = conference.committees
  .map(
    (group) => `
    <article class="committee-card">
      <h3>${group.title}</h3>
      <ul class="committee-members">
        ${group.members.map(memberMarkup).join("")}
      </ul>
    </article>
  `,
  )
  .join("");

/* ─── Registration fees ────────────────────────────────────────────────────── */
const fees = document.querySelector("[data-registration-fees]");
fees.innerHTML = conference.registrationFees
  .map(
    (fee) => `
    <tr>
      <td>${fee.group}</td>
      <td>${fee.category}</td>
      <td>${fee.earlyBird}</td>
      <td>${fee.late}</td>
    </tr>
  `,
  )
  .join("");

const authorNotes = document.querySelector("[data-author-notes]");
authorNotes.innerHTML = conference.registrationGuidelines.authors
  .map((item) => `<li>${item}</li>`)
  .join("");

const attendeeNotes = document.querySelector("[data-attendee-notes]");
attendeeNotes.innerHTML = conference.registrationGuidelines.attendees
  .map((item) => `<li>${item}</li>`)
  .join("");

/* ─── Contact ──────────────────────────────────────────────────────────────── */
const contactIcons = {
  "Organising Secretary": "👤",
  "Conference Email":     "✉️",
  "Phone":                "📞",
  "Host Institute":       "🏛️",
  "Location":             "📍",
};

const contact = document.querySelector("[data-contact]");
contact.innerHTML = conference.contact
  .map((item) => {
    const icon = contactIcons[item.label] || "ℹ️";
    const isEmail = item.label === "Conference Email";
    const valueHtml = isEmail
      ? `<strong><a href="mailto:${item.value}">${item.value}</a></strong>`
      : `<strong>${item.value}</strong>`;

    return `
      <article class="contact-card">
        <div class="contact-card-icon" aria-hidden="true">${icon}</div>
        <span>${item.label}</span>
        ${valueHtml}
      </article>
    `;
  })
  .join("");

/* ─── Header scroll + active nav ──────────────────────────────────────────── */
const header      = document.querySelector("[data-header]");
const nav         = document.querySelector("[data-nav]");
const menuButton  = document.querySelector("[data-menu-button]");
const progressBar = document.getElementById("progress-bar");
const fabTop      = document.getElementById("fab-top");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon   = document.getElementById("theme-icon");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;

  // Sticky header
  header.classList.toggle("is-scrolled", scrolled > 12);

  // Progress bar
  progressBar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : "0%";

  // Floating back-to-top
  fabTop.classList.toggle("is-visible", scrolled > 400);
});

// Back-to-top FAB
fabTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ─── Mobile menu ──────────────────────────────────────────────────────────── */
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuButton.classList.remove("is-open");
  }
});

/* ─── Active nav link tracking ─────────────────────────────────────────────── */
const sections  = document.querySelectorAll("main section[id], header[id]");
const navLinks  = document.querySelectorAll(".site-nav a[href^='#']");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      }
    });
  },
  { threshold: 0.3, rootMargin: "-60px 0px -40% 0px" },
);

sections.forEach((section) => navObserver.observe(section));

/* ─── Dark mode toggle ─────────────────────────────────────────────────────── */
const MOON_SVG = `
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
`;
const SUN_SVG = `
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/>
  <line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
`;

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  themeIcon.innerHTML = theme === "dark" ? MOON_SVG : SUN_SVG;
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
};

// Restore from localStorage
const savedTheme = localStorage.getItem("irses-theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("irses-theme", next);
});

/* ─── Hero parallax ─────────────────────────────────────────────────────────── */
const heroMedia = document.querySelector(".hero-media");
if (heroMedia) {
  const onScroll = () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroMedia.style.transform = `scale(1.06) translateY(${y * 0.18}px)`;
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ─── Reveal on scroll (with stagger support) ──────────────────────────────── */
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
