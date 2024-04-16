<template>
    <Swiper v-bind="settings" :modules="[SwiperPagination, SwiperAutoplay]" class="w-full">
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <NuxtLink :to="slide.link" class="relative w-full pt-[56%] block rounded-b-custom overflow-hidden">
                    <img class="object-cover w-full h-full top-0 left-0 absolute" :src="slide.image" :alt="slide.alt">
                    <ul v-if="slide.infos" class="list-disc list-inside absolute top-2.5 sm:top-4 sm:right-2 right-1 py-1 px-2 sm:px-4 sm:py-2 space-y-1.5 z-[1] bg-white/80 text-xs font-medium text-stone-700 rounded-custom">
                        <template v-for="(li, innerIndex) in slide.infos" :key="innerIndex">
                            <li class="marker:text-stone-700 sm:text-sm md:text-base" v-if="li" :class="{ 'hidden': innerIndex > 0, 'sm:list-item': innerIndex >= 1 && innerIndex < 3, 'md:list-item': innerIndex >= 3 }">
                                <p class="truncate inline-flex"> {{ li }} </p>
                            </li>
                        </template>
                    </ul>
                    <!-- gradient background -->
                    <div  class="custom_gradient absolute bottom-0 left-0 w-full h-12 sm:h-24 lg:h-36 xl:h-52 bg-gradient-to-t from-black/80 sm:from-black/90 to-transparent"></div>
                </NuxtLink>
        </SwiperSlide>
    </Swiper>
</template>

<script>
import { useCompanyData, useStyles } from '~/store/index';
import { NuxtLink } from "#components";
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default {
    name: 'Slider',
    setup() {
        const settings = {
            slidesPerView: 1,
            pagination: true,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            speed: 750,
            pagination: {
                clickable: true,
            },
        };
        const companyStore = useCompanyData();
        const styleStore = useStyles();
        const slides = ref(companyStore.slides);

        console.log(slides.value);
        // console.log(styleStore.styles);

        return {
            settings,
            slides,
            // modules: [Navigation, Pagination, Autoplay],
        }
    }
}
</script>