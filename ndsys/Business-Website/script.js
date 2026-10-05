document.documentElement.classList.add("business-website-js");

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    "Dávid Náray — Business Website": { hu: "Dávid Náray — Üzleti weboldal", en: "Dávid Náray — Business Website", de: "Dávid Náray — Business-Website" },
    "Üzleti weboldalak kisvállalkozásoknak – átgondolt felépítéssel, letisztult megjelenéssel és valódi üzleti céllal.": { en: "Business websites for small businesses, thoughtfully structured, clearly designed, and built around real business goals.", de: "Business-Websites für kleine Unternehmen: durchdacht aufgebaut, klar gestaltet und auf echte Geschäftsziele ausgerichtet." },
    "Dávid Náray – főoldal": { en: "Dávid Náray – home", de: "Dávid Náray – Startseite" },
    "Fő navigáció": { en: "Main navigation", de: "Hauptnavigation" },
    "Weboldal": { en: "Website", de: "Website" }, "Funkció": { en: "Purpose", de: "Funktion" }, "Minőség": { en: "Quality", de: "Qualität" }, "Folyamat": { en: "Process", de: "Ablauf" }, "Referencia": { en: "Reference", de: "Referenz" }, "Kapcsolat": { en: "Contact", de: "Kontakt" },
    "Business Website": { hu: "Üzleti weboldal", en: "Business Website", de: "Business-Website" },
    "Egy weboldal legyen több, mint egy online névjegy.": { en: "A website should be more than an online business card.", de: "Eine Website sollte mehr sein als eine digitale Visitenkarte." },
    "Egy jól felépített weboldal megmutatja, ki vagy, mivel foglalkozol, és segít annak, aki megtalált, hogy könnyebben eldöntse: szeretne-e veled kapcsolatba lépni.": { en: "A well-designed website shows who you are and what you do, helping visitors decide whether they would like to get in touch.", de: "Eine gut strukturierte Website zeigt, wer du bist und was du tust. So können Besucher leichter entscheiden, ob sie Kontakt aufnehmen möchten." },
    "Nézzük meg, mire lehet szükséged": { en: "Let's explore what you need", de: "Finden wir heraus, was du brauchst" }, "mutasd": { en: "show", de: "zeig" }, "meg,": { en: "them,", de: "allen," }, "ki vagy.": { en: "who you are.", de: "wer du bist." }, "digital presence": { hu: "digitális jelenlét", en: "digital presence", de: "digitale Präsenz" }, "weboldal": { en: "website", de: "Website" }, "struktúrával": { en: "with structure", de: "mit Struktur" }, "és céllal": { en: "and purpose", de: "und Ziel" },
    "/ Miért fontos?": { en: "/ Why it matters", de: "/ Warum es wichtig ist" }, "Miért lehet fontos egy weboldal a vállalkozásodnak?": { en: "Why might your business need a website?", de: "Warum könnte dein Unternehmen eine Website brauchen?" },
    "Ma sok vállalkozás első találkozása egy érdeklődővel már online történik.": { en: "For many businesses, the first interaction with a potential customer now happens online.", de: "Bei vielen Unternehmen findet der erste Kontakt mit Interessenten heute online statt." },
    "Egy weboldal ilyenkor nem egyszerűen információkat tartalmaz. Segít megmutatni, hogy mivel foglalkozol, hogyan dolgozol, és mire számíthat tőled az, aki még nem ismer.": { en: "A website does more than provide information. It shows what you do, how you work, and what someone who does not know you yet can expect.", de: "Eine Website enthält nicht nur Informationen. Sie zeigt, womit du dich beschäftigst, wie du arbeitest und was Menschen erwarten können, die dich noch nicht kennen." },
    "Nem minden vállalkozásnak ugyanarra van szüksége. A kérdés inkább az, hogy nálad milyen szerepet töltsön be a weboldal.": { en: "Every business has different needs. The question is what role a website should play in yours.", de: "Nicht jedes Unternehmen braucht dasselbe. Entscheidend ist, welche Aufgabe die Website in deinem Unternehmen erfüllen soll." },
    "online jelenlét": { en: "online presence", de: "Online-Präsenz" }, "Egy hely, ahol végre összeáll a kép.": { en: "One place where everything comes together.", de: "Ein Ort, an dem sich alles zusammenfügt." }, "Ki vagy?": { en: "Who are you?", de: "Wer bist du?" }, "Mivel foglalkozol?": { en: "What do you do?", de: "Was machst du?" }, "Miért téged válasszanak?": { en: "Why should they choose you?", de: "Warum sollten sie dich wählen?" }, "Hogyan tudnak kapcsolatba lépni?": { en: "How can they get in touch?", de: "Wie können sie dich erreichen?" },
    "/ Gondolkodjunk először": { en: "/ Let's think first", de: "/ Erst einmal nachdenken" }, "Valóban szükséged van weboldalra?": { en: "Do you really need a website?", de: "Brauchst du wirklich eine Website?" }, "Nem minden esetben": { en: "Not in every case", de: "Nicht in jedem Fall" }, "Először azt érdemes megnézni, hogy mit szeretnél elérni.": { en: "First, let's clarify what you want to achieve.", de: "Zuerst sollten wir klären, was du erreichen möchtest." }, "Lehet egyszerűbb": { en: "It can be simpler", de: "Es geht einfacher" }, "Egy kisebb vállalkozásnak nem feltétlenül kell egy hatalmas oldal.": { en: "A small business does not necessarily need a huge website.", de: "Ein kleines Unternehmen braucht nicht unbedingt eine große Website." }, "A cél számít": { en: "The goal matters", de: "Das Ziel zählt" }, "A weboldal akkor értékes, ha valóban segít a vállalkozásodnak.": { en: "A website is valuable when it genuinely helps your business.", de: "Eine Website ist wertvoll, wenn sie deinem Unternehmen wirklich hilft." },
    "/ Mire használható?": { en: "/ What can it do?", de: "/ Wofür lässt sie sich nutzen?" }, "Mit tud csinálni egy weboldal?": { en: "What can a website do?", de: "Was kann eine Website leisten?" }, "Bemutatja a vállalkozásodat.": { en: "Introduce your business.", de: "Dein Unternehmen vorstellen." }, "Megmutatja a szolgáltatásaidat vagy munkáidat.": { en: "Showcase your services or work.", de: "Deine Leistungen oder Arbeiten zeigen." }, "Bizalmat épít már az első találkozáskor.": { en: "Build trust from the very first visit.", de: "Schon beim ersten Besuch Vertrauen schaffen." }, "Válaszolhat a leggyakoribb kérdésekre.": { en: "Answer frequently asked questions.", de: "Häufige Fragen beantworten." }, "Egyszerűbbé teszi a kapcsolatfelvételt.": { en: "Make it easier to get in touch.", de: "Die Kontaktaufnahme erleichtern." }, "Később új funkciókkal is bővíthető.": { en: "Grow with new features over time.", de: "Später um neue Funktionen erweitern." },
    "/ Mitől lesz jó?": { en: "/ What makes it good?", de: "/ Was macht sie gut?" }, "Mitől lesz jó egy weboldal?": { en: "What makes a good website?", de: "Was macht eine gute Website aus?" }, "Érthető": { en: "Clear", de: "Verständlich" }, "Az érdeklődő gyorsan megérti, mivel foglalkozol.": { en: "Visitors quickly understand what you do.", de: "Interessenten verstehen schnell, womit du dich beschäftigst." }, "Átlátható": { en: "Easy to navigate", de: "Übersichtlich" }, "Nem kell keresgélni, hogy megtalálja, amit keres.": { en: "People can find what they need without searching around.", de: "Gesuchte Informationen sind schnell zu finden." }, "Mobilbarát": { en: "Mobile-friendly", de: "Mobilfreundlich" }, "Telefonon ugyanúgy használható, mint nagyobb képernyőn.": { en: "Just as easy to use on a phone as on a larger screen.", de: "Auf dem Smartphone genauso gut nutzbar wie auf einem großen Bildschirm." }, "Gyors": { en: "Fast", de: "Schnell" }, "A technikai háttér nem akadályozza az élményt.": { en: "The technology stays out of the way.", de: "Die Technik beeinträchtigt das Nutzungserlebnis nicht." }, "Hiteles": { en: "Authentic", de: "Authentisch" }, "A megjelenés és a tartalom illeszkedik a vállalkozásodhoz.": { en: "The design and content fit your business.", de: "Gestaltung und Inhalte passen zu deinem Unternehmen." }, "Célja van": { en: "Purposeful", de: "Mit klarem Zweck" }, "Tudjuk, miért van ott minden fontos elem az oldalon.": { en: "Every important element has a reason to be there.", de: "Jedes wichtige Element auf der Seite hat einen klaren Zweck." },
    "/ Ami az induláshoz kell": { en: "/ What you need to get started", de: "/ Was du für den Start brauchst" }, "Mi kell ahhoz, hogy elkészüljön?": { en: "What does it take to build one?", de: "Was braucht es bis zur fertigen Website?" }, "Tartalom": { en: "Content", de: "Inhalte" }, "Amit a vállalkozásodról, szolgáltatásaidról, munkáidról és céljaidról tudni érdemes.": { en: "The key details about your business, services, work, and goals.", de: "Wissenswertes über dein Unternehmen, deine Leistungen, Arbeiten und Ziele." }, "Domain": { en: "Domain", de: "Domain" }, "A cím, ahol az oldalad elérhető lesz.": { en: "The address where your website will live.", de: "Die Adresse, unter der deine Website erreichbar ist." }, "Megjelenés": { en: "Design", de: "Gestaltung" }, "Egy olyan vizuális irány, ami illik hozzád és a vállalkozásodhoz.": { en: "A visual direction that feels right for you and your business.", de: "Eine visuelle Richtung, die zu dir und deinem Unternehmen passt." }, "Technikai háttér": { en: "Technical setup", de: "Technische Grundlage" }, "Tárhely, beállítások, kapcsolatfelvétel és minden, ami a működéshez szükséges.": { en: "Hosting, configuration, contact options, and everything needed to make it work.", de: "Hosting, Einstellungen, Kontaktmöglichkeiten und alles Weitere für den Betrieb." },
    "/ A folyamat": { en: "/ The process", de: "/ Der Ablauf" }, "Hogyan lesz az ötletből működő weboldal?": { en: "How does an idea become a working website?", de: "Wie wird aus einer Idee eine funktionierende Website?" }, "Megbeszéljük": { en: "We talk", de: "Wir besprechen" }, "Mi kell?": { en: "What is needed?", de: "Was wird gebraucht?" }, "Felépítjük": { en: "We plan", de: "Wir planen" }, "Struktúra": { en: "Structure", de: "Struktur" }, "Megépítjük": { en: "We build", de: "Wir entwickeln" }, "Átnézzük": { en: "We review", de: "Wir prüfen" }, "Finomítás": { en: "Refinement", de: "Feinschliff" }, "Indulhat": { en: "Ready to launch", de: "Bereit zum Start" }, "Éles oldal": { en: "Live website", de: "Live-Website" },
    "/ Egy példa a gyakorlatból": { en: "/ A real-world example", de: "/ Ein Beispiel aus der Praxis" }, "Egy weboldal, amit a gyakorlatban építettem.": { en: "A website I built for a real project.", de: "Eine Website, die ich für ein reales Projekt entwickelt habe." }, "Sacra369 projekt megtekintése": { en: "View the Sacra369 project", de: "Das Projekt Sacra369 ansehen" }, "Építés alatt álló referencia": { en: "Reference in progress", de: "Referenz im Aufbau" }, "Egy nyugodt, többnyelvű weboldal egy olyan retreat számára, ahol a mozgás, a kreativitás és a feltöltődés találkozik.": { en: "A calm, multilingual website for a retreat where movement, creativity, and renewal come together.", de: "Eine ruhige, mehrsprachige Website für ein Retreat, in dem Bewegung, Kreativität und Erholung zusammenkommen." }, "Reference 01": { hu: "Referencia 01", en: "Reference 01", de: "Referenz 01" }, "Graz · Austria": { hu: "Graz · Ausztria", en: "Graz · Austria", de: "Graz · Österreich" }, "Sacra369 weboldal referencia": { en: "Sacra369 website reference", de: "Website-Referenz Sacra369" }, "A referencia jelenleg építés alatt áll. A végleges képeket később tesszük ide.": { en: "This reference is still in progress. The finished images will be added here later.", de: "Diese Referenz ist noch in Arbeit. Die fertigen Bilder fügen wir später hier ein." }, "Projekt megtekintése": { en: "View project", de: "Projekt ansehen" },
    "Következő lépés": { en: "Next step", de: "Nächster Schritt" }, "Milyen weboldalra lenne szükséged?": { en: "What kind of website do you need?", de: "Welche Website brauchst du?" }, "Nem kell előre tudnod pontosan, hogyan nézzen ki. Először nézzük meg, mire lenne valóban szükséged, és abból induljunk tovább.": { en: "You do not need to know exactly what it should look like yet. Let's first work out what you really need, then take it from there.", de: "Du musst noch nicht genau wissen, wie sie aussehen soll. Lass uns zuerst herausfinden, was du wirklich brauchst, und darauf aufbauen." }, "Beszéljünk róla": { en: "Let's talk", de: "Lass uns darüber sprechen" }, "/ Kapcsolat": { en: "/ Contact", de: "/ Kontakt" }, "Mesélj egy kicsit a vállalkozásodról.": { en: "Tell me a little about your business.", de: "Erzähl mir ein wenig von deinem Unternehmen." }, "Írd le röviden, mivel foglalkozol, és milyen weboldal van most a fejedben. Innen már könnyebb továbbgondolni.": { en: "Briefly describe what you do and what kind of website you have in mind. We can shape the idea from there.", de: "Beschreibe kurz, was du machst und welche Website dir vorschwebt. Von dort aus können wir die Idee weiterentwickeln." },
    "Név": { en: "Name", de: "Name" }, "E-mail": { en: "Email", de: "E-Mail" }, "Vállalkozás / projekt": { en: "Business / project", de: "Unternehmen / Projekt" }, "Mire van szükséged?": { en: "What do you need?", de: "Was brauchst du?" }, "Landing Page": { hu: "Landing oldal", en: "Landing Page", de: "Landingpage" }, "Kisebb digitális rendszer": { en: "A small digital system", de: "Ein kleineres digitales System" }, "Nem tudom még pontosan": { en: "I'm not sure yet", de: "Das weiß ich noch nicht genau" }, "Üzenet": { en: "Message", de: "Nachricht" }, "Írd le röviden, miben gondolkodsz...": { en: "Briefly describe what you have in mind...", de: "Beschreibe kurz, was dir vorschwebt ..." }, "Üzenet küldése": { en: "Send message", de: "Nachricht senden" }, "Digitális megoldások kisvállalkozásoknak.": { en: "Digital solutions for small businesses.", de: "Digitale Lösungen für kleine Unternehmen." }, "Made with intention.": { hu: "Tudatosan készült.", en: "Made with intention.", de: "Mit Bedacht gestaltet." },
    "Kérlek, töltsd ki a szükséges mezőket.": { en: "Please complete the required fields.", de: "Bitte fülle die Pflichtfelder aus." }, "Érdeklődés – Business Website": { en: "Enquiry – Business Website", de: "Anfrage – Business-Website" }, "Név:": { en: "Name:", de: "Name:" }, "Vállalkozás:": { en: "Business:", de: "Unternehmen:" }, "Üzenet:": { en: "Message:", de: "Nachricht:" }, "Megnyitjuk az e-mail alkalmazásodat…": { en: "Opening your email app…", de: "Deine E-Mail-App wird geöffnet …" }, "Bezárás": { en: "Close", de: "Schließen" },
    "Language": { hu: "Nyelv", de: "Sprache" }, "Magyar": { en: "Hungarian", de: "Ungarisch" }, "Angol": { en: "English", de: "Englisch" }, "Német": { en: "German", de: "Deutsch" }
  };
  const pageDescriptions = {
    hu: "Üzleti weboldalak kisvállalkozásoknak – átgondolt felépítéssel, letisztult megjelenéssel és valódi üzleti céllal.",
    en: "Business websites for small businesses, thoughtfully structured, clearly designed, and built around real business goals.",
    de: "Business-Websites für kleine Unternehmen: durchdacht aufgebaut, klar gestaltet und auf echte Geschäftsziele ausgerichtet."
  };
  const generatedLabels = {
    ".business-website-hero::before": { hu: "01 / ÜZLETI WEBOLDAL", en: "01 / BUSINESS WEBSITE", de: "01 / BUSINESS-WEBSITE" },
    ".business-website-visual-card::after": { hu: "vázlat / 01", en: "wireframe / 01", de: "Drahtmodell / 01" },
    ".business-website-showcase-panel::before": { hu: "OLDALTÉRKÉP / 01—06", en: "SITE MAP / 01—06", de: "SEITENÜBERSICHT / 01—06" },
    ".business-website-reference-placeholder::before": { hu: "FOLYAMATBAN / 2026", en: "IN PROGRESS / 2026", de: "IN ARBEIT / 2026" }
  };
  const localeNames = {
    hu: { hu: "Magyar", en: "Angol", de: "Német" },
    en: { hu: "Hungarian", en: "English", de: "German" },
    de: { hu: "Ungarisch", en: "Englisch", de: "Deutsch" }
  };
  const storageKey = "ndsysBusinessWebsiteLocale";
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();
  let currentLocale = "en";
  const normalizeText = (value) => value.trim().replace(/\s+/g, " ");
  const getLocalizedText = (value, locale = currentLocale) => {
    const source = normalizeText(value);
    return translations[source]?.[locale] || source;
  };
  const applyGeneratedLabels = (locale) => {
    Array.from(document.styleSheets).forEach((sheet) => {
      try {
        Array.from(sheet.cssRules).forEach((rule) => {
          const label = generatedLabels[rule.selectorText]?.[locale];
          if (label) rule.style.setProperty("content", JSON.stringify(label));
        });
      } catch {
        return;
      }
    });
  };
  const applyLocale = (locale, persist = true) => {
    currentLocale = ["hu", "en", "de"].includes(locale) ? locale : "hu";
    document.documentElement.lang = currentLocale;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
      const original = originalTextNodes.get(node);
      const source = normalizeText(original);
      const translated = getLocalizedText(source);
      if (translated === source) node.nodeValue = original;
      else node.nodeValue = `${original.match(/^\s*/)[0]}${translated}${original.match(/\s*$/)[0]}`;
    }
    document.querySelectorAll("[aria-label], [alt], [placeholder], [title]").forEach((element) => {
      let originals = originalAttributes.get(element);
      if (!originals) {
        originals = {};
        originalAttributes.set(element, originals);
      }
      ["aria-label", "alt", "placeholder", "title"].forEach((name) => {
        if (!element.hasAttribute(name)) return;
        if (!(name in originals)) originals[name] = element.getAttribute(name);
        element.setAttribute(name, getLocalizedText(originals[name]));
      });
    });
    document.querySelectorAll("[data-business-website-lang]").forEach((button) => {
      const buttonLocale = button.dataset.businessWebsiteLang;
      button.setAttribute("aria-pressed", String(buttonLocale === currentLocale));
      button.setAttribute("aria-label", `${localeNames[currentLocale][buttonLocale]} (${buttonLocale.toUpperCase()})`);
    });
    applyGeneratedLabels(currentLocale);
    if (persist) {
      try {
        localStorage.setItem(storageKey, currentLocale);
      } catch {
        return;
      }
    }
  };
  document.querySelectorAll("[data-business-website-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLocale(button.dataset.businessWebsiteLang));
  });
  let savedLocale = "en";
  try {
    savedLocale = localStorage.getItem(storageKey) || "en";
  } catch {
    savedLocale = "en";
  }
  applyLocale(savedLocale, false);

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
          status.textContent = getLocalizedText(
            "Kérlek, töltsd ki a szükséges mezőket."
          );
          status.classList.add("is-error");
        }

        return;
      }

      const subject = getLocalizedText("Érdeklődés – Business Website");

      const body = [
        `${getLocalizedText("Név:")} ${name}`,
        `E-mail: ${email}`,
        `${getLocalizedText("Vállalkozás:")} ${business || "-"}`,
        "",
        getLocalizedText("Üzenet:"),
        message,
      ].join("\n");

      const mailto =
        `mailto:david.naray92@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      if (status) {
        status.textContent = getLocalizedText(
          "Megnyitjuk az e-mail alkalmazásodat…"
        );
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
        <button class="business-website-lightbox-close" aria-label="${getLocalizedText("Bezárás")}">
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