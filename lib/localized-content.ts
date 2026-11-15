import type { Locale } from '@/lib/translations';

export type ServiceAreaContent = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  whoFor: string[];
  problems: string[];
  bullets: string[];
  href: string;
};

export type SegmentContent = {
  slug: string;
  title: string;
  blurb: string;
  problems: string[];
  solutions: string[];
  href: string;
};

export type ProcessStep = { step: string; title: string; text: string };
export type ProjectCard = { title: string; category: string; type: string };

const serviceAreasEs: ServiceAreaContent[] = [
  {
    slug: 'construccion',
    title: 'Construir',
    shortTitle: 'Construir',
    summary: 'Obras nuevas y ampliaciones con planificación clara, supervisión directa y ejecución responsable.',
    description:
      'Cuando el proyecto es una obra nueva o una ampliación, Vanguardia toma responsabilidad sobre el plan, la coordinación y la ejecución para entregar un resultado claro y controlado.',
    whoFor: ['Propietarios residenciales', 'Clientes comerciales', 'Administraciones de PH'],
    problems: ['Alcance poco definido', 'Coordinación entre gremios', 'Retrasos y falta de un responsable claro'],
    bullets: ['Obras nuevas', 'Ampliaciones', 'Mejoras estructurales', 'Coordinación de obra'],
    href: '/servicios/construccion',
  },
  {
    slug: 'renovacion',
    title: 'Renovar',
    shortTitle: 'Renovar',
    summary: 'Remodelaciones y renovaciones pensadas para el uso real del inmueble y para aumentar su valor.',
    description:
      'Renovamos espacios y edificios con criterio práctico: entender el uso, definir el alcance y ejecutar con materiales y métodos modernos.',
    whoFor: ['Viviendas', 'Locales comerciales', 'Áreas comunes de PH'],
    problems: ['Remodelaciones sin plan', 'Interrupciones innecesarias', 'Acabados que no duran'],
    bullets: ['Remodelaciones', 'Renovación de interiores', 'Actualización de acabados', 'Mejoras de espacios'],
    href: '/servicios/renovacion',
  },
  {
    slug: 'mantenimiento',
    title: 'Mantener',
    shortTitle: 'Mantener',
    summary: 'Mantenimiento preventivo y correctivo para proteger el inmueble, evitar daños mayores y conservar su valor.',
    description:
      'El mantenimiento profesional evita sorpresas costosas. Diseñamos intervenciones sencillas y eficaces para mantener las propiedades operando, seguras y en buen estado.',
    whoFor: ['Residencias', 'PH', 'Propiedades comerciales'],
    problems: ['Mantenimiento reactivo', 'Fugas y daños ocultos', 'Pérdida de valor por deterioro'],
    bullets: ['Mantenimiento preventivo', 'Reparaciones', 'Pintura y acabados', 'Impermeabilización'],
    href: '/servicios/mantenimiento',
  },
  {
    slug: 'gestion-propiedad',
    title: 'Gestionar',
    shortTitle: 'Gestionar',
    summary: 'Gestión de propiedad con criterio constructivo: planificar, coordinar y proteger el activo a largo plazo.',
    description:
      'Combinamos conocimiento de construcción con criterio de propiedad para ordenar el mantenimiento, priorizar inversiones y tomar decisiones con claridad.',
    whoFor: ['Propietarios', 'PH y administraciones', 'Inversionistas'],
    problems: ['Falta de planificación', 'Costos impredecibles', 'Trabajos dispersos sin seguimiento'],
    bullets: ['Inspección de activos', 'Programación de mantenimiento', 'Coordinación de trabajos', 'Asesoría técnica'],
    href: '/servicios/gestion-propiedad',
  },
  {
    slug: 'gestion-proyectos',
    title: 'Gestión de proyectos',
    shortTitle: 'Gestión de proyectos',
    summary: 'Un solo responsable para planificar, coordinar y supervisar el proyecto de principio a fin.',
    description:
      'Vanguardia toma responsabilidad sobre el plan, la comunicación y el control de ejecución para que el cliente no tenga que coordinar cada detalle.',
    whoFor: ['Clientes con múltiples proveedores', 'PH', 'Proyectos comerciales'],
    problems: ['Desfase entre contratistas', 'Falta de dirección general', 'Tiempos y presupuestos fuera de control'],
    bullets: ['Planificación', 'Supervisión', 'Coordinación', 'Control de avances'],
    href: '/servicios/gestion-proyectos',
  },
];

const serviceAreasEn: ServiceAreaContent[] = [
  {
    slug: 'construccion',
    title: 'Build',
    shortTitle: 'Build',
    summary: 'New construction and extensions with clear planning, direct supervision and accountable execution.',
    description:
      'When the project is new construction or an extension, Vanguardia takes responsibility for the plan, coordination and execution — so the result stays clear and controlled.',
    whoFor: ['Residential owners', 'Commercial clients', 'PH administrations'],
    problems: ['Undefined scope', 'Coordination across trades', 'Delays and no clear owner'],
    bullets: ['New construction', 'Extensions', 'Structural upgrades', 'Site coordination'],
    href: '/servicios/construccion',
  },
  {
    slug: 'renovacion',
    title: 'Renovate',
    shortTitle: 'Renovate',
    summary: 'Remodeling and renovation shaped by how the property is used — and by increasing its value.',
    description:
      'We renovate spaces and buildings with a practical approach: understand the use, define the scope, and execute with modern methods and materials.',
    whoFor: ['Homes', 'Commercial spaces', 'PH common areas'],
    problems: ['Remodels without a plan', 'Unnecessary disruption', 'Finishes that do not last'],
    bullets: ['Remodeling', 'Interior renovation', 'Finish upgrades', 'Space improvements'],
    href: '/servicios/renovacion',
  },
  {
    slug: 'mantenimiento',
    title: 'Maintain',
    shortTitle: 'Maintain',
    summary: 'Preventive and corrective maintenance to protect the property, avoid larger damage and preserve value.',
    description:
      'Professional maintenance prevents costly surprises. We design simple, effective interventions to keep properties operating, safe and in good condition.',
    whoFor: ['Residences', 'PH communities', 'Commercial properties'],
    problems: ['Reactive maintenance', 'Leaks and hidden damage', 'Value loss from deterioration'],
    bullets: ['Preventive maintenance', 'Repairs', 'Painting and finishes', 'Waterproofing'],
    href: '/servicios/mantenimiento',
  },
  {
    slug: 'gestion-propiedad',
    title: 'Manage',
    shortTitle: 'Manage',
    summary: 'Property management with a construction mindset: plan, coordinate and protect the asset over time.',
    description:
      'We combine construction knowledge with property judgment to organize maintenance, prioritize investment and make decisions with clarity.',
    whoFor: ['Owners', 'PH administrations', 'Investors'],
    problems: ['No clear plan', 'Unpredictable costs', 'Scattered work without follow-through'],
    bullets: ['Asset inspection', 'Maintenance scheduling', 'Work coordination', 'Technical advice'],
    href: '/servicios/gestion-propiedad',
  },
  {
    slug: 'gestion-proyectos',
    title: 'Project management',
    shortTitle: 'Project management',
    summary: 'One accountable partner to plan, coordinate and supervise the project from start to finish.',
    description:
      'Vanguardia takes responsibility for the plan, communication and execution control so the client does not have to manage every detail.',
    whoFor: ['Clients with multiple vendors', 'PH communities', 'Commercial projects'],
    problems: ['Misalignment between contractors', 'No overall direction', 'Time and budget out of control'],
    bullets: ['Planning', 'Supervision', 'Coordination', 'Progress control'],
    href: '/servicios/gestion-proyectos',
  },
];

const serviceAreasFr: ServiceAreaContent[] = [
  {
    slug: 'construccion',
    title: 'Construire',
    shortTitle: 'Construire',
    summary: 'Constructions neuves et extensions avec une planification claire, une supervision directe et une exécution responsable.',
    description:
      'Lorsque le projet est une construction neuve ou une extension, Vanguardia prend la responsabilité du plan, de la coordination et de l’exécution pour un résultat clair et maîtrisé.',
    whoFor: ['Propriétaires résidentiels', 'Clients commerciaux', 'Administrations de PH'],
    problems: ['Périmètre mal défini', 'Coordination entre corps de métier', 'Retards et absence de responsable clair'],
    bullets: ['Constructions neuves', 'Extensions', 'Améliorations structurelles', 'Coordination de chantier'],
    href: '/servicios/construccion',
  },
  {
    slug: 'renovacion',
    title: 'Rénover',
    shortTitle: 'Rénover',
    summary: 'Remodelages et rénovations pensés selon l’usage réel du bien — et pour en augmenter la valeur.',
    description:
      'Nous rénovons espaces et bâtiments avec une approche pratique : comprendre l’usage, définir le périmètre et exécuter avec des méthodes et matériaux modernes.',
    whoFor: ['Logements', 'Locaux commerciaux', 'Parties communes de PH'],
    problems: ['Remodelages sans plan', 'Perturbations inutiles', 'Finitions peu durables'],
    bullets: ['Remodelages', 'Rénovation intérieure', 'Mise à jour des finitions', 'Amélioration des espaces'],
    href: '/servicios/renovacion',
  },
  {
    slug: 'mantenimiento',
    title: 'Entretenir',
    shortTitle: 'Entretenir',
    summary: 'Maintenance préventive et corrective pour protéger le bien, éviter de plus gros dommages et préserver sa valeur.',
    description:
      'Une maintenance professionnelle évite les mauvaises surprises. Nous concevons des interventions simples et efficaces pour garder les biens opérationnels, sûrs et en bon état.',
    whoFor: ['Résidences', 'PH', 'Biens commerciaux'],
    problems: ['Maintenance réactive', 'Fuites et dommages cachés', 'Perte de valeur par dégradation'],
    bullets: ['Maintenance préventive', 'Réparations', 'Peinture et finitions', 'Étanchéité'],
    href: '/servicios/mantenimiento',
  },
  {
    slug: 'gestion-propiedad',
    title: 'Gérer',
    shortTitle: 'Gérer',
    summary: 'Gestion immobilière avec un regard constructif : planifier, coordonner et protéger l’actif dans la durée.',
    description:
      'Nous combinons savoir-faire constructif et jugement immobilier pour organiser la maintenance, prioriser les investissements et décider avec clarté.',
    whoFor: ['Propriétaires', 'Administrations de PH', 'Investisseurs'],
    problems: ['Absence de plan', 'Coûts imprévisibles', 'Travaux dispersés sans suivi'],
    bullets: ['Inspection des actifs', 'Programmation de la maintenance', 'Coordination des travaux', 'Conseil technique'],
    href: '/servicios/gestion-propiedad',
  },
  {
    slug: 'gestion-proyectos',
    title: 'Gestion de projets',
    shortTitle: 'Gestion de projets',
    summary: 'Un seul responsable pour planifier, coordonner et superviser le projet du début à la fin.',
    description:
      'Vanguardia prend la responsabilité du plan, de la communication et du contrôle d’exécution pour que le client n’ait pas à gérer chaque détail.',
    whoFor: ['Clients avec plusieurs prestataires', 'PH', 'Projets commerciaux'],
    problems: ['Décalage entre entrepreneurs', 'Absence de direction générale', 'Délais et budgets hors contrôle'],
    bullets: ['Planification', 'Supervision', 'Coordination', 'Contrôle de l’avancement'],
    href: '/servicios/gestion-proyectos',
  },
];

const segmentsEs: SegmentContent[] = [
  {
    slug: 'residencial',
    title: 'Residencial',
    blurb: 'Propietarios y familias que necesitan construir, renovar, mantener o gestionar su vivienda con claridad y un solo responsable.',
    problems: ['Mantenimiento acumulado', 'Obras sin seguimiento', 'Interrupciones en la vida diaria'],
    solutions: ['Construir y renovar', 'Mantener preventivamente', 'Gestionar y coordinar proveedores'],
    href: '/quien-sirve/residencial',
  },
  {
    slug: 'comercial',
    title: 'Comercial',
    blurb: 'Empresas y administradores de inmuebles comerciales que necesitan obras y mantenimiento sin afectar la operación.',
    problems: ['Reparaciones que detienen la operación', 'Obras sin planificación', 'Mantenimiento reactivo'],
    solutions: ['Construir y renovar locales', 'Mantener instalaciones', 'Gestionar proyectos con un solo responsable'],
    href: '/quien-sirve/comercial',
  },
  {
    slug: 'ph',
    title: 'PH',
    blurb: 'Administraciones y juntas de PH que necesitan mantenimiento, coordinación y criterio para proteger el valor del edificio.',
    problems: ['Fallas en áreas comunes', 'Presupuesto y planificación complejos', 'Deterioro que reduce el valor'],
    solutions: ['Mantener de forma preventiva', 'Renovar áreas comunes', 'Gestionar y controlar la obra'],
    href: '/quien-sirve/ph',
  },
];

const segmentsEn: SegmentContent[] = [
  {
    slug: 'residencial',
    title: 'Residential',
    blurb: 'Owners and families who need to build, renovate, maintain or manage their home with clarity and one accountable partner.',
    problems: ['Maintenance that piles up', 'Works without follow-through', 'Disruption to daily life'],
    solutions: ['Build and renovate', 'Maintain preventively', 'Manage and coordinate vendors'],
    href: '/quien-sirve/residencial',
  },
  {
    slug: 'comercial',
    title: 'Commercial',
    blurb: 'Businesses and commercial property managers who need works and maintenance without disrupting operations.',
    problems: ['Repairs that stop operations', 'Works without planning', 'Reactive maintenance'],
    solutions: ['Build and renovate premises', 'Maintain facilities', 'Manage projects with one accountable partner'],
    href: '/quien-sirve/comercial',
  },
  {
    slug: 'ph',
    title: 'PH',
    blurb: 'PH administrations and boards that need maintenance, coordination and judgment to protect building value.',
    problems: ['Failures in common areas', 'Complex budgets and planning', 'Deterioration that reduces value'],
    solutions: ['Maintain preventively', 'Renovate common areas', 'Manage and control the works'],
    href: '/quien-sirve/ph',
  },
];

const segmentsFr: SegmentContent[] = [
  {
    slug: 'residencial',
    title: 'Résidentiel',
    blurb: 'Propriétaires et familles qui ont besoin de construire, rénover, entretenir ou gérer leur logement avec clarté et un seul responsable.',
    problems: ['Maintenance qui s’accumule', 'Travaux sans suivi', 'Perturbations du quotidien'],
    solutions: ['Construire et rénover', 'Entretenir de façon préventive', 'Gérer et coordonner les prestataires'],
    href: '/quien-sirve/residencial',
  },
  {
    slug: 'comercial',
    title: 'Commercial',
    blurb: 'Entreprises et gestionnaires de biens commerciaux qui ont besoin de travaux et de maintenance sans perturber l’activité.',
    problems: ['Réparations qui arrêtent l’exploitation', 'Travaux sans planification', 'Maintenance réactive'],
    solutions: ['Construire et rénover des locaux', 'Entretenir les installations', 'Gérer les projets avec un seul responsable'],
    href: '/quien-sirve/comercial',
  },
  {
    slug: 'ph',
    title: 'PH',
    blurb: 'Administrations et conseils de PH qui ont besoin de maintenance, de coordination et de jugement pour protéger la valeur de l’immeuble.',
    problems: ['Pannes dans les parties communes', 'Budgets et planification complexes', 'Dégradation qui réduit la valeur'],
    solutions: ['Entretenir de façon préventive', 'Rénover les parties communes', 'Gérer et contrôler les travaux'],
    href: '/quien-sirve/ph',
  },
];

const homeExtras: Record<
  Locale,
  {
    customers: { kicker: string; heading: string; cta: string };
    services: { kicker: string; heading: string; moreInfo: string };
    why: { kicker: string; heading: string; points: string[] };
    ctaBand: { kicker: string; heading: string; primary: string; secondary: string };
    explore: string;
    footer: {
      copy: string;
      services: string;
      segments: string;
      contact: string;
      request: string;
      panama: string;
    };
    serviceDetail: {
      kicker: string;
      includes: string;
      problems: string;
      why: string;
      whyCopy: string;
      idealFor: string;
      request: string;
    };
    segmentDetail: {
      kicker: string;
      needs: string;
      how: string;
      focus: string;
      focusCopy: string;
      talk: string;
    };
    aboutValues: string[];
    contactForm: {
      namePh: string;
      emailPh: string;
      companyPh: string;
      phonePh: string;
      messagePh: string;
      clientOptions: string[];
      serviceOptions: string[];
    };
  }
> = {
  es: {
    customers: {
      kicker: 'Clientes',
      heading: 'Responsabilidad clara y transparencia para todo tipo de propietario.',
      cta: 'Ver segmento',
    },
    services: {
      kicker: 'Servicios',
      heading: 'Construir. Renovar. Mantener. Gestionar.',
      moreInfo: 'Ver servicio',
    },
    why: {
      kicker: 'Por qué Vanguardia',
      heading: 'Una sola referencia. Responsabilidad clara y transparencia.',
      points: [
        'Un solo responsable',
        'Alcance y precios claros',
        'Supervisión directa',
        'Métodos y materiales modernos',
        'Comunicación transparente',
        'Enfoque en el valor de la propiedad',
      ],
    },
    ctaBand: {
      kicker: 'Inicio de conversación',
      heading: '¿Tiene un proyecto, una necesidad de mantenimiento o una propiedad que requiere atención?',
      primary: 'Solicitar consulta',
      secondary: 'Contacto',
    },
    explore: 'Explorar',
    footer: {
      copy: 'Vanguardia PTY combina construcción, mantenimiento y gestión de propiedad con una visión clara de responsabilidad y ejecución.',
      services: 'Servicios',
      segments: 'Clientes',
      contact: 'Contacto',
      request: 'Solicitar consulta',
      panama: 'Panamá',
    },
    serviceDetail: {
      kicker: 'Servicio',
      includes: 'Qué incluye',
      problems: 'Problemas que resolvemos',
      why: 'Por qué Vanguardia',
      whyCopy:
        'Porque cada intervención se gestiona con criterio, supervisión directa y responsabilidad clara. El cliente no tiene que coordinar a varios proveedores para saber quién responde.',
      idealFor: 'Ideal para',
      request: 'Solicitar consulta',
    },
    segmentDetail: {
      kicker: 'Cliente',
      needs: 'Necesidades que resolvemos',
      how: 'Cómo trabajamos',
      focus: 'Enfoque',
      focusCopy:
        'Se prioriza la claridad del alcance, la coordinación entre trabajos y la ejecución responsable para minimizar complicaciones y proteger la propiedad.',
      talk: 'Hablar con Vanguardia',
    },
    aboutValues: ['Panamá', 'Familia', 'Experiencia', 'Responsabilidad', 'Ejecuta con criterio', 'Mirada a largo plazo'],
    contactForm: {
      namePh: 'Su nombre',
      emailPh: 'correo@ejemplo.com',
      companyPh: 'Empresa, PH o propiedad',
      phonePh: '+507 ...',
      messagePh: 'Cuéntenos qué necesita, cuál es la propiedad o el requisito principal.',
      clientOptions: ['Residencial', 'Comercial', 'PH', 'Otro'],
      serviceOptions: ['Construir', 'Renovar', 'Mantener', 'Gestionar', 'Gestión de proyectos'],
    },
  },
  en: {
    customers: {
      kicker: 'Customers',
      heading: 'Clear accountability and transparency for every kind of property owner.',
      cta: 'View segment',
    },
    services: {
      kicker: 'Services',
      heading: 'Build. Renovate. Maintain. Manage.',
      moreInfo: 'View service',
    },
    why: {
      kicker: 'Why Vanguardia',
      heading: 'One point of contact. Clear accountability and transparency.',
      points: [
        'One accountable partner',
        'Clear scope and pricing',
        'Direct supervision',
        'Modern methods and materials',
        'Transparent communication',
        'Focused on property value',
      ],
    },
    ctaBand: {
      kicker: 'Start a conversation',
      heading: 'Do you have a project, a maintenance need or a property that requires attention?',
      primary: 'Request a consultation',
      secondary: 'Contact',
    },
    explore: 'Explore',
    footer: {
      copy: 'Vanguardia PTY combines construction, maintenance and property management with a clear standard of accountability and execution.',
      services: 'Services',
      segments: 'Customers',
      contact: 'Contact',
      request: 'Request a consultation',
      panama: 'Panama',
    },
    serviceDetail: {
      kicker: 'Service',
      includes: 'What’s included',
      problems: 'Problems we solve',
      why: 'Why Vanguardia',
      whyCopy:
        'Because every intervention is managed with judgment, direct supervision and clear accountability. The client does not have to coordinate multiple vendors to know who is responsible.',
      idealFor: 'Ideal for',
      request: 'Request a consultation',
    },
    segmentDetail: {
      kicker: 'Customer',
      needs: 'Needs we address',
      how: 'How we work',
      focus: 'Focus',
      focusCopy:
        'We prioritize clear scope, coordination across works and responsible execution to minimize complications and protect the property.',
      talk: 'Talk to Vanguardia',
    },
    aboutValues: ['Panama', 'Family', 'Experience', 'Accountability', 'Judgment in execution', 'Long-term view'],
    contactForm: {
      namePh: 'Your name',
      emailPh: 'email@example.com',
      companyPh: 'Company, PH or property',
      phonePh: '+507 ...',
      messagePh: 'Tell us what you need, which property is involved, or the main requirement.',
      clientOptions: ['Residential', 'Commercial', 'PH', 'Other'],
      serviceOptions: ['Build', 'Renovate', 'Maintain', 'Manage', 'Project management'],
    },
  },
  fr: {
    customers: {
      kicker: 'Clients',
      heading: 'Responsabilité claire et transparence pour chaque type de propriétaire.',
      cta: 'Voir le segment',
    },
    services: {
      kicker: 'Services',
      heading: 'Construire. Rénover. Entretenir. Gérer.',
      moreInfo: 'Voir le service',
    },
    why: {
      kicker: 'Pourquoi Vanguardia',
      heading: 'Un seul interlocuteur. Responsabilité claire et transparence.',
      points: [
        'Un seul responsable',
        'Périmètre et tarification clairs',
        'Supervision directe',
        'Méthodes et matériaux modernes',
        'Communication transparente',
        'Axé sur la valeur du bien',
      ],
    },
    ctaBand: {
      kicker: 'Engager la conversation',
      heading: 'Avez-vous un projet, un besoin de maintenance ou un bien qui demande de l’attention ?',
      primary: 'Demander une consultation',
      secondary: 'Contact',
    },
    explore: 'Explorer',
    footer: {
      copy: 'Vanguardia PTY combine construction, maintenance et gestion immobilière avec une vision claire de responsabilité et d’exécution.',
      services: 'Services',
      segments: 'Clients',
      contact: 'Contact',
      request: 'Demander une consultation',
      panama: 'Panama',
    },
    serviceDetail: {
      kicker: 'Service',
      includes: 'Ce que cela inclut',
      problems: 'Problèmes que nous résolvons',
      why: 'Pourquoi Vanguardia',
      whyCopy:
        'Parce que chaque intervention est gérée avec jugement, supervision directe et responsabilité claire. Le client n’a pas à coordonner plusieurs prestataires pour savoir qui répond.',
      idealFor: 'Idéal pour',
      request: 'Demander une consultation',
    },
    segmentDetail: {
      kicker: 'Client',
      needs: 'Besoins que nous traitons',
      how: 'Notre façon de travailler',
      focus: 'Approche',
      focusCopy:
        'Nous priorisons la clarté du périmètre, la coordination des travaux et une exécution responsable pour limiter les complications et protéger le bien.',
      talk: 'Parler avec Vanguardia',
    },
    aboutValues: ['Panama', 'Famille', 'Expérience', 'Responsabilité', 'Exécution avec jugement', 'Vision à long terme'],
    contactForm: {
      namePh: 'Votre nom',
      emailPh: 'email@exemple.com',
      companyPh: 'Entreprise, PH ou bien',
      phonePh: '+507 ...',
      messagePh: 'Dites-nous ce dont vous avez besoin, de quel bien il s’agit ou quelle est l’exigence principale.',
      clientOptions: ['Résidentiel', 'Commercial', 'PH', 'Autre'],
      serviceOptions: ['Construire', 'Rénover', 'Entretenir', 'Gérer', 'Gestion de projets'],
    },
  },
};

export function getServiceAreas(locale: Locale): ServiceAreaContent[] {
  if (locale === 'en') return serviceAreasEn;
  if (locale === 'fr') return serviceAreasFr;
  return serviceAreasEs;
}

export function getCustomerSegments(locale: Locale): SegmentContent[] {
  if (locale === 'en') return segmentsEn;
  if (locale === 'fr') return segmentsFr;
  return segmentsEs;
}

export function getHomeExtras(locale: Locale) {
  return homeExtras[locale] || homeExtras.es;
}

export function getServiceArea(locale: Locale, slug: string) {
  return getServiceAreas(locale).find((item) => item.slug === slug);
}

export function getCustomerSegment(locale: Locale, slug: string) {
  return getCustomerSegments(locale).find((item) => item.slug === slug);
}

export const serviceSlugs = serviceAreasEs.map((area) => area.slug);
export const segmentSlugs = segmentsEs.map((segment) => segment.slug);
