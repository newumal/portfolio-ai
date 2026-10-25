/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Editorial dark theme — single source of truth
        ink: '#0D0D0F', // page background (near-black)
        panel: '#141518', // raised surface
        panel2: '#1A1B1F', // hover / nested surface
        line: '#2A2B30', // hairline dividers & borders
        fog: '#9AA0A6', // muted secondary text
        mist: '#C7CCD3', // brighter secondary — for text over imagery
        chalk: '#F5F5F7', // primary near-white text
        accent: {
          // Monochrome signal — the "accent" is light itself, used with discipline
          DEFAULT: '#F0F0F2',
          hover: '#FFFFFF',
          soft: 'rgba(245, 245, 247, 0.10)',
        },
        // legacy alias so any stray reference keeps working
        primary: '#F0F0F2',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        kicker: '0.22em',
      },
      maxWidth: {
        editorial: '1280px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'scroll-bob': 'scroll-bob 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
