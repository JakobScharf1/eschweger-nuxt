<template>
  <button
    v-if="visible"
    class="scroll-to-top btn btn-primary rounded-circle"
    type="button"
    aria-label="Zum Seitenanfang"
    @click="scrollToTop"
  >
    <span aria-hidden="true">↑</span>
  </button>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref(false)

function updateVisibility() {
  visible.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', updateVisibility, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', updateVisibility))
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 1040;
  width: 3rem;
  height: 3rem;
  padding: 0;
}
</style>
