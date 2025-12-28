
export enum Category {
  CARS = 'Carros Luxury',
  WATCHES = 'Relógios e Acessórios',
  MONEY = 'Dinheiro e Riqueza',
  LIFESTYLE = 'Lifestyle Premium'
}

export interface PackItem {
  id: string;
  category: Category;
  type: 'image' | 'video';
  thumbnail: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  content: string;
  views: string;
  avatar: string;
}

export interface Technique {
  title: string;
  desc: string;
  icon: string;
}
