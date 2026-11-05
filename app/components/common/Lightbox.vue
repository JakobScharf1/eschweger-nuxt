<template>
  <Teleport to="body">
    <div
      v-if="activeLightBox && images.length"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Bildansicht"
      @click.self="close"
      @keydown.esc="close"
    >
      <button class="lightbox-close" type="button" aria-label="Schließen" @click="close">×</button>
      <button
        v-if="images.length > 1"
        class="lightbox-previous"
        type="button"
        aria-label="Vorheriges Bild"
        @click="move(-1)"
      >
        ‹
      </button>
      <img :src="images[index]" alt="" />
      <button
        v-if="images.length > 1"
        class="lightbox-next"
        type="button"
        aria-label="Nächstes Bild"
        @click="move(1)"
      >
        ›
      </button>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  activeLightBox: { type: Boolean, default: false },
  firstSlideIndex: { type: Number, default: 0 },
})
const emit = defineEmits(['setActiveLightBox'])
const index = computed(() => Math.min(props.firstSlideIndex, props.images.length - 1))

function close() {
  emit('setActiveLightBox', false, index.value)
}

function move(offset) {
  const nextIndex = (index.value + offset + props.images.length) % props.images.length
  emit('setActiveLightBox', true, nextIndex)
}
</script>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background: rgb(0 0 0 / 90%);
}

.lightbox img {
  max-width: min(100%, 80rem);
  max-height: 100%;
  object-fit: contain;
}

.lightbox button {
  position: absolute;
  border: 0;
  color: white;
  background: transparent;
  font-size: 3rem;
  line-height: 1;
}

.lightbox-close {
  top: 1rem;
  right: 1.5rem;
}

.lightbox-previous {
  left: 1rem;
}

.lightbox-next {
  right: 1rem;
}

@media (max-width: 600px) {
  .lightbox {
    padding: 2rem;
  }
}
</style>
