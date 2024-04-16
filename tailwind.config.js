/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        iran: "IRANSansX, serif",
      },
      colors: {
        label: {
          700: '#283252',
        }
      },
      // animation: {
      //   'skeleton': 'skeleton 1.25s linear infinite',
      // },
      // keyframes: {
      //   skeleton: {
      //     '0%': { backgroundPosition: '-468px 0' },
      //     '100%': { backgroundPosition: '468px 0' },
      //   }
      // },
    },
  },
  plugins: [],
}

