(() => {
  const header = document.querySelector("header");
  if (!header) return;

  const languageSelector = "[data-lang], [data-language], [data-business-website-lang]";
  const languages = ["hu", "en", "de"];
  const buttons = Array.from(header.querySelectorAll(languageSelector)).filter((button) => {
    const language = button.dataset.lang || button.dataset.language || button.dataset.businessWebsiteLang;
    return languages.includes(language);
  });
  if (buttons.length !== languages.length) return;

  const sourceHosts = [...new Set(buttons.map((button) => button.parentElement))];
  const switcher = document.createElement("div");
  switcher.className = "language-switcher site-language-switcher";
  buttons.sort((first, second) => {
    const firstLanguage = first.dataset.lang || first.dataset.language || first.dataset.businessWebsiteLang;
    const secondLanguage = second.dataset.lang || second.dataset.language || second.dataset.businessWebsiteLang;
    return languages.indexOf(firstLanguage) - languages.indexOf(secondLanguage);
  });

  const existingPanel = header.querySelector(".nav-panel");
  if (header.querySelector(".menu-toggle") && existingPanel) {
    buttons.forEach((button) => {
      button.classList.add("site-language-button");
      switcher.append(button);
    });
    sourceHosts.forEach((host) => {
      if (!host.querySelector("a, button, input, select, textarea")) host.remove();
    });
    existingPanel.append(switcher);
  } else {
    const firstHost = sourceHosts[0];
    const details = document.createElement("details");
    details.className = "site-language-menu";

    const toggle = document.createElement("summary");
    toggle.setAttribute("aria-label", "Open language menu");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    const panel = document.createElement("div");
    panel.className = "site-language-menu-panel";
    details.append(toggle, panel);
    const unrelatedHeaderControls = [...firstHost.querySelectorAll("a, button, input, select, textarea")]
      .filter((control) => !buttons.includes(control));
    if (unrelatedHeaderControls.length) buttons[0].before(details);
    else firstHost.before(details);

    buttons.forEach((button) => {
      button.classList.add("site-language-button");
      switcher.append(button);
    });
    panel.append(switcher);

    sourceHosts.forEach((host) => {
      if (!host.querySelector("a, button, input, select, textarea")) host.remove();
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.lang || button.dataset.language || button.dataset.businessWebsiteLang;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
        if (active) item.setAttribute("aria-current", "page");
        else item.removeAttribute("aria-current");
      });

      const menu = button.closest("details");
      if (menu) menu.open = false;

      const navPanel = button.closest(".nav-panel");
      if (navPanel) {
        navPanel.classList.remove("is-open");
        header.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
      }

      if (!languages.includes(language)) button.classList.remove("is-active");
    });
  });

  const selected = buttons.find((button) =>
    (button.dataset.lang || button.dataset.language || button.dataset.businessWebsiteLang) === document.documentElement.lang
  ) || buttons.find((button) =>
    button.classList.contains("is-active") ||
    button.getAttribute("aria-pressed") === "true" ||
    button.getAttribute("aria-current") === "page"
  );
  const updateSelectedLanguage = (language) => buttons.forEach((button) => {
    const buttonLanguage = button.dataset.lang || button.dataset.language || button.dataset.businessWebsiteLang;
    const active = buttonLanguage === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });

  buttons.forEach((button) => {
    const active = button === selected;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });

  new MutationObserver(() => updateSelectedLanguage(document.documentElement.lang))
    .observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
})();