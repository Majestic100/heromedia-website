// ============================================
// HERO MEDIA — interaction & animations
// ============================================

// ============================================
// i18n — language switcher (EN / DA)
// English lives in the HTML (source of truth);
// only the Danish overrides are defined here.
// ============================================
const I18N_DA = {
  // --- Meta ---
  'meta.title': 'Hero Media | Vi hjælper de ambitiøse med at overgå gennemsnittet',
  'meta.description': 'Hero Media er et premium digitalt marketingbureau, der hjælper ambitiøse virksomheder med at vokse online med målbare resultater.',

  // --- Nav ---
  'nav.home': 'Forside',
  'nav.about': 'Om os',
  'nav.cases': 'Cases',
  'nav.cta': 'Lad os vækste din bundlinje',

  // --- Hero ---
  'hero.title': `Vi hjælper de <span class="muted">ambitiøse med at overgå</span> gennemsnittet.`,
  'hero.sub': 'Konverteringsfokuseret digital marketing. Vi udvikler strategierne, bygger funnels og skaber det indhold, der rent faktisk flytter nålen, så dit brand vokser dér, hvor det betyder mest: på bundlinjen.',
  'hero.cta': 'Book et gratis uforpligtende møde',
  'trust.rating': `<strong>4.7</strong> <span>fra</span>`,
  'trust.line': `+30 brands på <span class="trust-brand">★ Trustpilot</span>`,

  // --- Brand marquee ---
  'brand.head': `Brands i vækst på <strong>10+ markeder</strong> stoler på os`,

  // --- About ---
  'about.tag': '• Om Hero Media',
  'about.title': 'Det oplagte valg for virksomheder, der vil vokse online.',
  'about.body': 'Vi hjælper virksomheder med at vokse deres online tilstedeværelse med et klart fokus på at levere målbare resultater. Alt, hvad vi skaber, er designet til at flytte dit brand fremad.',
  'markets.label': `Live på tværs af <strong>10+ markeder</strong>`,

  // --- Countries (about marquee) ---
  'country.dk': 'Danmark',
  'country.no': 'Norge',
  'country.se': 'Sverige',
  'country.nl': 'Holland',
  'country.tr': 'Tyrkiet',
  'country.ae': 'UAE',
  'country.us': 'USA',
  'country.fi': 'Finland',
  'country.de': 'Tyskland',
  'country.be': 'Belgien',

  // --- Framer section ---
  'framer.heading.lead': 'Vi hjælper brands med at forvandle annoncekroner til vækst, der',
  'framer.rotator.1': 'skiller sig ud.',
  'framer.rotator.2': 'skalerer hurtigt.',
  'framer.rotator.3': 'dominerer.',
  'framer.rotator.4': 'konverterer.',
  'framer.trust.label': 'Vi arbejder med brands i',
  'framer.trust.dk': '🇩🇰 Danmark',
  'framer.trust.se': '🇸🇪 Sverige',
  'framer.trust.no': '🇳🇴 Norge',
  'framer.trust.nl': '🇳🇱 Holland',
  'framer.trust.us': '🇺🇸 USA',
  'framer.trust.ae': '🇦🇪 UAE',
  'framer.trust.more': '+ 4 flere',
  'framer.stat.1': 'USD annoncebudget på tværs af 10 internationale markeder',
  'framer.stat.2': 'Års erfaring',
  'framer.stat.3': 'USD månedligt annoncebudget styret på verdensplan',
  'framer.meta.updates': `Opdateres hvert <strong>5. minut</strong>`,
  'framer.meta.synced': `Sidst synkroniseret <strong>1. maj 2026</strong>`,

  // --- Cases ---
  'cases.tag': '• Resultater',
  'cases.title': 'Udvalgte cases',
  'cases.sub': 'Et øjebliksbillede af, hvad der sker, når ambitioner møder eksekvering.',
  'case.1.desc': 'Skalerede bookinger for et premium tatoveringsstudie med funnel-optimering og lokalt målrettede annoncer.',
  'case.1.m1': '184% Flere bookinger',
  'case.1.m2': '3,4x Leadvolumen',
  'case.2.desc': 'Øgede kundeengagementet med en stærk digital tilstedeværelse og målrettede kampagner.',
  'case.2.m1': '151% Øget trafik',
  'case.2.m2': '262% Vækst i salg',
  'case.3.desc': 'Byggede en ny hjemmeside og voksede deres tilstedeværelse gennem annoncer skræddersyet til deres målgruppe.',
  'case.3.m1': '57% Hjemmesidebesøgende',
  'case.3.m2': '92% Øget omsætning',
  'case.4.desc': 'Løftede brandet med paid social og konverteringsdrevne kreativer og skalerede budgettet profitabelt.',
  'case.4.m1': '4,2x ROAS',
  'case.4.m2': '118% Omsætningsvækst',
  'case.5.desc': 'Byggede en medlemsmaskine med lead-funnels og retargeting, der fylder fitnesscentret.',
  'case.5.m1': '240% Flere medlemskaber',
  'case.5.m2': '67% Lavere CPA',
  'case.6.desc': 'Lancerede en ny webshop og skalerede den med brand-tilpassede kampagner og CRO-forbedringer.',
  'case.6.m1': '3,1x Online salg',
  'case.6.m2': '+92% Brandkendskab',

  // --- Process ---
  'process.tag': '• Sådan arbejder vi',
  'process.title': `Valgt af virksomheder<br />der værdsætter <em>handling frem for ord</em>.`,
  'process.sub': 'Profit er ikke en eftertanke. Det er kernen i hver strategi og indbygget i alt, hvad vi gør.',
  'stage.1.tag': 'Fase 1',
  'stage.1.title': 'Kreativ strategi',
  'stage.1.body': 'Vi definerer den strategiske retning, der styrer alt, hvad vi gør. Sammen afdækker vi dine mål, din målgruppe og din unikke positionering for at udvikle et kreativt koncept, der sætter tonen for dine kampagner.',
  'stage.2.tag': 'Fase 2',
  'stage.2.title': 'Content',
  'stage.2.body': 'Vi skaber de assets, der bringer din strategi til live. Fra tekstforfatning til visuals udvikler vi indhold, der er designet til at engagere din målgruppe og kommunikere dit budskab klart og effektivt.',
  'stage.3.tag': 'Fase 3',
  'stage.3.title': 'Funnels',
  'stage.3.body': 'Vi designer og bygger hele kampagnemotoren – kortlægger funnels, definerer kampagnestrukturen og opsætter annoncer, der guider din målgruppe fra første touchpoint til konvertering.',
  'stage.4.tag': 'Fase 4',
  'stage.4.title': 'Post Production',
  'stage.4.body': 'Vi forfiner og færdiggør hvert asset og kampagneelement og sikrer, at alt er poleret, afstemt og klar til lancering. Kvalitet og konsistens er kernen i denne sidste fase.',

  // --- Results ---
  'results.tag': '• Dokumenterede resultater',
  'results.title': `Tal der <em>flytter virksomheder</em> fremad.`,
  'results.sub': 'Rigtige kampagner. Rigtig omsætning. Rigtige brands, der satser på os – og vinder.',
  'results.agg.revenue': 'Genereret omsætning',
  'results.agg.leads': 'Gns. leadvækst',
  'results.agg.roas': 'Gns. ROAS',
  'results.agg.brands': 'Brands betjent',
  'result.r1.headline': 'Flere bookinger på 90 dage',
  'result.r1.tag': 'Skønhed & wellness',
  'result.r2.headline': 'Salgsvækst efter lancering',
  'result.r2.tag': 'E-handel',
  'result.r3.headline': 'Øget omsætning fra paid',
  'result.r3.tag': 'Sundhed',
  'result.r4.headline': 'ROAS skaleret profitabelt',
  'result.r4.tag': 'E-handel',
  'result.r5.headline': 'Flere medlemskaber, lavere CPA',
  'result.r5.tag': 'Fitness',
  'result.r6.headline': 'Online salg efter relancering',
  'result.r6.tag': 'E-handel',
  'results.featured.tag': '• Udvalgte cases',
  'bento.head': `Historierne bag <em>tallene</em>.`,
  'bento.hero.eyebrow': 'Case 01 · Skønhed & wellness',
  'bento.hero.quote': '"Bookingerne tredobledes på tre måneder. Vi har aldrig haft en marketingpartner, der leverede så hurtigt."',
  'bento.hero.s1': 'Bookinger',
  'bento.hero.s2': 'Leadvolumen',
  'bento.hero.s3': 'Lavere CPA',
  'bento.parfume.sub': 'Afkast på annoncekroner',
  'bento.parfume.note': 'Brand-tilpassede kreativer + CRO skalerede budgettet uden at sprænge marginen.',
  'bento.vsf.sub': 'Flere medlemskaber',
  'bento.quote.text': `Hero Media genopbyggede vores online tilstedeværelse fra bunden. Inden for få måneder så vi en tydelig stigning i indkommende leads og øget omsætning. De <em>leverer</em> virkelig.`,
  'bento.quote.role': 'Stifter',
  'bento.wide.eyebrow': 'Clinic360 · Sundhed',
  'bento.wide.s1': 'Øget omsætning',
  'bento.wide.s2': 'Sidebesøgende',
  'bento.wide.s3': 'Indkommende leads',
  'results.partners.label': 'Brands i vækst stoler på os',

  // --- Founder letter ---
  'letter.tag': '• Et brev fra vores stifter',
  'letter.from': `<strong>Fra:</strong> Sinan Akdag, stifter af Hero Media`,
  'letter.reply': `<strong>Svar:</strong> Hvad gør os anderledes?`,
  'letter.p1': 'Hvis du sidder og tænker, hvorfor du overhovedet skulle overveje at arbejde med os, forstår jeg dig godt. Den digitale marketingverden er fuld af store garantier, magiske formler og løfter om "5x ROAS" eller "10.000 dollars ekstra til din virksomhed hver måned." Du har sikkert hørt det hele før fra folk, der påstår, at de har knækket koden til at skalere din virksomhed.',
  'letter.p2': 'Sandheden er, at der ikke findes nogen magiske formler. Vedvarende succes starter med at forstå dit marked, din virksomhed og dine kunder – og med at bygge en plan, der er lige så klar, som den er ambitiøs. Ved at fokusere på det, der holder, frem for det, der forsvinder, lægger vi fundamentet for vækst, der bliver ved med at forrentes over tid.',
  'letter.p3': 'Vi er her for at revolutionere måden, virksomheder arbejder med bureauer på. Derfor ser vi ikke os selv som blot endnu et bureau. Vi ser os selv som dit interne team – din virksomheds højre hånd til rådgivning, planlægning og eksekvering. Vi arbejder tæt sammen med dig om at gøre dig til markedsleder i din branche.',
  'letter.p4': 'Vi er ikke her for at jagte forfængelige tal eller love øjeblikkelige resultater. Vores mål er at skabe en gennemtænkt strategi, der sikrer, at du ikke kun vokser, men også står stærkt på dit marked i mange år frem.',
  'letter.p5': 'Vi tror ikke på at binde kunder i lange kontrakter. Vi lader resultaterne tale for sig selv måned efter måned. Derfor er mange af vores kunder blevet hos os i årevis – ikke fordi de skulle, men fordi de kan se den værdi, vi tilfører deres forretning.',
  'letter.p6': 'Book et møde, og lad os se, hvordan vi kan være med til at skabe værdi for din virksomhed.',
  'letter.signature': `Med venlig hilsen,<br /><strong>Sinan Akdag</strong>`,

  // --- Reviews ---
  'reviews.tag': '• Anbefalinger',
  'reviews.title': 'Kundeanmeldelser',
  'reviews.sub': 'Hør fra vores tilfredse kunder. Se, hvordan vi har hjulpet dem med at nå deres mål og skabe varig effekt.',
  'review.1.body': '"Sinan er utrolig venlig og hjælpsom. Han har en professionel og dynamisk tilgang til sit arbejde og den tekniske indsigt til at hjælpe din virksomhed med at vokse og nå din målgruppe. Det, der virkelig adskiller Sinan fra andre, er, at han investerer sig selv i din virksomhed og ofte bruger vendinger som \'vi\', hvilket får det til at føles, som om han er en del af dit team. Vi anbefaler Sinan og Hero Media på det varmeste!"',
  'review.1.role': 'CEO & partner · Vores Fitness Silkeborg',
  'review.2.body': '"Vi har haft et fantastisk samarbejde med Hero Media og Sinan. Han er professionel, nærværende og kommer altid med velovervejet input, der har hjulpet os med at løfte vores marketing. Man kan tydeligt mærke hans passion for sit arbejde. Vi anbefaler Hero Media på det varmeste!"',
  'review.2.role': 'CEO · ParfumeLab',
  'review.3.body': '"Samarbejdet med Sinan fra Hero Media har været en fantastisk oplevelse. Han er professionel, dedikeret og har haft stor betydning for vores vækst. Samarbejdet har leveret bemærkelsesværdige resultater, og vi ser frem til at fortsætte rejsen sammen."',
  'review.3.role': 'CEO · Hidayah',
  'review.4.body': '"Sinan har været en uvurderlig hjælp i planlægningen og udviklingen af ByAlisha-webshoppen. Han er ikke kun dygtig strategisk og teknisk, men også venlig, tålmodig og altid klar med værdifuld rådgivning, når man har brug for det. Man føler sig virkelig støttet og forstået. Jeg kan varmt anbefale at arbejde med Sinan – både som menneske og som fagperson. Tak for alt, Sinan!"',
  'review.4.role': 'Stifter & CEO · ByAlisha',
  'review.5.body': '"Hero Media med Sinan i spidsen har gjort underværker for DelsouX. De har hjulpet os med at vækste både salg og brandkendskab og samtidig sikret, at vores brandudtryk flugter med vores vision. Hero Media støttede os gennem udviklingen af vores nye webshop og guidede os i, hvordan vi får mest muligt ud af vores marketing. Leder du efter et pålideligt og detaljeorienteret team, der virkelig føles som en partner, anbefaler vi varmt Sinan og Hero Media!"',
  'review.5.role': 'CEO & stifter · DelsouX',
  'review.6.body': '"Sinan har været afgørende for Car Manias succes. Hans ekspertise inden for paid social på Facebook, Instagram og TikTok har været i særklasse. Han hjalp os hurtigt med at finde de rette videografer og styrede alt indhold, hvilket har været afgørende for at adskille os fra konkurrenterne. Hero Media er resultatorienteret og fuldt dedikeret til vores vækst. Kan varmt anbefales. Tak, Hero Media!"',
  'review.6.role': 'Stifter · Car Mania',

  // --- Contact ---
  'contact.tag': '• Lad os tale sammen',
  'contact.title': 'Book et uforpligtende møde',
  'contact.sub': 'Vælg et tidspunkt, der passer dig. 30 minutter, ingen forpligtelser – bare en samtale.',
  'usp.1.title': '0 måneders binding',
  'usp.1.body': 'Måned-til-måned-samarbejde. Opsig når som helst. Vi fortjener fornyelsen med resultater.',
  'usp.2.title': 'Handling frem for ord',
  'usp.2.body': 'Profit er indbygget i hver kampagne. Vi optimerer for omsætning, ikke forfængelige tal.',
  'usp.3.title': 'Senior team, direkte',
  'usp.3.body': 'Arbejd hands-on med de strateger, der bygger playbooken. Ingen overdragelse til juniorer.',

  // --- Footer ---
  'footer.tagline': 'Vi hjælper de ambitiøse med at overgå gennemsnittet.',
  'footer.nav.head': 'Navigation',
  'footer.nav.home': 'Forside',
  'footer.nav.about': 'Om os',
  'footer.nav.cases': 'Cases',
  'footer.nav.contact': 'Kontakt',
  'footer.social.head': 'Sociale medier',
  'footer.copyright': '© 2026 Hero Media',
  'footer.made': 'Lavet af <a href="https://heromedia.dk">heromedia.dk</a>',
};

(function initI18n() {
  const LANG_KEY = 'hm-lang';
  const SUPPORTED = ['en', 'da'];

  // Capture the English source straight from the DOM, before any other
  // script mutates it (word-splitting, counters, etc.).
  const enText = {};
  const enHtml = {};
  const enAttr = {};
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    enText[el.dataset.i18n] = el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    enHtml[el.dataset.i18nHtml] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-content]').forEach((el) => {
    enAttr[el.dataset.i18nContent] = el.getAttribute('content') || '';
  });

  function applyLanguage(lang) {
    const da = lang === 'da';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const val = da ? (I18N_DA[key] != null ? I18N_DA[key] : enText[key]) : enText[key];
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      const val = da ? (I18N_DA[key] != null ? I18N_DA[key] : enHtml[key]) : enHtml[key];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const key = el.dataset.i18nContent;
      const val = da ? (I18N_DA[key] != null ? I18N_DA[key] : enAttr[key]) : enAttr[key];
      if (val != null) el.setAttribute('content', val);
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-opt').forEach((btn) => {
      const on = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    // Let language-dependent layout (e.g. the word rotator) re-measure.
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
  }

  // Determine the active language: saved preference, else English.
  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) { /* private mode */ }
  const initial = SUPPORTED.indexOf(saved) !== -1 ? saved : 'en';
  applyLanguage(initial);

  // Wire up the toggle.
  document.querySelectorAll('.lang-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (!lang || document.documentElement.lang === lang) return;
      applyLanguage(lang);
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    });
  });
})();

// ---------- Mobile nav toggle ----------
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// ---------- Sticky nav shadow on scroll ----------
const nav = document.querySelector('.nav');
const onScrollNav = () => {
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScrollNav, { passive: true });
onScrollNav();

// ---------- Scroll progress bar ----------
const progress = document.createElement('div');
progress.className = 'scroll-progress';
document.body.appendChild(progress);
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.transform = `scaleX(${pct / 100})`;
}, { passive: true });

// ---------- Fade-in / reveal observer ----------
const reveal = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); reveal.unobserve(e.target); }
  }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

// Section-level fade (skip sections with sticky children)
document.querySelectorAll('section').forEach((s) => {
  if (s.querySelector('.letter-img, .process-image')) return;
  s.classList.add('fade-in');
  reveal.observe(s);
});

// Stagger reveal on grid children
document.querySelectorAll('.case-grid, .review-grid, .process-stages, .hero-stats').forEach((grid) => {
  [...grid.children].forEach((child, i) => {
    child.classList.add('stagger-item');
    child.style.setProperty('--stagger-delay', `${i * 80}ms`);
    reveal.observe(child);
  });
});

// ---------- Word-by-word reveal helper ----------
const wrapWords = (root) => {
  const wrap = (node) => {
    if (node.nodeType === 3) {
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(part));
        else if (part.length) {
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = part;
          frag.appendChild(span);
        }
      });
      node.replaceWith(frag);
    } else if (node.nodeType === 1 && node.tagName !== 'BR') {
      [...node.childNodes].forEach(wrap);
    }
  };
  [...root.childNodes].forEach(wrap);
  const words = root.querySelectorAll('.word');
  words.forEach((w, i) => w.style.setProperty('--word-delay', `${i * 60}ms`));
};

// Hero h1 — reveal immediately
const h1 = document.querySelector('.hero-text h1');
if (h1) {
  wrapWords(h1);
  requestAnimationFrame(() => h1.classList.add('words-in'));
}

// Framer-style heading — reveal on scroll into view (skip rotator children)
const framerHeading = document.querySelector('.framer-heading');
if (framerHeading) {
  // Wrap words but skip the rotator block
  const rotator = framerHeading.querySelector('.framer-rotator');
  const placeholder = document.createComment('rotator');
  if (rotator) rotator.parentNode.replaceChild(placeholder, rotator);
  wrapWords(framerHeading);
  if (rotator) placeholder.parentNode.replaceChild(rotator, placeholder);

  const headingObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('words-in');
        headingObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });
  headingObs.observe(framerHeading);
}

// Word rotator
const rotator = document.querySelector('.framer-rotator');
const rotatorWords = document.querySelectorAll('.framer-rotator-word');

// Size the (fixed-width, overflow-hidden) rotator to its widest word so the
// box fits whichever language is active. Width is stored in em to stay
// responsive to the heading's fluid font-size.
function sizeRotator() {
  if (!rotator) return;
  const heading = rotator.closest('.framer-heading') || rotator.parentNode;
  const fontSize = parseFloat(getComputedStyle(heading).fontSize) || 16;
  const probe = document.createElement('span');
  Object.assign(probe.style, {
    position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap',
    left: '-9999px', top: '0', fontWeight: '700',
  });
  heading.appendChild(probe);
  let maxPx = 0;
  rotatorWords.forEach((w) => {
    probe.textContent = w.textContent;
    maxPx = Math.max(maxPx, probe.offsetWidth);
  });
  probe.remove();
  if (maxPx) rotator.style.width = (maxPx / fontSize + 0.3).toFixed(2) + 'em';
}
if (rotator) {
  sizeRotator();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeRotator);
  document.addEventListener('languagechange', sizeRotator);
}

if (rotatorWords.length > 1) {
  let idx = 0;
  setInterval(() => {
    const current = rotatorWords[idx];
    idx = (idx + 1) % rotatorWords.length;
    const next = rotatorWords[idx];
    current.classList.remove('is-active');
    current.classList.add('is-leaving');
    next.classList.add('is-active');
    setTimeout(() => current.classList.remove('is-leaving'), 600);
  }, 2400);
}

// ---------- Counter animation for hero stats ----------
const counters = document.querySelectorAll('[data-count]');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const decimals = (el.dataset.count.split('.')[1] || '').length;
    const duration = 2800;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4); // easeOutQuart (slower tail)
      const val = (target * eased).toFixed(decimals);
      el.textContent = val + suffix;
      if (t < 1) requestAnimationFrame(step);
      else if (el.dataset.live === 'true') startLiveTick(el, target, suffix, decimals);
    };
    requestAnimationFrame(step);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach((c) => counterObs.observe(c));

// Live ticking — every 5 minutes, small increment, original decimal precision
function startLiveTick(el, base, suffix, decimals) {
  let current = base;
  const increment = base * 0.005;
  setTimeout(() => {
    setInterval(() => {
      current += increment * (0.6 + Math.random() * 0.8);
      el.textContent = current.toFixed(decimals) + suffix;
    }, 5 * 60 * 1000);
  }, 5 * 60 * 1000);
}


// ---------- Cursor spotlight on hero ----------
const hero = document.querySelector('.hero');
if (hero && !matchMedia('(hover: none)').matches) {
  const spot = document.createElement('div');
  spot.className = 'cursor-spotlight';
  hero.appendChild(spot);
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    spot.style.left = `${e.clientX - rect.left}px`;
    spot.style.top = `${e.clientY - rect.top}px`;
    spot.style.opacity = '1';
  });
  hero.addEventListener('mouseleave', () => { spot.style.opacity = '0'; });
}

// ---------- Tilt effect on case cards ----------
document.querySelectorAll('.case-card, .review-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ---------- Parallax on hero video ----------
const videoFrame = document.querySelector('.hero-video-frame');
if (videoFrame) {
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll < 800) {
      videoFrame.style.setProperty('--parallax', `${scroll * 0.06}px`);
    }
  }, { passive: true });
}
