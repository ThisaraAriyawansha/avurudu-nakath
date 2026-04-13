/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      colors: {
        saffron: {
          50:  '#FFF8E7',
          100: '#FFEDB8',
          200: '#FFD96B',
          300: '#FFC320',
          400: '#F5A800',
          500: '#D98E00',
          600: '#B37200',
          700: '#8A5700',
        },
        vermillion: {
          50:  '#FFF1EE',
          100: '#FFD5CC',
          200: '#FFB09F',
          300: '#FF7A5C',
          400: '#F54E2A',
          500: '#D43110',
          600: '#A82208',
          700: '#7A1705',
        },
        lotus: {
          50:  '#FFF0F5',
          100: '#FFD6E8',
          200: '#FFADD0',
          300: '#FF75AF',
          400: '#E84D8A',
          500: '#C42E6B',
          600: '#9A1B52',
          700: '#6E0E39',
        },
        jungle: {
          50:  '#EDFAF3',
          100: '#C6F0D9',
          200: '#88DDB0',
          300: '#3EC47E',
          400: '#1FA65E',
          500: '#118547',
          600: '#096434',
          700: '#044424',
        },
        gold: {
          50:  '#FFFBEA',
          100: '#FFF3C4',
          200: '#FFE580',
          300: '#FFD12E',
          400: '#FFBA00',
          500: '#E09A00',
          600: '#B87800',
          700: '#8A5500',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'tick': 'tick 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,168,0,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(245,168,0,0.6)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        tick: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
