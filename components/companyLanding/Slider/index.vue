<template>
    <section class="container mb-6 lg:mb-8" v-if="slides && slides.length > 0">
        <Swiper v-bind="settings" :modules="[SwiperPagination, SwiperAutoplay, SwiperNavigation]" :class="'land_slider slider_type_1 ' + sliderStyle">
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <NuxtLink :to="slide.link" class="relative w-full pt-[56%] block rounded-b-custom overflow-hidden">
                    <img class="absolute top-0 left-0 object-cover w-full h-full" width="100%" height="100%" :src="slide.image" :alt="slide.alt">
                    <ul v-if="slide.infos"
                        class="list-disc list-inside absolute top-2.5 sm:top-4 sm:right-2 right-1 py-1 px-2 sm:px-4 sm:py-2 space-y-1.5 z-[1] bg-white/80 text-xs font-medium text-stone-700 rounded-custom">
                        <template v-for="(li, innerIndex) in slide.infos" :key="innerIndex">
                            <li class="marker:text-stone-700 sm:text-sm md:text-base" v-if="li"
                                :class="{ 'hidden': innerIndex > 0, 'sm:list-item': innerIndex >= 1 && innerIndex < 3, 'md:list-item': innerIndex >= 3 }">
                                <p class="inline-flex truncate"> {{ li }} </p>
                            </li>
                        </template>
                    </ul>
                    <!-- gradient background -->
                    <div
                        class="absolute bottom-0 left-0 w-full h-12 custom_gradient sm:h-24 lg:h-36 xl:h-52 bg-gradient-to-t from-black/80 sm:from-black/90 to-transparent">
                    </div>
                </NuxtLink>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script>
import { useCompanyData, useCommon } from '~/store/index';
import { NuxtLink } from "#components";

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
            navigation: true,
            speed: 750,
            pagination: {
                clickable: true,
            },
        };
        const companyStore = useCompanyData();
        // const styleStore = useStyles();
        const layoutStore = useCommon();
        const slides = ref(companyStore.slides);
        const sliderStyle = ref("");

        const sliderType = type => {
            switch (type) {
                case 1:
                    sliderStyle.value = "arrow-bottom";
                    break;

                case 2:
                    sliderStyle.value = "arrow-center";
                    break;

                case 3:
                    sliderStyle.value = "arrow-blur-bottom";
                    break;

                case 4:
                    sliderStyle.value = "arrow-center-transparent";
                    break;

                case 5:
                    sliderStyle.value = "arrow-blur-center";
                    break;

                default:
                    sliderStyle.value = "arrow-bottom";
                    break;
            }
        }

        watch(() => layoutStore.footerData.styles.slider_type, (newVal) => {
            sliderType(newVal);
        });

        if (layoutStore.footerData && layoutStore.footerData.styles.slider_type) {
            sliderType(layoutStore.footerData.styles.slider_type);
        }

        return {
            settings,
            slides,
            sliderStyle,
        }
    }
}
</script>