/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        'primary-purple': {
          400: '#a78bfa',
          500: '#a855f7',
          600: '#9333ea',
        },
        'primary-blue': {
          400: '#93c5fd',
          500: '#60a5fa',
          600: '#3b82f6',
        },
        'dark-bg': {
          'start': '#06081c',
          'mid': '#0c0f1a',
          'end': '#111827',
        },
        'accent-green': {
          500: '#10b981',
          600: '#059669',
        }
      },
      animation: {
        'gradient-bg': 'gradient-bg 15s ease infinite',
        'gradient-text': 'gradient-text 5s ease infinite',
        'shimmer': 'shimmer 3s infinite',
        'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'morph': 'morph 20s ease-in-out infinite alternate',
        'morph2': 'morph2 30s ease-in-out infinite alternate',
        'morph3': 'morph3 25s ease-in-out infinite alternate',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        'gradient-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-text': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'ping-slow': {
          '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'morph': {
            '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', transform: 'translate(0, 0) rotate(0deg) scale(1)' },
            '100%': { borderRadius: '30% 70% 60% 40% / 50% 60% 30% 80%', transform: 'translate(50px, -50px) rotate(180deg) scale(1.2)' },
        },
        'morph2': {
            '0%': { borderRadius: '80% 20% 70% 30% / 50% 80% 20% 50%', transform: 'translate(0, 0) rotate(0deg) scale(1)' },
            '100%': { borderRadius: '20% 80% 30% 70% / 80% 50% 50% 20%', transform: 'translate(-100px, 80px) rotate(-100deg) scale(1.1)' },
        },
        'morph3': {
            '0%': { borderRadius: '40% 60% 80% 20% / 70% 50% 50% 30%', transform: 'translate(0, 0) rotate(0deg) scale(1)' },
            '100%': { borderRadius: '70% 30% 50% 50% / 40% 80% 20% 60%', transform: 'translate(80px, 100px) rotate(120deg) scale(0.9)' },
        },
        'fade-up': {
            '0%': { opacity: 0, transform: 'translateY(30px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}
