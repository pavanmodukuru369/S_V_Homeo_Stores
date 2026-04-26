const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const siteData = window.SITE_DATA || {};

const setText = (selector, value) => {
  if (!value) return;
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const setAttr = (selector, attr, value) => {
  if (!value) return;
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute(attr, value);
  });
};

const renderEditableContent = () => {
  setText("[data-site-name]", siteData.storeName);
  setText("[data-practitioner-name]", siteData.practitionerName);
  setText("[data-phone-display]", siteData.phoneDisplay);
  setText("[data-address]", siteData.address);
  setAttr("[data-phone-link]", "href", `tel:${siteData.phoneHref}`);

  if (siteData.storeName) {
    document.title = `${siteData.storeName} | Trusted Homeopathy Care`;
  }

  const heroImage = document.querySelector("[data-hero-image]");
  if (heroImage && siteData.heroImage) {
    heroImage.setAttribute("src", siteData.heroImage);
  }

  const logoImage = document.querySelector("[data-logo-image]");
  if (logoImage && siteData.logoImage) {
    logoImage.setAttribute("src", siteData.logoImage);
  }

  const map = document.querySelector("[data-map]");
  if (map && siteData.mapQuery) {
    map.setAttribute("src", `https://www.google.com/maps?q=${encodeURIComponent(siteData.mapQuery)}&output=embed`);
    map.setAttribute("title", `Google map location for ${siteData.storeName || "the clinic"}`);
  }

  const testimonials = document.querySelector("[data-testimonials]");
  if (testimonials && Array.isArray(siteData.testimonials)) {
    testimonials.innerHTML = siteData.testimonials
      .map(
        (item) => `
          <figure>
            <blockquote>“${item.quote}”</blockquote>
            <figcaption>${item.name}</figcaption>
          </figure>
        `
      )
      .join("");
  }

  const gallery = document.querySelector("[data-photo-gallery]");
  if (gallery && Array.isArray(siteData.photos)) {
    gallery.innerHTML = siteData.photos
      .map(
        (photo) => `
          <figure class="photo-card">
            <img src="${photo.src}" alt="${photo.alt || photo.title || "Clinic photo"}" loading="lazy" />
            <figcaption>${photo.title || "Clinic photo"}</figcaption>
          </figure>
        `
      )
      .join("");
  }
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

renderEditableContent();
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (year) {
  year.textContent = new Date().getFullYear();
}

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});
