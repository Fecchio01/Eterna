
import { Category, PackItem, Testimonial, Technique } from './types';

export const PACK_ITEMS: PackItem[] = [
  { id: '1', category: Category.CARS, type: 'video', thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800' },
  { id: '2', category: Category.WATCHES, type: 'image', thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
  { id: '3', category: Category.MONEY, type: 'image', thumbnail: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&q=80&w=800' },
  { id: '4', category: Category.LIFESTYLE, type: 'image', thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
];

export const TECHNIQUES: Technique[] = [
  {
    title: "Ajuste de Velocidade",
    desc: "Altere para 0.9x ou 1.1x para quebrar a assinatura digital do arquivo original.",
    icon: "M13 5l7 7-7 7M5 5l7 7-7 7"
  },
  {
    title: "Filtro Sutil",
    desc: "Aplique uma camada de cor mínima (Warm +10) para mudar o histograma do vídeo.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17l.354-.354"
  },
  {
    title: "Corte Estratégico",
    desc: "Remova os primeiros 2 segundos para eliminar metadados de início de frame.",
    icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758L5 19M5 5l4.121 4.121"
  },
  {
    title: "Espelhamento",
    desc: "Inverta o vídeo horizontalmente para criar uma nova composição visual para a IA.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
  },
  {
    title: "Zoom Dinâmico",
    desc: "Aumente 105% para re-enquadrar a cena e fugir do sensor de duplicidade.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Oliveira',
    handle: '@ana.darkside',
    content: 'Meus vídeos travavam em 200 views. No primeiro dia usando o pack e o guia, bati 5.2k views. O segredo é realmente o material não ser detectado pelo algoritmo.',
    views: '124K views totais',
    avatar: 'https://i.pravatar.cc/150?u=lucas'
  },
  {
    id: '2',
    name: 'Lucas Silva',
    handle: '@lucasdigital',
    content: 'Eu tinha pavor de tomar strike. O Eternal Frames me deu a segurança que eu precisava. O material é premium e o guia de edição é o diferencial.',
    views: 'Strikes: 0',
    avatar: 'https://i.pravatar.cc/150?u=ana'
  }
];

export const FAQ_DATA = [
  {
    question: "O material é realmente livre de copyright?",
    answer: "Sim! Todos os arquivos foram curados de fontes com licença livre e selecionados especificamente para não serem identificados como conteúdo reciclado."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá o link vitalício para a pasta organizada com todo o conteúdo 4K."
  },
  {
    question: "O guia de edição serve para iniciantes?",
    answer: "Sim, o guia ensina do zero no CapCut como aplicar as 5 técnicas anti-copyright em menos de 2 minutos por vídeo."
  },
  {
    question: "Funciona para o Instagram também?",
    answer: "Com certeza. O formato é otimizado para TikTok, Reels e YouTube Shorts."
  }
];
