<script setup>
import initClipboard from '~/utils/initClipboard'
import initPrism from '~/utils/initPrism'
import initPlayer from '~/utils/initVideoplayer'
import { injectSvg } from '~/utils/injextSvg'

const metaStore = useMetaStore()
await useAsyncData('meta', () => metaStore.fetchMeta().then(() => true))

const initPageScripts = () => {
  initPlayer()
  initPrism()
  initClipboard()
  injectSvg()
}

if (import.meta.client) {
  useNuxtApp().hook('page:finish', () => nextTick(initPageScripts))
}

onMounted(async () => {
  const AOS = (await import('aos')).default
  AOS.init({ duration: 1400 })
  await import('bootstrap/dist/js/bootstrap.esm')
})

</script>

<template>
  <div class="navy-theme">
    <div class="content-wrapper">
      <LayoutHeader />
      <NuxtPage />
      <LayoutFooter />
    </div>
  </div>
</template>