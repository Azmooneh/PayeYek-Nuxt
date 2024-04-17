// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  hooks: {
    "pages:extend"(pages) {
      pages.push(
        {
          name: "home",
          path: "/",
          file: "/pages/index.vue",
        }
      );
    },
  },

  srcDir: "./",

  ssr: true,

  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: 'https://paye1.com/api', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },

  modules: [
    '@pinia/nuxt',
    'nuxt-swiper',
  ],

  plugins: [
    "~/plugins/Vue3Lottie.client.ts"
  ],


})
