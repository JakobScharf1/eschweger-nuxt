<template>

    <Hero />

    <Aktuelles />

    <section class="wrapper bg-light">
        <div class="container pt-7 pt-md-10 pt-lg-13">
            <div class="card shadow-none">
                <div class="card-body py-6 py-lg-7 px-lg-11 py-xl-8 px-xl-13">
                    <Intro />
                </div>
            </div>
        </div>
    </section>

    <section class="wrapper bg-light">
        <div class="text-center p-15">
            <h1 class="pb-0">Von Eschwegern für Eschweger: Eure Stadt, Eure Geschichten, Eure Zeitung!</h1>
            <hr class="m-0" />
        </div>
        <!-- <Foerderer /> -->
    </section>

    <section class="wrapper bg-gray">
        <PageKacheln />
    </section>

    <section class="wrapper bg-light">
        <NewsletterBanner />
    </section>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import Intro from "@/components/Intro.vue";
import NewsletterBanner from "@/components/NewsletterBanner.vue";
import PageKacheln from "@/components/PageKacheln.vue";
import Aktuelles from "~/components/Aktuelles.vue";
</script>