/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        iran: "IRANSansX, serif",
        yekan: "IRANYekanX, serif",
        Icomoon: 'icomoon',
      },
      colors: {
        label: {
          700: '#283252',
        },
        normal: 'rgb(var(--theme-normal) , <alpha-value>)',
        focus: 'rgb(var(--theme-focus) , <alpha-value>)',
        shadowLight: 'var(--theme-shadow-light)',
        shadowNormal: 'var(--theme-shadow-normal)',
        shadowFocus: 'var(--theme-shadow-focus)',
        stone: {
          200: "#f3f3f4", // background
          400: "#d2d2d2", // border
          500: "#adadad", // border hover
          700: "#58595b", // text color
          800: "#454545", // text color hover
          900: "#1c1c1c", // footer color
          950: "#1a1b1d", // footer bg
        },
        link: '#006FFF',
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
      },
      borderRadius: {
        'custom': 'var(--theme-radius)',
      },
      boxShadow: {
        'focus': '0 0 4px',
        'lg': '0 2px 8px',
        'glass': 'inset 0 1px 4px',
        // 'normal': 'var(--theme-normal)',
        // 'focus': 'var(--theme-focus)',
      },
      dropShadow: {
        'red': '0 2px 8px rgba(185,28,28,0.3)',
        'white': '0 2px 8px rgba(255,255,255,0.3)',
        'base': '0 2px 10px rgba(0,0,0,0.15)',
        'smooth': '0 4px 16px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

