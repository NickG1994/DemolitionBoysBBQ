import tailwind from "@tailwindcss/vite"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  app:{
    pageTransition: {name:"opacity-fade",mode:"out-in"}
  },
  vite: {
    plugins: [tailwind()]
  }
})
