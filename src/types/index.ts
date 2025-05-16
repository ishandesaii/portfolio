export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  url?: string;
  description: string;
  icon: 'work' | 'education';
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  label?: string;
  details?: {
    problem?: string;
    solution?: string;
    features?: string[];
    impact?: string;
  };
}