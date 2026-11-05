<template>
  <div>
    <button
      type="button"
      class="btn text-start d-flex align-items-start gap-3 p-3 border bg-white w-100 shadow"
      :class="selected ? 'border-primary bg-secondary-subtle' : ''"
      :aria-pressed="selected"
      @click="$emit('select', value)"
    >
      <!-- Äußerer Rahmen: immer Seitenformat -->
      <div
        v-if="!newsletter"
        class="border border-primary p-1 flex-shrink-0"
        :style="{ width: '120px', aspectRatio: `${pageWidth} / ${pageHeight}` }"
      >
        <!-- Innenfläche, in der der graue Kasten positioniert wird -->
        <div class="position-relative w-100 h-100">
          <div
            class="bg-secondary position-absolute top-0 start-0"
            :style="{
              width: `${(width / pageWidth) * 100}%`,
              height: `${(height / pageHeight) * 100}%`,
            }"
          ></div>
        </div>
      </div>
      <div>
        <div class="text-wrap">{{ title }}</div>
        <div class="fs-12" v-if="width && height">{{ width }} x {{ height }} mm</div>
        <div v-if="subtitle" class="small text-wrap">{{ subtitle }}</div>
        <div v-if="price" class="fs-12 fw-bold mt-4">{{ price }},- €</div>
        <div v-if="priceBusiness" class="fs-12 fw-bold mt-4">
          <div v-if="priceBusiness.ort">Ortspreis: {{ priceBusiness.ort }},- €</div>
          <div v-if="priceBusiness.base">Grundpreis: {{ priceBusiness.base }},- €</div>
          <div v-if="priceBusiness.social" class="text-primary">Social-Gam.: {{ priceBusiness.social }},- €</div>
        </div>
      </div>

    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const pageHeight = 297
const pageWidth = 210

defineProps({
  value: { type: [String, Number], required: true },
  title: { type: String, required: true },
  width: { type: Number, required: false },
  height: { type: Number, required: false },
  subtitle: { type: String, default: '' },
  price: { type: [Number, String], required: false },
  priceBusiness: { type: Object, required: false },
  selected: { type: Boolean, default: false },
  newsletter: { type: Boolean, default: false },
})

defineEmits(['select'])
</script>