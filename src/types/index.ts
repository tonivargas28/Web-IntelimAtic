export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  demoUrl?: string;
  videoUrl?: string;
  image: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  id: number;
  name: string;
  href: string;
}