import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050b14',
        navy: '#081321',
        blue: '#0d8cff',
        electric: '#168fff',
      },
      boxShadow: {
        glow: '0 0 45px rgba(13,140,255,.18)',
      },
    },
  },
  plugins: [],
};

export default config;
