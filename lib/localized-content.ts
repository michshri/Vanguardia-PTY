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
    slug: 'construccion-renovacion',
    title: 'Construcción & Renovación',
    shortTitle: 'Construcción & Renovación',
    summary: 'Obras nuevas, remodelaciones y mejoras que responden a la realidad del inmueble y del cliente.',
    description:
      'Desde intervenciones puntuales hasta proyectos de mayor alcance, Vanguardia coordina la ejecución con una visión práctica del inmueble y su uso real.',
    whoFor: ['Propietarios privados', 'PH y administraciones', 'Locales comerciales', 'Instalaciones industriales'],
    problems: ['Cambios de alcance sin control', 'Coordinación entre gremios', 'Ejecución con retrasos o deficiencias'],
    bullets: ['Remodelaciones', 'Ampliaciones', 'Renovación de viviendas', 'Mejoras corporativas y comerciales'],
    href: '/servicios/construccion-renovacion',
  },
  {
    slug: 'mantenimiento-reparaciones',
    title: 'Mantenimiento & Reparaciones',
    shortTitle: 'Mantenimiento & Reparaciones',
    summary: 'Mantenimiento preventivo y correctivo para conservar la propiedad, proteger el valor y evitar daños mayores.',
    description:
      'El mantenimiento profesional evita sorpresas costosas. Diseñamos intervenciones sencillas y eficaces para mantener los edificios operando, limpios y seguros.',
    whoFor: ['Residencias', 'Administraciones de PH', 'Propiedades comerciales', 'Instalaciones industriales'],
    problems: ['Fugas y daños ocultos', 'Pérdida de valor por mantenimiento tardío', 'Operación de los edificios sin planificación'],
    bullets: ['Pintura y acabados', 'Reparaciones generales', 'Impermeabilización', 'Mantenimiento preventivo'],
    href: '/servicios/mantenimiento-reparaciones',
  },
  {
    slug: 'gestion-propiedad',
    title: 'Gestión de Propiedad',
    shortTitle: 'Gestión de Propiedad',
    summary: 'Planificación, coordinación y seguimiento para proteger activos, controlar costos y mantener la propiedad en condiciones adecuadas.',
    description:
      'Combinamos conocimiento constructivo con criterio de propiedad para ayudar a los clientes a tomar decisiones acertadas, ordenar el mantenimiento y priorizar inversiones.',
    whoFor: ['PH y administraciones', 'Propietarios', 'Inversionistas', 'Edificios con mantenimiento continuo'],
    problems: ['Mantenimiento reactivo', 'Falta de coordinación', 'Ejecución dispersa y costos impredecibles'],
    bullets: ['Inspección de activos', 'Programación de mantenimiento', 'Coordinación de trabajos', 'Asesoría técnica y de mantenimiento'],
    href: '/servicios/gestion-propiedad',
  },
  {
    slug: 'gestion-proyectos',
    title: 'Gestión de Proyectos',
    shortTitle: 'Gestión de Proyectos',
    summary: 'Supervisión clara y coordinación de obra para que los clientes no tengan que coordinar cada detalle.',
    description:
      'Vanguardia toma responsabilidad sobre el plan, la ejecución y la comunicación. Esto permite un proyecto más claro, ordenado y controlado.',
    whoFor: ['Clientes con múltiples proveedores', 'PH', 'Propiedades comerciales', 'Obras de mejoramiento'],
    problems: ['Desfase entre contratistas', 'Falta de dirección general', 'Dificultad para controlar tiempos y presupuestos'],
    bullets: ['Planificación', 'Supervisión', 'Coordinación', 'Control de avances y ejecución'],
    href: '/servicios/gestion-proyectos',
  },
  {
    slug: 'obras-especializadas',
    title: 'Obras Especializadas',
    shortTitle: 'Obras Especializadas',
    summary: 'Trabajos técnicos con preparación, criterio y ejecución especializada sobre fachadas, cubiertas y recubrimientos.',
    description:
      'Cuando las condiciones, la climatología o la estructura exigen un enfoque especializado, la correcta preparación y ejecución marcan la diferencia.',
    whoFor: ['Edificios con humedad', 'Cubiertas', 'Fachadas', 'Propiedades con requisitos técnicos específicos'],
    problems: ['Filtraciones persistentes', 'Daños en fachadas y cubiertas', 'Reparaciones de baja duración'],
    bullets: ['Impermeabilización', 'Recubrimientos', 'Cubiertas verdes', 'Soluciones para fachadas y envolventes'],
    href: '/servicios/obras-especializadas',
  },
];

const serviceAreasEn: ServiceAreaContent[] = [
  {
    slug: 'construccion-renovacion',
    title: 'Construction & Renovation',
    shortTitle: 'Construction & Renovation',
    summary: 'New works, remodeling and upgrades shaped by the reality of the property and the client.',
    description:
      'From targeted interventions to larger projects, Vanguardia coordinates execution with a practical view of the building and how it is actually used.',
    whoFor: ['Private owners', 'HOA / PH administrations', 'Commercial premises', 'Industrial facilities'],
    problems: ['Scope changes without control', 'Coordination across trades', 'Delays or deficient execution'],
    bullets: ['Remodeling', 'Extensions', 'Home renovation', 'Corporate and commercial upgrades'],
    href: '/servicios/construccion-renovacion',
  },
  {
    slug: 'mantenimiento-reparaciones',
    title: 'Maintenance & Repairs',
    shortTitle: 'Maintenance & Repairs',
    summary: 'Preventive and corrective maintenance to preserve the property, protect value and avoid larger damage.',
    description:
      'Professional maintenance prevents costly surprises. We design simple, effective interventions to keep buildings operating, clean and safe.',
    whoFor: ['Residences', 'PH administrations', 'Commercial properties', 'Industrial facilities'],
    problems: ['Leaks and hidden damage', 'Value loss from late maintenance', 'Buildings run without a plan'],
    bullets: ['Painting and finishes', 'General repairs', 'Waterproofing', 'Preventive maintenance'],
    href: '/servicios/mantenimiento-reparaciones',
  },
  {
    slug: 'gestion-propiedad',
    title: 'Property Management',
    shortTitle: 'Property Management',
    summary: 'Planning, coordination and follow-through to protect assets, control costs and keep properties in proper condition.',
    description:
      'We combine construction knowledge with property judgment to help clients make sound decisions, organize maintenance and prioritize investment.',
    whoFor: ['PH administrations', 'Owners', 'Investors', 'Buildings with ongoing maintenance'],
    problems: ['Reactive maintenance', 'Lack of coordination', 'Scattered execution and unpredictable costs'],
    bullets: ['Asset inspection', 'Maintenance scheduling', 'Work coordination', 'Technical and maintenance advice'],
    href: '/servicios/gestion-propiedad',
  },
  {
    slug: 'gestion-proyectos',
    title: 'Project Management',
    shortTitle: 'Project Management',
    summary: 'Clear supervision and site coordination so clients do not have to manage every detail themselves.',
    description:
      'Vanguardia takes responsibility for the plan, the execution and the communication — for a clearer, more ordered and controlled project.',
    whoFor: ['Clients with multiple vendors', 'PH communities', 'Commercial properties', 'Improvement works'],
    problems: ['Misalignment between contractors', 'No overall direction', 'Difficulty controlling time and budget'],
    bullets: ['Planning', 'Supervision', 'Coordination', 'Progress and execution control'],
    href: '/servicios/gestion-proyectos',
  },
  {
    slug: 'obras-especializadas',
    title: 'Specialized Works',
    shortTitle: 'Specialized Works',
    summary: 'Technical work with proper preparation, judgment and specialist execution on façades, roofs and coatings.',
    description:
      'When climate, conditions or structure demand a specialist approach, correct preparation and execution make the difference.',
    whoFor: ['Buildings with moisture issues', 'Roofs', 'Façades', 'Properties with specific technical requirements'],
    problems: ['Persistent leaks', 'Façade and roof damage', 'Short-lived repairs'],
    bullets: ['Waterproofing', 'Coatings', 'Green roofs', 'Façade and envelope solutions'],
    href: '/servicios/obras-especializadas',
  },
];

const serviceAreasFr: ServiceAreaContent[] = [
  {
    slug: 'construccion-renovacion',
    title: 'Construction & Rénovation',
    shortTitle: 'Construction & Rénovation',
    summary: 'Travaux neufs, remodelages et améliorations adaptés à la réalité du bien et du client.',
    description:
      'Des interventions ponctuelles aux projets de plus grande envergure, Vanguardia coordonne l’exécution avec une vision pratique du bâtiment et de son usage réel.',
    whoFor: ['Propriétaires privés', 'Administrations de PH', 'Locaux commerciaux', 'Installations industrielles'],
    problems: ['Changements de périmètre non maîtrisés', 'Coordination entre corps de métier', 'Retards ou exécution déficiente'],
    bullets: ['Remodelages', 'Extensions', 'Rénovation de logements', 'Améliorations commerciales et d’entreprise'],
    href: '/servicios/construccion-renovacion',
  },
  {
    slug: 'mantenimiento-reparaciones',
    title: 'Maintenance & Réparations',
    shortTitle: 'Maintenance & Réparations',
    summary: 'Maintenance préventive et corrective pour préserver le bien, protéger sa valeur et éviter des dommages plus importants.',
    description:
      'Une maintenance professionnelle évite les mauvaises surprises. Nous concevons des interventions simples et efficaces pour garder les bâtiments opérationnels, propres et sûrs.',
    whoFor: ['Résidences', 'Administrations de PH', 'Biens commerciaux', 'Installations industrielles'],
    problems: ['Fuites et dommages cachés', 'Perte de valeur par maintenance tardive', 'Bâtiments gérés sans planification'],
    bullets: ['Peinture et finitions', 'Réparations générales', 'Étanchéité', 'Maintenance préventive'],
    href: '/servicios/mantenimiento-reparaciones',
  },
  {
    slug: 'gestion-propiedad',
    title: 'Gestion immobilière',
    shortTitle: 'Gestion immobilière',
    summary: 'Planification, coordination et suivi pour protéger les actifs, maîtriser les coûts et maintenir le bien en bon état.',
    description:
      'Nous combinons savoir-faire constructif et jugement immobilier pour aider les clients à décider correctement, organiser la maintenance et prioriser les investissements.',
    whoFor: ['Administrations de PH', 'Propriétaires', 'Investisseurs', 'Bâtiments en maintenance continue'],
    problems: ['Maintenance réactive', 'Manque de coordination', 'Exécution dispersée et coûts imprévisibles'],
    bullets: ['Inspection des actifs', 'Programmation de la maintenance', 'Coordination des travaux', 'Conseil technique et de maintenance'],
    href: '/servicios/gestion-propiedad',
  },
  {
    slug: 'gestion-proyectos',
    title: 'Gestion de projets',
    shortTitle: 'Gestion de projets',
    summary: 'Supervision claire et coordination de chantier pour que le client n’ait pas à gérer chaque détail.',
    description:
      'Vanguardia prend la responsabilité du plan, de l’exécution et de la communication — pour un projet plus clair, ordonné et contrôlé.',
    whoFor: ['Clients avec plusieurs prestataires', 'PH', 'Biens commerciaux', 'Travaux d’amélioration'],
    problems: ['Décalage entre entrepreneurs', 'Absence de direction générale', 'Difficulté à maîtriser délais et budgets'],
    bullets: ['Planification', 'Supervision', 'Coordination', 'Contrôle de l’avancement et de l’exécution'],
    href: '/servicios/gestion-proyectos',
  },
  {
    slug: 'obras-especializadas',
    title: 'Travaux spécialisés',
    shortTitle: 'Travaux spécialisés',
    summary: 'Travaux techniques avec préparation, jugement et exécution spécialisée sur façades, toitures et revêtements.',
    description:
      'Lorsque le climat, les conditions ou la structure exigent une approche spécialisée, une préparation et une exécution correctes font la différence.',
    whoFor: ['Bâtiments avec humidité', 'Toitures', 'Façades', 'Biens aux exigences techniques spécifiques'],
    problems: ['Infiltrations persistantes', 'Dommages aux façades et toitures', 'Réparations peu durables'],
    bullets: ['Étanchéité', 'Revêtements', 'Toitures vertes', 'Solutions pour façades et enveloppes'],
    href: '/servicios/obras-especializadas',
  },
];

const segmentsEs: SegmentContent[] = [
  {
    slug: 'residencial',
    title: 'Residencial',
    blurb:
      'Propietarios, familias y clientes privados que necesitan construcción, renovación, mantenimiento y coordinación ordenada para cuidar su vivienda o propiedad.',
    problems: ['Mantenimiento que se acumula', 'Obras sin seguimiento claro', 'Interrupciones en la vida diaria'],
    solutions: ['Renovación y remodelación', 'Mantenimiento preventivo', 'Coordinación de obra y proveedores'],
    href: '/quien-sirve/residencial',
  },
  {
    slug: 'comercial-industrial',
    title: 'Comercial & Industrial',
    blurb:
      'Empresas, administradores y clientes con inmuebles que necesitan obras, mantenimiento y coordinación técnica sin afectar la operación.',
    problems: ['Reparaciones que afectan la operación', 'Necesidad de obras con planificación', 'Mantenimiento disperso y reactivo'],
    solutions: ['Mejoras en propiedades', 'Mantenimiento de instalaciones', 'Obras especializadas y coordinación técnica'],
    href: '/quien-sirve/comercial-industrial',
  },
  {
    slug: 'ph',
    title: 'PH',
    blurb:
      'Administraciones, juntas y gestores de PH que requieren mantenimiento preventivo, coordinación y criterio para proteger la apariencia, el valor y la vida útil del edificio.',
    problems: ['Fallas recurrentes en áreas comunes', 'Presupuesto y planificación complejos', 'Pérdida de valor por deterioro'],
    solutions: ['Mantenimiento preventivo y correctivo', 'Trabajos de impermeabilización y pintura', 'Coordinación y control de obra'],
    href: '/quien-sirve/ph',
  },
];

const segmentsEn: SegmentContent[] = [
  {
    slug: 'residencial',
    title: 'Residential',
    blurb:
      'Owners, families and private clients who need construction, renovation, maintenance and orderly coordination to care for their home or property.',
    problems: ['Maintenance that piles up', 'Works without clear follow-through', 'Disruption to daily life'],
    solutions: ['Renovation and remodeling', 'Preventive maintenance', 'Coordination of works and vendors'],
    href: '/quien-sirve/residencial',
  },
  {
    slug: 'comercial-industrial',
    title: 'Commercial & Industrial',
    blurb:
      'Businesses, managers and clients with properties that need works, maintenance and technical coordination without disrupting operations.',
    problems: ['Repairs that disrupt operations', 'Works that need proper planning', 'Scattered, reactive maintenance'],
    solutions: ['Property upgrades', 'Facility maintenance', 'Specialized works and technical coordination'],
    href: '/quien-sirve/comercial-industrial',
  },
  {
    slug: 'ph',
    title: 'PH / HOA',
    blurb:
      'Administrations, boards and PH managers who need preventive maintenance, coordination and judgment to protect appearance, value and building life.',
    problems: ['Recurring failures in common areas', 'Complex budgets and planning', 'Value loss from deterioration'],
    solutions: ['Preventive and corrective maintenance', 'Waterproofing and painting works', 'Site coordination and control'],
    href: '/quien-sirve/ph',
  },
];

const segmentsFr: SegmentContent[] = [
  {
    slug: 'residencial',
    title: 'Résidentiel',
    blurb:
      'Propriétaires, familles et clients privés qui ont besoin de construction, rénovation, maintenance et coordination ordonnée pour soigner leur logement ou leur bien.',
    problems: ['Maintenance qui s’accumule', 'Travaux sans suivi clair', 'Perturbations de la vie quotidienne'],
    solutions: ['Rénovation et remodelage', 'Maintenance préventive', 'Coordination des travaux et prestataires'],
    href: '/quien-sirve/residencial',
  },
  {
    slug: 'comercial-industrial',
    title: 'Commercial & Industriel',
    blurb:
      'Entreprises, gestionnaires et clients dont les biens exigent des travaux, de la maintenance et une coordination technique sans perturber l’activité.',
    problems: ['Réparations qui affectent l’exploitation', 'Travaux nécessitant une planification', 'Maintenance dispersée et réactive'],
    solutions: ['Améliorations immobilières', 'Maintenance des installations', 'Travaux spécialisés et coordination technique'],
    href: '/quien-sirve/comercial-industrial',
  },
  {
    slug: 'ph',
    title: 'PH',
    blurb:
      'Administrations, conseils et gestionnaires de PH qui ont besoin de maintenance préventive, de coordination et de jugement pour protéger l’apparence, la valeur et la durée de vie du bâtiment.',
    problems: ['Pannes récurrentes dans les parties communes', 'Budgets et planification complexes', 'Perte de valeur par dégradation'],
    solutions: ['Maintenance préventive et corrective', 'Travaux d’étanchéité et de peinture', 'Coordination et contrôle de chantier'],
    href: '/quien-sirve/ph',
  },
];

const homeExtras: Record<
  Locale,
  {
    services: { kicker: string; heading: string; moreInfo: string };
    why: { kicker: string; heading: string; points: string[] };
    capability: { kicker: string; heading: string; items: string[] };
    process: { kicker: string; heading: string; steps: ProcessStep[] };
    projects: { kicker: string; heading: string; cards: ProjectCard[] };
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
    services: {
      kicker: 'Áreas de negocio',
      heading: 'Un sistema de soluciones para cada tipo de inmueble.',
      moreInfo: 'Más información',
    },
    why: {
      kicker: 'Por qué Vanguardia',
      heading: 'Una sola referencia. Una responsabilidad clara.',
      points: [
        'Un solo responsable',
        'Alcance claro',
        'Supervisión directa',
        'Soluciones prácticas',
        'Comunicación clara',
        'Pensamiento a largo plazo',
      ],
    },
    capability: {
      kicker: 'Capacidad',
      heading: 'Entendemos la realidad de cada tipo de propiedad.',
      items: [
        'Propiedades residenciales',
        'Edificios PH',
        'Inmuebles comerciales',
        'Instalaciones industriales',
        'Envolturas y fachadas',
        'Cubiertas',
        'Recubrimientos',
        'Impermeabilización',
        'Techos verdes',
      ],
    },
    process: {
      kicker: 'Cómo trabajamos',
      heading: 'Un proceso claro para que el cliente sepa quién responde.',
      steps: [
        { step: '01', title: 'Entender', text: 'Recopilamos la necesidad, la condición del inmueble y los objetivos del cliente.' },
        { step: '02', title: 'Evaluar', text: 'Analizamos la situación, el alcance y los riesgos para proponer la mejor solución.' },
        { step: '03', title: 'Planificar', text: 'Definimos el plan, los tiempos, la coordinación y el criterio de ejecución.' },
        { step: '04', title: 'Ejecutar', text: 'Llevamos la obra con supervisión directa, control y comunicación constante.' },
        { step: '05', title: 'Entregar y apoyar', text: 'Finalizamos la obra y acompañamos la propiedad con criterio de mantenimiento.' },
      ],
    },
    projects: {
      kicker: 'Proyectos',
      heading: 'Trabajos que pueden ampliarse y organizarse según el tipo de propiedad.',
      cards: [
        { title: 'Renovación residencial', category: 'Residencial', type: 'Renovación' },
        { title: 'Mejora de inmueble comercial', category: 'Comercial & Industrial', type: 'Construcción' },
        { title: 'Mantenimiento de PH', category: 'PH', type: 'Mantenimiento' },
        { title: 'Impermeabilización y recubrimientos', category: 'Especializados', type: 'Especializado' },
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
      segments: 'Segmentos',
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
      kicker: 'Segmento',
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
      clientOptions: ['Residencial', 'Comercial & Industrial', 'PH', 'Otro'],
      serviceOptions: [
        'Construcción & Renovación',
        'Mantenimiento & Reparaciones',
        'Gestión de Propiedad',
        'Gestión de Proyectos',
        'Obras Especializadas',
      ],
    },
  },
  en: {
    services: {
      kicker: 'Business areas',
      heading: 'A system of solutions for every type of property.',
      moreInfo: 'Learn more',
    },
    why: {
      kicker: 'Why Vanguardia',
      heading: 'One point of contact. Clear accountability.',
      points: [
        'One accountable partner',
        'Clear scope',
        'Direct supervision',
        'Practical solutions',
        'Clear communication',
        'Long-term thinking',
      ],
    },
    capability: {
      kicker: 'Capability',
      heading: 'We understand the reality of every type of property.',
      items: [
        'Residential properties',
        'PH / condominium buildings',
        'Commercial properties',
        'Industrial facilities',
        'Envelopes and façades',
        'Roofs',
        'Coatings',
        'Waterproofing',
        'Green roofs',
      ],
    },
    process: {
      kicker: 'How we work',
      heading: 'A clear process so the client always knows who is accountable.',
      steps: [
        { step: '01', title: 'Understand', text: 'We gather the need, the condition of the property and the client’s objectives.' },
        { step: '02', title: 'Assess', text: 'We analyze the situation, scope and risks to propose the best solution.' },
        { step: '03', title: 'Plan', text: 'We define the plan, timeline, coordination and execution criteria.' },
        { step: '04', title: 'Execute', text: 'We carry out the work with direct supervision, control and constant communication.' },
        { step: '05', title: 'Deliver and support', text: 'We complete the work and stay with the property through a maintenance mindset.' },
      ],
    },
    projects: {
      kicker: 'Projects',
      heading: 'Work that can scale and be organized by property type.',
      cards: [
        { title: 'Residential renovation', category: 'Residential', type: 'Renovation' },
        { title: 'Commercial property upgrade', category: 'Commercial & Industrial', type: 'Construction' },
        { title: 'PH maintenance', category: 'PH / HOA', type: 'Maintenance' },
        { title: 'Waterproofing and coatings', category: 'Specialized', type: 'Specialized' },
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
      segments: 'Segments',
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
      kicker: 'Segment',
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
      clientOptions: ['Residential', 'Commercial & Industrial', 'PH / HOA', 'Other'],
      serviceOptions: [
        'Construction & Renovation',
        'Maintenance & Repairs',
        'Property Management',
        'Project Management',
        'Specialized Works',
      ],
    },
  },
  fr: {
    services: {
      kicker: 'Domaines d’activité',
      heading: 'Un système de solutions pour chaque type de bien.',
      moreInfo: 'En savoir plus',
    },
    why: {
      kicker: 'Pourquoi Vanguardia',
      heading: 'Un seul interlocuteur. Une responsabilité claire.',
      points: [
        'Un seul responsable',
        'Périmètre clair',
        'Supervision directe',
        'Solutions pratiques',
        'Communication claire',
        'Vision à long terme',
      ],
    },
    capability: {
      kicker: 'Capacités',
      heading: 'Nous comprenons la réalité de chaque type de propriété.',
      items: [
        'Biens résidentiels',
        'Immeubles PH',
        'Biens commerciaux',
        'Installations industrielles',
        'Enveloppes et façades',
        'Toitures',
        'Revêtements',
        'Étanchéité',
        'Toitures vertes',
      ],
    },
    process: {
      kicker: 'Notre façon de travailler',
      heading: 'Un processus clair pour que le client sache toujours qui répond.',
      steps: [
        { step: '01', title: 'Comprendre', text: 'Nous recueillons le besoin, l’état du bien et les objectifs du client.' },
        { step: '02', title: 'Évaluer', text: 'Nous analysons la situation, le périmètre et les risques pour proposer la meilleure solution.' },
        { step: '03', title: 'Planifier', text: 'Nous définissons le plan, les délais, la coordination et les critères d’exécution.' },
        { step: '04', title: 'Exécuter', text: 'Nous menons les travaux avec supervision directe, contrôle et communication constante.' },
        { step: '05', title: 'Livrer et accompagner', text: 'Nous finalisons les travaux et accompagnons le bien avec une logique de maintenance.' },
      ],
    },
    projects: {
      kicker: 'Projets',
      heading: 'Des travaux qui peuvent s’étendre et s’organiser selon le type de bien.',
      cards: [
        { title: 'Rénovation résidentielle', category: 'Résidentiel', type: 'Rénovation' },
        { title: 'Amélioration de bien commercial', category: 'Commercial & Industriel', type: 'Construction' },
        { title: 'Maintenance de PH', category: 'PH', type: 'Maintenance' },
        { title: 'Étanchéité et revêtements', category: 'Spécialisés', type: 'Spécialisé' },
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
      segments: 'Segments',
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
      kicker: 'Segment',
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
      clientOptions: ['Résidentiel', 'Commercial & Industriel', 'PH', 'Autre'],
      serviceOptions: [
        'Construction & Rénovation',
        'Maintenance & Réparations',
        'Gestion immobilière',
        'Gestion de projets',
        'Travaux spécialisés',
      ],
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

/** Slugs only — for static params generation. */
export const serviceSlugs = serviceAreasEs.map((area) => area.slug);
export const segmentSlugs = segmentsEs.map((segment) => segment.slug);
