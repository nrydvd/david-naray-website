const content = {
  hu: {
    nav: { solutions: 'Megoldások', work: 'Munkáim', about: 'Rólam', process: 'Folyamat', contact: 'Kapcsolat' },
    hero: { eyebrow: 'Digitális gondolkodás kisvállalkozásoknak', title: 'Van egy vállalkozásod.<br><em>Nézzük meg,</em> mit lehet<br>belőle digitálisan kihozni.', intro: 'Weboldalak, digitális rendszerek, AI és automatizáció – nem önmagukért, hanem azért, hogy egyszerűbbé és jobbá tegyék a vállalkozásod működését.', primary: 'Mesélj a vállalkozásodról <span>↗</span>', secondary: 'Nézd meg, miben tudok segíteni <span>↓</span>' },
    thinking: { title: 'Nem azzal kezdünk,<br>hogy <em>mit</em> kell elkészíteni.', lead: 'Hanem azzal, hogy megértjük, mire van szükséged.', intro: 'Minden projekt egy jó beszélgetéssel kezdődik. Néhány kérdés, ami segít a lényegre fókuszálni:', questions: ['Mi működik most?','Hol veszítesz időt?','Mi nincs még rendben online?','Mit lehetne automatizálni?','Hol tudna segíteni az AI?','Mire van ténylegesen szükséged?'] },
    solutions: { title: 'Amiben<br><em>tudok</em> segíteni' },
    beginning: { eyebrow: 'Együtt többre megyünk', title: 'Egy jó weboldal<br>csak a <em>kezdet.</em>', body: 'Lehet, hogy weboldalra van szükséged. Lehet, hogy egy egyszerűbb foglalási rendszerre. Lehet, hogy néhány automatizált folyamatra. Vagy éppen arra, hogy végre átlásd, mi működik és mi nem.', signoff: 'Megnézzük együtt. Kitaláljuk. Megépítem.' },
    process: { title: 'Így dolgozunk<br><em>együtt.</em>' }, work: { title: 'Munkáim', intro: 'Néhány projekt, amin dolgoztam<br>vagy amit saját magam építettem.' },
    about: { title: 'Ki van a weboldal<br><em>mögött?</em>', body: '<p>Dávid vagyok.</p><p>Olyan digitális megoldásokat szeretek építeni, amelyek nemcsak jól néznek ki, hanem valóban hasznosak is.</p><p>Weboldalak, rendszerek, AI és automatizáció segítségével abban segítek kisvállalkozásoknak, hogy egyszerűbben, modernebben és hatékonyabban működjenek.</p>', link: 'Beszéljünk <span>↗</span>' },
    philosophy: { title: 'Nem kell mindent<br>digitalizálni.<br><em>Csak azt, amitől jobb<br>lesz a vállalkozásod.</em>' },
    cta: { title: 'Van egy ötleted?<br><em>Beszéljünk róla.</em>', body: 'Írd meg röviden, mivel foglalkozol és miben szeretnél fejlődni. Innen már én is tudok kérdezni.', button: 'Mesélj a vállalkozásodról <span>↗</span>' },
    contact: { title: 'Kezdjük el<br><em>egy beszélgetéssel.</em>', body: 'Nem kell kész brief, csak egy gondolat. A többit együtt kibontjuk.' },
    form: { name: 'Név', business: 'Vállalkozás', email: 'Email', help: 'Miben tudok segíteni?', message: 'Üzenet', submit: 'Küldöm <span>↗</span>', success: 'Köszönöm az üzeneted! Hamarosan jelentkezem.', options: ['Weboldal / landing oldal','Automatizáció','AI megoldás','Digitális konzultáció'] },
    footer: { tagline: 'Digitális megoldások kisvállalkozásoknak.' }, chat: { open: 'Beszélgessünk', message: 'Szia! A digitális segítőd hamarosan itt lesz. Addig is írj Dávidnak közvetlenül.' },
    services: [{title:'Weboldalak & landing oldalak', tag:'WEBSITE', text:'Tiszta, karakteres weboldalak, amelyek nemcsak szépek, hanem dolgoznak is érted.'},{title:'Online jelenlét',tag:'DIGITAL PRESENCE',text:'Átgondolt digitális jelenlét, amely összehangolja a márkádat, a tartalmadat és a céljaidat.'},{title:'AI megoldások',tag:'AI SOLUTIONS',text:'Érthető, használható AI-eszközök, amelyek időt adnak vissza a vállalkozásodnak.'},{title:'Automatizáció',tag:'AUTOMATION',text:'Ismétlődő folyamatok egyszerűsítése, hogy a fontos munkára figyelhess.'},{title:'Digitális tanácsadás',tag:'DIGITAL CONSULTING',text:'Külső szem, jó kérdések és egy tisztább fejlesztési irány.'}],
    processItems:[['Megismerlek','Megértem a vállalkozásod és azt, hogyan működsz.'],['Megnézzük, hol tartasz','Átnézzük a jelenlegi online jelenléted és folyamataid.'],['Kitaláljuk, mire van szükséged','Nem adok el neked olyat, amire nincs szükséged.'],['Megépítem / beállítom','Elkészítem a szükséges digitális megoldást.'],['Finomítjuk','A cél nem az, hogy elkészüljön. Hanem hogy működjön.']],
    projects:[['Business Website','Website / 2026'],['Retreat Website','Digital presence / 2026'],['Landing Page','Conversion / 2026'],['Digital System','Automation / 2026']]
  },
  en: {
    nav: { solutions:'Solutions', work:'Work', about:'About', process:'Process', contact:'Contact' }, hero:{ eyebrow:'Digital thinking for small businesses', title:'You have a business.<br><em>Let’s see</em> what it can<br>become online.', intro:'Websites, digital systems, AI and automation – not for their own sake, but to make the way your business works simpler and better.', primary:'Tell me about your business <span>↗</span>', secondary:'See how I can help <span>↓</span>' }, thinking:{ title:'We don’t start with<br>what needs to be <em>made.</em>', lead:'We start by understanding what you actually need.', intro:'Every project starts with a good conversation. A few questions to help us focus on what matters:' }, solutions:{ title:'How I can<br><em>help</em>' }, beginning:{ eyebrow:'More is possible together', title:'A good website<br>is only the <em>start.</em>', body:'Maybe you need a website. Maybe a simple booking system. Maybe a few automated workflows. Or maybe you need to finally see what is working and what is not.', signoff:'We look at it together. Figure it out. Build it.' }, process:{ title:'How we work<br><em>together.</em>' }, work:{ title:'Selected work', intro:'A few projects I have worked on<br>or built from the ground up.' }, about:{ title:'Who is behind<br>the <em>website?</em>', body:'<p>I’m Dávid.</p><p>I like building digital solutions that don’t just look good, but are genuinely useful.</p><p>Through websites, systems, AI and automation, I help small businesses work in simpler, more modern and more effective ways.</p>', link:'Let’s talk <span>↗</span>' }, philosophy:{ title:'You don’t need to<br>digitalise everything.<br><em>Only what makes<br>your business better.</em>' }, cta:{ title:'Have an idea?<br><em>Let’s talk about it.</em>', body:'Tell me briefly what you do and where you would like to grow. From there, I can start asking the right questions.', button:'Tell me about your business <span>↗</span>' }, contact:{ title:'Let’s start with<br><em>a conversation.</em>', body:'You don’t need a finished brief, just a thought. We can unfold the rest together.' }, form:{ name:'Name', business:'Business', email:'Email', help:'How can I help?', message:'Message', submit:'Send it <span>↗</span>', success:'Thanks for your message! I’ll get back to you soon.' }, footer:{ tagline:'Digital solutions for small businesses.' }, chat:{ open:'Let’s talk', message:'Hi! Your digital assistant will be here soon. For now, reach Dávid directly.' }, services: [
    ['Websites & landing pages', 'WEBSITE', 'Clear, distinctive websites that do more than look good: they work for you.'],
    ['Digital presence', 'DIGITAL PRESENCE', 'A considered digital presence that aligns your brand, content and goals.'],
    ['AI solutions', 'AI SOLUTIONS', 'Practical, understandable AI tools that give time back to your business.'],
    ['Automation', 'AUTOMATION', 'Simpler recurring workflows, so you can focus on the work that matters.'],
    ['Digital consulting', 'DIGITAL CONSULTING', 'An outside perspective, good questions and a clearer direction.']
  ].map((service) => ({ title: service[0], tag: service[1], text: service[2] })),
  processItems:[['I get to know you','I understand your business and how it works.'],['We see where you are','We review your current online presence and workflows.'],['We define what you need','I will not sell you something you do not need.'],['I build / set it up','I create the digital solution your business needs.'],['We refine it','The goal is not to finish. The goal is to make it work.']],
  projects:[['Business Website','Website / 2026'],['Retreat Website','Digital presence / 2026'],['Landing Page','Conversion / 2026'],['Digital System','Automation / 2026']]
  }
};
content.de = {
  nav: { solutions: 'Leistungen', work: 'Arbeiten', about: 'Über mich', process: 'Ablauf', contact: 'Kontakt' },
  hero: {
    eyebrow: 'Digitales Denken für kleine Unternehmen',
    title: 'Du hast ein Unternehmen.<br><em>Finden wir heraus,</em> was digital<br>daraus werden kann.',
    intro: 'Websites, digitale Systeme, KI und Automatisierung: nicht um ihrer selbst willen, sondern damit dein Unternehmen einfacher und besser arbeiten kann.',
    primary: 'Erzähl mir von deinem Unternehmen',
    secondary: 'So kann ich helfen'
  },
  thinking: {
    title: 'Wir beginnen nicht mit der Frage,<br>was <em>gemacht</em> werden soll.',
    lead: 'Sondern damit, zu verstehen, was du wirklich brauchst.',
    intro: 'Jedes Projekt beginnt mit einem guten Gespräch. Diese Fragen helfen uns, uns auf das Wesentliche zu konzentrieren:',
    questions: ['Was funktioniert bereits?', 'Wo verlierst du Zeit?', 'Was fehlt online noch?', 'Was ließe sich automatisieren?', 'Wo könnte KI helfen?', 'Was brauchst du wirklich?']
  },
  solutions: { title: 'Dabei kann ich<br><em>helfen</em>' },
  beginning: {
    eyebrow: 'Gemeinsam erreichen wir mehr',
    title: 'Eine gute Website<br>ist erst der <em>Anfang.</em>',
    body: 'Vielleicht brauchst du eine Website. Vielleicht ein einfaches Buchungssystem oder einige automatisierte Abläufe. Vielleicht möchtest du endlich erkennen, was funktioniert und was nicht.',
    signoff: 'Wir schauen es uns gemeinsam an. Finden eine Lösung. Ich setze sie um.'
  },
  process: { title: 'So arbeiten wir<br><em>zusammen.</em>' },
  work: { title: 'Ausgewählte Arbeiten', intro: 'Einige Projekte, an denen ich gearbeitet<br>oder die ich selbst aufgebaut habe.' },
  about: {
    title: 'Wer steckt<br><em>hinter der Website?</em>',
    body: '<p>Ich bin Dávid.</p><p>Ich entwickle gern digitale Lösungen, die nicht nur gut aussehen, sondern wirklich nützlich sind.</p><p>Mit Websites, Systemen, KI und Automatisierung unterstütze ich kleine Unternehmen dabei, einfacher, moderner und effizienter zu arbeiten.</p>',
    link: 'Lass uns sprechen'
  },
  philosophy: { title: 'Du musst nicht alles<br>digitalisieren.<br><em>Nur das, was dein<br>Unternehmen besser macht.</em>' },
  cta: {
    title: 'Du hast eine Idee?<br><em>Lass uns darüber sprechen.</em>',
    body: 'Erzähl mir kurz, was du machst und worin du dich weiterentwickeln möchtest. Von dort aus kann ich die passenden Fragen stellen.',
    button: 'Erzähl mir von deinem Unternehmen'
  },
  contact: {
    title: 'Lass uns mit<br><em>einem Gespräch beginnen.</em>',
    body: 'Du brauchst kein fertiges Briefing, nur einen Gedanken. Den Rest entwickeln wir gemeinsam.'
  },
  form: {
    name: 'Name', business: 'Unternehmen', email: 'E-Mail', help: 'Wobei kann ich helfen?', message: 'Nachricht',
    submit: 'Senden', success: 'Danke für deine Nachricht! Ich melde mich bald.',
    options: ['Website / Landingpage', 'Automatisierung', 'KI-Lösung', 'Digitale Beratung']
  },
  footer: { tagline: 'Digitale Lösungen für kleine Unternehmen.' },
  chat: { open: 'Lass uns sprechen', message: 'Hallo! Dein digitaler Assistent ist bald hier. Bis dahin kannst du Dávid direkt schreiben.' },
  services: [
    { title: 'Websites & Landingpages', tag: 'WEBSITE', text: 'Klare, ausdrucksstarke Websites, die nicht nur gut aussehen, sondern für dich arbeiten.' },
    { title: 'Digitale Präsenz', tag: 'DIGITAL PRESENCE', text: 'Ein durchdachter digitaler Auftritt, der Marke, Inhalte und Ziele zusammenführt.' },
    { title: 'KI-Lösungen', tag: 'AI SOLUTIONS', text: 'Verständliche, praktische KI-Werkzeuge, die deinem Unternehmen Zeit zurückgeben.' },
    { title: 'Automatisierung', tag: 'AUTOMATION', text: 'Wiederkehrende Abläufe vereinfachen, damit du dich auf das Wesentliche konzentrieren kannst.' },
    { title: 'Digitale Beratung', tag: 'DIGITAL CONSULTING', text: 'Ein Blick von außen, gute Fragen und eine klarere Richtung für die Weiterentwicklung.' }
  ],
  processItems: [
    ['Ich lerne dich kennen', 'Ich verstehe dein Unternehmen und wie du arbeitest.'],
    ['Wir schauen, wo du stehst', 'Wir prüfen deinen aktuellen Online-Auftritt und deine Abläufe.'],
    ['Wir klären, was du brauchst', 'Ich verkaufe dir nichts, was du nicht brauchst.'],
    ['Ich entwickle / richte es ein', 'Ich setze die passende digitale Lösung um.'],
    ['Wir verfeinern sie', 'Es geht nicht nur darum, fertig zu werden. Es geht darum, dass es funktioniert.']
  ],
  projects: [['BUSINESS WEBSITE', '', 'Business-Website'], ['LANDINGPAGE', '', 'landing-pages'], ['INDIVIDUELLE SYSTEME', '', 'Egyedi-Rendszerek'], ['KOMPLETTSYSTEME', '', 'Komplett-Rendszerek'], ['NDSYS', '', 'ndsys']]
};
content.de.projects = [['BUSINESS WEBSITE', '', 'Business-Website'], ['LANDINGPAGE', '', 'landing-pages'], ['INDIVIDUELLE SYSTEME', '', 'Egyedi-Rendszerek'], ['KOMPLETTSYSTEME', '', 'Komplett-Rendszerek'], ['NDSYS', '', 'ndsys']];
content.hu.nav.navigationLabel = 'Fő navigáció';
content.hu.nav.brandLabel = 'Dávid Náray, kezdőlap';
content.hu.nav.menuLabel = 'Menü megnyitása';
content.hu.nav.languageLabel = 'Nyelvváltó';
content.en.nav.navigationLabel = 'Main navigation';
content.en.nav.brandLabel = 'Dávid Naray home page';
content.en.nav.menuLabel = 'Open menu';
content.en.nav.languageLabel = 'Language selector';
content.de.nav.navigationLabel = 'Hauptnavigation';
content.de.nav.brandLabel = 'Startseite von Dávid Naray';
content.de.nav.menuLabel = 'Menü öffnen';
content.de.nav.languageLabel = 'Sprachauswahl';
content.hu.hero.artNote = 'Ötletekből<br>hasznos<br>dolgok.';
content.en.hero.artNote = 'Ideas<br>into<br>useful<br>things.';
content.de.hero.artNote = 'Aus Ideen<br>werden<br>nützliche<br>Lösungen.';
content.hu.hero.artCaption = '01 / 05<br><small>STRATÉGIA<br>ELŐBB, AZTÁN<br>MEGVALÓSÍTÁS</small>';
content.en.hero.artCaption = '01 / 05<br><small>STRATEGY<br>BEFORE<br>EXECUTION</small>';
content.de.hero.artCaption = '01 / 05<br><small>STRATEGIE<br>VOR DER<br>UMSETZUNG</small>';
content.hu.hero.scrollCue = 'Görgess tovább és fedezd fel';
content.en.hero.scrollCue = 'Scroll to explore';
content.de.hero.scrollCue = 'Weiter scrollen und entdecken';
content.hu.cta.sticker = 'VALÓSÍTSUK<br>MEG<br>JÓL';
content.en.cta.sticker = 'LET’S<br>MAKE<br>IT WORK';
content.de.cta.sticker = 'LASS ES<br>GUT<br>FUNKTIONIEREN';
content.hu.footer.credit = 'Tudatosan készült.';
content.en.footer.credit = 'Made with intention.';
content.de.footer.credit = 'Mit Bedacht gestaltet.';
content.hu.about.photoCaption = 'Portré / 2026';
content.en.about.photoCaption = 'Portrait / 2026';
content.de.about.photoCaption = 'Porträt / 2026';
content.hu.sections = { thinking: '01 <span>—</span> GONDOLKODÁSMÓD', solutions: '02 <span>—</span> AMIBEN SEGÍTEK', process: '03 <span>—</span> EGYÜTTMŰKÖDÉS', about: '05 <span>—</span> A WEBOLDAL MÖGÖTT', philosophy: '06 <span>—</span> EGY GONDOLAT', cta: '07 <span>—</span> KÖVETKEZŐ LÉPÉS', contact: '08 <span>—</span> KAPCSOLAT', imprint: '10 <span>—</span> JOGI INFORMÁCIÓK' };
content.en.sections = { thinking: '01 <span>—</span> HOW I THINK', solutions: '02 <span>—</span> WHAT I DO', process: '03 <span>—</span> HOW WE WORK', about: '05 <span>—</span> THE PERSON BEHIND THE SITE', philosophy: '06 <span>—</span> ONE THOUGHT', cta: '07 <span>—</span> NEXT STEP', contact: '08 <span>—</span> CONTACT', imprint: '10 <span>—</span> LEGAL INFORMATION' };
content.de.sections = { thinking: '01 <span>—</span> MEINE HERANGEHENSWEISE', solutions: '02 <span>—</span> MEINE LEISTUNGEN', process: '03 <span>—</span> ZUSAMMENARBEIT', about: '05 <span>—</span> HINTER DER WEBSITE', philosophy: '06 <span>—</span> EIN GEDANKE', cta: '07 <span>—</span> NÄCHSTER SCHRITT', contact: '08 <span>—</span> KONTAKT', imprint: '10 <span>—</span> RECHTLICHE ANGABEN' };
content.hu.legal = { imprintTitle: 'Impresszum', privacyLink: 'Adatkezelési tájékoztató', addressLabel: 'Székhely:', taxLabel: 'Adószám:', emailLabel: 'Email:', phoneLabel: 'Telefon:', activityLabel: 'Tevékenység:', activity: 'eseti megbízás keretében végzett digitális szolgáltatás' };
content.en.legal = { imprintTitle: 'Legal notice', privacyLink: 'Privacy notice', addressLabel: 'Address:', taxLabel: 'Tax number:', emailLabel: 'Email:', phoneLabel: 'Phone:', activityLabel: 'Business activity:', activity: 'Digital services provided on a project basis' };
content.de.legal = { imprintTitle: 'Impressum', privacyLink: 'Datenschutzhinweise', addressLabel: 'Anschrift:', taxLabel: 'Steuernummer:', emailLabel: 'E-Mail:', phoneLabel: 'Telefon:', activityLabel: 'Tätigkeit:', activity: 'Digitale Dienstleistungen im Rahmen einzelner Aufträge' };
content.hu.cookie = { aria: 'Helyi tárolási tájékoztató', message: 'Ez az oldal a beállításod megjegyzéséhez böngészőben tárolt helyi tárolót használ.', accept: 'Rendben' };
content.en.cookie = { aria: 'Local storage notice', message: 'This site uses browser local storage to remember your preference.', accept: 'Understood' };
content.de.cookie = { aria: 'Hinweis zum lokalen Speicher', message: 'Diese Website nutzt den lokalen Browserspeicher, um deine Einstellung zu speichern.', accept: 'Verstanden' };
content.hu.chat.close = 'Chat bezárása';
content.en.chat.close = 'Close chat';
content.de.chat.close = 'Chat schließen';
content.hu.form.consentPrefix = 'Elolvastam az';
content.en.form.consentPrefix = 'I have read the';
content.de.form.consentPrefix = 'Ich habe die';
content.hu.form.consentLink = 'adatkezelési tájékoztatót';
content.en.form.consentLink = 'privacy notice';
content.de.form.consentLink = 'Datenschutzhinweise gelesen';
content.hu.form.error = 'Az üzenetet nem sikerült elküldeni. Kérlek, írj közvetlenül emailben.';
content.en.form.error = 'Your message could not be sent. Please email me directly.';
content.de.form.error = 'Deine Nachricht konnte nicht gesendet werden. Schreib mir bitte direkt per E-Mail.';
content.en.thinking.questions = ['What is working now?','Where are you losing time?','What is still missing online?','What could be automated?','Where could AI help?','What do you actually need?'];
content.en.form.options = ['Website / landing page','Automation','AI solution','Digital consulting'];
function removeArrowCharacters(value){if(Array.isArray(value))return value.map(removeArrowCharacters);if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,removeArrowCharacters(item)]));return typeof value==='string'?value.replace(/[↗↓→←↘↙]/g,'').replace(/<span><\/span>/g,''):value}
Object.assign(content,removeArrowCharacters(content));
content.hu.projects[1][0] = 'Lúme';
content.en.projects[1][0] = 'Lúme';
content.hu.projects = [['ÜZLETI WEBOLDAL','','Business-Website'],['LANDING PAGE','','landing-pages'],['EGYEDI RENDSZEREK','','Egyedi-Rendszerek'],['KOMPLETT RENDSZEREK','','Komplett-Rendszerek'],['NDSYS','','ndsys']];
content.en.projects = [['BUSINESS WEBSITE','','Business-Website'],['LANDING PAGE','','landing-pages'],['CUSTOM SYSTEMS','','Egyedi-Rendszerek'],['COMPLETE SYSTEMS','','Komplett-Rendszerek'],['NDSYS','','ndsys']];
let currentLanguage='hu';
const $=selector=>document.querySelector(selector);
function getPath(object,path){return path.split('.').reduce((value,key)=>value?.[key],object)}
function renderDynamic(language){const data=content[language];document.documentElement.lang=language;document.querySelectorAll('[data-i18n]').forEach(element=>{const value=getPath(data,element.dataset.i18n);if(value!==undefined)element.innerHTML=value});document.querySelectorAll('[data-i18n-aria-label]').forEach(element=>{const value=getPath(data,element.dataset.i18nAriaLabel);if(typeof value==='string')element.setAttribute('aria-label',value)});$('#question-list').innerHTML=data.thinking.questions.map(question=>`<li>${question}</li>`).join('');$('#help-select').innerHTML=data.form.options.map((option,index)=>`<option value="${['website','automation','ai','consulting'][index]}">${option}</option>`).join('');$('#service-list').innerHTML=data.services.map((service,index)=>`<article class="service-item reveal"><span class="service-number">0${index+1}</span><strong class="service-name">${service.title}</strong><span class="service-description">${service.text}</span><span class="service-arrow">↗</span></article>`).join('');$('#process-list').innerHTML=data.processItems.map((item,index)=>`<article class="process-item reveal"><span class="number">0${index+1}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('');$('#project-grid').innerHTML=data.projects.map(project=>project[0]==='NDSYS'?`<article class="project reveal nds-project" data-project-title="${project[0]}" data-project-url="${project[2]||''}"><div class="project-visual"><button class="nds-button" type="button" aria-label="NDsYs"><span>NDsYs</span></button></div></article>`:`<article class="project reveal" data-project-title="${project[0]}" data-project-url="${project[2]||''}"><div class="project-visual"><i class="project-frame-outside" aria-hidden="true"></i><span class="project-frame-window" aria-hidden="true"><i class="project-frame-inside"></i></span><span class="project-label">${project[0].replace(' ','<br>')}</span></div></article>`).join('');document.querySelectorAll('.lang-button').forEach(button=>button.classList.toggle('is-active',button.dataset.lang===language));observeReveals();bindNdsInteraction();bindProjectInteractions()}
function observeReveals(){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal:not(.is-visible)').forEach(element=>observer.observe(element))}
if($('#question-list'))renderDynamic(currentLanguage);
function linkProjects(){document.querySelectorAll('.project').forEach(project=>{const url=project.dataset.projectUrl;if(url&&!project.querySelector(':scope > a'))project.innerHTML=`<a href="${url}" >${project.innerHTML}</a>`})}
if($('#project-grid'))linkProjects();
if($('#project-grid'))new MutationObserver(linkProjects).observe($('#project-grid'),{childList:true})
function bindNdsInteraction(){const grid=$('#project-grid');const button=grid?.querySelector('.nds-button');if(!grid||!button)return;const setActive=active=>{grid.classList.toggle('nds-active',active);button.classList.toggle('is-active',active);grid.style.setProperty('--nds-frame-opacity',active?'1':'0');grid.style.setProperty('--nds-frame-scale',active?'1':'1.04');grid.querySelectorAll('.project-label,.project-frame-outside,.project-frame-inside').forEach(element=>{element.style.color=active?'#B87333':'';element.style.borderColor=active?'#B87333':''})};button.addEventListener('pointerenter',()=>setActive(true));button.addEventListener('pointerleave',()=>setActive(false));button.addEventListener('focus',()=>setActive(true));button.addEventListener('blur',()=>setActive(false))}
function bindProjectInteractions(){const grid=$('#project-grid');if(!grid)return;grid.addEventListener('pointermove',event=>{const visual=event.target.closest?.('.project:nth-child(-n+4) .project-visual');grid.querySelectorAll('.project-hover').forEach(project=>{if(!visual||project!==visual.closest('.project'))project.classList.remove('project-hover')});if(visual)visual.closest('.project').classList.add('project-hover')});grid.addEventListener('pointerleave',()=>grid.querySelectorAll('.project-hover').forEach(project=>project.classList.remove('project-hover')))}
window.addEventListener('scroll',()=>$('.site-header').classList.toggle('is-scrolled',window.scrollY>20),{passive:true});
$('.menu-toggle').addEventListener('click',()=>{$('.nav-panel').classList.toggle('is-open');$('.menu-toggle').setAttribute('aria-expanded',$('.nav-panel').classList.contains('is-open'))});document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>$('.nav-panel').classList.remove('is-open')));
if($('#question-list'))document.querySelectorAll('.lang-button').forEach(button=>button.addEventListener('click',()=>{currentLanguage=button.dataset.lang;renderDynamic(currentLanguage)}));
if($('#contact-form'))$('#contact-form').addEventListener('submit',async event=>{event.preventDefault();const form=event.target;const success=$('.form-success');const submitButton=form.querySelector('[type="submit"]');submitButton.disabled=true;success.textContent='';try{const response=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(form)))});const result=await response.json();if(!response.ok||!result.success)throw new Error(result.message||'Hiba történt.');success.textContent=content[currentLanguage].form.success;form.reset()}catch(error){success.textContent=content[currentLanguage].form.error}finally{submitButton.disabled=false}});
const cookieBanner=$('#cookie-banner');if(cookieBanner){if(localStorage.getItem('cookie-consent')==='accepted')cookieBanner.hidden=true;$('#cookie-accept').addEventListener('click',()=>{localStorage.setItem('cookie-consent','accepted');cookieBanner.hidden=true})}
const chatbot=$('.chatbot');
if(chatbot){
  let conversationHistory=[];
  const toggle=chatbot.querySelector('.chatbot-toggle');
  const close=chatbot.querySelector('.chat-close');
  const form=chatbot.querySelector('.chat-form');
  const input=chatbot.querySelector('.chat-input');
  const send=chatbot.querySelector('.chat-send');
  const messages=chatbot.querySelector('.chat-messages');
  const copy={
    hu:{placeholder:'Írd ide az üzeneted…',send:'Üzenet küldése',loading:'Válasz érkezik…',error:'Most nem sikerült választ kapni. Kérlek, próbáld újra.'},
    en:{placeholder:'Type your message…',send:'Send message',loading:'Waiting for a reply…',error:'I could not get a reply just now. Please try again.'},
    de:{placeholder:'Schreib deine Nachricht…',send:'Nachricht senden',loading:'Antwort wird geladen…',error:'Ich konnte gerade keine Antwort erhalten. Bitte versuche es erneut.'}
  };
  const getChatCopy=()=>copy[document.documentElement.lang]||copy.hu;
  const updateChatLabels=()=>{
    const labels=getChatCopy();
    input.placeholder=labels.placeholder;
    input.setAttribute('aria-label',labels.placeholder);
    send.setAttribute('aria-label',labels.send);
  };
  const appendMessage=(text,role)=>{
    const message=document.createElement('div');
    message.className='chat-message';
    message.dataset.role=role;
    message.textContent=text;
    messages.append(message);
    messages.scrollTop=messages.scrollHeight;
    return message;
  };
  updateChatLabels();
  new MutationObserver(updateChatLabels).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  toggle.addEventListener('click',()=>{
    chatbot.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded',String(chatbot.classList.contains('is-open')));
  });
  close.addEventListener('click',()=>{
    chatbot.classList.remove('is-open');
    toggle.setAttribute('aria-expanded','false');
  });
  input.addEventListener('keydown',event=>{
    if(event.key==='Enter'){
      event.preventDefault();
      form.requestSubmit();
    }
  });
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    const message=input.value.trim();
    if(!message||send.disabled)return;
    appendMessage(message,'user');
    conversationHistory.push({role:'user',content:message});
    input.value='';
    input.disabled=true;
    send.disabled=true;
    const loading=appendMessage(getChatCopy().loading,'assistant');
    loading.setAttribute('aria-busy','true');
    try{
      const response=await fetch('https://david-chatbot.david-naray92.workers.dev/',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({message,history:conversationHistory})
      });
      const data=await response.json();
      if(!response.ok||data.success!==true||typeof data.answer!=='string'||!data.answer.trim())throw new Error('Invalid chatbot response');
      loading.remove();
      const assistantMessage=data.answer.trim();
      appendMessage(assistantMessage,'assistant');
      conversationHistory.push({role:'assistant',content:assistantMessage});
    }catch(error){
      loading.remove();
      appendMessage(getChatCopy().error,'assistant');
    }finally{
      input.disabled=false;
      send.disabled=false;
      input.focus();
    }
  });
}
