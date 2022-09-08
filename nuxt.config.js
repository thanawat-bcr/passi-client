export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Passi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: "preconnect", href: "https://fonts.googleapis.com"},
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
      { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap', rel:"stylesheet" },
    ],
    script: [
      { src: "https://unpkg.com/phosphor-icons" },
      // { src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" },
    ],
  },

  buildDir: 'dist',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/typography.scss",
    "@/assets/css/style.scss",
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate',
    { src: '@/plugins/qr.js', mode: 'client' },
    { src: '~/plugins/firebase.js', ssr: false },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate',
    ],
  }
}
