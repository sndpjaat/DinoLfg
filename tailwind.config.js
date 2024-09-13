/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Chewy: ["chewy", "system-ui"],
        Balsamiq: ["Balsamiq", "sans-serif"],
      },
      backgroundSize: {
        'fullsize': '100% 100%'
      },
      animation: {
        'pulse': 'pulse 1s infinite',
        'fade-in': 'fadeIn 1s ease-out infinite',
        'slide-in-left': 'slideInLeft 0.5s ease-out ',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        pulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

