import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@unocss/nuxt"],
  content: {
    markdown: {
      remarkPlugins: {
        "remark-emoji": {
          emoticon: true,
        },
      },
    },
    highlight: {
      theme: "nord",
    },
    documentDriven: {
      navigation: false,
      surround: false,
      injectPage: false,
    },
  },
});
