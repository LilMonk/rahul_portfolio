export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  details?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "other";
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  location?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  contact: ContactInfo;
}
