export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  scholar: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceStat {
  label: string;
  value: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  stats?: ExperienceStat[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  startYear: string;
  endYear: string;
  gpa?: string;
  thesis?: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  url: string;
}

export interface Award {
  title: string;
  year: string;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}
