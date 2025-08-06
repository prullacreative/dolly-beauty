import { Scissors, Gem } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
}

export const services: Service[] = [

  {
    id: 2,
    title: 'Coiffure',
    description: 'Coupes tendance, colorations naturelles et coiffures pour toutes vos occasions spéciales.',
    icon: Scissors,
  },
  {
    id: 3,
    title: 'Onglerie',
    description: 'Manucures, pédicures et poses d\'ongles artistiques avec des produits haute qualité.',
    icon: Gem, 
  },

  // {
  //   id: 6,
  //   title: 'Soins beauté',
  //   description: 'Épilations, extensions de cils, et soins complémentaires pour une beauté complète.',
  //   icon: Flower,
  // },
];