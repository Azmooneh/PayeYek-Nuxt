<template>
    <section class="grid grid-cols-1 gap-8">
        <SwiperCompoinent />
    </section>
</template>

<script>
import {useProduct} from "~/store/index.js";
import SwiperCompoinent from "~/components/product/productType1/children/Swiper.vue";

export default {
    name: "ProductType1",
    components: {
        SwiperCompoinent,
    },
    setup(){
        const productStore = useProduct();

        return {
        }
    }
}
</script>