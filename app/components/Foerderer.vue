<template>
<div class="container pt-15 pt-md-17 pb-13 pb-md-15">
    <p class="text-center mb-8">
    Unterstützt von:
    </p>
    <div class="swiper-container clients mb-0">
    <Swiper
        :space-between="30"
        :modules="[Autoplay]"
        :autoplay="true"
        :grab-cursor="true"
        :on-autoplay-time-left="1"
        :loop="true"
        :speed="400"
        :breakpoints="{
        500: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
        1500: { slidesPerView: 7 },
        }"
    >
        <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div class="swiper-slide px-5">
                <img src="/assets/img/photos/a6.jpg" alt="" />
            </div>
        </SwiperSlide>
    </Swiper>

    <!-- /.swiper -->
    </div>
    <!-- /.swiper-container -->
</div>
    <!-- /.container -->
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
</script>

<style scoped></style>