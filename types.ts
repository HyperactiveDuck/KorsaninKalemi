export interface NavItem {
  label: string;
  href: string;
}

export enum SectionType {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export interface Testimonial {
  author: string;
  role: string;
  content: string;
}

export interface Comment {
  id: string;
  user: string;
  text: string;
  date: string;
}

export interface Paragraph {
  id: string;
  text: string;
  comments?: Comment[];
}

export interface Chapter {
  id: string;
  title: string;
  subtitle?: string;
  content: Paragraph[];
  comments?: Comment[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  purchaseLink?: string;
  chapters: Chapter[];
}