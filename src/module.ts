import { defineNuxtModule, createResolver, addLayout, extendPages } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@blog-plugins-gjs/resume-gjs',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addLayout({
      src: resolver.resolve('./runtime/layouts/resume.vue'),
    }, 'resume')
    extendPages((pages) => {
      pages.unshift({
        name: 'resume',
        path: '/resume',
        file: resolver.resolve('./runtime/resume.vue'),
      })
    })
  },
})
