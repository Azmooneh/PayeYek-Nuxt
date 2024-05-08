<template>
    <MobileSlider :newGallery="newGallery" :settings="settings" :modules="modules" />
    <DesktopSlider :Gallery="Gallery" :mainImage="mainImage" :productName="productName" />
</template>

<script>
import {useProduct} from "~/store/index.js";
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
import MobileSlider from "~/components/product/productType1/children/swipers/MobileSlider.vue";
import DesktopSlider from "~/components/product/productType1/children/swipers/DesktopSlider.vue";

export default {
    name: "Swiper Type 1 Switch",
    components: {
        Swiper,
        SwiperSlide,
        MobileSlider,
        DesktopSlider,
    },
    setup(){
        const productStore = useProduct();
        // console.log(productStore.current);
        const Gallery = ref(productStore.current.slider_image);
        const mainImage = ref(productStore.current.primary_image);
        const productName = ref(productStore.current.title);
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
            speed: 1000,
            pagination: {
                dynamicBullets: true,
                clickable: true,
            },
        };
        newGallery.value = [mainImage.value].concat(Gallery.value);

        return {
            newGallery,
            settings,
            Gallery,
            mainImage,
            modules: [Pagination],
            productName,
        }
    }
}
</script>