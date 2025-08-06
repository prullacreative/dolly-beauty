/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dolly: {
        'rose': '#E8A9AA',   // Une teinte rose plus sombre et chaleureuse
        'rosepur': '#e11d48',   // Une teinte rose plus sombre et chaleureuse
        'rose-pure': '#e11d48',   // Une teinte rose plus sombre et chaleureuse
        'white': '#fff0f3',  // Une version plus foncée du blanc avec des nuances chaudes
        'beige': '#2D2D2D',  // Un beige légèrement foncé pour plus de profondeur
        // 'beige': '#E3C1C1',  // Un beige légèrement foncé pour plus de profondeur
        'gold': '#D1B8A8',   // Un doré plus marqué avec des tons terreux
        'gray': '#8F7F78',   // Un gris plus intense pour un contraste élégant
        }
      },
      fontFamily: {
        'molle': ['Molle', 'cursive'],
        'junge': ['Junge', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 16px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};