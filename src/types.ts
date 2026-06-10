/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string; // e.g. "R$ 149,90" or "Consulte"
  tag?: string; // e.g. "Mais vendido", "Novo", "Destaque", "Promoção", "Consulte" or "Serviço"
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // name of Lucide icon to render dynamically
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface OpticsConfig {
  name: string;
  slogan: string;
  subtitle: string;
  badge: string;
  whatsappNumber: string;
  instagramUrl: string;
  facebookUrl: string;
  address: string;
  city: string;
  mapLink: string;
  openingHours: {
    weekdays: string;
    saturday: string;
  };
  colors: {
    primary: string;      // Deep Blue
    primaryHover: string; // Darker Blue
    accent: string;       // Champagne Gold
    accentHover: string;  // Warm Gold
    bgLight: string;      // Soft gray/white
    textDark: string;     // Charcoal/slate
  };
  products: Product[];
  services: Service[];
  steps: Step[];
  features: Feature[];
}

export const OPTICS_CONFIG: OpticsConfig = {
  name: "Ótica Visão Prime",
  slogan: "Enxergue melhor com estilo, conforto e confiança.",
  subtitle: "Armações modernas, óculos de sol, lentes de grau e atendimento especializado para cuidar da sua visão.",
  badge: "Óculos • Lentes • Armações",
  
  // Custom global parameters
  whatsappNumber: "5521969060505",
  instagramUrl: "https://instagram.com/oticavisaoprime",
  facebookUrl: "https://facebook.com/oticavisaoprime",
  address: "Rua Exemplo, 123 — Centro",
  city: "Nova Iguaçu — RJ",
  mapLink: "https://maps.google.com/?q=Rua+Exemplo,+123+-+Centro,+Nova+Iguacu+-+RJ",
  
  openingHours: {
    weekdays: "Segunda a sexta: 9h às 18h",
    saturday: "Sábado: 9h às 13h"
  },
  
  colors: {
    primary: "#0F172A",      // Premium Slate 900
    primaryHover: "#1E293B", // Rich Slate 800
    accent: "#D97706",       // Lively Amber 600
    accentHover: "#B45309",  // Vibrant Amber 700
    bgLight: "#F8FAFC",      // Clean off-white
    textDark: "#0F172A"      // Ultra readable slate
  },

  products: [
    {
      id: "prod-1",
      name: "Armação Classic Black",
      category: "Armações de grau",
      price: "R$ 149,90",
      tag: "Mais vendido",
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-2",
      name: "Óculos Solar Urban",
      category: "Óculos de sol",
      price: "R$ 119,90",
      tag: "Novo",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-3",
      name: "Armação Dourada Slim",
      category: "Armações de grau",
      price: "R$ 179,90",
      tag: "Destaque",
      image: "/images/gold_frame_slim_1781052240406.png"
    },
    {
      id: "prod-4",
      name: "Lente Antirreflexo",
      category: "Lentes",
      price: "Consulte",
      tag: "Consulte",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-5",
      name: "Armação Infantil Flex",
      category: "Infantil",
      price: "R$ 129,90",
      tag: "Novo",
      image: "https://images.unsplash.com/photo-1614715838608-dd527c46231d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-6",
      name: "Óculos Solar Premium",
      category: "Óculos de sol",
      price: "R$ 199,90",
      tag: "Promoção",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-7",
      name: "Armação Transparente",
      category: "Armações de grau",
      price: "R$ 159,90",
      tag: "Mais vendido",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-8",
      name: "Ajuste e Manutenção",
      category: "Manutenção",
      price: "Consulte",
      tag: "Serviço",
      image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=600&q=80"
    }
  ],

  services: [
    {
      id: "srv-1",
      title: "Lentes de grau",
      description: "Atendimento para escolha das lentes ideais conforme sua receita.",
      iconName: "Glasses"
    },
    {
      id: "srv-2",
      title: "Armações",
      description: "Modelos modernos, clássicos, infantis e opções para o dia a dia.",
      iconName: "Eye"
    },
    {
      id: "srv-3",
      title: "Óculos de sol",
      description: "Opções estilosas para proteção e conforto visual.",
      iconName: "Sun"
    },
    {
      id: "srv-4",
      title: "Ajustes e manutenção",
      description: "Pequenos ajustes, troca de plaquetas e manutenção de armações.",
      iconName: "Wrench"
    },
    {
      id: "srv-5",
      title: "Atendimento pelo WhatsApp",
      description: "Tire dúvidas, consulte modelos e veja disponibilidade antes de ir à loja.",
      iconName: "MessageCircle"
    },
    {
      id: "srv-6",
      title: "Promoções",
      description: "Consulte ofertas disponíveis em armações, solares e lentes.",
      iconName: "Sparkles"
    }
  ],

  steps: [
    {
      number: 1,
      title: "Escolha o produto",
      description: "Veja as opções de armações, lentes, solares e serviços."
    },
    {
      number: 2,
      title: "Clique no WhatsApp",
      description: "O atendimento recebe sua mensagem com o item escolhido."
    },
    {
      number: 3,
      title: "Tire suas dúvidas",
      description: "Consulte disponibilidade, preço, condições e formas de pagamento."
    },
    {
      number: 4,
      title: "Visite a ótica ou combine",
      description: "Finalize seu atendimento da forma mais prática para você."
    }
  ],

  features: [
    {
      title: "Atendimento personalizado",
      description: "Ajudamos você a escolher o formato ideal para seu rosto e conforto."
    },
    {
      title: "Modelos modernos",
      description: "Acompanhamos as principais tendências de design e materiais resistentes."
    },
    {
      title: "Opções para toda a família",
      description: "Dispomos de modelos masculinos, femininos e infantis para todas as idades."
    },
    {
      title: "Consulta pelo WhatsApp",
      description: "Esclareça dúvidas sobre receitas, lentes e valores em poucos minutos."
    },
    {
      title: "Localização fácil",
      description: "Ótica no centro da cidade, de fácil acesso e espaço climatizado."
    }
  ]
};
