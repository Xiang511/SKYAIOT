// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/public/css/global.css',
    'bootstrap/dist/css/bootstrap.min.css',
    'owl.carousel/dist/assets/owl.carousel.css',
    'owl.carousel/dist/assets/owl.theme.default.css'
  ],
  plugins: [
    { src: '~/plugins/jquery_3.7.1_jquery.min.js', mode: 'client' },
    { src: '~/plugins/owl-carousel.js', mode: 'client' }
  ],
  
})
