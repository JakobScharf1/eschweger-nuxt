import postcss from 'postcss'

function splitSelectors(selectorList: string) {
  const selectors: string[] = []
  let start = 0
  let parentheses = 0
  let brackets = 0
  let quote = ''
  let escaped = false

  for (let index = 0; index < selectorList.length; index++) {
    const character = selectorList[index]

    if (escaped) {
      escaped = false
    } else if (character === '\\') {
      escaped = true
    } else if (quote) {
      if (character === quote) quote = ''
    } else if (character === '"' || character === "'") {
      quote = character
    } else if (character === '(') {
      parentheses++
    } else if (character === ')') {
      parentheses--
    } else if (character === '[') {
      brackets++
    } else if (character === ']') {
      brackets--
    } else if (character === ',' && parentheses === 0 && brackets === 0) {
      selectors.push(selectorList.slice(start, index).trim())
      start = index + 1
    }
  }

  selectors.push(selectorList.slice(start).trim())
  return selectors
}

function scopePdfViewerCss(source: string) {
  const root = postcss.parse(source)

  root.walkRules((rule) => {
    let parent = rule.parent
    let nestedInRule = false
    let insideKeyframes = false

    while (parent && parent.type !== 'root') {
      if (parent.type === 'rule') nestedInRule = true
      if (parent.type === 'atrule' && /keyframes$/i.test(parent.name)) {
        insideKeyframes = true
      }
      parent = parent.parent
    }

    if (nestedInRule || insideKeyframes) return

    rule.selector = splitSelectors(rule.selector)
      .map((selector) => {
        if (/^(?::root|html|body)(?=$|[\s.#:[>+~])/.test(selector)) {
          return selector.replace(/^(?::root|html|body)/, '.fb-root')
        }
        return `.fb-root ${selector}`
      })
      .join(', ')
  })

  return root.toString()
}

const pdfViewerCssScopePlugin = {
  name: 'scope-pdf-viewer-css',
  enforce: 'pre' as const,
  transform(source: string, id: string) {
    const normalizedId = id.replace(/\\/g, '/')
    if (
      !normalizedId.includes('/pdfjs-dist/web/pdf_viewer.css')
      || !/[?&]fb-scope(?:&|$)/.test(normalizedId)
    ) {
      return
    }

    return {
      code: scopePdfViewerCss(source),
      map: null,
    }
  },
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap'],
  site: {
    url: 'https://die-eschweger.de',
  },
  sitemap: {
    zeroRuntime: true,
    exclude: ['/bestaetigung'],
    xsl: false,
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'aos/dist/aos.css',
    '~/assets/css/plugins.css',
    '~/assets/css/colors/colors.css',
    '~/assets/css/style.css',
    '~/assets/css/custom.css',
  ],
  vite: {
    plugins: [pdfViewerCssScopePlugin],
  },
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
    apiBearer: process.env.NUXT_API_BEARER || '',
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL || 'https://controlling.brombeerland.de/api/v1',
      apiBearer: process.env.NUXT_API_BEARER || '',
      publicationId: '',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/sitemap.xml',
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
