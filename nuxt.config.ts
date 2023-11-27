// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  modules: [
    '@nuxthq/ui',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ui: {
    safelistColors: ['red','gigas']
  },
  colorMode: {
    preference: 'light'
  },
  ssr: false,
  app: {
    head: {
      title: "Uassistant",
      charset: 'utf-8',
      link: [{rel: "icon", type: "image/svg+xml", href: "/ai-871f7a4b.svg"}],
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'zh-Hans'
      },
      bodyAttrs: {
        class: 'bg-uivory-100',
      } 
    },
  }
})
