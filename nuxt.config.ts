export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'aos/dist/aos.css',
    '~/assets/css/plugins.css',
    '~/assets/css/colors/colors.css',
    '~/assets/css/style.css',
    '~/assets/css/custom.css',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'Journalismus von Eschwegern für Eschweger - DIE ESCHWEGER',
      meta: [
        { name: 'description', content: 'Die Bürgerzeitung für Eschwege und die Region.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Die Eschweger' },
        { property: 'og:locale', content: 'de_DE' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ],
    },
  },
  runtimeConfig: {
    apiBaseUrl: '',
    apiBearer: '',
    public: {
      publicationId: '',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/abo',
        '/anzeigen',
        '/datenschutz',
        '/demo',
        '/foerdern',
        '/galerie',
        '/gewinnspiele',
        '/impressum',
        '/kleinanzeigen',
        '/kontakt',
        '/satzung',
        '/ueber',
        '/unterstuetzen',
      ],
    },
  },
})
