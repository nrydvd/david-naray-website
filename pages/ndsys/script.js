const translations = {
  en: {
    nav: { landing: "Landing", web: "Web", custom: "Custom", business: "Business" },
    hero: {
      eyebrow: "NDsYs by David Naray",
      tagline: "One system. It knows what to do.",
      q1: "What happens after someone writes to you?",
      q2: "Where does the next task go?",
      q3: "Who decides, and what can move on its own?"
    },
    intro: {
      eyebrow: "The quiet answer",
      title: "Your business already has a system. It may just be scattered.",
      body1: "NDsYs connects the pieces you already use and fills the gaps where work usually gets lost.",
      body2: "It can start small: a form, a calendar, a client flow, a file structure. Then it grows around the way your team actually works."
    },
    builder: {
      eyebrow: "System builder",
      title: "Start with one thing. Build from there.",
      copy: "Choose the parts that belong together. NDsYs does not force a new way of working. It gives the existing work a structure.",
      panel: {
        open: "Open this part",
        landing: {
          title: "A clear first step",
          text: "A landing page can become more than a page. It can collect the right information, start the right flow, and help the visitor move without noise."
        },
        web: {
          title: "A website that belongs to the work",
          text: "The site can explain, guide, collect and connect. It becomes the public part of the system, not a separate island."
        },
        system: {
          title: "A tool shaped around the process",
          text: "When the usual tools are too stiff, the internal system can be built around your real steps, names, approvals and habits."
        },
        business: {
          title: "One rhythm for the whole operation",
          text: "Offers, clients, projects, files, tasks and decisions can follow one shared logic, so the team can see what is actually happening."
        }
      }
    },
    modules: {
      landing: { title: "Landing", short: "First message, first action." },
      web: { title: "Web", short: "The public face of the system." },
      system: { title: "Custom", short: "Internal tools built around your process." },
      business: { title: "Business", short: "The whole operation in one rhythm." }
    },
    compare: {
      eyebrow: "Before and after",
      title: "Nothing has to shout. It just has to connect.",
      before: "Before",
      after: "After",
      copy: "The tools can stay familiar. The difference is what happens between them."
    },
    human: {
      eyebrow: "What makes it work",
      title: "Built by people. Connected by one system."
    },
    team: {
      strategy: {
        title: "Strategy",
        short: "What should happen first?",
        text: "We map the way the work moves now, then decide what should stay human, what should become clearer, and what can be handled by the system."
      },
      design: {
        title: "Design",
        short: "How should it feel?",
        text: "The interface needs to feel calm, fast and obvious. Good design here means fewer questions, fewer mistakes and less explaining."
      },
      development: {
        title: "Development",
        short: "What should it do?",
        text: "The build turns the flow into screens, logic, data, permissions and useful controls. Clean code matters because the system will grow."
      },
      automation: {
        title: "Automation",
        short: "What can move by itself?",
        text: "Repeatable steps can happen quietly: messages, status changes, reminders, routing, file creation and small checks that save attention."
      },
      decisions: {
        title: "Human decisions",
        short: "Where should a person step in?",
        text: "Not everything should be automatic. The system should know when to pause, show context and let the right person make the call."
      }
    },
    growth: {
      eyebrow: "A playful kind of growth",
      title: "The system gets stronger when the work gets clearer.",
      lead: "Add intake",
      task: "Add task flow",
      file: "Add file logic",
      team: "Add team handoff",
      message0: "Pick one useful piece. The point is not to make a huge system overnight.",
      messages: [
        "Good. Now the work has a clean entrance.",
        "Nice. Tasks can move with a status instead of memory.",
        "Better. Files know where they belong.",
        "Strong. The team can see what needs a person and what can continue."
      ]
    },
    depth: {
      eyebrow: "Under the surface",
      title: "Simple outside. Serious underneath.",
      copy: "The details can stay hidden until they matter. Open the layers if you want to see how the system is usually built.",
      items: {
        intake: {
          title: "Intake and routing",
          text: "Forms, messages, bookings and requests arrive with enough context to start the next step cleanly."
        },
        data: {
          title: "Data and structure",
          text: "Names, statuses, files and decisions follow a shared logic, so the team does not have to guess where things belong."
        },
        automation: {
          title: "Automation rules",
          text: "Repeated steps can run quietly, while sensitive moments stay visible for the people who should decide."
        },
        dashboard: {
          title: "Dashboards and control",
          text: "The important state of the business becomes easier to read: what is waiting, what moved, what needs attention."
        }
      }
    },
    answers: {
      q1: "What happens after someone writes to you?",
      a1: "The right path starts.",
      q2: "Where does the next task go?",
      a2: "To the right place, with context.",
      q3: "Who decides?",
      a3: "People decide what matters. The system carries the rest."
    },
    closing: {
      eyebrow: "Start clean",
      title: "You don't need to know what to build. Tell us how you work.",
      cta: "Let's build the system."
    }
  },
  hu: {
    nav: { landing: "Landing", web: "Web", custom: "Egyedi", business: "Komplett" },
    hero: {
      eyebrow: "NDsYs by David Naray",
      tagline: "Egy rendszer. Tudja, mit kell tennie.",
      q1: "Mi történik, miután valaki ír neked?",
      q2: "Hova kerül a következő feladat?",
      q3: "Ki dönt, és mi mehet tovább magától?"
    },
    intro: {
      eyebrow: "A csendes válasz",
      title: "A vállalkozásodnak már most is van rendszere. Lehet, hogy csak szét van szórva.",
      body1: "Az NDsYs összeköti azokat a részeket, amiket már használsz, és rendet tesz ott, ahol a munka általában elakad.",
      body2: "Elég egy apró kezdés: egy űrlap, egy naptár, egy ügyfélfolyamat, egy fájlstruktúra. Aztán a rendszer a csapat valódi működéséhez nő hozzá."
    },
    builder: {
      eyebrow: "Rendszerépítő",
      title: "Kezdd egyetlen dologgal. Építsd tovább onnan.",
      copy: "Válaszd ki, minek kell összetartoznia. Az NDsYs nem erőltet rád új működést. Szerkezetet ad annak, ami már most is történik.",
      panel: {
        open: "Megnyitás",
        landing: {
          title: "Egy tiszta első lépés",
          text: "Egy landing több is lehet, mint egy oldal. Begyűjtheti a fontos információkat, elindíthatja a jó folyamatot, és zaj nélkül továbbviheti a látogatót."
        },
        web: {
          title: "Weboldal, ami része a működésnek",
          text: "A weboldal magyaráz, vezet, gyűjt és kapcsol. Nem külön sziget, hanem a rendszer nyilvános rétege."
        },
        system: {
          title: "Eszköz a valódi folyamataidra",
          text: "Ha a megszokott eszközök túl merevek, a belső rendszer a saját lépéseidre, neveidre, jóváhagyásaidra és szokásaidra épülhet."
        },
        business: {
          title: "Egy ritmus az egész működésnek",
          text: "Ajánlatok, ügyfelek, projektek, fájlok, feladatok és döntések egy közös logika szerint mozoghatnak, hogy a csapat lássa, mi történik."
        }
      }
    },
    modules: {
      landing: { title: "Landing", short: "Első üzenet, első lépés." },
      web: { title: "Web", short: "A rendszer nyilvános arca." },
      system: { title: "Egyedi", short: "Belső eszközök a saját folyamataidra." },
      business: { title: "Komplett", short: "Az egész működés egy ritmusban." }
    },
    compare: {
      eyebrow: "Előtte és utána",
      title: "Nem kell hangosnak lennie. Elég, ha kapcsolódik.",
      before: "Előtte",
      after: "Utána",
      copy: "Az eszközök maradhatnak ismerősek. A különbség az, ami köztük történik."
    },
    human: {
      eyebrow: "Mitől működik",
      title: "Emberek építik. Egy rendszer kapcsolja össze."
    },
    team: {
      strategy: {
        title: "Stratégia",
        short: "Minek kell először történnie?",
        text: "Feltérképezzük, hogyan mozog most a munka, majd eldöntjük, mi maradjon emberi döntés, minek kell tisztulnia, és mit vihet tovább a rendszer."
      },
      design: {
        title: "Design",
        short: "Milyen érzés legyen használni?",
        text: "A felület legyen nyugodt, gyors és egyértelmű. Itt a jó design kevesebb kérdést, kevesebb hibát és kevesebb magyarázkodást jelent."
      },
      development: {
        title: "Fejlesztés",
        short: "Mit csináljon pontosan?",
        text: "A fejlesztés képernyőkké, logikává, adatokká, jogosultságokká és hasznos vezérléssé alakítja a folyamatot. A tiszta kód azért fontos, mert a rendszer nőni fog."
      },
      automation: {
        title: "Automatizáció",
        short: "Mi mozoghat magától?",
        text: "Az ismétlődő lépések csendben futhatnak: üzenetek, státuszok, emlékeztetők, továbbítások, fájlkészítés és apró ellenőrzések."
      },
      decisions: {
        title: "Emberi döntések",
        short: "Hol kell belépnie egy embernek?",
        text: "Nem mindent kell automatizálni. A rendszernek tudnia kell, mikor álljon meg, mutassa meg a helyzetet, és adja át a döntést a megfelelő embernek."
      }
    },
    growth: {
      eyebrow: "Játékos növekedés",
      title: "A rendszer akkor erősödik, amikor a munka tisztább lesz.",
      lead: "Érkezés hozzáadása",
      task: "Feladatfolyam hozzáadása",
      file: "Fájllogika hozzáadása",
      team: "Csapatátadás hozzáadása",
      message0: "Válassz egy hasznos részt. Nem az a cél, hogy egy éjszaka alatt óriási rendszer legyen.",
      messages: [
        "Jó. A munkának lett egy tiszta belépési pontja.",
        "Szép. A feladatok már státusszal mozognak, nem emlékezetből.",
        "Jobb. A fájlok tudják, hova tartoznak.",
        "Erős. A csapat látja, mi kér embert, és mi mehet tovább."
      ]
    },
    depth: {
      eyebrow: "A felszín alatt",
      title: "Kívül egyszerű. Belül komoly.",
      copy: "A részletek maradhatnak rejtve addig, amíg számítanak. Nyisd meg a rétegeket, ha látni szeretnéd, miből épül fel a rendszer.",
      items: {
        intake: {
          title: "Érkezés és továbbítás",
          text: "Űrlapok, üzenetek, foglalások és kérések elég kontextussal érkeznek ahhoz, hogy tisztán induljon a következő lépés."
        },
        data: {
          title: "Adatok és szerkezet",
          text: "Nevek, státuszok, fájlok és döntések közös logikát követnek, így a csapatnak nem kell találgatnia, mi hova tartozik."
        },
        automation: {
          title: "Automatizációs szabályok",
          text: "Az ismétlődő lépések csendben futhatnak, miközben az érzékeny pillanatok láthatóak maradnak azoknak, akiknek dönteniük kell."
        },
        dashboard: {
          title: "Vezérlés és áttekintés",
          text: "A vállalkozás fontos állapota könnyebben olvasható lesz: mi vár, mi mozdult, mire kell figyelni."
        }
      }
    },
    answers: {
      q1: "Mi történik, miután valaki ír neked?",
      a1: "Elindul a jó út.",
      q2: "Hova kerül a következő feladat?",
      a2: "A jó helyre, kontextussal együtt.",
      q3: "Ki dönt?",
      a3: "Az emberek döntik el, ami számít. A többit viszi a rendszer."
    },
    closing: {
      eyebrow: "Tiszta kezdés",
      title: "Nem kell tudnod, mit kell építeni. Mondd el, hogyan dolgoztok.",
      cta: "Építsük meg a rendszert."
    }
  },
  de: {
    nav: { landing: "Landing", web: "Web", custom: "Individuell", business: "Business" },
    hero: {
      eyebrow: "NDsYs by David Naray",
      tagline: "Ein System. Es weiß, was zu tun ist.",
      q1: "Was passiert, nachdem jemand schreibt?",
      q2: "Wohin geht die nächste Aufgabe?",
      q3: "Wer entscheidet, und was kann von selbst weiterlaufen?"
    },
    intro: {
      eyebrow: "Die leise Antwort",
      title: "Dein Business hat schon ein System. Es ist vielleicht nur verstreut.",
      body1: "NDsYs verbindet die Teile, die du bereits nutzt, und schließt die Lücken, in denen Arbeit oft verloren geht.",
      body2: "Es kann klein beginnen: ein Formular, ein Kalender, ein Kundenablauf, eine Dateistruktur. Danach wächst es um die echte Arbeitsweise deines Teams."
    },
    builder: {
      eyebrow: "System builder",
      title: "Beginne mit einer Sache. Baue von dort aus weiter.",
      copy: "Wähle die Teile, die zusammengehören. NDsYs zwingt keine neue Arbeitsweise auf. Es gibt der bestehenden Arbeit Struktur.",
      panel: {
        open: "Diesen Teil öffnen",
        landing: {
          title: "Ein klarer erster Schritt",
          text: "Eine Landingpage kann mehr sein als eine Seite. Sie sammelt die richtigen Informationen, startet den passenden Ablauf und führt Besucher ruhig weiter."
        },
        web: {
          title: "Eine Website, die zur Arbeit gehört",
          text: "Die Website kann erklären, führen, sammeln und verbinden. Sie wird zum öffentlichen Teil des Systems, nicht zu einer getrennten Insel."
        },
        system: {
          title: "Ein Tool für den echten Prozess",
          text: "Wenn Standardtools zu starr sind, kann das interne System um eure Schritte, Namen, Freigaben und Gewohnheiten gebaut werden."
        },
        business: {
          title: "Ein Rhythmus für den ganzen Betrieb",
          text: "Angebote, Kunden, Projekte, Dateien, Aufgaben und Entscheidungen können einer gemeinsamen Logik folgen, damit das Team sieht, was wirklich passiert."
        }
      }
    },
    modules: {
      landing: { title: "Landing", short: "Erste Botschaft, erster Schritt." },
      web: { title: "Web", short: "Die öffentliche Seite des Systems." },
      system: { title: "Individuell", short: "Interne Tools für euren Prozess." },
      business: { title: "Business", short: "Der ganze Betrieb in einem Rhythmus." }
    },
    compare: {
      eyebrow: "Vorher und nachher",
      title: "Nichts muss laut sein. Es muss nur verbunden sein.",
      before: "Vorher",
      after: "Nachher",
      copy: "Die Tools können vertraut bleiben. Der Unterschied liegt in dem, was zwischen ihnen passiert."
    },
    human: {
      eyebrow: "Was es möglich macht",
      title: "Von Menschen gebaut. Durch ein System verbunden."
    },
    team: {
      strategy: {
        title: "Strategie",
        short: "Was soll zuerst passieren?",
        text: "Wir sehen uns an, wie die Arbeit heute läuft, und entscheiden dann, was menschlich bleiben soll, was klarer werden muss und was das System tragen kann."
      },
      design: {
        title: "Design",
        short: "Wie soll es sich anfühlen?",
        text: "Die Oberfläche soll ruhig, schnell und eindeutig sein. Gutes Design bedeutet hier weniger Fragen, weniger Fehler und weniger Erklärungen."
      },
      development: {
        title: "Entwicklung",
        short: "Was soll es tun?",
        text: "Der Build macht aus dem Ablauf Screens, Logik, Daten, Rechte und nützliche Steuerung. Sauberer Code zählt, weil das System wachsen wird."
      },
      automation: {
        title: "Automatisierung",
        short: "Was kann selbst laufen?",
        text: "Wiederholbare Schritte können leise passieren: Nachrichten, Statuswechsel, Erinnerungen, Weiterleitungen, Dateierstellung und kleine Prüfungen."
      },
      decisions: {
        title: "Menschliche Entscheidungen",
        short: "Wo soll ein Mensch eingreifen?",
        text: "Nicht alles sollte automatisch sein. Das System muss wissen, wann es anhält, Kontext zeigt und die Entscheidung an die richtige Person gibt."
      }
    },
    growth: {
      eyebrow: "Spielerisches Wachstum",
      title: "Das System wird stärker, wenn die Arbeit klarer wird.",
      lead: "Intake hinzufügen",
      task: "Aufgabenfluss hinzufügen",
      file: "Dateilogik hinzufügen",
      team: "Teamübergabe hinzufügen",
      message0: "Wähle einen nützlichen Teil. Es geht nicht darum, über Nacht ein riesiges System zu bauen.",
      messages: [
        "Gut. Die Arbeit hat jetzt einen sauberen Eingang.",
        "Schön. Aufgaben bewegen sich mit Status, nicht aus dem Gedächtnis.",
        "Besser. Dateien wissen, wohin sie gehören.",
        "Stark. Das Team sieht, was einen Menschen braucht und was weiterlaufen kann."
      ]
    },
    depth: {
      eyebrow: "Unter der Oberfläche",
      title: "Außen einfach. Darunter ernsthaft.",
      copy: "Die Details können verborgen bleiben, bis sie wichtig werden. Öffne die Ebenen, wenn du sehen möchtest, wie das System meistens gebaut wird.",
      items: {
        intake: {
          title: "Intake und Routing",
          text: "Formulare, Nachrichten, Buchungen und Anfragen kommen mit genug Kontext an, damit der nächste Schritt sauber starten kann."
        },
        data: {
          title: "Daten und Struktur",
          text: "Namen, Status, Dateien und Entscheidungen folgen einer gemeinsamen Logik, damit das Team nicht raten muss, was wohin gehört."
        },
        automation: {
          title: "Automatisierungsregeln",
          text: "Wiederholte Schritte können ruhig laufen, während sensible Momente für die Menschen sichtbar bleiben, die entscheiden sollen."
        },
        dashboard: {
          title: "Dashboards und Kontrolle",
          text: "Der wichtige Zustand des Business wird leichter lesbar: was wartet, was sich bewegt hat, was Aufmerksamkeit braucht."
        }
      }
    },
    answers: {
      q1: "Was passiert, nachdem jemand schreibt?",
      a1: "Der richtige Weg startet.",
      q2: "Wohin geht die nächste Aufgabe?",
      a2: "An den richtigen Ort, mit Kontext.",
      q3: "Wer entscheidet?",
      a3: "Menschen entscheiden, was zählt. Das System trägt den Rest."
    },
    closing: {
      eyebrow: "Sauber starten",
      title: "Du musst nicht wissen, was gebaut werden soll. Erzähl uns, wie ihr arbeitet.",
      cta: "Lass uns das System bauen."
    }
  }
};

const moduleLinks = {
  landing: "/landing",
  web: "/web",
  system: "/egyedi",
  business: "/komplett"
};

let currentLang = "en";
let activeBuilder = "landing";
let growthCount = 0;

const getText = (path) => path.split(".").reduce((value, key) => value?.[key], translations[currentLang]);

function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getText(element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  updateBuilder(activeBuilder);
  updateGrowthMessage();
}

function updateBuilder(key) {
  activeBuilder = key;
  const title = document.getElementById("builderTitle");
  const text = document.getElementById("builderText");
  const link = document.getElementById("builderLink");

  title.textContent = translations[currentLang].builder.panel[key].title;
  text.textContent = translations[currentLang].builder.panel[key].text;
  link.textContent = translations[currentLang].builder.panel.open;
  link.href = moduleLinks[key];

  document.querySelectorAll("[data-builder]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.builder === key);
  });

  document.querySelectorAll("[data-stage]").forEach((cell) => {
    cell.classList.toggle("is-active", cell.dataset.stage === key);
  });
}

function updateGrowthMessage() {
  const message = document.getElementById("growthMessage");
  if (growthCount === 0) {
    message.textContent = translations[currentLang].growth.message0;
    return;
  }
  message.textContent = translations[currentLang].growth.messages[growthCount - 1];
}

function openDrawer(key) {
  const drawer = document.getElementById("infoDrawer");
  const title = document.getElementById("drawerTitle");
  const text = document.getElementById("drawerText");
  const eyebrow = document.getElementById("drawerEyebrow");
  const item = translations[currentLang].team[key];

  eyebrow.textContent = "NDsYs";
  title.textContent = item.title;
  text.textContent = item.text;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  drawer.querySelector(".drawer-close").focus();
}

function closeDrawer() {
  const drawer = document.getElementById("infoDrawer");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
}

function setupInteractions() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyTranslations(button.dataset.lang));
  });

  document.querySelectorAll("[data-builder]").forEach((button) => {
    button.addEventListener("click", () => updateBuilder(button.dataset.builder));
  });

  document.querySelectorAll("[data-compare]").forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.compare;
      const compare = button.closest(".compare-visual");
      compare.dataset.mode = mode;
      compare.querySelectorAll("[data-compare]").forEach((control) => {
        control.setAttribute("aria-selected", String(control.dataset.compare === mode));
      });
    });
  });

  document.querySelectorAll("[data-drawer]").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.drawer));
  });

  document.querySelectorAll("[data-close-drawer]").forEach((button) => {
    button.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDrawer();
    }
  });

  document.querySelectorAll("[data-grow]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("is-done")) {
        button.classList.add("is-done");
        growthCount = Math.min(growthCount + 1, 4);
      }
      document.getElementById("growthFill").style.width = `${8 + growthCount * 23}%`;
      updateGrowthMessage();
    });
  });

  document.querySelectorAll(".accordion-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion-item");
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function setupCanvas() {
  const canvas = document.getElementById("systemCanvas");
  const context = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let points = [];
  let frame = 0;

  function resize() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const count = Math.max(32, Math.floor((width * height) / 26000));
    points = Array.from({ length: count }, (_, index) => ({
      x: (index * 97) % width,
      y: (index * 53) % height,
      vx: Math.sin(index) * 0.18,
      vy: Math.cos(index * 1.7) * 0.18,
      hue: index % 3
    }));
  }

  function draw() {
    frame += 1;
    context.clearRect(0, 0, width, height);

    points.forEach((point) => {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;
    });

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i];
        const b = points[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);

        if (distance < 150) {
          const alpha = (1 - distance / 150) * 0.18;
          context.strokeStyle = `rgba(128, 244, 255, ${alpha})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }
    }

    points.forEach((point) => {
      const pulse = prefersReducedMotion ? 0 : Math.sin(frame * 0.02 + point.x) * 0.8;
      const colors = ["128, 244, 255", "185, 255, 104", "255, 211, 107"];
      context.fillStyle = `rgba(${colors[point.hue]}, 0.55)`;
      context.beginPath();
      context.arc(point.x, point.y, 1.7 + pulse, 0, Math.PI * 2);
      context.fill();
    });

    if (!prefersReducedMotion) {
      requestAnimationFrame(draw);
    }
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

setupInteractions();
setupCanvas();
applyTranslations("en");
