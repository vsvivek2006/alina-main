/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#F9D0D8',
          300: '#F4A9B8',
          400: '#E8728A',
          500: '#D63B5D',
          600: '#B82344',
          700: '#8C1B33',
          800: '#671725', // Roshni Khanna signature wine
          900: '#4A101A',
        },
        navy: {
          50: '#EEF2F9',
          100: '#DCE5F3',
          200: '#BDCEE8',
          500: '#1D4ED8',
          800: '#0F2A66',
          900: '#0B2154', // Roshni Khanna signature royal navy
        },
        gold: {
          300: '#FFE066',
          400: '#FFDF00',
          500: '#FFD700', // Gold stars
          600: '#D4AF37',
        },
        cream: {
          50: '#FFFDF6',
          100: '#FDFBF7',
          200: '#F7F3E9',
        },
        blush: {
          50: '#FFF0F2',
          100: '#F9E1E5',
          200: '#F5CBD0',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'profile': '0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'profile-hover': '0px 25px 50px -12px rgba(0, 0, 0, 0.14)',
        'testimonial': '0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
