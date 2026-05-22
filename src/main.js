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
    <article class="track-card">
      <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
      <div class="track-content">
        <h3>${track.title}</h3>
        <ul>
          ${track.scope.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
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

/* ─── Sponsorship ─────────────────────────────────────────────────────────── */
const sponsorshipSummary = document.querySelector("[data-sponsorship-summary]");
if (sponsorshipSummary) {
  sponsorshipSummary.textContent = conference.sponsorship.intro[0];
}

const sponsorshipIntro = document.querySelector("[data-sponsorship-intro]");
if (sponsorshipIntro) {
  sponsorshipIntro.innerHTML = conference.sponsorship.intro
    .slice(1)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

const sponsorshipPackages = document.querySelector("[data-sponsorship-packages]");
if (sponsorshipPackages) {
  sponsorshipPackages.innerHTML = `
    <div class="package-row package-head" role="row">
      <div role="columnheader">Sponsorship grade</div>
      <div role="columnheader">Amount of contribution</div>
    </div>
    ${conference.sponsorship.packages
      .map(
        (item) => `
        <div class="package-row" role="row">
          <div role="cell">${item.grade}</div>
          <strong role="cell">${item.amount}</strong>
        </div>
      `,
      )
      .join("")}
  `;
}

text("[data-sponsorship-tax-note]", conference.sponsorship.taxNote);

const sponsorshipBenefits = document.querySelector("[data-sponsorship-benefits]");
if (sponsorshipBenefits) {
  sponsorshipBenefits.innerHTML = conference.sponsorship.benefits
    .map(
      (benefit) => `
      <article class="benefit-card">
        <div class="benefit-card-top">
          <h3>${benefit.title}</h3>
          <span>${benefit.amount}</span>
        </div>
        <ul>
          ${benefit.details.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `,
    )
    .join("");
}

const sponsorshipContact = document.querySelector("[data-sponsorship-contact]");
if (sponsorshipContact) {
  sponsorshipContact.innerHTML = `<strong>${conference.sponsorship.contact}</strong>`;
}

/* ─── Fellowship ──────────────────────────────────────────────────────────── */
text(
  "[data-travel-grants-description]",
  conference.fellowship.travelGrants.description,
);
text(
  "[data-travel-grants-instruction]",
  conference.fellowship.travelGrants.instruction,
);
text("[data-awards-description]", conference.fellowship.awards);

const travelGrantFields = document.querySelector("[data-travel-grant-fields]");
if (travelGrantFields) {
  travelGrantFields.innerHTML = conference.fellowship.travelGrants.fields
    .map((field) => `<li>${field}</li>`)
    .join("");
}

/* ─── Registration fees ────────────────────────────────────────────────────── */
const fees = document.querySelector("[data-registration-fees]");
const pricingCard = document.querySelector("[data-registration-pricing]");
const audienceLabel = document.querySelector("[data-registration-audience]");
const currencyButtons = document.querySelectorAll("[data-currency-toggle]");

const participantTypes = {
  inr: {
    label: "Indian Participant Fees",
    matcher: "indian participant",
  },
  usd: {
    label: "Foreign Participant Fees",
    matcher: "foreign participant",
  },
};

const feeGroups = [
  {
    title: "Students",
    description: "Reduced conference registration for enrolled students.",
    isMatch: (category) => category.includes("student"),
  },
  {
    title: "Regulars",
    description: "Full conference registration for regular delegates.",
    isMatch: (category) => !category.includes("student"),
  },
];

const membershipOrder = [
  "IEEE Member",
  "IEEE Women Member",
  "Non-IEEE Member",
  "Non-IEEE Women Member",
];

let selectedCurrency = "inr";

const getRegistrationFee = (currency, group, membership) => {
  const participant = participantTypes[currency].matcher;

  return conference.registrationFees.find((fee) => {
    const category = fee.category.toLowerCase();
    return (
      fee.group === membership &&
      category.includes(participant) &&
      group.isMatch(category)
    );
  });
};

const renderRegistrationFees = () => {
  if (!fees) return;

  audienceLabel.textContent = participantTypes[selectedCurrency].label;
  pricingCard.dataset.currency = selectedCurrency;

  fees.innerHTML = feeGroups
    .map((group, groupIndex) => {
      const rows = membershipOrder
        .map((membership) => {
          const fee = getRegistrationFee(selectedCurrency, group, membership);
          if (!fee) return "";

          return `
            <div class="pricing-row" role="row">
              <div class="pricing-membership" role="cell">${membership}</div>
              <div class="pricing-price" role="cell" data-label="Early Bird">
                <span>Early Bird</span>
                <strong>${fee.earlyBird}</strong>
              </div>
              <div class="pricing-price" role="cell" data-label="Late">
                <span>Late</span>
                <strong>${fee.late}</strong>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <section class="pricing-group" role="rowgroup" aria-labelledby="fee-group-${groupIndex}">
          <div class="pricing-group-heading">
            <span aria-hidden="true">${String(groupIndex + 1).padStart(2, "0")}</span>
            <div>
              <h4 id="fee-group-${groupIndex}">${group.title}</h4>
              <p>${group.description}</p>
            </div>
          </div>
          <div class="pricing-row pricing-row-head" role="row">
            <div role="columnheader">Membership</div>
            <div role="columnheader">Early Bird</div>
            <div role="columnheader">Late</div>
          </div>
          ${rows}
        </section>
      `;
    })
    .join("");
};

currencyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextCurrency = button.dataset.currencyToggle;
    if (!nextCurrency || nextCurrency === selectedCurrency) return;

    selectedCurrency = nextCurrency;
    currencyButtons.forEach((item) => {
      item.setAttribute(
        "aria-pressed",
        String(item.dataset.currencyToggle === selectedCurrency),
      );
    });

    pricingCard.classList.add("is-switching");
    window.setTimeout(() => {
      renderRegistrationFees();
      pricingCard.classList.remove("is-switching");
    }, 120);
  });
});

renderRegistrationFees();

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
        <div class="contact-card-top">
          <div class="contact-card-icon" aria-hidden="true">${icon}</div>
          <span>${item.label}</span>
        </div>
        <div class="contact-card-value">
          ${valueHtml}
        </div>
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
