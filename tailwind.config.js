/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-background": "#0F161E",
        "apple-gray": {
          50: "#f5f5f7",
          100: "#e6e6e6",
          200: "#d2d2d7",
          300: "#b9b9c0",
          400: "#86868b",
          500: "#6e6e73",
          600: "#424245",
          700: "#333336",
          800: "#1d1d1f",
          900: "#000000"
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'San Francisco',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      borderRadius: {
        'apple': '16px', // 标准Apple圆角
        'apple-sm': '12px',
        'apple-lg': '20px',
        'apple-xl': '24px',
      },
      boxShadow: {
        'apple': '0 4px 18px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)',
        'apple-md': '0 8px 28px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple-lg': '0 16px 40px rgba(0, 0, 0, 0.12), 0 3px 12px rgba(0, 0, 0, 0.06)',
        'apple-inner': 'inset 0 0 0 0.5px rgba(255, 255, 255, 0.5)',
        'apple-inner-dark': 'inset 0 0 0 0.5px rgba(255, 255, 255, 0.1)',
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0071e3", // Apple blue
          "secondary": "#86868b", // Apple gray
          "accent": "#06c", // Apple link blue
          "neutral": "#1d1d1f", // Apple dark gray
          "base-100": "#ffffff", // Apple white
          "base-200": "#f5f5f7", // Apple light gray
          "base-300": "#e6e6e6", // Apple lighter gray
          "info": "#2997ff", // Apple light blue
          "success": "#29cc41", // Apple green
          "warning": "#ff9f0a", // Apple orange
          "error": "#ff3b30", // Apple red
        },
        dark: {
          "primary": "#0a84ff", // Apple dark blue
          "secondary": "#98989d", // Apple dark gray
          "accent": "#2997ff", // Apple dark link blue
          "neutral": "#98989d", // Apple dark neutral
          "base-100": "#1c1c1e", // Apple dark background
          "base-200": "#2c2c2e", // Apple dark surface
          "base-300": "#3c3c3e", // Apple dark elevation
          "info": "#64d2ff", // Apple dark info blue
          "success": "#30d158", // Apple dark green
          "warning": "#ffa01e", // Apple dark orange
          "error": "#ff453a", // Apple dark red
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui")
  ]
};
