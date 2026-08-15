export const me = {
  name: 'Jair Zea Páez',
  role: 'Líder Técnico · Full-Stack',
  location: 'Cartagena, Colombia',
  email: 'jairzeapaez@gmail.com',
  phone: '+57 321 709 8185',
  github: 'https://github.com/jairzea',
  linkedin: 'https://www.linkedin.com/in/jairzea',
  intro:
    'Más de 7 años construyendo plataformas web y móviles. Llevo productos de la idea a producción: arquitectura, backend, frontend y el pipeline que los despliega.',
}

export const stats = [
  { value: '7+', label: 'años de experiencia' },
  { value: '60%', label: 'menos tiempo de respuesta en agendamiento médico' },
  { value: '30%', label: 'más productividad con el HelpDesk de UNITECNAR' },
  { value: '4', label: 'desarrolladores liderados en Venobra' },
]

export const projects = [
  {
    name: 'Sendex',
    role: 'Líder técnico · de cero a producción',
    blurb:
      'Plataforma logística construida desde la primera línea hasta el despliegue. Lideré el frontend, desarrollé el backend y configuré yo mismo el despliegue continuo en Jenkins.',
    stack: ['Laravel', 'React', 'MySQL', 'Jenkins', 'Socket.IO', 'Tailwind'],
    url: 'https://sendex-uat.nordvpncapital.com',
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    name: 'SmartBuy',
    role: 'Full-stack',
    blurb:
      'E-commerce sobre Next.js y Medusa con backend en Laravel. Colaboré en todo el producto, del frontend al backend.',
    stack: ['Next.js', 'Medusa', 'Laravel', 'MySQL'],
    url: 'https://smartbuy.com.co/co',
    accent: 'from-violet-400 to-fuchsia-600',
  },
  {
    name: 'Xlearn',
    role: 'Líder técnico · de cero a producción',
    blurb:
      'Plataforma educativa levantada desde cero, incluyendo la infraestructura de integración y despliegue continuo.',
    stack: ['Laravel', 'React', 'MySQL', 'Jenkins'],
    accent: 'from-amber-400 to-orange-600',
  },
  {
    name: 'PulseOps',
    role: 'Arquitectura y desarrollo',
    blurb:
      'Sistema de evaluación operativa que analiza el comportamiento temporal de métricas de equipo mediante un motor declarativo de reglas.',
    stack: ['NestJS', 'React', 'MongoDB', 'TypeScript', 'Recharts', 'Docker'],
    url: 'https://github.com/jairzea/PulseOps',
    accent: 'from-emerald-400 to-teal-600',
  },
  {
    name: 'Encaza',
    role: 'Desarrollo completo',
    blurb:
      'Aplicación móvil desarrollada en su totalidad, frontend y backend, por mi cuenta.',
    stack: ['Flutter', 'PHP', 'MySQL'],
    accent: 'from-rose-400 to-pink-600',
  },
  {
    name: 'Venobra',
    role: 'Dirección técnica',
    blurb:
      'Proyecto turístico entregado con un equipo de 4 personas. Desarrollé la API de integración y el módulo de administración, recortando el tiempo de entrega a la mitad.',
    stack: ['React', 'PHP', 'MySQL', 'REST'],
    accent: 'from-indigo-400 to-sky-600',
  },
]

export const experience = [
  {
    company: 'Mutual Ser',
    role: 'Analista de Desarrollo TI Nivel 2 · Líder Técnico',
    period: 'Ago 2021 — Actual',
    place: 'Cartagena',
    points: [
      'Revisiones de código para mantener calidad y coherencia en el código base.',
      'Principios SOLID y patrones de diseño aplicados al día a día del equipo.',
      'Mejora continua de la experiencia de usuario en las aplicaciones.',
      'Investigación y propuesta de nuevas tecnologías para el proceso de desarrollo.',
    ],
    stack: ['React', 'Angular', 'JavaScript', 'Git'],
  },
  {
    company: '10xthinking',
    role: 'Desarrollador Líder',
    period: 'Mar 2022 — Mar 2024',
    place: 'Medellín',
    points: [
      'Lideré y supervisé las actividades de desarrollo del equipo.',
      'Backend enfocado en rendimiento y escalabilidad, más el modelo de datos.',
      'Integraciones con sistemas de terceros vía API.',
      'Gestión de despliegues a entornos productivos.',
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
    company: 'ST&T · Unlimitech Cloud',
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

export const skills = [
  { group: 'Backend', items: ['Laravel', 'PHP', 'Node', 'NestJS', 'C#', 'REST'] },
  { group: 'Frontend', items: ['React', 'Angular', 'Vue', 'Next.js', 'TypeScript', 'Tailwind'] },
  { group: 'Móvil', items: ['Flutter', 'Ionic'] },
  { group: 'Datos', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'] },
  { group: 'DevOps & QA', items: ['Jenkins', 'Docker', 'Git', 'Cypress', 'AWS'] },
  { group: 'Proceso', items: ['SCRUM', 'SOLID', 'Patrones de diseño', 'Code review'] },
]
