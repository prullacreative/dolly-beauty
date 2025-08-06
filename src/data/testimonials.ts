export interface Testimonial {
  id: number;
  name: string;
  content: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie L.",
    content: "Un pur moment de détente. Merci à toute l'équipe Dolly ❤️ Je ressors toujours rayonnante de mes rendez-vous beauté !",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Camille M.",
    content: "Professionnalisme et bienveillance au rendez-vous ! Ma coiffure pour mon mariage était parfaite, merci infiniment.",
    image: "https://images.pexels.com/photos/938011/pexels-photo-938011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Laurence B.",
    content: "Le soin visage était divin ! Ma peau est transformée et l'ambiance du salon est si apaisante. Je recommande !",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Emma D.",
    content: "Les ongles réalisés par Dolly Beauty tiennent vraiment dans le temps. Très satisfaite de la qualité du service !",
    image: "https://images.pexels.com/photos/1757281/pexels-photo-1757281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];