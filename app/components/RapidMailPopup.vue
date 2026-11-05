<template></template>
<script setup>
const SRC = "https://newsletter.brombeerland.de/form/263/1717/ab1dba2ca7/popup.js?_g=1792060003"
const POPUP_SELECTOR = "#rmOrganism"

function cleanup() {
    document.querySelectorAll(POPUP_SELECTOR).forEach(el => el.remove())
    document.querySelectorAll(`script[src^="${SRC.split('?')[0]}"]`).forEach(s => s.remove())
}

function openPopup() {
  cleanup()
  const s = document.createElement('script')
  s.src = SRC
  s.async = true
  document.body.appendChild(s)
}

defineExpose({ openPopup })
</script>