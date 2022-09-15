import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
      "@nuxt/content", 
      "@nuxtjs/tailwindcss"
    ],
  ssr: false,
  target: 'static',
  content: {
    documentDriven: true,
    highlight: {
      theme: "github-dark",
    },
  },
  typescript: {
    shim: false,
  },
});
