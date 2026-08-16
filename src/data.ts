export const me = {
  name: 'Jair Zea Páez',
  role: 'Líder Técnico · Full-Stack · AI-First',
  location: 'Cartagena, Colombia',
  email: 'jairzeapaez@gmail.com',
  phone: '+57 321 709 8185',
  github: 'https://github.com/jairzea',
  linkedin: 'https://www.linkedin.com/in/jairzea',
  intro:
    'Desarrollo software desde 2018. Llevo productos de la idea a producción y lidero los equipos que los construyen: arquitectura, backend, frontend, pruebas automatizadas y el pipeline que despliega.',
}

export const stats = [
  { value: '8', label: 'años construyendo software' },
  { value: '10', label: 'desarrolladores en el equipo que lidero hoy' },
  { value: '60%', label: 'menos tiempo de respuesta en agendamiento médico' },
  { value: '30%', label: 'más productividad con el HelpDesk de Unitecnar' },
]

/** Ejes de trabajo: lo que me contratan a hacer, más allá del stack. */
export const focus = [
  {
    title: 'Liderazgo técnico',
    body: 'Equipos de hasta 10 desarrolladores. Reviso código, defino patrones y acompaño técnicamente al equipo para que la calidad no dependa de una sola persona.',
  },
  {
    title: 'De cero a producción',
    body: 'He levantado plataformas completas desde la primera línea hasta el despliegue: modelo de datos, API, frontend e infraestructura de CI/CD en Jenkins.',
  },
  {
    title: 'AI-first',
    body: 'Desarrollo con agentes y RAG como parte del diseño, no como añadido. Orquestación con LangGraph, embeddings y bases vectoriales.',
  },
  {
    title: 'Calidad automatizada',
    body: 'Implementación de Cypress con patrones de construcción reutilizables, para que la suite crezca sin volverse frágil.',
  },
  {
    title: 'Herramientas internas',
    body: 'Construyo trazabilidad propia para el equipo. Si un proceso nos frena, prefiero medirlo y automatizarlo antes que acostumbrarnos a él.',
  },
  {
    title: 'Arquitectura y datos',
    body: 'Modelado de bases de datos, principios SOLID y patrones de diseño aplicados a sistemas que tienen que durar y escalar.',
  },
]

type Project = {
  name: string
  role: string
  blurb: string
  stack: string[]
  tag: 'Plataformas' | 'IA' | 'Móvil' | 'Herramientas'
  url?: string
  repo?: string
  accent: string
}

export const projects: Project[] = [
  {
    name: 'Sendex',
    role: 'Líder técnico · de cero a producción',
    blurb:
      'Plataforma logística construida desde la primera línea hasta el despliegue. Lideré el frontend, desarrollé el backend y configuré yo mismo el despliegue continuo en Jenkins.',
    stack: ['Laravel', 'React', 'MySQL', 'Jenkins', 'Socket.IO', 'Tailwind'],
    tag: 'Plataformas',
    url: 'https://sendex-uat.nordvpncapital.com',
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    name: 'Simthink',
    role: 'Arquitectura y desarrollo',
    blurb:
      'Plataforma de investigación de mercado con agentes de IA. Orquesta estudios sobre personas sintéticas usando LangGraph, RAG sobre documentos del usuario y un modelo de créditos por consumo.',
    stack: ['Laravel', 'FastAPI', 'LangGraph', 'OpenAI', 'Qdrant', 'PostgreSQL', 'Docker'],
    tag: 'IA',
    repo: 'https://github.com/jairzea/api.simthink',
    accent: 'from-lime-400 to-emerald-600',
  },
  {
    name: 'SmartBuy',
    role: 'Full-stack',
    blurb:
      'E-commerce sobre Next.js y Medusa con backend en Laravel. Colaboré en todo el producto, del frontend al backend.',
    stack: ['Next.js', 'Medusa', 'Laravel', 'MySQL'],
    tag: 'Plataformas',
    url: 'https://smartbuy.com.co/co',
    accent: 'from-violet-400 to-fuchsia-600',
  },
  {
    name: 'Xlearn',
    role: 'Líder técnico · de cero a producción',
    blurb:
      'Plataforma educativa levantada desde cero, incluyendo la infraestructura de integración y despliegue continuo.',
    stack: ['Laravel', 'React', 'MySQL', 'Jenkins'],
    tag: 'Plataformas',
    accent: 'from-amber-400 to-orange-600',
  },
  {
    name: 'PulseOps',
    role: 'Arquitectura y desarrollo',
    blurb:
      'Sistema de evaluación operativa que analiza el comportamiento temporal de métricas de equipo mediante un motor declarativo de reglas, con visualización de tendencias y flujos.',
    stack: ['NestJS', 'React', 'MongoDB', 'TypeScript', 'Recharts', 'Docker'],
    tag: 'Herramientas',
    repo: 'https://github.com/jairzea/PulseOps',
    accent: 'from-emerald-400 to-teal-600',
  },
  {
    name: 'Agendamiento de citas de alto costo',
    role: 'Líder de desarrollo · Fundovida IPS',
    blurb:
      'Sistema de planificación anual de citas médicas para programas de alto costo. Redujo los tiempos de respuesta un 60% y mejoró la eficiencia del personal de admisión.',
    stack: ['Laravel', 'React', 'MySQL', 'Jenkins'],
    tag: 'Plataformas',
    accent: 'from-sky-400 to-cyan-600',
  },
  {
    name: 'HelpDesk Unitecnar',
    role: 'Coordinador de desarrollo',
    blurb:
      'Mesa de ayuda para el personal administrativo y operativo de la institución. Subió la productividad del personal un 30%.',
    stack: ['Laravel', 'CodeIgniter', 'PostgreSQL'],
    tag: 'Herramientas',
    accent: 'from-teal-400 to-emerald-600',
  },
  {
    name: 'Encaza',
    role: 'Desarrollo completo',
    blurb:
      'Aplicación móvil desarrollada en su totalidad, frontend y backend, por mi cuenta.',
    stack: ['Flutter', 'PHP', 'MySQL'],
    tag: 'Móvil',
    accent: 'from-rose-400 to-pink-600',
  },
  {
    name: 'Venobra',
    role: 'Dirección técnica',
    blurb:
      'Proyecto turístico entregado con un equipo de 4 personas. Desarrollé la API de integración y el módulo de administración, recortando el tiempo de entrega a la mitad.',
    stack: ['React', 'PHP', 'MySQL', 'REST'],
    tag: 'Plataformas',
    accent: 'from-indigo-400 to-sky-600',
  },
  {
    name: 'G4 Group',
    role: 'Frontend y backend',
    blurb:
      'Plataforma para agencia de publicidad. Participé en la planificación y metodología de trabajo, desarrollé la interfaz e intervine en el backend.',
    stack: ['Vue.js', 'Laravel', 'MySQL'],
    tag: 'Plataformas',
    accent: 'from-purple-400 to-violet-600',
  },
  {
    name: 'Integración Clientify',
    role: 'Desarrollo',
    blurb:
      'Servicio web para integrar el CRM Clientify con sistemas internos vía API.',
    stack: ['Laravel', 'REST'],
    tag: 'Herramientas',
    repo: 'https://github.com/jairzea/integration.clientify',
    accent: 'from-orange-400 to-red-600',
  },
  {
    name: 'Tienda con pasarela de pago',
    role: 'Full-stack',
    blurb:
      'Tienda en línea integrada con la pasarela de pagos PlaceToPay, backend y frontend separados.',
    stack: ['Laravel', 'React', 'MySQL', 'REST'],
    tag: 'Plataformas',
    repo: 'https://github.com/jairzea/frontend.evertec',
    accent: 'from-blue-400 to-indigo-600',
  },
  {
    name: 'Room 911',
    role: 'Full-stack',
    blurb:
      'Control de acceso a áreas restringidas con gestión de empleados y permisos, API y cliente separados.',
    stack: ['Laravel', 'React', 'MySQL'],
    tag: 'Plataformas',
    repo: 'https://github.com/jairzea/room-911',
    accent: 'from-red-400 to-rose-600',
  },
  {
    name: 'League Condor',
    role: 'Desarrollo móvil',
    blurb: 'Aplicación de ligas de fútbol construida en Flutter.',
    stack: ['Flutter', 'Dart'],
    tag: 'Móvil',
    repo: 'https://github.com/jairzea/league_condor',
    accent: 'from-fuchsia-400 to-purple-600',
  },
  {
    name: 'Employee Manager',
    role: 'Backend',
    blurb:
      'API de gestión de empleados con autenticación por JWT, construida sobre Spring Boot y Spring Security.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT'],
    tag: 'Herramientas',
    repo: 'https://github.com/jairzea/employee-manager',
    accent: 'from-amber-400 to-yellow-600',
  },
]

export const experience = [
  {
    company: 'Mutual Ser',
    role: 'Analista de Desarrollo TI Nivel 2 · Líder Técnico',
    period: 'Ago 2021 — Actual',
    place: 'Cartagena',
    points: [
      'Lidero técnicamente el desarrollo de una aplicación con un equipo de hasta 10 desarrolladores.',
      'Construí herramientas de trazabilidad internas que agilizan el trabajo del equipo y lo hacen más autónomo.',
      'Implementé pruebas automatizadas con Cypress aplicando patrones de construcción reutilizables.',
      'Revisiones de código, principios SOLID y definición de patrones de diseño para el equipo.',
      'Investigación y propuesta de tecnologías que mejoren el proceso de desarrollo.',
    ],
    stack: ['Java', 'React', 'Angular', 'Cypress', 'Git'],
  },
  {
    company: 'Unlimitech.cloud',
    role: 'Desarrollo AI-First',
    period: 'Actual',
    place: 'Remoto',
    points: [
      'Desarrollo de producto bajo el paradigma AI-first: los agentes y la recuperación de contexto son parte del diseño, no un añadido.',
      'Orquestación de agentes con LangGraph y RAG sobre bases vectoriales.',
      'Participación en la investigación y los whitepapers que sustentan el enfoque.',
    ],
    stack: ['LangGraph', 'FastAPI', 'OpenAI', 'Qdrant', 'Laravel', 'Docker'],
  },
  {
    company: '10xthinking',
    role: 'Desarrollador Líder',
    period: 'Mar 2022 — Mar 2024',
    place: 'Medellín',
    points: [
      'Lideré y supervisé las actividades de desarrollo del equipo, asegurando calidad y cumplimiento de plazos.',
      'Backend enfocado en rendimiento y escalabilidad, incluyendo el modelo de datos.',
      'Integraciones con sistemas de terceros vía API.',
      'Gestión de despliegues a producción y soporte técnico al equipo.',
    ],
    stack: ['React', 'Node', 'Laravel', 'MySQL'],
  },
  {
    company: 'Fundovida IPS',
    role: 'Desarrollador Web & Móvil',
    period: 'Oct 2018 — Dic 2023',
    place: 'Cartagena',
    points: [
      'Lideré un sistema de planificación de citas médicas para programas de alto costo: 60% menos tiempo de respuesta.',
      'Configuré y administré Jenkins para construcción y despliegue continuo conectado a GitHub.',
      'Desarrollo de aplicativos web desde cero, incluyendo API REST.',
    ],
    stack: ['React', 'Node', 'Laravel', 'C#', 'Flutter', 'Jenkins'],
  },
  {
    company: 'ST&T · Unlimitech.cloud',
    role: 'Desarrollador Web',
    period: '2 años',
    place: 'Bogotá',
    points: [
      'Aplicativos y plugins personalizados para WordPress.',
      'Pruebas automatizadas con Cypress y Katalon.',
      'Metodologías ágiles (SCRUM) con Jira y ClickUp.',
    ],
    stack: ['Vue.js', 'Cypress', 'Laravel', 'WordPress', 'AWS'],
  },
  {
    company: 'Unitecnar',
    role: 'Coordinador de Desarrollo',
    period: 'Feb 2020 — Sep 2021',
    place: 'Cartagena',
    points: [
      'Implementé un sistema de HelpDesk que subió la productividad del personal un 30%.',
      'Ingeniería de requerimientos, planificación y estructuración de proyectos.',
      'Capacitación y soporte a las distintas dependencias.',
    ],
    stack: ['Flutter', 'Laravel', 'CodeIgniter', 'PostgreSQL'],
  },
]

/**
 * Insignias servidas desde Credly (el emisor), no copiadas al repo: los logos
 * de AWS son marca registrada y así la imagen queda siempre atada a la
 * credencial vigente. `badge` vacío cae al monograma de respaldo.
 */
export const certifications = [
  {
    name: 'AWS Partner: Technical Accredited',
    issuer: 'Amazon Web Services',
    year: 'Ago 2025',
    badge: 'https://images.credly.com/size/340x340/images/8f006312-3154-45bf-a845-4a043641e83c/blob',
    url: 'https://www.credly.com/badges/300f8af7-3ef6-4c5d-b3b8-23a46f718e72/public_url',
  },
  {
    name: 'AWS Partner: Sales Accredited',
    issuer: 'Amazon Web Services',
    year: 'Ago 2025',
    badge: 'https://images.credly.com/size/340x340/images/46ea4542-72a8-46a1-8d68-b72c4ca50820/blob',
    url: 'https://www.credly.com/badges/b7be980c-0925-49d9-a37b-4e8be2f0ee24/public_url',
  },
  {
    name: 'PHP and Laravel',
    issuer: 'TestDome',
    year: 'Sep 2022',
    badge: 'https://www.testdome.com/webapp/dist/apple-touch-icon.png',
    url: 'https://www.testdome.com/certificates/653f5788635041a0aa676de9a3082571',
    framed: true,
  },
]

export const skills = [
  { group: 'Backend', items: ['Laravel', 'PHP', 'Java', 'Spring Boot', 'Node', 'NestJS', 'FastAPI', 'C#', 'REST'] },
  { group: 'Frontend', items: ['React', 'Angular', 'Vue', 'Next.js', 'TypeScript', 'Tailwind'] },
  { group: 'IA', items: ['LangGraph', 'LangChain', 'RAG', 'OpenAI', 'Qdrant', 'Chroma'] },
  { group: 'Móvil', items: ['Flutter', 'Dart', 'Ionic'] },
  { group: 'Datos', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'] },
  { group: 'DevOps', items: ['Jenkins', 'Docker', 'AWS', 'Git', 'GitLab'] },
  { group: 'Calidad', items: ['Cypress', 'PHPUnit', 'Katalon', 'Code review'] },
  { group: 'Proceso', items: ['SCRUM', 'SOLID', 'Patrones de diseño', 'Jira', 'ClickUp'] },
]
