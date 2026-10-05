document.documentElement.classList.add("systems-js");

document.addEventListener("DOMContentLoaded", () => {
  const localeStorageKey = "ndsys-systems-locale";
  const textTranslations = {
    en: {
      "Dávid Náray": "David Naray",
      "Főoldal": "Home",
      "Rendszerek": "Systems",
      "Folyamat": "Process",
      "Kapcsolat": "Contact",
      "Egyedi digitális rendszerek": "Custom digital systems",
      "Egy rendszer, ami a vállalkozásod működéséhez": "A system that adapts to the way your business",
      "igazodik.": "works.",
      "Amikor egy vállalkozás működése már több folyamatból áll, érdemes ezeket egy jól felépített digitális rendszerbe rendezni. A cél egy átláthatóbb, egyszerűbb és hatékonyabb működés.": "When a business involves several processes, bringing them together in a well-designed digital system can make work clearer, simpler and more efficient.",
      "Megnézem a rendszereket": "Explore the systems",
      "Beszéljünk róla": "Let's talk",
      "Digital": "Digital",
      "systems": "systems",
      "that": "that",
      "work.": "work.",
      "CUSTOM": "CUSTOM",
      "DIGITAL": "DIGITAL",
      "SYSTEMS": "SYSTEMS",
      "MIT JELENT EZ?": "WHAT DOES THIS MEAN?",
      "Minden vállalkozás": "Every business",
      "másképp": "works",
      "működik.": "differently.",
      "Egy egyedi rendszer lehet egy egyszerű foglalási megoldás, egy ügyfélkezelő felület vagy akár több folyamatot összekapcsoló teljes digitális háttér.": "A custom system might be a simple booking tool, a client management interface, or a complete digital backbone connecting several processes.",
      "A rendszer felépítése mindig abból indul ki, hogyan működik a vállalkozás, hol vannak felesleges lépések, és mit lehet egyszerűbbé vagy átláthatóbbá tenni.": "The system is shaped around how the business works: where unnecessary steps occur, and what can be made simpler or easier to follow.",
      "MILYEN RENDSZEREK ÉPÍTHETŐK?": "WHAT CAN A SYSTEM INCLUDE?",
      "Egy rendszer többféle feladatot is": "One system can bring several kinds of work",
      "összefoghat.": "together.",
      "Az alábbi lehetőségek önállóan is működhetnek, de megfelelően összekapcsolva egyetlen átlátható digitális rendszerré állhatnak össze.": "These elements can work on their own or, when connected thoughtfully, become one clear digital system.",
      "Rendszertípusok": "System types",
      "Ügyfél- és CRM rendszerek": "Client and CRM systems",
      "Ügyfél- és CRM": "Client and CRM",
      "Lead- és ajánlatkérő rendszerek": "Lead and quote request systems",
      "Lead- és ajánlatkérő": "Lead and quote request",
      "Időpontfoglalás": "Appointment booking",
      "időpontfoglalás": "Appointment booking",
      "Alap adminfelületek": "Essential admin tools",
      "Automatizáció": "Automation",
      "AI chatbot": "AI chatbot",
      "Dashboardok és kimutatások": "Dashboards and reports",
      "Összekapcsolt rendszerek": "Connected systems",
      "Mobilalkalmazások": "Mobile apps",
      "rendszerek": "systems",
      "Az érdeklődők és ügyfelek adatainak egy helyen történő kezelése.": "Manage lead and client information in one place.",
      "Követhető, hogy ki hol tart a folyamatban, mikor történt kapcsolatfelvétel, és mi legyen a következő lépés.": "See where each person is in the process, when they were last contacted, and what should happen next.",
      "Mire használható?": "What is it used for?",
      "érdeklődők kezelése": "lead management",
      "ügyféladatok rendszerezése": "organizing client data",
      "státuszok követése": "tracking statuses",
      "utánkövetés": "follow-ups",
      "Például:": "For example:",
      "Az érdeklődésből strukturált folyamat alakítható ki.": "Turn an initial enquiry into a structured process.",
      "Az érdeklődő adatait a rendszer összegyűjtheti, továbbíthatja, majd a következő lépéshez megfelelően kezelheti.": "The system can collect and route enquiry details, then prepare them for the next step.",
      "érdeklődés beküldése": "submitting an enquiry",
      "adatbekérés": "collecting information",
      "értesítés": "notifications",
      "kapcsolatfelvétel": "getting in touch",
      "Az ügyfelek saját maguk választhatnak megfelelő időpontot.": "Clients can choose a time that works for them.",
      "A foglalások egy helyen kezelhetők, miközben a rendszer automatikusan elvégezheti a kapcsolódó feladatokat.": "Manage bookings in one place while the system takes care of related tasks automatically.",
      "Lehetséges funkciók:": "Possible features:",
      "szabad időpontok kezelése": "managing availability",
      "foglalások nyilvántartása": "booking records",
      "visszaigazolások": "confirmations",
      "emlékeztetők": "reminders",
      "Alap": "Essential",
      "adminfelületek": "admin tools",
      "Egy egyszerű háttérfelület, ahol a vállalkozás kezelheti a rendszer fontosabb részeit.": "A straightforward back-office where the business can manage the key parts of its system.",
      "Nem minden esetben van szükség összetett vállalatirányítási rendszerre. Sokszor egy jól kialakított, könnyen használható adminfelület is jelentősen egyszerűsíti a napi működést.": "A complex enterprise platform is not always necessary. A well-designed, easy-to-use admin interface can make day-to-day work much simpler.",
      "foglalások kezelése": "managing bookings",
      "érdeklődők megtekintése": "viewing enquiries",
      "szolgáltatások kezelése": "managing services",
      "státuszok módosítása": "updating statuses",
      "Az ismétlődő feladatokat a rendszer bizonyos esetekben automatikusan elvégezheti.": "The system can handle some repetitive tasks automatically.",
      "Így kevesebb manuális lépésre lehet szükség, és kisebb az esélye annak, hogy egy fontos feladat kimarad.": "That means fewer manual steps and less chance of an important task being missed.",
      "automatikus értesítések": "automatic notifications",
      "visszaigazoló e-mailek": "confirmation emails",
      "státuszfrissítések": "status updates",
      "ismétlődő folyamatok kezelése": "handling recurring processes",
      "Egy intelligens asszisztens segíthet az érdeklődőknek eligazodni és választ adni a gyakori kérdésekre.": "An intelligent assistant can guide prospective clients and answer common questions.",
      "A chatbot a vállalkozás által megadott információk alapján működhet, és akár egy kapcsolatfelvételi vagy foglalási folyamatot is elindíthat.": "The chatbot can use information provided by the business and even start a contact or booking process.",
      "Használható például:": "Useful for:",
      "gyakori kérdések megválaszolására": "answering common questions",
      "szolgáltatások bemutatására": "explaining services",
      "érdeklődők irányítására": "guiding prospective clients",
      "kapcsolatfelvétel előkészítésére": "preparing a conversation",
      "Dashboardok és": "Dashboards and",
      "kimutatások": "reports",
      "A fontosabb adatok és folyamatok egy áttekinthető felületen jelenhetnek meg.": "Key data and processes can be brought together in a clear overview.",
      "Így könnyebb követni, hogy mi történik a rendszerben, és hol van szükség figyelemre vagy beavatkozásra.": "This makes it easier to see what is happening and where attention or action is needed.",
      "érdeklődők száma": "number of enquiries",
      "foglalások": "bookings",
      "folyamatok állapota": "process status",
      "alap teljesítménymutatók": "key performance indicators",
      "Összekapcsolt": "Connected",
      "Sok esetben nem egyetlen funkcióra, hanem több folyamat összekapcsolására van szükség.": "Often the need is not for one feature, but for several processes to work together.",
      "Egy weboldal, egy űrlap, egy CRM, egy foglalási rendszer és az automatizációk együtt már egy teljes digitális folyamatot alkothatnak.": "A website, form, CRM, booking system and automations can work together as one complete digital process.",
      "Példa:": "Example:",
      "weboldal": "website",
      "érdeklődői űrlap": "enquiry form",
      "CRM": "CRM",
      "e-mail értesítés": "email notification",
      "adminfelület": "admin interface",
      "automatizált utánkövetés": "automated follow-up",
      "Egy saját mobilalkalmazás akkor lehet hasznos, ha az ügyfeleid vagy munkatársaid rendszeresen ugyanazokat a funkciókat használják.": "A dedicated mobile app can help when clients or colleagues regularly use the same features.",
      "Lehet benne például foglalás, rendelés, ügyfélkommunikáció, tagsági rendszer vagy értesítés.": "It might include booking, ordering, client communication, memberships or notifications.",
      "ügyfélalkalmazás": "client app",
      "rendelés": "ordering",
      "tagsági rendszer": "membership system",
      "értesítések": "notifications",
      "ügyfélkommunikáció": "client communication",
      "EGY RENDSZER A GYAKORLATBAN": "A SYSTEM IN PRACTICE",
      "A különálló folyamatok összeállhatnak egy": "Separate processes can come together as a",
      "egésszé.": "whole.",
      "Például egy érdeklődő útja a weboldaltól egészen az ügyfélkezelésig automatizálható és követhető.": "For example, a prospective client's journey from the website through client management can be automated and tracked.",
      "Megérkezik a weboldalra": "They arrive at the website",
      "Információt kér vagy kapcsolatba lép": "They ask for information or get in touch",
      "Az adat bekerül a rendszerbe": "Their details enter the system",
      "A megfelelő folyamat automatikusan elindul": "The right process starts automatically",
      "A vállalkozó mindent egy helyen lát": "The business owner sees everything in one place",
      "LEHET, HOGY NEKED IS ISMERŐS": "SOME OF THIS MAY FEEL FAMILIAR",
      "Érdemes": "It may be time to think",
      "rendszerben": "in systems",
      "gondolkodni, ha a működés egyre nehezebben követhető.": "when day-to-day work is getting harder to follow.",
      "Ugyanazokat a feladatokat újra és újra manuálisan végzed.": "You repeat the same tasks manually.",
      "Több helyen vannak az ügyfél- vagy érdeklődői adatok.": "Client or enquiry details are scattered across different places.",
      "Nehéz követni, hogy egy érdeklődő vagy ügyfél hol tart.": "It is hard to see where a prospective or existing client stands.",
      "Sok időpontot, foglalást vagy ismétlődő folyamatot kezelsz.": "You manage many appointments, bookings or recurring processes.",
      "Több különböző eszközt használsz, amelyek nem kapcsolódnak egymáshoz.": "You use several tools that do not connect to one another.",
      "Szeretnél kevesebb manuális adminisztrációt a mindennapokban.": "You would like to spend less time on manual admin.",
      "EGY PÉLDA A GYAKORLATBÓL": "A REAL-WORLD EXAMPLE",
      "Egy rendszer, amit a": "A system I built in",
      "gyakorlatban": "practice",
      "építettem.": ".",
      "Egy szépségszalon működéséhez készült: az ügyfelek, szolgáltatások és a napi működés egy átgondolt digitális rendszerben találkoznak.": "Built for a beauty salon, it brings clients, services and daily operations together in one considered digital system.",
      "Rendszer": "System",
      "01 / Rendszer": "01 / System",
      "Szombathely": "Szombathely",
      "Lumé": "Lumé",
      "Studió": "Studio",
      "Egy egyedi digitális rendszer, amely a szalon működéséhez igazodik, és a mindennapi folyamatokat egy helyen kapcsolja össze.": "A custom digital system shaped around the salon, connecting its everyday processes in one place.",
      "Megnézem a rendszert": "View the system",
      "Nézzük meg együtt": "Let's explore it together",
      "Van egy folyamat a vállalkozásodban, amit": "Is there a process in your business you'd like to make",
      "egyszerűbbé": "simpler",
      "tennél?": "?",
      "Beszéljük át, hogyan lehetne digitálisan átgondoltabban felépíteni.": "Let's talk about how it could be made clearer with a thoughtful digital system.",
      "KAPCSOLAT": "CONTACT",
      "Kezdjük el": "Let's start with",
      "egy beszélgetéssel.": "a conversation.",
      "Nem kell kész terv, csak egy gondolat. A többit együtt kibontjuk.": "You do not need a finished plan, just an idea. We can work out the rest together.",
      "Név": "Name",
      "Vállalkozás": "Business",
      "Email": "Email",
      "Miben segíthetek?": "How can I help?",
      "Ügyfél- és CRM rendszer": "Client and CRM system",
      "Lead- és ajánlatkérő rendszer": "Lead and quote request system",
      "Adminfelület": "Admin interface",
      "Dashboard": "Dashboard",
      "Összekapcsolt rendszer": "Connected system",
      "Mobilalkalmazás": "Mobile app",
      "Más / Nem tudom még": "Other / Not sure yet",
      "Üzenet": "Message",
      "Küldöm": "Send",
      "Digitális megoldások kisvállalkozásoknak.": "Digital solutions for small businesses.",
      "Adatkezelés": "Privacy",
      "Made with intention.": "Made with intention.",
      "© 2026 Dávid Náray": "© 2026 David Naray"
    },
    de: {
      "Dávid Náray": "Dávid Náray",
      "Főoldal": "Startseite",
      "Rendszerek": "Systeme",
      "Folyamat": "Ablauf",
      "Kapcsolat": "Kontakt",
      "Egyedi digitális rendszerek": "Individuelle digitale Systeme",
      "Egy rendszer, ami a vállalkozásod működéséhez": "Ein System, das sich an die Abläufe deines Unternehmens",
      "igazodik.": "anpasst.",
      "Amikor egy vállalkozás működése már több folyamatból áll, érdemes ezeket egy jól felépített digitális rendszerbe rendezni. A cél egy átláthatóbb, egyszerűbb és hatékonyabb működés.": "Wenn ein Unternehmen aus mehreren Abläufen besteht, lohnt es sich, diese in einem gut durchdachten digitalen System zu bündeln. Das Ziel: klarere, einfachere und effizientere Abläufe.",
      "Megnézem a rendszereket": "Systeme ansehen",
      "Beszéljünk róla": "Lass uns darüber sprechen",
      "Digital": "Digitale",
      "systems": "Systeme,",
      "that": "die",
      "work.": "funktionieren.",
      "CUSTOM": "INDIVIDUELLE",
      "DIGITAL": "DIGITALE",
      "SYSTEMS": "SYSTEME",
      "MIT JELENT EZ?": "WAS BEDEUTET DAS?",
      "Minden vállalkozás": "Jedes Unternehmen",
      "másképp": "arbeitet",
      "működik.": "anders.",
      "Egy egyedi rendszer lehet egy egyszerű foglalási megoldás, egy ügyfélkezelő felület vagy akár több folyamatot összekapcsoló teljes digitális háttér.": "Ein individuelles System kann eine einfache Buchungslösung, eine Kundenverwaltung oder ein vollständiges digitales Rückgrat sein, das mehrere Abläufe verbindet.",
      "A rendszer felépítése mindig abból indul ki, hogyan működik a vállalkozás, hol vannak felesleges lépések, és mit lehet egyszerűbbé vagy átláthatóbbá tenni.": "Der Aufbau richtet sich danach, wie das Unternehmen arbeitet: Wo gibt es unnötige Schritte, und was lässt sich vereinfachen oder transparenter machen?",
      "MILYEN RENDSZEREK ÉPÍTHETŐK?": "WELCHE SYSTEME SIND MÖGLICH?",
      "Egy rendszer többféle feladatot is": "Ein System kann verschiedene Aufgaben",
      "összefoghat.": "verbinden.",
      "Az alábbi lehetőségek önállóan is működhetnek, de megfelelően összekapcsolva egyetlen átlátható digitális rendszerré állhatnak össze.": "Die folgenden Bausteine funktionieren einzeln oder lassen sich sinnvoll zu einem übersichtlichen digitalen System verbinden.",
      "Rendszertípusok": "Systemtypen",
      "Ügyfél- és CRM rendszerek": "Kunden- und CRM-Systeme",
      "Ügyfél- és CRM": "Kunden- und CRM",
      "Lead- és ajánlatkérő rendszerek": "Lead- und Angebotsanfragen",
      "Lead- és ajánlatkérő": "Lead- und Angebotsanfrage",
      "Időpontfoglalás": "Terminbuchung",
      "időpontfoglalás": "Terminbuchung",
      "Alap adminfelületek": "Einfache Verwaltungsoberflächen",
      "Automatizáció": "Automatisierung",
      "AI chatbot": "KI-Chatbot",
      "Dashboardok és kimutatások": "Dashboards und Auswertungen",
      "Összekapcsolt rendszerek": "Verbundene Systeme",
      "Mobilalkalmazások": "Mobile Apps",
      "rendszerek": "Systeme",
      "Az érdeklődők és ügyfelek adatainak egy helyen történő kezelése.": "Anfragen und Kundendaten an einem Ort verwalten.",
      "Követhető, hogy ki hol tart a folyamatban, mikor történt kapcsolatfelvétel, és mi legyen a következő lépés.": "Behalte den Überblick über den Stand, den letzten Kontakt und den nächsten Schritt.",
      "Mire használható?": "Wofür eignet es sich?",
      "érdeklődők kezelése": "Anfragen verwalten",
      "ügyféladatok rendszerezése": "Kundendaten ordnen",
      "státuszok követése": "Status verfolgen",
      "utánkövetés": "Nachfassen",
      "Például:": "Zum Beispiel:",
      "Az érdeklődésből strukturált folyamat alakítható ki.": "Aus einer Anfrage kann ein strukturierter Ablauf werden.",
      "Az érdeklődő adatait a rendszer összegyűjtheti, továbbíthatja, majd a következő lépéshez megfelelően kezelheti.": "Das System kann Anfragedaten erfassen, weiterleiten und für den nächsten Schritt aufbereiten.",
      "érdeklődés beküldése": "Anfrage absenden",
      "adatbekérés": "Daten erfassen",
      "értesítés": "Benachrichtigungen",
      "kapcsolatfelvétel": "Kontakt aufnehmen",
      "Az ügyfelek saját maguk választhatnak megfelelő időpontot.": "Kunden können selbst einen passenden Termin auswählen.",
      "A foglalások egy helyen kezelhetők, miközben a rendszer automatikusan elvégezheti a kapcsolódó feladatokat.": "Buchungen werden zentral verwaltet, während das System verbundene Aufgaben automatisch erledigt.",
      "Lehetséges funkciók:": "Mögliche Funktionen:",
      "szabad időpontok kezelése": "Verfügbarkeiten verwalten",
      "foglalások nyilvántartása": "Buchungen erfassen",
      "visszaigazolások": "Bestätigungen",
      "emlékeztetők": "Erinnerungen",
      "Alap": "Einfache",
      "adminfelületek": "Verwaltungsoberflächen",
      "Egy egyszerű háttérfelület, ahol a vállalkozás kezelheti a rendszer fontosabb részeit.": "Eine übersichtliche Oberfläche, über die das Unternehmen die wichtigsten Systembereiche verwalten kann.",
      "Nem minden esetben van szükség összetett vállalatirányítási rendszerre. Sokszor egy jól kialakított, könnyen használható adminfelület is jelentősen egyszerűsíti a napi működést.": "Nicht immer ist ein komplexes ERP-System nötig. Eine gut gestaltete, einfach bedienbare Verwaltungsoberfläche erleichtert den Alltag oft erheblich.",
      "foglalások kezelése": "Buchungen verwalten",
      "érdeklődők megtekintése": "Anfragen ansehen",
      "szolgáltatások kezelése": "Leistungen verwalten",
      "státuszok módosítása": "Status ändern",
      "Az ismétlődő feladatokat a rendszer bizonyos esetekben automatikusan elvégezheti.": "Wiederkehrende Aufgaben kann das System teilweise automatisch erledigen.",
      "Így kevesebb manuális lépésre lehet szükség, és kisebb az esélye annak, hogy egy fontos feladat kimarad.": "So sind weniger manuelle Schritte nötig und wichtige Aufgaben geraten seltener in Vergessenheit.",
      "automatikus értesítések": "Automatische Benachrichtigungen",
      "visszaigazoló e-mailek": "Bestätigungs-E-Mails",
      "státuszfrissítések": "Statusaktualisierungen",
      "ismétlődő folyamatok kezelése": "Wiederkehrende Abläufe verwalten",
      "Egy intelligens asszisztens segíthet az érdeklődőknek eligazodni és választ adni a gyakori kérdésekre.": "Ein intelligenter Assistent kann Interessenten Orientierung geben und häufige Fragen beantworten.",
      "A chatbot a vállalkozás által megadott információk alapján működhet, és akár egy kapcsolatfelvételi vagy foglalási folyamatot is elindíthat.": "Der Chatbot kann auf Basis der Unternehmensinformationen arbeiten und sogar einen Kontakt- oder Buchungsprozess starten.",
      "Használható például:": "Zum Beispiel für:",
      "gyakori kérdések megválaszolására": "häufige Fragen beantworten",
      "szolgáltatások bemutatására": "Leistungen vorstellen",
      "érdeklődők irányítására": "Interessenten weiterleiten",
      "kapcsolatfelvétel előkészítésére": "Kontakt vorbereiten",
      "Dashboardok és": "Dashboards und",
      "kimutatások": "Auswertungen",
      "A fontosabb adatok és folyamatok egy áttekinthető felületen jelenhetnek meg.": "Wichtige Daten und Abläufe werden in einer übersichtlichen Ansicht gebündelt.",
      "Így könnyebb követni, hogy mi történik a rendszerben, és hol van szükség figyelemre vagy beavatkozásra.": "So ist leichter zu erkennen, was im System geschieht und wo Aufmerksamkeit oder Eingreifen nötig ist.",
      "érdeklődők száma": "Anzahl der Anfragen",
      "foglalások": "Buchungen",
      "folyamatok állapota": "Ablaufstatus",
      "alap teljesítménymutatók": "Wichtige Kennzahlen",
      "Összekapcsolt": "Verbundene",
      "Sok esetben nem egyetlen funkcióra, hanem több folyamat összekapcsolására van szükség.": "Oft wird nicht nur eine einzelne Funktion benötigt, sondern die Verbindung mehrerer Abläufe.",
      "Egy weboldal, egy űrlap, egy CRM, egy foglalási rendszer és az automatizációk együtt már egy teljes digitális folyamatot alkothatnak.": "Eine Website, ein Formular, ein CRM, ein Buchungssystem und Automatisierungen können zusammen einen vollständigen digitalen Ablauf bilden.",
      "Példa:": "Beispiel:",
      "weboldal": "Website",
      "érdeklődői űrlap": "Anfrageformular",
      "CRM": "CRM",
      "e-mail értesítés": "E-Mail-Benachrichtigung",
      "adminfelület": "Verwaltungsoberfläche",
      "automatizált utánkövetés": "Automatisches Nachfassen",
      "Egy saját mobilalkalmazás akkor lehet hasznos, ha az ügyfeleid vagy munkatársaid rendszeresen ugyanazokat a funkciókat használják.": "Eine eigene mobile App ist sinnvoll, wenn Kunden oder Mitarbeitende regelmäßig dieselben Funktionen nutzen.",
      "Lehet benne például foglalás, rendelés, ügyfélkommunikáció, tagsági rendszer vagy értesítés.": "Mögliche Funktionen sind Buchungen, Bestellungen, Kundenkommunikation, Mitgliedschaften oder Benachrichtigungen.",
      "ügyfélalkalmazás": "Kunden-App",
      "rendelés": "Bestellungen",
      "tagsági rendszer": "Mitgliedschaftssystem",
      "értesítések": "Benachrichtigungen",
      "ügyfélkommunikáció": "Kundenkommunikation",
      "EGY RENDSZER A GYAKORLATBAN": "EIN SYSTEM IN DER PRAXIS",
      "A különálló folyamatok összeállhatnak egy": "Getrennte Abläufe können zu einem Ganzen",
      "egésszé.": "zusammenwachsen.",
      "Például egy érdeklődő útja a weboldaltól egészen az ügyfélkezelésig automatizálható és követhető.": "Zum Beispiel lässt sich der Weg einer Anfrage von der Website bis zur Kundenverwaltung automatisieren und verfolgen.",
      "Megérkezik a weboldalra": "Die Person besucht die Website",
      "Információt kér vagy kapcsolatba lép": "Sie fragt Informationen an oder nimmt Kontakt auf",
      "Az adat bekerül a rendszerbe": "Die Daten werden im System erfasst",
      "A megfelelő folyamat automatikusan elindul": "Der passende Ablauf startet automatisch",
      "A vállalkozó mindent egy helyen lát": "Das Unternehmen sieht alles an einem Ort",
      "LEHET, HOGY NEKED IS ISMERŐS": "KOMMT DIR DAS BEKANNT VOR?",
      "Érdemes": "Es lohnt sich, in",
      "rendszerben": "Systemen",
      "gondolkodni, ha a működés egyre nehezebben követhető.": "zu denken, wenn die Abläufe immer schwerer zu überblicken sind.",
      "Ugyanazokat a feladatokat újra és újra manuálisan végzed.": "Du erledigst dieselben Aufgaben immer wieder manuell.",
      "Több helyen vannak az ügyfél- vagy érdeklődői adatok.": "Kunden- und Anfragedaten liegen an verschiedenen Orten.",
      "Nehéz követni, hogy egy érdeklődő vagy ügyfél hol tart.": "Es ist schwer nachzuvollziehen, wo eine Anfrage oder ein Kunde gerade steht.",
      "Sok időpontot, foglalást vagy ismétlődő folyamatot kezelsz.": "Du verwaltest viele Termine, Buchungen oder wiederkehrende Abläufe.",
      "Több különböző eszközt használsz, amelyek nem kapcsolódnak egymáshoz.": "Du nutzt verschiedene, nicht miteinander verbundene Werkzeuge.",
      "Szeretnél kevesebb manuális adminisztrációt a mindennapokban.": "Du möchtest im Alltag weniger manuelle Verwaltung erledigen.",
      "EGY PÉLDA A GYAKORLATBÓL": "EIN BEISPIEL AUS DER PRAXIS",
      "Egy rendszer, amit a": "Ein System, das ich in der",
      "gyakorlatban": "Praxis",
      "építettem.": "entwickelt habe.",
      "Egy szépségszalon működéséhez készült: az ügyfelek, szolgáltatások és a napi működés egy átgondolt digitális rendszerben találkoznak.": "Für einen Beautysalon entwickelt: Kunden, Leistungen und tägliche Abläufe kommen in einem durchdachten digitalen System zusammen.",
      "Rendszer": "System",
      "01 / Rendszer": "01 / System",
      "Szombathely": "Szombathely",
      "Lumé": "Lumé",
      "Studió": "Studio",
      "Egy egyedi digitális rendszer, amely a szalon működéséhez igazodik, és a mindennapi folyamatokat egy helyen kapcsolja össze.": "Ein individuelles digitales System, das sich an den Salon anpasst und tägliche Abläufe an einem Ort verbindet.",
      "Megnézem a rendszert": "System ansehen",
      "Nézzük meg együtt": "Lass es uns gemeinsam ansehen",
      "Van egy folyamat a vállalkozásodban, amit": "Gibt es einen Ablauf in deinem Unternehmen, den du",
      "egyszerűbbé": "vereinfachen",
      "tennél?": "möchtest?",
      "Beszéljük át, hogyan lehetne digitálisan átgondoltabban felépíteni.": "Lass uns besprechen, wie er sich mit einer durchdachten digitalen Lösung verbessern lässt.",
      "KAPCSOLAT": "KONTAKT",
      "Kezdjük el": "Beginnen wir mit",
      "egy beszélgetéssel.": "einem Gespräch.",
      "Nem kell kész terv, csak egy gondolat. A többit együtt kibontjuk.": "Du brauchst keinen fertigen Plan, nur eine Idee. Den Rest entwickeln wir gemeinsam.",
      "Név": "Name",
      "Vállalkozás": "Unternehmen",
      "Email": "E-Mail",
      "Miben segíthetek?": "Wobei kann ich helfen?",
      "Ügyfél- és CRM rendszer": "Kunden- und CRM-System",
      "Lead- és ajánlatkérő rendszer": "Lead- und Angebotsanfragesystem",
      "Adminfelület": "Verwaltungsoberfläche",
      "Dashboard": "Dashboard",
      "Összekapcsolt rendszer": "Verbundenes System",
      "Mobilalkalmazás": "Mobile App",
      "Más / Nem tudom még": "Sonstiges / Noch unklar",
      "Üzenet": "Nachricht",
      "Küldöm": "Senden",
      "Digitális megoldások kisvállalkozásoknak.": "Digitale Lösungen für kleine Unternehmen.",
      "Adatkezelés": "Datenschutz",
      "Made with intention.": "Mit Sorgfalt gemacht.",
      "© 2026 Dávid Náray": "© 2026 Dávid Náray"
    }
  };
  const attributeTranslations = {
    en: {
      "Dávid Náray főoldal": "David Naray home",
      "Fő navigáció": "Main navigation",
      "Rendszertípusok": "System types",
      "Dunántúli Otthon ingatlanrendszer megtekintése": "View the Lumé Studio system",
      "Válassz nyelvet": "Select language"
    },
    de: {
      "Dávid Náray főoldal": "Startseite von Dávid Náray",
      "Fő navigáció": "Hauptnavigation",
      "Rendszertípusok": "Systemtypen",
      "Dunántúli Otthon ingatlanrendszer megtekintése": "Lumé-Studio-System ansehen",
      "Válassz nyelvet": "Sprache auswählen"
    }
  };
  const localeCopy = {
    en: {
      title: "Custom digital systems | David Naray",
      description: "Custom digital systems for small businesses: client management, booking, automation, AI chatbots, admin tools and connected workflows.",
      required: "Please complete the required fields.",
      openingEmail: "Opening your email application…",
      subject: "Enquiry – Custom systems",
      name: "Name",
      email: "Email",
      business: "Business",
      help: "How can I help?",
      message: "Message"
    },
    de: {
      title: "Individuelle digitale Systeme | Dávid Náray",
      description: "Individuelle digitale Systeme für kleine Unternehmen: Kundenverwaltung, Buchungen, Automatisierung, KI-Chatbots, Verwaltungsoberflächen und verbundene Abläufe.",
      required: "Bitte fülle die Pflichtfelder aus.",
      openingEmail: "Dein E-Mail-Programm wird geöffnet…",
      subject: "Anfrage – Individuelle Systeme",
      name: "Name",
      email: "E-Mail",
      business: "Unternehmen",
      help: "Wobei kann ich helfen?",
      message: "Nachricht"
    }
  };
  const languageButtons = document.querySelectorAll("[data-language]");
  let currentLocale = "en";

  try {
    const savedLocale = localStorage.getItem(localeStorageKey);
    if (["hu", "en", "de"].includes(savedLocale)) currentLocale = savedLocale;
  } catch {}

  document.documentElement.lang = currentLocale;

  const applyLocale = (locale) => {
    currentLocale = locale;
    document.documentElement.lang = locale;

    if (locale !== "hu") {
      const copy = localeCopy[locale];

      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let textNode;
      while ((textNode = walker.nextNode())) {
        const original = textNode.nodeValue;
        const trimmed = original.trim();
        const translated = textTranslations[locale][trimmed];
        if (translated) {
          const start = original.indexOf(trimmed);
          textNode.nodeValue = `${original.slice(0, start)}${translated}${original.slice(start + trimmed.length)}`;
        }
      }

      document.querySelectorAll("[aria-label]").forEach((element) => {
        const translated = attributeTranslations[locale][element.getAttribute("aria-label")];
        if (translated) element.setAttribute("aria-label", translated);
      });
    } else {
      window.location.reload();
      return;
    }

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.language === locale ? "true" : "false");
    });
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const locale = button.dataset.language;
      try {
        localStorage.setItem(localeStorageKey, locale);
      } catch {}
      window.location.reload();
    });
    button.addEventListener("keydown", (event) => {
      if (event.key === " ") {
        event.preventDefault();
        button.click();
      }
    });
  });

  if (currentLocale !== "hu") applyLocale(currentLocale);

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
      if (link.hasAttribute("data-language")) return;
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
          status.textContent = currentLocale === "hu"
            ? "Kérlek, töltsd ki a szükséges mezőket."
            : localeCopy[currentLocale].required;
        }
        return;
      }

      const helpLabel = help?.selectedOptions[0]?.textContent.trim() || "-";
      const copy = currentLocale === "hu" ? null : localeCopy[currentLocale];
      const subject = copy ? copy.subject : "Érdeklődés – Egyedi rendszerek";
      const body = [
        `${copy ? copy.name : "Név"}: ${name}`,
        `${copy ? copy.email : "E-mail"}: ${email}`,
        `${copy ? copy.business : "Vállalkozás"}: ${business || "-"}`,
        `${copy ? copy.help : "Miben segíthetek?"}: ${helpLabel}`,
        "",
        `${copy ? copy.message : "Üzenet"}:`,
        message,
      ].join("\n");

      if (status) {
        status.textContent = copy ? copy.openingEmail : "Megnyitjuk az e-mail alkalmazásodat…";
      }

      window.location.href =
        `mailto:naray.david92@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
    });
  }
});
