import { ServiceItem, BenefitItem, TeamMember, SocialLink, NavItem } from '../types';
import toniImage from '../components/images/toniImage.jpg'; // Importa la imagen correctamente
import pabloImage from '../components/images/pabloImage.jpg'; // Importa la imagen correctamente
import logoIA from '../components/images/LogoIA.jpg'; // Importa la imagen correctamente



export const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Chatbots Inteligentes',
    description: 'Chatbots personalizados con IA avanzada para atención al cliente 24/7, aumentando la satisfacción y reduciendo costos operativos.',
    icon: 'MessageSquare',
    demoUrl: 'https://demo.aisolutions.com/chatbot',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Automatización de Procesos',
    description: 'Soluciones automatizadas para flujos de trabajo repetitivos, permitiendo a su equipo enfocarse en tareas de mayor valor.',
    icon: 'Settings',
    demoUrl: 'https://demo.aisolutions.com/automation',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Gestión de Inventario',
    description: 'Soluciones basadasen IA que automatiza el seguimiento, control y optimización del stock, prediciendo la demanda y ayudando a reducir pérdidas o faltantes, asegurando una gestión eficiente y toma de decisiones más precisa.',
    icon: 'BarChart',
    demoUrl: 'https://demo.aisolutions.com/analytics',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Gestion de Reservas',
    description: 'Sistema inteligente de gestión de reservas que automatiza agendamientos, evita duplicidades y mejora la experiencia del cliente con recordatorios personalizados y disponibilidad en tiempo real.',
    icon: 'Calendar',
    demoUrl: 'https://demo.aisolutions.com/assistant',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Gestión de Redes Sociales',
    description: 'Un asistente de redes sociales impulsado por IA que programa publicaciones, analiza métricas y sugiere contenido relevante para aumentar la visibilidad, mejorar la interacción con los usuarios y optimizar tu presencia digital de forma automatizada.',
    icon: 'Search',
    demoUrl: 'https://demo.aisolutions.com/patterns',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Automaticion de Promociones',
    description: 'Automatiza promociones según el comportamiento del cliente, lanzando ofertas personalizadas en el momento ideal para aumentar conversiones y fidelizar.',
    icon: 'Link',
    demoUrl: 'https://demo.aisolutions.com/integration',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const benefits: BenefitItem[] = [
  {
    id: 1,
    title: 'Ahorro de Tiempo',
    description: 'Nuestras soluciones automatizan tareas repetitivas, liberando horas de trabajo para actividades estratégicas.',
    icon: 'Clock'
  },
  {
    id: 2,
    title: 'Mayor Eficiencia',
    description: 'Optimizamos procesos empresariales para incrementar la productividad y reducir errores operativos.',
    icon: 'Zap'
  },
  {
    id: 3,
    title: 'Atención 24/7',
    description: 'Mantenemos su negocio funcionando y atendiendo clientes sin interrupciones, todos los días del año.',
    icon: 'Sun'
  },
  {
    id: 4,
    title: 'Insights Valiosos',
    description: 'Transformamos datos en conocimientos accionables para mejorar la toma de decisiones estratégicas.',
    icon: 'Lightbulb'
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'IntelimAtic',
    role: 'Soluciones de inteligencia artificial y automatización para su empresa.',
    image: logoIA
  },
  {
    id: 2,
    name: 'Pablo Revuelta Sanchez',
    role: 'CEO & Fundador',
    image: pabloImage
  },
  {
    id: 3,
    name: 'Antonio Vargas Garcia',
    role: 'CEO & Fundador',
    image: toniImage  // Usando la imagen importada
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin'
  },
  {
    id: 2,
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter'
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'Instagram'
  },
  {
    id: 4,
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'Facebook'
  }
];

export const navItems: NavItem[] = [
  {
    id: 1,
    name: 'Inicio',
    href: '#home'
  },
  {
    id: 2,
    name: 'Servicios',
    href: '#services'
  },
  {
    id: 3,
    name: 'Beneficios',
    href: '#benefits'
  },
  {
    id: 4,
    name: 'Nosotros',
    href: '#about'
  },
  {
    id: 5,
    name: 'Contacto',
    href: '#contact'
  }
];
