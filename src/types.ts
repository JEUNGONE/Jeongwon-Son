export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  bootcampLevel: string;
  date: string;
  description: string;
  features: string[];
  implementations: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  accentColor: string;
  imageTheme: string;
}

export interface SkillItem {
  name: string;
  category: 'agentic' | 'llm' | 'tools' | 'web' | 'languages';
  categoryLabel: string;
  percentage: number;
  description: string;
  iconName: string;
}

export interface Specialization {
  title: string;
  projectCount: number;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ContactInfo {
  name: string;
  englishName: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
}
