export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'automotive' | 'home';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'automotive' | 'home';
}