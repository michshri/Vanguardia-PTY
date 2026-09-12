export type ServiceArea = {
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

export type Segment = {
  slug: string;
  title: string;
  blurb: string;
  problems: string[];
  solutions: string[];
  href: string;
};

export const serviceAreas: ServiceArea[] = [
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

export const customerSegments: Segment[] = [
  {
    slug: 'residencial',
    title: 'Residencial',
    blurb: 'Renovaciones, reparaciones y mejoras para casas y propiedades privadas con enfoque en la claridad y la ejecución responsable.',
    problems: ['Mantenimiento que se acumula', 'Obras sin seguimiento claro', 'Interrupciones en la vivienda'],
    solutions: ['Renovación y remodelación', 'Mantenimiento preventivo', 'Coordinación de obra y proveedores'],
    href: '/quien-sirve/residencial',
  },
  {
    slug: 'comercial-industrial',
    title: 'Comercial & Industrial',
    blurb: 'Soluciones para inmuebles de uso comercial e industrial con prioridad a la operación, la durabilidad y la coordinación.',
    problems: ['Reparaciones que afectan la operación', 'Necesidad de obras con planificación', 'Mantenimiento disperso y reactivo'],
    solutions: ['Mejoras en propiedades', 'Mantenimiento de instalaciones', 'Obras especializadas y coordinación técnica'],
    href: '/quien-sirve/comercial-industrial',
  },
  {
    slug: 'ph',
    title: 'PH',
    blurb: 'Mantenimiento y planificación para comunidades de propietarios, administraciones y edificios con necesidades de conservación continua.',
    problems: ['Fallas recurrentes en áreas comunes', 'Presupuesto y planificación complejos', 'Pérdida de valor por deterioro'],
    solutions: ['Mantenimiento preventivo y correctivo', 'Trabajos de impermeabilización y pintura', 'Coordinación y control de obra'],
    href: '/quien-sirve/ph',
  },
];

export const valuePoints = [
  'Un solo responsable',
  'Supervisión directa',
  'Construcción + criterio de propiedad',
  'Soluciones prácticas',
  'Comunicación clara',
  'Pensamiento a largo plazo',
];

export const processSteps = [
  { step: '01', title: 'Entender', text: 'Recopilamos la necesidad, la condición del inmueble y los objetivos del cliente.' },
  { step: '02', title: 'Evaluar', text: 'Analizamos la situación, el alcance y los riesgos para proponer la mejor solución.' },
  { step: '03', title: 'Planificar', text: 'Definimos el plan, los tiempos, la coordinación y el criterio de ejecución.' },
  { step: '04', title: 'Ejecutar', text: 'Llevamos la obra con supervisión directa, control y comunicación constante.' },
  { step: '05', title: 'Entregar y apoyar', text: 'Finalizamos la obra y acompañamos la propiedad con criterio de mantenimiento.' },
];

export const projectPlaceholders = [
  { title: 'Renovación residencial', category: 'Residencial', type: 'Renovación', accent: 'Residencial' },
  { title: 'Mejora de inmueble comercial', category: 'Comercial & Industrial', type: 'Construcción', accent: 'Comercial' },
  { title: 'Mantenimiento de PH', category: 'PH', type: 'Mantenimiento', accent: 'PH' },
  { title: 'Impermeabilización y recubrimientos', category: 'Especializados', type: 'Especializado', accent: 'Especializado' },
];

export const navigations = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/quien-sirve', label: 'Quiénes Somos' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];
