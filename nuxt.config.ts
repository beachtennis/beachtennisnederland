import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@unlighthouse/nuxt"],
  ssr: false,
  target: "static",
  app: {
    baseURL: "/beachtennisnederland/"
  },
  content: {
    documentDriven: true,
    base: "/beachtennisnederland",
    highlight: {
      theme: "github-dark",
    },
  },
  typescript: {
    shim: false,
  },
  unlighthouse: {
    scanner: {
      device: "desktop",
    },
  },
});
