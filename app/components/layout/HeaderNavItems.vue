<template>
  <!-- <li class="nav-item">
    <NuxtLink
      :class="['nav-link', { active: isActiveMenu('/veranstaltungen') }]"
      to="/veranstaltungen"
      >Veranstaltungen</NuxtLink
    >
  </li> -->
  <li class="nav-item dropdown d-flex align-items-center">
      <button
        type="button"
        class="nav-link dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Untermenü öffnen"
      >Hefte ></button>
      <ul class="dropdown-menu">
        <li><NuxtLink class="dropdown-item" to="/abo">Abonnement</NuxtLink></li>
        <li><NuxtLink class="dropdown-item" to="/demo">Alle Hefte</NuxtLink></li>
        <li><NuxtLink class="dropdown-item" to="/gewinnspiele">Gewinnen</NuxtLink></li>
        <li><span class="dropdown-item clickable" @click="openPopup">Newsletter</span></li>
      </ul>
  </li>
 
  <li class="nav-item dropdown d-flex align-items-center">
      <button
        type="button"
        class="nav-link dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Untermenü öffnen"
      >Anzeigen ></button>
      <ul class="dropdown-menu">
        <li><NuxtLink class="dropdown-item" to="/anzeigen">Anzeige schalten</NuxtLink></li>
        <li><NuxtLink class="dropdown-item" to="/kleinanzeigen">Kleinanzeigen</NuxtLink></li>
      </ul>
  </li>

  <li class="nav-item dropdown d-flex align-items-center">
    <button
      type="button"
      class="nav-link dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      aria-label="Untermenü öffnen"
    >Mitmachen ></button>
    <ul class="dropdown-menu">
      <li><NuxtLink class="dropdown-item" to="/mitmachen">Mitmachen</NuxtLink></li>
      <li><NuxtLink class="dropdown-item" to="/foerdern">Fördermitgliedschaft</NuxtLink></li>
    </ul>
  </li>

  <li class="nav-item">
    <NuxtLink
      :class="['nav-link', { active: isActiveMenu('/ueber') }]"
      to="/ueber"
    >Über</NuxtLink>
  </li>

  <li class="nav-item">
    <NuxtLink
      class="gewinnspiel-item"
      :class="['nav-link', { active: isActiveMenu('/gewinnspiele') }]"
      to="/gewinnspiele"
    >
      Gewinnspiele
    </NuxtLink>
  </li>

  <RapidMailPopup ref="popup"></RapidMailPopup>
</template>

<script setup>
import { ref } from 'vue';
import RapidMailPopup from '@/components/RapidMailPopup.vue';

const popup = ref(null)

function openPopup() {
    popup.value.openPopup()
}

const route = useRoute();

const isActiveMenu = (menuPath) => {
  return route.path.startsWith(menuPath);
};
</script>

<style scoped>
.gewinnspiel-item {
  color: #daa400;
}
.gewinnspiel-item:hover, .gewinnspiel-item:focus, .gewinnspiel-item & .active{
  color: #a37b00;
}
</style>
