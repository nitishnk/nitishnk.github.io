// Define types for the portfolio data

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'IAM' | 'Coding' |'Tools' | 'soft' | 'other';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  achievements?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone?: string;
  avatar: string;
  socialLinks: SocialLink[];
}