import tailwind from "@tailwindcss/vite"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  site: {
    url: 'https://demolitionboyssmokehouse.com',
    name: 'Demolition Boys BBQ',
    twitterCreator: '@demolitionboysbbq'
  },
  app: {
    pageTransition: { name: 'opacity-fade', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#17110d' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'author', content: 'Demolition Boys BBQ' },
        { name: 'application-name', content: 'Demolition Boys BBQ' },
        { property: 'og:site_name', content: 'Demolition Boys BBQ' }
      ]
    }
  },
  vite: {
    plugins: [tailwind()]
  }
})
