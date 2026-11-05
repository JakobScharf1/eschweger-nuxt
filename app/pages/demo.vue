<template>
    <section class="wrapper bg-gray pt-5 pb-1 mb-0 text-center">
        <h3 class="display-3">Ausgabe 00/2026</h3>
    </section>

    <section class="wrapper bg-gray mt-0 pb-10">
        <div class="container">
            <Flipbook src="/assets/files/magazin.pdf" :page-width="700"></Flipbook>
        </div>
    </section>
</template>

<script setup>
import Flipbook from '@/components/Flipbook.vue';


</script>