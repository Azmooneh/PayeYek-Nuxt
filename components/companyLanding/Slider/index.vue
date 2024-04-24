<template>
    <section class="container mb-6 lg:mb-8" v-if="slides && slides.length > 0">
        <Swiper v-bind="settings" :modules="[SwiperPagination, SwiperAutoplay, SwiperNavigation]" :class="'land_slider slider_type_1 ' + sliderStyle">
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <Slide :slide="slide" />
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script>
import { useCompanyData, useCommon } from '~/store/index';
import Slide from './children/slide.vue';


export default {
    name: 'Slider',
    components: {
        Slide,
    },
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