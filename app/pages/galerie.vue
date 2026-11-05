<template>
  <section id="snippet-9" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15 text-center">
      <div class="row">
        <div class="col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8">
          <h2 class="display-5 mb-3">Fotogalerie</h2>
          <p class="lead fs-lg">
            Falls Sie wünschen, ein Bild aus dieser Galerie zu entfernen, schicken Sie uns gern eine Email an
            <a href="mailto:redaktion@wannefredder.de">redaktion@wannefredder.de</a>.
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="grid grid-view projects-masonry">
        <p v-if="!projects.length" class="lead">
          Die Fotogalerie wird derzeit vorbereitet.
        </p>
        <div class="row gx-md-6 gy-6">
          <div
            v-for="(project, i) in filteredItems"
            :key="project.id"
            :class="[
              'project',
              'item',
              `col-md-6`,
              `col-xl-4`,
            ]"
          >
            <figure class="overlay overlay-1 rounded">
              <div
                class="cursor-pointer"
                @click="() => setActiveLightBox(true, i)"
              >
                <img :src="project.image" :alt="project.title" />
                <span class="bg"></span>
              </div>
              <figcaption>
                <h5 class="from-top mb-0">{{ project.title }}</h5>
              </figcaption>
            </figure>
          </div>
          <!-- /.project -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid -->
    </div>
    <!-- /.container -->
   
    <!-- /.container -->
  </section>
  <Lightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
  <!-- Component for lightbox image slider  from omponents>common>Lightbox -->
</template>

<script setup>
import { computed, ref } from 'vue';
import Lightbox from '@/components/common/Lightbox.vue';

const projects = ref([]);

const activeLightBox = ref(false);
const currentSlideIndex = ref(0);
const images = computed(() => projects.value.map((project) => project.image));

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};

const filteredItems = projects;
</script>