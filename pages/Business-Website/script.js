document.documentElement.classList.add("business-website-js");

document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
     REVEAL ANIMATIONS
  ===================================================== */

  const revealElements = document.querySelectorAll(
    ".business-website-reveal"
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }


  /* =====================================================
     INTERNAL ANCHOR SCROLL
  ===================================================== */

  const anchorLinks = document.querySelectorAll(
    '.business-website-nav a[href^="#"], .business-website-button[href^="#"]'
  );

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const header = document.querySelector(
        ".business-website-header"
      );

      const headerHeight = header
        ? header.offsetHeight
        : 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });


  /* =====================================================
     CONTACT FORM
  ===================================================== */

  const form = document.querySelector(
    ".business-website-form"
  );

  if (form) {
    const status = form.querySelector(
      ".business-website-form-status"
    );

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = form.querySelector(
        '[name="name"]'
      )?.value.trim();

      const email = form.querySelector(
        '[name="email"]'
      )?.value.trim();

      const business = form.querySelector(
        '[name="business"]'
      )?.value.trim();

      const message = form.querySelector(
        '[name="message"]'
      )?.value.trim();

      if (!name || !email || !message) {
        if (status) {
          status.textContent =
            "Kérlek, töltsd ki a szükséges mezőket.";
          status.classList.add("is-error");
        }

        return;
      }

      const subject =
        "Érdeklődés – Business Website";

      const body = [
        `Név: ${name}`,
        `E-mail: ${email}`,
        `Vállalkozás: ${business || "-"}`,
        "",
        "Üzenet:",
        message,
      ].join("\n");

      const mailto =
        `mailto:david.naray92@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      if (status) {
        status.textContent =
          "Megnyitjuk az e-mail alkalmazásodat…";
        status.classList.remove("is-error");
      }

      window.location.href = mailto;
    });
  }


  /* =====================================================
     CURRENT YEAR
  ===================================================== */

  const yearElements = document.querySelectorAll(
    "[data-business-website-year], #business-website-year"
  );

  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });


  /* =====================================================
     SACRA REFERENCE LINK
  ===================================================== */

  const sacraLinks = document.querySelectorAll(
    'a[href="/sacra369"]'
  );

  sacraLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("business-website-loading");
  });
});


/* =====================================================
   SACRA369 — IMAGE LIGHTBOX
===================================================== */

const sacraImage = document.querySelector(
  ".business-website-reference-image img"
);

if (sacraImage) {
  sacraImage.addEventListener("click", () => {

    const overlay = document.createElement("div");

    overlay.className = "business-website-image-lightbox";

    overlay.innerHTML = `
      <div class="business-website-lightbox-content">
        <button class="business-website-lightbox-close" aria-label="Bezárás">
          ×
        </button>

        <img
          src="${sacraImage.src}"
          alt="${sacraImage.alt}"
        >
      </div>
    `;

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.classList.add("is-visible");
    });

    const closeLightbox = () => {
      overlay.classList.remove("is-visible");

      setTimeout(() => {
        overlay.remove();
      }, 250);
    };

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeLightbox();
      }
    });

    overlay
      .querySelector(".business-website-lightbox-close")
      .addEventListener("click", closeLightbox);
  });
}

});