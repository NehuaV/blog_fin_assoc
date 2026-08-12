export const defaultLang = "en";

export const languages = {
  en: "English",
  it: "Italiano",
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",

    "hero.eyebrow":
      "Student Club · Università della Svizzera italiana · Lugano",
    "hero.line1": "Finance,",
    "hero.line2Pre": "beyond the",
    "hero.line2Accent": "textbook.",
    "hero.line3Pre": "Built by",
    "hero.line3Accent": "students.",
    "hero.subtitle":
      "Starting Finance Club USI is the community of USI students who want to really understand markets, the economy, and finance — not just from books.",
    "hero.ctaBlog": "Read the blog →",
    "hero.ctaTeam": "Meet the team",

    "events.calendar": "Calendar",
    "events.titlePre": "Upcoming",
    "events.titleAccent": "events.",

    "blog.insights": "Insights",
    "blog.latestPre": "Latest",
    "blog.latestAccent": "posts.",
    "blog.allPre": "All",
    "blog.allAccent": "posts.",
    "blog.featured": "Featured",
    "blog.gallery": "Gallery",
    "blog.photos": "Photos",

    "team.label": "The Team",
    "team.titlePre": "Behind the",
    "team.titleAccent": "club.",

    "footer.tagline":
      "The community for USI students who want to understand markets, not just study them.",
    "footer.navigation": "Navigation",

    "site.title": "Starting Finance Club — USI",
    "site.description":
      "Starting Finance Club of Università della Svizzera italiana",
  },
  it: {
    "nav.home": "Home",
    "nav.blog": "Blog",

    "hero.eyebrow":
      "Club Universitario · Università della Svizzera italiana · Lugano",
    "hero.line1": "La finanza,",
    "hero.line2Pre": "oltre il",
    "hero.line2Accent": "libro di testo.",
    "hero.line3Pre": "Fatta da",
    "hero.line3Accent": "studenti.",
    "hero.subtitle":
      "Starting Finance Club USI è la community degli studenti USI che vogliono capire davvero i mercati, l'economia e la finanza — non solo sui libri.",
    "hero.ctaBlog": "Leggi il blog →",
    "hero.ctaTeam": "Conosci il team",

    "events.calendar": "Calendario",
    "events.titlePre": "Prossimi",
    "events.titleAccent": "eventi.",

    "blog.insights": "Approfondimenti",
    "blog.latestPre": "Ultimi",
    "blog.latestAccent": "articoli.",
    "blog.allPre": "Tutti gli",
    "blog.allAccent": "articoli.",
    "blog.featured": "In evidenza",
    "blog.gallery": "Galleria",
    "blog.photos": "Foto",

    "team.label": "Il Team",
    "team.titlePre": "Dietro al",
    "team.titleAccent": "club.",

    "footer.tagline":
      "La community degli studenti USI che vogliono capire i mercati, non solo studiarli.",
    "footer.navigation": "Navigazione",

    "site.title": "Starting Finance Club — USI",
    "site.description":
      "Starting Finance Club dell'Università della Svizzera italiana",
  },
} as const;
