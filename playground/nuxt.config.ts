export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-module-eslint-config',
    'nuxt-content-twoslash',
    '@nuxt/content',
    '../src/module.ts',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    './assets/transition.scss',
    './assets/markdown.scss',
    './assets/style.scss',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Index Webside' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
      title: 'GJSSSS',
    },
  },

  devtools: {
    enabled: false,
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslintConfig: {
    setup: false,
  },

  content: {
    api: {
      baseURL: '/api/content',
    },
    navigation: {
      fields: ['date', 'title', 'duration'],
    },
    highlight: {
      langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'yaml', 'python', 'scss'],
      theme: {
        default: 'github-light',
        light: 'github-light',
        dark: 'github-dark',
      },
    },
    defaultLocale: 'zh-cn',
    ignores: [
      'draft',
    ],
  },

  twoslash: {
  },

  runtimeConfig: {
    public: {
      navigation: [],
    },
  },
  compatibilityDate: '2024-07-26',
})
