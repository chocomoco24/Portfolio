export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string | null;
  demo: string | null;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  points: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface Personal {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  available: boolean;
}
