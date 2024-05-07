<template>
    <section class="mb-2.5 lg:mb-8 relative z-[1] sm:container lg:hidden">
        <Swiper :modules="modules" v-bind="settings" :pagination="{ clickable: true }" class="slider_type_1 stone_paginate">
            <SwiperSlide v-for="slide in newGallery.slice(0, 8)">
                <div class="relative pt-[100%] w-full">
                    <img loading="lazy" class="object-contain absolute w-full h-full top-0 left-0" :src="slide" :alt="slide" />
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script>
import {useProduct} from "~/store/index.js";
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
export  default {
    name: 'Mobile Slider',
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        modules: [Array, Object],
        settings: Object,
        newGallery: Array,
    },
}
</script>