import { conference } from "./data/conference.js";

const text = (selector, value) => {
  const element = document.querySelector(selector);
  if (!element) return;
  element.textContent = value;
  if (value === "") element.hidden = true;
};

text("[data-event-label]", conference.label);
const heroTitle = document.querySelector("[data-event-title]");
if (heroTitle && conference.heroTitleLines) {
  heroTitle.innerHTML = conference.heroTitleLines.map((line) => `<span>${line}</span>`).join("");
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

const initials = (name) =>
  name
    .replace(/^(Prof\.|Dr\.)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const memberMarkup = (member) => {
  const person = typeof member === "string" ? { name: member } : member;
  const media = person.image
    ? `<img src="${person.image}" alt="${person.name}" loading="lazy" />`
    : `<span class="member-initials" aria-hidden="true">${initials(person.name)}</span>`;

  return `
    <li class="committee-member">
      <div class="member-photo">${media}</div>
      <span>${person.name}</span>
    </li>
  `;
};

const logos = document.querySelector("[data-logos]");
logos.innerHTML = conference.logos
  .map(
    (logo) => `
      <figure class="logo-card">
        <img src="${logo.src}" alt="${logo.name}" />
      </figure>
    `,
  )
  .join("");

const dates = document.querySelector("[data-important-dates]");
dates.innerHTML = conference.importantDates
  .map(
    (item) => `
      <article class="date-card">
        <p>${item.label}</p>
        <strong>${item.date}</strong>
        <span>${item.note}</span>
      </article>
    `,
  )
  .join("");

const tracks = document.querySelector("[data-tracks]");
tracks.innerHTML = conference.tracks
  .map(
    (track, index) => `
      <article class="track-card">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${track.title}</h3>
        <ul>
          ${track.scope.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `,
  )
  .join("");

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

const contact = document.querySelector("[data-contact]");
contact.innerHTML = conference.contact
  .map(
    (item) => `
      <article class="contact-card">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </article>
    `,
  )
  .join("");

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu-button]");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) nav.classList.remove("is-open");
});

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
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
