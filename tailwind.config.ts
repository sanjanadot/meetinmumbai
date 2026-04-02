import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c8102e',
        'primary-dark': '#a00d25',
        'primary-light': '#e8334e',
        dark: '#0a0a0a',
        'gray-light': '#f8f8f8',
        gold: '#d4af37',
        'gold-light': '#f0c862',
        'gold-dark': '#a8891e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeInAnim 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200,16,46,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(200,16,46,0.7), 0 0 60px rgba(200,16,46,0.3)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInAnim: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-red': '0 0 30px rgba(200, 16, 46, 0.45)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.45)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}
export default config
