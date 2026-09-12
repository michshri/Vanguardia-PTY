export const locales = ['es', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export type TranslationSet = {
  nav: { home: string; services: string; segments: string; projects: string; about: string; contact: string; whatsapp: string; request: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    meta1: string;
    meta2: string;
  };
  heritage: {
    kicker: string;
    heading: string;
    copy: string;
  };
  segments: {
    kicker: string;
    heading: string;
  };
};

export const translations: Record<Locale, TranslationSet> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      segments: 'Quiénes Servimos',
      projects: 'Proyectos',
      about: 'Nosotros',
      contact: 'Contacto',
      whatsapp: 'WhatsApp',
      request: 'Solicitar consulta',
    },
    hero: {
      eyebrow: 'Panamá • Construcción • Propiedad • Mantenimiento',
      title: 'Construimos. Mantenemos. Gestionamos.',
      subtitle: 'Un solo responsable para construcción, propiedad y servicios de edificación en Panamá.',
      primary: 'Solicitar consulta',
      secondary: 'Explorar servicios',
      meta1: 'Más de 50 años de experiencia familiar',
      meta2: 'Una nueva generación con responsabilidad clara',
    },
    heritage: {
      kicker: 'Herencia • confianza • responsabilidad',
      heading: 'Cinco décadas de experiencia panameña. Una nueva generación.',
      copy:
        'Vanguardia PTY es una nueva empresa construida sobre la experiencia acumulada por una familia panameña con profundas raíces en la comunidad y décadas de trabajo en construcción y mantenimiento de propiedades. La compañía combina ese conocimiento práctico con un enfoque moderno, una ejecución clara y una relación directa con cada cliente.',
    },
    segments: {
      kicker: 'Nuestros clientes',
      heading: 'La obra, la propiedad y la operación necesitan claridad.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      segments: 'Who We Serve',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      request: 'Request a consultation',
    },
    hero: {
      eyebrow: 'Panama • Construction • Property • Maintenance',
      title: 'Building. Maintaining. Managing.',
      subtitle: 'One accountable partner for construction, property and building services in Panama.',
      primary: 'Request a consultation',
      secondary: 'Explore services',
      meta1: 'More than 50 years of family experience',
      meta2: 'A new generation with clear accountability',
    },
    heritage: {
      kicker: 'Heritage • trust • accountability',
      heading: 'Five decades of Panamanian experience. A new generation.',
      copy:
        'Vanguardia PTY is a new company built on the experience accumulated by a Panamanian family with deep roots in the community and decades of work in construction and property maintenance. The company combines that practical knowledge with a modern approach, clear execution and direct communication with each client.',
    },
    segments: {
      kicker: 'Our clients',
      heading: 'Construction, property and operations need clarity.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      segments: 'Clients',
      projects: 'Projets',
      about: 'À propos',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      request: 'Demander une consultation',
    },
    hero: {
      eyebrow: 'Panama • Construction • Propriété • Maintenance',
      title: 'Construire. Entretenir. Gérer.',
      subtitle: 'Un seul interlocuteur responsable pour la construction, la propriété et les services immobiliers au Panama.',
      primary: 'Demander une consultation',
      secondary: 'Découvrir les services',
      meta1: 'Plus de 50 ans d’expérience familiale',
      meta2: 'Une nouvelle génération avec une responsabilité claire',
    },
    heritage: {
      kicker: 'Patrimoine • confiance • responsabilité',
      heading: 'Cinquante ans d’expérience panaméenne. Une nouvelle génération.',
      copy:
        'Vanguardia PTY est une nouvelle entreprise construite sur l’expérience accumulée par une famille panaméenne profondément ancrée dans la communauté et dans les travaux de construction et d’entretien immobilier. L’entreprise combine cette connaissance pratique avec une approche moderne, une exécution claire et une communication directe avec chaque client.',
    },
    segments: {
      kicker: 'Nos clients',
      heading: 'Le chantier, la propriété et l’exploitation exigent de la clarté.',
    },
  },
};

export const defaultLocale: Locale = 'es';

export function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.replace(/^\/+/, '').split('/')[0] as Locale;
  return locales.includes(firstSegment) ? firstSegment : defaultLocale;
}

export function getDictionary(locale: string): TranslationSet {
  return translations[(locale as Locale) || defaultLocale] || translations[defaultLocale];
}
