<template>

    <Hero />

    <section class="wrapper bg-gray">
        <div class="container">
            <div class="card shadow-none mt-n13 mt-md-n15 mt-lg-n17">
                <div class="card-body py-6 py-lg-7 px-lg-11 py-xl-8 px-xl-13">
                    <Intro />
                </div>
            </div>
        </div>
    </section>

    <section class="wrapper bg-gray">
        <div class="text-center p-15">
            <h1 class="pb-0">Von Eschwegern für Eschweger: Eure Stadt, Eure Geschichten, Eure Zeitung!</h1>
            <hr class="m-0" />
        </div>
        <!-- <Foerderer /> -->
    </section>

    <section class="wrapper bg-light">
        <PageKacheln />
    </section>

    <section class="wrapper bg-light mb-10 mb-md-13 mb-lg-15">
        <NewsletterBanner />
    </section>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import Intro from "@/components/Intro.vue";
import NewsletterBanner from "@/components/NewsletterBanner.vue";
import PageKacheln from "@/components/PageKacheln.vue";
</script>