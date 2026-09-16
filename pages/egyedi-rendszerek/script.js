document.documentElement.classList.add("systems-js");

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* =====================================================
     REVEAL ANIMATIONS
  ===================================================== */

  const revealElements = document.querySelectorAll(".systems-reveal");

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
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
     SYSTEM EXPLORER TABS
  ===================================================== */

  const tabs = document.querySelectorAll(".systems-tab");
  const panels = document.querySelectorAll(".systems-panel");
  const helpSelect = document.querySelector(
    '#systems-contact-form select[name="help"]'
  );

  const activateSystem = (target, { focusTab = false } = {}) => {
    if (!target) return;

    tabs.forEach((tab) => {
      const isActive = tab.dataset.system === target;

      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
      tab.tabIndex = isActive ? 0 : -1;

      if (isActive && focusTab) {
        tab.focus();
      }
    });

    panels.forEach((panel) => {
      const isTarget = panel.dataset.panel === target;

      panel.classList.toggle("active", isTarget);
      panel.hidden = !isTarget;
    });

    if (helpSelect && [...helpSelect.options].some((option) => option.value === target)) {
      helpSelect.value = target;
    }
  };

  if (tabs.length && panels.length) {
    const initiallyActive = document.querySelector(".systems-tab.active");
    const initialTarget =
      initiallyActive?.dataset.system || tabs[0].dataset.system;

    activateSystem(initialTarget);

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        activateSystem(tab.dataset.system);
      });

      tab.addEventListener("keydown", (event) => {
        const keys = {
          ArrowDown: 1,
          ArrowRight: 1,
          ArrowUp: -1,
          ArrowLeft: -1,
        };

        if (event.key in keys) {
          event.preventDefault();

          const nextIndex =
            (index + keys[event.key] + tabs.length) % tabs.length;

          activateSystem(tabs[nextIndex].dataset.system, { focusTab: true });
          return;
        }

        if (event.key === "Home") {
          event.preventDefault();
          activateSystem(tabs[0].dataset.system, { focusTab: true });
          return;
        }

        if (event.key === "End") {
          event.preventDefault();
          activateSystem(tabs[tabs.length - 1].dataset.system, {
            focusTab: true,
          });
        }
      });
    });
  }

  /* =====================================================
     INTERNAL ANCHOR SCROLL
  ===================================================== */

  const header = document.querySelector(".systems-header");
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });

  /* =====================================================
     CONTACT FORM
  ===================================================== */

  const form = document.getElementById("systems-contact-form");

  if (form) {
    const status = form.querySelector(".systems-form-success");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = form.querySelector('[name="name"]')?.value.trim();
      const email = form.querySelector('[name="email"]')?.value.trim();
      const business = form.querySelector('[name="business"]')?.value.trim();
      const help = form.querySelector('[name="help"]');
      const message = form.querySelector('[name="message"]')?.value.trim();

      if (!name || !email || !message) {
        if (status) {
          status.textContent = "Kérlek, töltsd ki a szükséges mezőket.";
        }
        return;
      }

      const helpLabel = help?.selectedOptions[0]?.textContent.trim() || "-";
      const subject = "Érdeklődés – Egyedi rendszerek";
      const body = [
        `Név: ${name}`,
        `E-mail: ${email}`,
        `Vállalkozás: ${business || "-"}`,
        `Miben segíthetek?: ${helpLabel}`,
        "",
        "Üzenet:",
        message,
      ].join("\n");

      if (status) {
        status.textContent = "Megnyitjuk az e-mail alkalmazásodat…";
      }

      window.location.href =
        `mailto:naray.david92@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
    });
  }
});
