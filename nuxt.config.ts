import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@tailwindcss/typography',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        '@nuxt/content',
    ],
    colorMode: {
        // Get Nuxt color-mode to work with Tailwind classes
        classSuffix: '',
    },
    tailwindcss: {
        // add '~tailwind.config` alias
        exposeConfig: true,
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'page', mode: 'out-in' },
    },
    content: {
        // A theme for embedded code in our content.
        // See the Nuxt Content docs for more
        highlight: {
            theme: 'github-dark',
        },
    },
})
