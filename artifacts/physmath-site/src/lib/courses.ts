import data from './courses.json';
export type Chapter = {
  id: number;
  title: string;
  description: string;
  date?: string;
  pdfUrl?: string | null;
  solvedPdfUrl?: string | null;
  unsolvedPdfUrl?: string | null;
};

export type Course = {
  id: string;
  slug: string;
  group: string;
  image?: { src: string; alt: string; width?: number; height?: number };
  name: string;
  description: string;
  chapters?: Chapter[];
  pdfUrl?: string;
};


export const courses: Course[] = data;
