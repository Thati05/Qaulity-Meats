import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        crimsonRed: '#A41A21',
      },

      backgroundImage:{
        frame4: "url('/assets/images/Frame4.png')",
      },
      animation: {
        'move-left': 'move-left 30s linear infinite',
        'move-right': 'move-right 30s linear infinite',
      },
      keyframes: {
        'move-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'move-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
} satisfies Config;
