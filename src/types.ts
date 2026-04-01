export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ResumeData {
  name: string;
  phone: string;
  email: string;
  education: Education[];
  skills: string[];
  projects: Project[];
  experience: Experience[];
  summary: string;
}
