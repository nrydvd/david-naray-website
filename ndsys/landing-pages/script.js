document.documentElement.classList.add('landing-page-js');

const revealItems = document.querySelectorAll('.landing-page-reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const year = document.getElementById('landing-page-year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const languageButtons = document.querySelectorAll('[data-language]');
const textTranslations = [
  ['.landing-page-nav a:nth-child(1)', 'What is a landing page?', 'Was ist eine Landingpage?'],
  ['.landing-page-nav a:nth-child(2)', 'Why does it work?', 'Warum funktioniert sie?'],
  ['.landing-page-nav a:nth-child(3)', 'Structure', 'Aufbau'],
  ['.landing-page-nav a:nth-child(4)', 'How is it made?', 'Wie entsteht sie?'],
  ['.landing-page-nav a:nth-child(5)', 'Contact', 'Kontakt'],
  ['.landing-page-header-cta', 'Contact', 'Kontakt'],
  ['.landing-page-hero .landing-page-kicker', 'Landing pages', 'Landingpages'],
  ['.landing-page-hero h1', 'A good landing page does more than present.<br />It leads to action.', 'Eine gute Landingpage stellt nicht nur vor.<br />Sie führt zum Handeln.'],
  ['.landing-page-lead', 'A focused page that clearly presents a product, service or offer — and guides visitors through it.', 'Eine zielgerichtete Seite, die ein Produkt, eine Dienstleistung oder ein Angebot klar präsentiert und Besucher Schritt für Schritt begleitet.'],
  ['.landing-page-hero-actions a:nth-child(1)', 'Explore', 'Entdecken'],
  ['.landing-page-hero-actions a:nth-child(2)', 'Show me how it works', 'So funktioniert es'],
  ['.landing-page-visual-label', 'landing page', 'Landingpage'],
  ['.landing-page-visual-copy span:nth-child(1)', 'Ideas', 'Ideen'],
  ['.landing-page-visual-copy span:nth-child(2)', 'into useful', 'werden zu nützlichen'],
  ['.landing-page-visual-copy span:nth-child(3)', 'things.', 'Dingen.'],
  ['.landing-page-visual-meta small', 'STRATEGY<br />BEFORE<br />EXECUTION', 'STRATEGIE<br />VOR<br />UMSETZUNG'],
  ['.landing-page-index', [
    '01 <span>—</span> WHAT IS A LANDING PAGE?',
    '02 <span>—</span> IT DOES NOT WORK BY HAVING MORE ON IT.',
    '03 <span>—</span> THE STRUCTURE OF A LANDING PAGE',
    '04 <span>—</span> WHAT MAKES IT TRULY GOOD?',
    '05 <span>—</span> FROM IDEA TO A WORKING PAGE',
    '06 <span>—</span> SEE HOW IT WORKS IN PRACTICE.'
  ], [
    '01 <span>—</span> WAS IST EINE LANDINGPAGE?',
    '02 <span>—</span> SIE FUNKTIONIERT NICHT DURCH MEHR INHALT.',
    '03 <span>—</span> DER AUFBAU EINER LANDINGPAGE',
    '04 <span>—</span> WAS MACHT SIE WIRKLICH GUT?',
    '05 <span>—</span> VON DER IDEE ZUR FUNKTIONIERENDEN SEITE',
    '06 <span>—</span> SO SIEHT ES IN DER PRAXIS AUS.'
  ]],
  ['#about .landing-page-section-heading h2', 'What is a landing page?', 'Was ist eine Landingpage?'],
  ['.landing-page-about-copy p:nth-child(1)', 'Not every website has the same purpose. A traditional website offers a wide range of information. A landing page, by contrast, is built around one specific goal.', 'Nicht jede Website hat dieselbe Aufgabe. Eine klassische Website bietet viele Informationen. Eine Landingpage hingegen ist auf ein konkretes Ziel ausgerichtet.'],
  ['.landing-page-about-copy p:nth-child(2)', 'It can introduce a service, sell a product, collect enquiries, book appointments, build a mailing list or serve as a campaign page.', 'Sie kann eine Dienstleistung vorstellen, ein Produkt verkaufen, Anfragen oder Terminbuchungen ermöglichen, Abonnenten gewinnen oder als Kampagnenseite dienen.'],
  ['.landing-page-showcase-badge', 'GOAL', 'ZIEL'],
  ['.landing-page-showcase-content h3', 'A page that guides people towards a decision.', 'Eine Seite, die zur Entscheidung führt.'],
  ['.landing-page-showcase-content li:nth-child(1)', 'Presenting a service', 'Eine Dienstleistung vorstellen'],
  ['.landing-page-showcase-content li:nth-child(2)', 'Highlighting an offer', 'Ein Angebot hervorheben'],
  ['.landing-page-showcase-content li:nth-child(3)', 'Getting in touch', 'Kontakt aufnehmen'],
  ['.landing-page-showcase-content li:nth-child(4)', 'Signing up', 'Sich anmelden'],
  ['#why .landing-page-section-heading h2', 'More is not what makes it work.', 'Mehr Inhalt allein macht sie nicht wirksam.'],
  ['.landing-page-principle-label', ['Attention', 'Clarity', 'Trust', 'Action'], ['Aufmerksamkeit', 'Klarheit', 'Vertrauen', 'Handlung']],
  ['.landing-page-principle:nth-child(1) h3', 'Within the first few seconds, it is clear what the page is about.', 'Schon in den ersten Sekunden wird klar, worum es auf der Seite geht.'],
  ['.landing-page-principle:nth-child(2) h3', 'Visitors quickly understand what is offered and why it may matter to them.', 'Besucher verstehen schnell, was angeboten wird und warum es für sie wichtig sein kann.'],
  ['.landing-page-principle:nth-child(3) h3', 'The right information and evidence help people make a decision.', 'Die richtigen Informationen und Belege helfen bei der Entscheidung.'],
  ['.landing-page-principle:nth-child(4) h3', 'The page clearly guides visitors to the next step.', 'Die Seite führt Besucher klar zum nächsten Schritt.'],
  ['#structure .landing-page-section-heading h2', 'The structure of a landing page', 'Der Aufbau einer Landingpage'],
  ['.landing-page-step-content p', ['Attention', 'Interest', 'Solution', 'Trust', 'Decision'], ['Aufmerksamkeit', 'Interesse', 'Lösung', 'Vertrauen', 'Entscheidung']],
  ['.landing-page-step-1 strong', 'Hero section', 'Einstiegsbereich'],
  ['.landing-page-step-2 strong', 'Problem / need', 'Problem / Bedarf'],
  ['.landing-page-step-3 strong', 'Offer and benefits', 'Angebot und Vorteile'],
  ['.landing-page-step-4 strong', 'Proof / references', 'Belege / Referenzen'],
  ['.landing-page-step-5 strong', 'Call to action', 'Handlungsaufforderung'],
  ['#quality .landing-page-section-heading h2', 'A good landing page is not good because it contains a lot.', 'Eine gute Landingpage ist nicht deshalb gut, weil sie möglichst viel enthält.'],
  ['.landing-page-quality-item p', [
    'A clear message', 'Logical structure', 'A considered visual hierarchy', 'Easy to read',
    'Works well on mobile', 'Fast, reliable technical performance', 'Every element has a purpose'
  ], [
    'Eine klare Botschaft', 'Ein logischer Aufbau', 'Eine klare visuelle Hierarchie', 'Leicht lesbar',
    'Mobil gut nutzbar', 'Schnelle und zuverlässige Technik', 'Jedes Element hat einen Zweck'
  ]],
  ['#process .landing-page-section-heading h2', 'From idea to a working page', 'Von der Idee zur fertigen Seite'],
  ['.landing-page-process-item h3', ['Understanding', 'Structure', 'Design', 'Development'], ['Verstehen', 'Struktur', 'Design', 'Entwicklung']],
  ['.landing-page-process-item p', [
    'We learn about the offer and its audience.', 'We build the logic of the page.',
    'We shape the visual language and interface.', 'We turn it into a working, responsive page.'
  ], [
    'Wir lernen das Angebot und die Zielgruppe kennen.', 'Wir entwickeln die Logik der Seite.',
    'Wir gestalten den visuellen Auftritt und die Benutzeroberfläche.', 'Wir setzen alles als funktionierende, responsive Seite um.'
  ]],
  ['#reference .landing-page-section-heading h2', 'See how it works in practice.', 'So sieht es in der Praxis aus.'],
  ['.landing-page-window-sidebar span', ['Message', 'Benefits', 'Process', 'Contact'], ['Botschaft', 'Vorteile', 'Ablauf', 'Kontakt']],
  ['.landing-page-window-tag', 'GOAL', 'ZIEL'],
  ['.landing-page-window-copy h3', 'A clear offer, a logical path and a decision that is easy to understand.', 'Ein klares Angebot, ein logischer Weg und eine nachvollziehbare Entscheidung.'],
  ['.landing-page-window-copy > p:last-child', 'This showcase page is built around one goal: presenting an offer clearly and guiding visitors to the next step.', 'Diese Beispielseite verfolgt ein Ziel: ein Angebot klar zu präsentieren und Besucher zum nächsten Schritt zu führen.'],
  ['.landing-page-window-cta span', 'Contact', 'Kontakt'],
  ['.landing-page-window-cta strong', 'Let’s talk through your idea.', 'Lass uns über deine Idee sprechen.'],
  ['.landing-page-phone-tag', 'LANDING PAGE', 'LANDINGPAGE'],
  ['.landing-page-phone-content h4', 'Guiding people to the goal.', 'Schritt für Schritt zum Ziel.'],
  ['.landing-page-phone-content button', 'Contact', 'Kontakt'],
  ['.landing-page-final-box .landing-page-kicker', 'Ready?', 'Bereit?'],
  ['.landing-page-final-box h2', 'Would you like a landing page?', 'Möchtest du eine Landingpage?'],
  ['.landing-page-final-box > p:not(.landing-page-kicker)', 'If you have a service, product or idea you would like to present clearly and thoughtfully, let’s talk it through.', 'Wenn du eine Dienstleistung, ein Produkt oder eine Idee klar und ansprechend präsentieren möchtest, lass uns darüber sprechen.'],
  ['.landing-page-final-box .landing-page-button', 'Get in touch', 'Kontakt'],
  ['.landing-page-form-copy .landing-page-kicker', 'Enquiry', 'Anfrage'],
  ['.landing-page-form-copy h2', 'Would you like a landing page?', 'Möchtest du eine Landingpage?'],
  ['.landing-page-form-copy > p:not(.landing-page-kicker)', 'If you have a service, product or idea you would like to present clearly and thoughtfully, let’s talk it through.', 'Wenn du eine Dienstleistung, ein Produkt oder eine Idee klar und ansprechend präsentieren möchtest, lass uns darüber sprechen.'],
  ['.landing-page-form label > span', ['Name', 'Email', 'Business / project', 'How can I help?', 'Message'], ['Name', 'E-Mail', 'Unternehmen / Projekt', 'Wobei kann ich helfen?', 'Nachricht']],
  ['.landing-page-form select option', ['Landing page', 'Website', 'AI solution', 'Automation', 'Other'], ['Landingpage', 'Website', 'KI-Lösung', 'Automatisierung', 'Sonstiges']],
  ['.landing-page-form button[type="submit"]', 'Send enquiry', 'Anfrage senden'],
  ['.landing-page-footer-inner > p', 'Digital solutions for small businesses.', 'Digitale Lösungen für kleine Unternehmen.'],
  ['.landing-page-footer-links a:nth-child(1)', 'What is a landing page?', 'Was ist eine Landingpage?'],
  ['.landing-page-footer-links a:nth-child(2)', 'Why does it work?', 'Warum funktioniert sie?'],
  ['.landing-page-footer-links a:nth-child(3)', 'How is it made?', 'Wie entsteht sie?'],
  ['.landing-page-footer-links a:nth-child(4)', 'Email', 'E-Mail'],
  ['.landing-page-footer-bottom > span:last-child', 'Made with intention.', 'Mit Bedacht gestaltet.']
];

const attributeTranslations = [
  ['.landing-page-brand[aria-label]', 'aria-label', 'Dávid Náray home page', 'Startseite von Dávid Náray'],
  ['.landing-page-brand-mark[aria-label]:not([data-language])', 'aria-label', 'Dávid Náray logo', 'Logo von Dávid Náray'],
  ['.landing-page-nav', 'aria-label', 'Main navigation', 'Hauptnavigation'],
  ['.landing-page-visual-header[role="group"]', 'aria-label', 'Choose language', 'Sprache auswählen'],
  ['.landing-page-hero-visual', 'aria-label', 'Landing page visualization', 'Visualisierung einer Landingpage'],
  ['input[name="name"]', 'placeholder', 'Name', 'Name'],
  ['input[name="email"]', 'placeholder', 'you@example.com', 'ihre@email.de'],
  ['input[name="company"]', 'placeholder', 'Business or project name', 'Name des Unternehmens oder Projekts'],
  ['textarea[name="message"]', 'placeholder', 'Briefly tell me what you need.', 'Beschreibe kurz, wobei du Unterstützung brauchst.']
];

const originalText = new Map();
const originalAttributes = new Map();
const originalOptionValues = new Map();
textTranslations.forEach(([selector]) => {
  document.querySelectorAll(selector).forEach((element) => {
    if (!originalText.has(element)) originalText.set(element, element.innerHTML);
  });
});
attributeTranslations.forEach(([selector, attribute]) => {
  document.querySelectorAll(selector).forEach((element) => {
    originalAttributes.set(`${selector}|${attribute}|${element.dataset.language || ''}`, element.getAttribute(attribute));
  });
});
document.querySelectorAll('.landing-page-form select option').forEach((option) => {
  originalOptionValues.set(option, option.value);
});

function setLandingPageLanguage(locale, persist = false) {
  const localeIndex = locale === 'en' ? 1 : 2;
  document.documentElement.lang = locale;
  textTranslations.forEach(([selector, english, german]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (locale === 'hu') {
        element.innerHTML = originalText.get(element);
      } else {
        const translation = localeIndex === 1 ? english : german;
        element.innerHTML = Array.isArray(translation) ? translation[index] : translation;
      }
    });
  });
  attributeTranslations.forEach(([selector, attribute, english, german]) => {
    document.querySelectorAll(selector).forEach((element) => {
      const key = `${selector}|${attribute}|${element.dataset.language || ''}`;
      element.setAttribute(attribute, locale === 'hu'
        ? originalAttributes.get(key)
        : localeIndex === 1 ? english : german);
    });
  });
  document.querySelectorAll('.landing-page-form select option').forEach((option, index) => {
    option.value = locale === 'hu'
      ? originalOptionValues.get(option)
      : localeIndex === 1
        ? ['Landing page', 'Website', 'AI solution', 'Automation', 'Other'][index]
        : ['Landingpage', 'Website', 'KI-Lösung', 'Automatisierung', 'Sonstiges'][index];
  });
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === locale));
  });
  if (persist) {
    try {
      localStorage.setItem('ndsys-landing-page-locale', locale);
    } catch (error) {
      // Language switching still works when browser storage is unavailable.
    }
  }
}

let savedLocale = 'en';
try {
  const storedLocale = localStorage.getItem('ndsys-landing-page-locale');
  if (['hu', 'en', 'de'].includes(storedLocale)) savedLocale = storedLocale;
} catch (error) {
  // Use Hungarian when browser storage is unavailable.
}
setLandingPageLanguage(savedLocale);
languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLandingPageLanguage(button.dataset.language, true));
});

const form = document.getElementById('landing-page-form');
const formStatus = document.getElementById('landing-page-form-status');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    if (!name || !email || !message) {
      return;
    }

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      formStatus.textContent = ({
        hu: 'Kérlek, töltsd ki a kötelező mezőket.',
        en: 'Please complete all required fields.',
        de: 'Bitte fülle alle Pflichtfelder aus.'
      })[document.documentElement.lang];
      formStatus.classList.add('is-error');
      return;
    }

    const locale = document.documentElement.lang;
    const emailLabels = {
      hu: ['Név', 'E-mail', 'Vállalkozás / projekt', 'Segítség', 'Üzenet', 'Landing oldal kapcsolatfelvétel'],
      en: ['Name', 'Email', 'Business / project', 'How can I help?', 'Message', 'Landing page enquiry'],
      de: ['Name', 'E-Mail', 'Unternehmen / Projekt', 'Wobei kann ich helfen?', 'Nachricht', 'Anfrage zur Landingpage']
    }[locale];
    const subject = encodeURIComponent(emailLabels[5]);
    const body = encodeURIComponent(
      `${emailLabels[0]}: ${name.value.trim()}\n` +
      `${emailLabels[1]}: ${email.value.trim()}\n` +
      `${emailLabels[2]}: ${form.querySelector('input[name="company"]').value.trim() || '-'}\n` +
      `${emailLabels[3]}: ${form.querySelector('select[name="service"]').value}\n\n` +
      `${emailLabels[4]}:\n${message.value.trim()}`
    );

    formStatus.textContent = ({
      hu: 'A levelezőprogram megnyílt. Kérlek, küldd el az üzenetet a megjelenő levélben.',
      en: 'Your email app has opened. Please send the message from the email draft.',
      de: 'Dein E-Mail-Programm wurde geöffnet. Bitte sende die Nachricht aus dem vorbereiteten Entwurf.'
    })[locale];
    formStatus.classList.remove('is-error');
    window.location.href = `mailto:david.naray92@gmail.com?subject=${subject}&body=${body}`;
  });
}
