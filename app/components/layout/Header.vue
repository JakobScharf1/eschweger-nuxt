<template>
  <header class="wrapper bg-gray">
    <nav
      :class="`navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none ${
        addClass2 ? 'fixed navbar-clone' : ''
      } ${addClass ? 'navbar-clone navbar-stick' : ' navbar-unstick'} `"
    >
      <div class="container">
        <div
          class="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center"
        >
          <div class="navbar-brand w-100">
            <NuxtLink to="/">
              <img
                :src="meta.logo"
                alt="DIE ESCHWEGER Logo"
                style="width: 250px;"
              />
            </NuxtLink>
          </div>

          <!-- Desktop-Nav: nur ab lg sichtbar -->
          <ul class="navbar-nav navbar-nav-desktop flex-row align-items-center">
            <HeaderNavItems />
          </ul>
          <!-- /.navbar-nav desktop -->

          <div class="navbar-other w-100 d-flex ms-auto">
            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <li class="nav-item">
                <nav
                  class="nav social social-muted justify-content-end text-end"
                >
                  <HeaderSocials />
                </nav>
              </li>
              <li class="nav-item mobile-only">
                <button @click="menuOpen" class="hamburger offcanvas-nav-btn">
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
          <!-- /.navbar-other -->
        </div>
      </div>
    </nav>

    <!-- Eigenes Overlay-Menü, unabhängig vom Theme-Offcanvas -->
    <Teleport to="body">
      <Transition name="menu-fade">
        <div v-if="isMenuOpen" class="custom-menu-overlay">
          <button
            class="custom-menu-close"
            aria-label="Menü schließen"
            @click="menuClose"
          >
            <span></span>
            <span></span>
          </button>

          <ul class="custom-menu-nav">
            <!-- <li class="nav-item mobile-only">
              <NuxtLink to="/veranstaltungen" @click="menuClose">Veranstaltungen</NuxtLink>
            </li> -->
            <li class="nav-item">
              <NuxtLink to="/abo" @click="menuClose">Abonnement</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/unterstuetzen" @click="menuClose">Unterstützen</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/anzeigen" @click="menuClose">Anzeigen</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/kleinanzeigen" @click="menuClose">Kleinanzeigen</NuxtLink>
            </li>
            <!-- <li class="nav-item">
              <NuxtLink to="/radio" @click="menuClose">Radio</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/umfragen" @click="menuClose">Umfragen</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/galerie" @click="menuClose">Galerie</NuxtLink>
            </li> -->
            <li class="nav-item">
              <NuxtLink to="/demo" @click="menuClose">Ausgaben</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/gewinnspiele" @click="menuClose">Gewinnspiele</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/ueber" @click="menuClose">Über</NuxtLink>
            </li>
          </ul>

          <nav class="custom-menu-socials">
            <HeaderSocials />
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import HeaderNavItems from "./HeaderNavItems.vue";
import HeaderSocials from "./HeaderSocials.vue";
import { useMetaStore } from "@/composables/useMetaStore.js";

const meta = useMetaStore()

const isMenuOpen = ref(false);

const menuOpen = () => {
  isMenuOpen.value = true;
};

const menuClose = () => {
  isMenuOpen.value = false;
};

// Body-Scroll sperren, solange Menü offen ist
watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

// Menü mit Escape schließen
const handleKeydown = (e) => {
  if (e.key === "Escape") menuClose();
};

const addClass = ref(false);
const addClass2 = ref(false);

const handleScroll = () => {
  addClass2.value = window.scrollY >= 200;
  addClass.value = window.scrollY >= 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<style lang="scss" scoped>
.navbar-nav-desktop {
  display: none !important;
}

@media (min-width: 992px) {
  .navbar-nav-desktop {
    display: flex !important;
  }
}

// --- Overlay-Menü ---
.custom-menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 1050;
  background: rgba(30, 30, 30, 0.97);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5rem 1.5rem 2rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (min-height: 700px) {
    justify-content: center;
    padding-top: 2rem;
  }
}

.custom-menu-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 26px;
    height: 2px;
    background: #fff;
    transform-origin: center;

    &:first-child {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:last-child {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}

.custom-menu-nav {
 list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  width: 100%;
  flex-shrink: 0;

  :deep(a) {
    color: #fff;
    font-size: 1.75rem;
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
}

.custom-menu-socials {
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;

  :deep(a) {
    color: #fff;
  }
}

// Fade-Transition
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.25s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.mobile-only {
  display: none;
}
@media (max-width: 991px) {
  .mobile-only {
    display: block !important;
  }
}

</style>