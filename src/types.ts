export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  imageUrl?: string;
  keywords?: string[];
  features?: string[];
  iconType?: 'paint' | 'gypsum' | 'panels' | 'shield' | 'floor' | 'renovation' | 'tools' | 'star';
}

export interface ColorSwatch {
  id: string;
  name: string;
  nameEn: string;
  hex: string;
  textColor: string;
  description: string;
  recommendedFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'all' | 'interior' | 'exterior' | 'decor' | 'gypsum';
  categoryLabel: string;
  location: string;
  badge?: string;
  description: string;
  imageUrl: string;
  duration: string;
  specs: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: string;
  rating: number;
  comment: string;
  projectType: string;
}
