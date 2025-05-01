/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eeff',
          100: '#c0d4ff',
          200: '#94b7ff',
          300: '#6898ff',
          400: '#3c7aff',
          500: '#0F52BA', // Primary color
          600: '#0842a0',
          700: '#063587',
          800: '#05286d',
          900: '#031b54',
        },
        secondary: {
          50: '#f5f5f7',
          100: '#e9eaef',
          200: '#d5d7e0',
          300: '#b7bac8',
          400: '#9295ac',
          500: '#737694',
          600: '#5e5f7c',
          700: '#4c4d65',
          800: '#404254',
          900: '#383947',
        },
        accent: {
          500: '#FF6B6B', // Accent color
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};