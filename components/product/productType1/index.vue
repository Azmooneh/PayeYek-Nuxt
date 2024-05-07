<template>
    <section class="grid grid-cols-1 gap-8 mb-16 lg:mb-36">
        <SwiperCompoinent />

        <section class="px-4">
            <h1 class="text-base mb-8 lg:mb-12 text-center font-semibold text-normal xl:text-3xl"> {{ productName }} </h1>
            <Attributes v-if="AttSkeleton" />

            <AttributeSkeleton v-else />

            <HelpAndResources />
        </section>

    </section>
</template>

<script>
import SwiperCompoinent from "~/components/product/productType1/children/Swiper.vue";
import Attributes from "~/components/product/productType1/children/attributes/index.vue";
import AttributeSkeleton from "~/components/product/productType1/children/attributes/attributeSkeleton.vue";
import {useProduct} from "~/store/index.js";
import HelpAndResources from "~/components/product/productType1/children/helpAndResources/index.vue";

export default {
    name: "ProductType1",
    components: {
        SwiperCompoinent,
        Attributes,
        AttributeSkeleton,
        HelpAndResources,
    },
    setup(){
        const productStore = useProduct();
        const productName = ref(productStore.current.title);
        const AttSkeleton = ref(false);
        // if(productStore.Attributes && productStore.Attributes != null){
        //     AttSkeleton.value = true;
        //     console.log("outside watch => ", productStore.Attributes);
        // }
        watch(() => productStore.AttributeSkeleton, (n, o) => {
            console.log("insede watch => ", productStore.Attributes);
            AttSkeleton.value = n;
        })

        return {
            AttSkeleton,
            productName,
        }
    }
}
</script>