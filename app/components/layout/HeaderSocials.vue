<template>
  <!-- Social media links using map -->
  <a
    v-for="(socialMedia, index) in socialMediaLinks"
    :key="index"
    :title="socialMedia.title"
    :href="socialMedia.href"
    target="_blank"
  >
    <i :class="socialMedia.iconClass"></i>
  </a>
</template>

<script setup>
import { useMetaStore } from '@/composables/useMetaStore.js';

const meta = useMetaStore()

const socialMediaLinks = [
  { id: 2, href: meta.facebook, iconClass: "uil uil-facebook-f", title: "facebook" },
  { id: 4, href: meta.instagram, iconClass: "uil uil-instagram", title: "instagram" },
];
</script>

<style scoped>
/* Add any additional styling here */
</style>
