export const locales = ['es', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export type TranslationSet = {
  nav: {
    home: string;
    services: string;
    segments: string;
    projects: string;
    about: string;
    contact: string;
    whatsapp: string;
    request: string;
    menu: string;
    close: string;
  };
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
      menu: 'Abrir menú',
      close: 'Cerrar menú',
    },
    hero: {
      eyebrow: 'Panamá • Construcción • Propiedad • Mantenimiento',
      title: 'Construir. Mantener. Gestionar.',
      subtitle: 'Un solo responsable para planificación, construcción, renovación y gestión de propiedad en Panamá.',
      primary: 'Solicitar consulta',
      secondary: 'Explorar servicios',
      meta1: 'Más de 50 años de experiencia familiar',
      meta2: 'Una nueva generación con responsabilidad clara',
    },
    heritage: {
      kicker: 'Herencia • confianza • responsabilidad',
      heading:
        'Cinco décadas de experiencia panameña. Líderes en métodos y materiales modernos. Dedicados a aumentar el valor de su propiedad.',
      copy:
        'Construida sobre cinco décadas de experiencia panameña en construcción y propiedad, Vanguardia PTY aporta métodos y materiales modernos a cada proyecto. Desde la planificación y la construcción hasta la renovación y la gestión de propiedad, nos enfocamos en una ejecución clara y en aumentar el valor de su inmueble.',
    },
    segments: {
      kicker: 'Nuestros clientes',
      heading: 'Responsabilidad clara y transparencia para todo tipo de propietario.',
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
      menu: 'Open menu',
      close: 'Close menu',
    },
    hero: {
      eyebrow: 'Panama • Construction • Property • Maintenance',
      title: 'Build. Maintain. Manage.',
      subtitle: 'One accountable partner for planning, construction, renovation, and property management in Panama.',
      primary: 'Request a consultation',
      secondary: 'Explore services',
      meta1: 'More than 50 years of family experience',
      meta2: 'A new generation with clear accountability',
    },
    heritage: {
      kicker: 'Heritage • trust • accountability',
      heading:
        'Five decades of Panamanian experience. Leading in modern methods and materials. Dedicated to increasing the value of your property.',
      copy:
        'Built on five decades of Panamanian construction and property experience, Vanguardia PTY brings modern methods and materials to every project. From planning and construction to renovation and property management, we focus on clear execution and on increasing the value of your property.',
    },
    segments: {
      kicker: 'Our clients',
      heading: 'Clear accountability and transparency for every kind of property owner.',
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
      menu: 'Ouvrir le menu',
      close: 'Fermer le menu',
    },
    hero: {
      eyebrow: 'Panama • Construction • Propriété • Maintenance',
      title: 'Construire. Entretenir. Gérer.',
      subtitle: 'Un seul interlocuteur responsable pour la planification, la construction, la rénovation et la gestion immobilière au Panama.',
      primary: 'Demander une consultation',
      secondary: 'Découvrir les services',
      meta1: 'Plus de 50 ans d’expérience familiale',
      meta2: 'Une nouvelle génération avec une responsabilité claire',
    },
    heritage: {
      kicker: 'Patrimoine • confiance • responsabilité',
      heading:
        'Cinquante ans d’expérience panaméenne. À l’avant-garde des méthodes et matériaux modernes. Dédiés à accroître la valeur de votre propriété.',
      copy:
        'S’appuyant sur cinq décennies d’expérience panaméenne en construction et en immobilier, Vanguardia PTY apporte des méthodes et des matériaux modernes à chaque projet. De la planification et la construction à la rénovation et la gestion immobilière, nous privilégions une exécution claire et l’accroissement de la valeur de votre bien.',
    },
    segments: {
      kicker: 'Nos clients',
      heading: 'Responsabilité claire et transparence pour chaque type de propriétaire.',
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
