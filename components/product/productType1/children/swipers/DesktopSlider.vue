<template>
    <section class="grid-cols-5 gap-5 hidden lg:grid col-span-6">
        <!-- thumbnails -->
        <div v-if="Gallery.length > 0" class="col-span-1 w-full pt-0.5 content-center">
            <div class="grid grid-cols-1 gap-4">
                <div v-for="(thumb, index) in Gallery.slice(0, 5)" :key="index"
                     class="relative w-full overflow-hidden cursor-pointer aspect-video rounded-custom" @click="showSliderWithSliderTo(index)">
                    <NuxtImg :src="thumb" class="object-cover w-full h-full rounded-custom" width="182" height="102" format="webp" />
                    <div class="w-full h-full bg-black/60 absolute top-0 left-0 flex_center text-white/60 font-normal text-5xl"
                         v-if="index == 4 && Gallery.length > 5"> {{ Gallery.length - 4 }} + </div>
                </div>
            </div>
        </div>

        <div :class="Gallery.length > 0 ? 'col-span-4' : 'col-span-5'">
            <div class="w-full pt-[100%] relative border border-[#DBDBDB] rounded-custom">
                <div class="absolute inset-0 cursor-pointer">
                    <NuxtImg :src="mainImage" :alt="productName" class="object-contain w-full h-full rounded-custom" width="800" height="800" format="webp" />
                </div>
            </div>
        </div>
    </section>

    <!-- modal layer -->
    <div class="hidden lg:block bg-black/60 fixed inset-0 z-[4]" v-show="openModal" @click="closeModal">
        <!-- closeModal -->
        <button type="button" class="cursor-pointer p-1 fixed top-4 left-5 z-[5]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12L6 6M12 12L18 18M12 12L18 6M12 12L6 18" stroke="#fff" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>

    <section
        class="hidden lg:flex_center w-2/3 max-w-[640px] lg:max-w-[796px] xl:max-w-[900px] 2xl:max-w-[1024px] mx-auto translate-x-1/2 -translate-y-1/2 fixed top-1/2 right-1/2 z-[5]"
        v-show="openModal">
        <Swiper :modules="modules" v-bind="settings" class="w-full desktop_pdp_slider">
            <SwiperSlide v-for="slide in Gallery">
                <div class="relative pt-[56%] w-full">
                    <NuxtImg class="absolute top-0 left-0 object-cover w-full h-full" :src="slide" width="1024" height="574" format="webp" />
                    <div class="absolute text-white bottom-0 left-0 w-full z-[2] bg-gradient-to-t from-black/90 to-transparent h-1/3"></div>
                </div>
            </SwiperSlide>
        </Swiper>

    </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { NuxtImg } from "#app/components/nuxt-stubs.js";

export default {
    name: 'Desktop Slider Type 1',
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        Gallery: Array,
        mainImage: String,
        productName: String,
    },
    setup(){
        const settings = {
            slidesPerView: 1,
            spaceBetween: 16,
            navigation: true,
            speed: 1000,
        };
        const openModal = ref(false);
        const desktopSliderSwiper = ref(null);

        const closeModal = () => {
            openModal.value = false;
            document.body.classList.remove('h-full', 'overflow-hidden')
        }

        onMounted(() => {
            desktopSliderSwiper.value = document.querySelector('.desktop_pdp_slider').swiper;
        })

        // open Modal
        const showSliderWithSliderTo = (id) => {
            desktopSliderSwiper.value.slideTo(id);
            openModal.value = true;
            document.body.classList.add('h-full', 'overflow-hidden')
        }

        const handleArrows = (event) => {
            if(openModal.value){
                switch (event.keyCode) {
                    case (27):
                        openModal.value = false;
                        document.body.classList.remove('h-full', 'overflow-hidden')
                        break;
                    case (37):
                        desktopSliderSwiper.value.slideNext();
                        break;
                    case (39):
                        desktopSliderSwiper.value.slidePrev();
                        break;
                    default:
                        break;
                }
            }
        }

        window.addEventListener("keydown", handleArrows);

        return {
            settings,
            openModal,
            closeModal,
            showSliderWithSliderTo,
            modules: [Navigation],
        }
    }
}
</script>