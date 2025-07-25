/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        primary: '#1DB954', // Spotify green
        'primary-hover': 'rgba(29, 185, 84, 0.2)',
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
        },
      },
      fontFamily: {
        'studio-freight': ['Inter', 'system-ui', 'sans-serif'],
        'ibm-plex': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2' }], // 40px
        'h2': ['2rem', { lineHeight: '1.3' }], // 32px
        'h3': ['1.5rem', { lineHeight: '1.4' }], // 24px
        'body': ['1rem', { lineHeight: '1.5' }], // 16px
        'button': ['0.875rem', { lineHeight: '1.4' }], // 14px
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'typewriter': 'typewriter 2s steps(40) 1s forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(29, 185, 84, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(29, 185, 84, 0.6)' },
        },
      },
    },
  },
  plugins: [],
} 