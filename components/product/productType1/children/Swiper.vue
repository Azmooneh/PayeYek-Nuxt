<template>
    <MobileSlider :newGallery="newGallery" :settings="settings" :modules="modules" />
</template>

<script>
import {useProduct} from "~/store/index.js";
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
import MobileSlider from "~/components/product/productType1/children/swipers/MobileSlider.vue";

export default {
    name: "Swiper Type 1 Switch",
    components: {
        Swiper,
        SwiperSlide,
        MobileSlider,
    },
    setup(){
        const productStore = useProduct();
        // console.log(productStore.current);
        const Gallery = ref(productStore.current.slider_image);
        const mainImage = ref(productStore.current.primary_image);
        const newGallery = ref(null);
        const settings = {
            slidesPerView: 1,
            pagination: true,
            loop: true,
            // autoplay: {
            //     delay: 3500,
            //     disableOnInteraction: false,
            // },
            // navigation: true,
            speed: 750,
            pagination: {
                dynamicBullets: true,
                clickable: true,
            },
        };
        newGallery.value = [mainImage.value].concat(Gallery.value);

        return {
            newGallery,
            settings,
            modules: [Pagination],
        }
    }
}
</script>