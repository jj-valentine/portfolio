export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  content: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags?: string[];
  featured?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}
