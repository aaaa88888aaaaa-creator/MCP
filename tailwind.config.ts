import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Sora"', 'ui-sans-serif', 'system-ui'],
        body: ['"Manrope"', '"Sora"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: '#05070d',
        night: '#0a1020',
        ivory: '#f4efe4',
        gold: '#d8b365',
        copper: '#be7c4d',
        cyanline: '#76e4f7',
      },
      boxShadow: {
        glow: '0 0 80px rgba(216,179,101,0.22)',
        cyan: '0 0 55px rgba(118,228,247,0.18)',
      },
      animation: {
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'pulse-ring': 'pulseRing 5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease both',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
        pulseRing: {
          '0%, 100%': { opacity: '0.18', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(1.06)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(26px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
