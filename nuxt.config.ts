// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: "service-worker",
  },
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
      injectPage: false,
    },
  },
});
