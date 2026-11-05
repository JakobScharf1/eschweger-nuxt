<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { PageFlip } from 'page-flip'
import type { PDFDocumentProxy } from 'pdfjs-dist'
import 'pdfjs-dist/web/pdf_viewer.css'

type PdfJs = typeof import('pdfjs-dist')

const props = withDefaults(
  defineProps<{
    src: string | Uint8Array
    pageWidth?: number // Basisbreite einer Einzelseite in px
    dragToFlip?: boolean // true = Seiten per Maus ziehen; kollidiert mit Textmarkieren
    splitSpreads?: boolean // Querformat-Seiten (Doppelseiten) in zwei Hälften teilen
  }>(),
  { pageWidth: 550, dragToFlip: false, splitSpreads: true }
)

// null = leere Füllseite (hält die Links/Rechts-Reihenfolge korrekt)
type Slot = { page: number; half: 'full' | 'left' | 'right' } | null

const host = ref<HTMLDivElement>()
const current = ref(0)
const total = ref(0)
const loading = ref(false)

// Bewusst keine reaktiven Refs: pdf.js/PageFlip-Objekte nicht in Vue-Proxies wickeln
let flip: PageFlip | null = null
let pdf: PDFDocumentProxy | null = null
let pdfjsLib: PdfJs | null = null
let task: ReturnType<PdfJs['getDocument']> | null = null
let pageEls: HTMLElement[] = []
let slots: Slot[] = []
let sizes: { w: number; h: number }[] = []
let rendered = new Set<number>()
let ro: ResizeObserver | null = null

function cleanup() {
  ro?.disconnect()
  ro = null
  try { flip?.destroy() } catch { /* noop */ }
  flip = null
  task?.destroy()
  task = null
  pdf = null
  pageEls = []
  slots = []
  sizes = []
  rendered = new Set()
  host.value?.replaceChildren()
}

async function load() {
  cleanup()
  if (!host.value || !import.meta.client) return
  loading.value = true

  const [pdfjs, workerModule, pageFlipModule] = await Promise.all([
    import('pdfjs-dist'),
    import('pdfjs-dist/build/pdf.worker.min.mjs?worker'),
    import('page-flip'),
  ])
  pdfjsLib = pdfjs
  pdfjs.GlobalWorkerOptions.workerPort = new workerModule.default()
  const { PageFlip } = pageFlipModule
  task = pdfjs.getDocument(
    typeof props.src === 'string' ? { url: props.src } : { data: props.src.slice() }
  )
  const doc = await task.promise
  pdf = doc

  for (let i = 1; i <= doc.numPages; i++) {
    const v = (await doc.getPage(i)).getViewport({ scale: 1 })
    sizes.push({ w: v.width, h: v.height })
  }

  // Doppelseite = Querformat. Ist schon die erste Seite eine Doppelseite, gibt es kein separates Cover.
  const isSpread = (s: { w: number; h: number }) => props.splitSpreads && s.w > s.h
  const firstIsSpread = isSpread(sizes[0])
  const showCover = !firstIsSpread
  const single = firstIsSpread ? { w: sizes[0].w / 2, h: sizes[0].h } : sizes[0]
  const leftParity = showCover ? 1 : 0

  sizes.forEach((s, i) => {
    if (isSpread(s)) {
      if (slots.length % 2 !== leftParity) slots.push(null) // linke Hälfte muss auf linker Seite landen
      slots.push({ page: i, half: 'left' }, { page: i, half: 'right' })
    } else {
      slots.push({ page: i, half: 'full' })
    }
  })
  total.value = slots.length

  const pageHeight = Math.round((props.pageWidth * single.h) / single.w)
  host.value.style.setProperty('--fb-ratio', String(pageHeight / props.pageWidth))

  pageEls = slots.map((_, i) => {
    const el = document.createElement('div')
    el.className = 'fb-page'
    if (showCover && (i === 0 || i === slots.length - 1)) el.dataset.density = 'hard'
    return el
  })

  const book = document.createElement('div')
  book.append(...pageEls)
  host.value.replaceChildren(book)

  flip = new PageFlip(book, {
    width: props.pageWidth,
    height: pageHeight,
    size: 'stretch' as never,
    minWidth: 250,
    maxWidth: 900,
    minHeight: 300,
    maxHeight: 1400,
    showCover,
    maxShadowOpacity: 0.4,
    mobileScrollSupport: false,
    useMouseEvents: props.dragToFlip,
  })
  flip.loadFromHTML(pageEls)

  flip.on('flip', (e) => {
    current.value = e.data as number
    renderAround(current.value)
    updateScale()
  })
  flip.on('changeOrientation', () => requestAnimationFrame(updateScale))

  ro = new ResizeObserver(() => requestAnimationFrame(updateScale))
  ro.observe(host.value)

  loading.value = false
  renderAround(0)
}

function renderAround(i: number) {
  for (let n = Math.max(0, i - 2); n <= Math.min(slots.length - 1, i + 3); n++) renderPage(n)
}

async function renderPage(i: number) {
  const doc = pdf
  const slot = slots[i]
  const pdfjs = pdfjsLib
  if (!doc || !slot || !pdfjs || rendered.has(i)) return
  rendered.add(i)
  try {
    const page = await doc.getPage(slot.page + 1)
    if (doc !== pdf) return

    const base = page.getViewport({ scale: 1 })
    const factor = slot.half === 'full' ? 1 : 2 // Hälfte zeigt einen Ausschnitt der doppelt breiten Seite
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const vp = page.getViewport({ scale: ((props.pageWidth * factor) / base.width) * dpr })

    const inner = document.createElement('div')
    inner.className = 'fb-inner'
    if (slot.half !== 'full') {
      inner.style.width = '200%'
      inner.style.left = slot.half === 'left' ? '0' : '-100%'
    }

    const canvas = document.createElement('canvas')
    canvas.width = vp.width
    canvas.height = vp.height
    canvas.style.cssText = 'width:100%;height:100%;display:block'

    const textDiv = document.createElement('div')
    textDiv.className = 'textLayer'

    inner.append(canvas, textDiv)
    pageEls[i].append(inner)

    await page.render({ canvas, viewport: vp }).promise
    await new pdfjs.TextLayer({
      textContentSource: page.streamTextContent(),
      container: textDiv,
      viewport: base,
    }).render()
    updateScale()
  } catch (err) {
    rendered.delete(i)
    console.error('Seite konnte nicht gerendert werden', i + 1, err)
  }
}

// Text-Layer an die aktuelle (vom Flipbook skalierte) Seitenbreite anpassen
function updateScale() {
  if (!flip) return
  const w = flip.getRender().getRect().pageWidth
  if (!w) return
  slots.forEach((slot, i) => {
    if (!slot) return
    const s = String((w * (slot.half === 'full' ? 1 : 2)) / sizes[slot.page].w)
    pageEls[i].style.setProperty('--scale-factor', s)
    pageEls[i].style.setProperty('--total-scale-factor', s)
  })
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') flip?.flipNext()
  else if (e.key === 'ArrowLeft') flip?.flipPrev()
}

onMounted(load)
watch(() => [props.src, props.splitSpreads], load)
onBeforeUnmount(cleanup)

defineExpose({
  next: () => flip?.flipNext(),
  prev: () => flip?.flipPrev(),
  goTo: (slotIndex: number) => flip?.turnToPage(slotIndex),
})
</script>

<template>
  <div class="fb-root" tabindex="0" @keydown="onKey">
    <div v-if="loading" class="fb-loading">Lade PDF …</div>
    <div ref="host" class="fb-host" />
    <div class="fb-controls">
      <button class="btn btn-primary" type="button" @click="flip?.flipPrev()">‹</button>
      <span>{{ Math.min(current + 1, total) }} / {{ total }}</span>
      <button class="btn btn-primary" type="button" @click="flip?.flipNext()">›</button>
    </div>
  </div>
</template>

<style>
.fb-root { outline: none; }
.fb-host {
  width: min(100%, calc(80vh * 2 / var(--fb-ratio, 1.414)));
  margin: 0 auto;
}
.fb-page { background: #fff; overflow: hidden; }
.fb-inner { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.fb-controls { display: flex; gap: 1rem; justify-content: center; align-items: center; padding: .5rem; }
.fb-loading { text-align: center; padding: 1rem; }

/* StPageFlip sperrt Textauswahl standardmäßig */
.fb-host .stf__parent,
.fb-host .stf__block,
.fb-page { user-select: text !important; -webkit-user-select: text !important; }
</style>