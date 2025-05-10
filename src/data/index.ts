import { ServiceItem, BenefitItem, TeamMember, SocialLink, NavItem } from '../types';
import toniImage from '../components/images/toniImage.jpg'; // Importa la imagen correctamente
import pabloImage from '../components/images/pabloImage.jpg'; // Importa la imagen correctamente
import logoIA from '../components/images/logoIA.jpg'; // Importa la imagen correctamente

// Función helper para crear un servicio
const createService = (id: number, title: string, description: string, image: string, demoUrl?: string, videoUrl?: string): ServiceItem => ({
  id,
  title,
  description,
  icon: 'Settings',
  demoUrl,
  videoUrl,
  image
});

// Lista de servicios
export const services: ServiceItem[] = [
  createService(
    1,
    'Chatbots Inteligentes',
    'Chatbots personalizados con IA avanzada para atención al cliente 24/7, aumentando la satisfacción y reduciendo costos operativos.',
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://demo.aisolutions.com/chatbot',
    'https://www.youtube.com/embed/dQw4w9WgXcQ'
  ),
  createService(
    2,
    'Automatización de Procesos',
    'Soluciones automatizadas para flujos de trabajo repetitivos, permitiendo a su equipo enfocarse en tareas de mayor valor.',
    'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://demo.aisolutions.com/automation',
    'https://www.youtube.com/embed/dQw4w9WgXcQ'
  ),
  createService(
    3,
    'Gestión de Inventario',
    'Soluciones basadasen IA que automatiza el seguimiento, control y optimización del stock, prediciendo la demanda y ayudando a reducir pérdidas o faltantes, asegurando una gestión eficiente y toma de decisiones más precisa.',
    'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://demo.aisolutions.com/analytics',
    'https://www.youtube.com/embed/dQw4w9WgXcQ'
  ),
  createService(
    4,
    'Gestion de Reservas',
    'Sistema inteligente de gestión de reservas que automatiza agendamientos, evita duplicidades y mejora la experiencia del cliente con recordatorios personalizados y disponibilidad en tiempo real.',
    'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://demo.aisolutions.com/assistant',
    'https://www.youtube.com/embed/dQw4w9WgXcQ'
  ),
  createService(
    5,
    'Gestión de Redes Sociales',
    'Un asistente de redes sociales impulsado por IA que programa publicaciones, analiza métricas y sugiere contenido relevante para aumentar la visibilidad, mejorar la interacción con los usuarios y optimizar tu presencia digital de forma automatizada.',
    'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://demo.aisolutions.com/patterns',
    'https://www.youtube.com/embed/dQw4w9WgXcQ'
  ),
  createService(
    6,
    'Automaticion de Promociones',
    'Automatiza promociones según el comportamiento del cliente, lanzando ofertas personalizadas en el momento ideal para aumentar conversiones y fidelizar.',
    'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://demo.aisolutions.com/integration',
    'https://www.youtube.com/embed/dQw4w9WgXcQ'
  )
];

// Lista de beneficios
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

// Lista de miembros del equipo
export const team: TeamMember[] = [
  {
    id: 1,
    name: 'IntelimAtic',
    role: 'Soluciones de inteligencia artificial y automatización para empresas.',
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
    image: toniImage
  }
];

// Lista de enlaces sociales
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

// Lista de items de navegación
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
