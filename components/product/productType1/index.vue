<template>
    <section class="grid grid-cols-1 lg:grid-cols-9 gap-8 mb-16 lg:mb-36 lg:container 2xl:max-w-7xl">
        <SwiperCompoinent />

        <section class="px-4 lg:col-span-3 lg:px-0">
            <h1 class="text-base leading-7 sm:text-xl sm:leading-8 mb-8 lg:mb-12 text-center font-semibold text-normal xl:text-3xl xl:leading-10"> {{ productName }} </h1>
            <Attributes v-if="AttSkeleton" />

            <AttributeSkeleton v-else />

            <HelpAndResources />
        </section>
    </section>

    <Information />

    <section class="grid grid-cols-1 gap-8 lg:gap-14 container">
        <div class="">
            <Specification v-if="SpecSkeleton" />

            <Videos v-if="VideosSkeleton" />
        </div>
    </section>

</template>

<script>
import SwiperCompoinent from "~/components/product/productType1/children/Swiper.vue";
import Attributes from "~/components/product/productType1/children/attributes/index.vue";
import AttributeSkeleton from "~/components/product/productType1/children/attributes/attributeSkeleton.vue";
import {useProduct} from "~/store/index.js";
import HelpAndResources from "~/components/product/productType1/children/helpAndResources/index.vue";
import Information from "~/components/product/productType1/children/information/index.vue";
import Specification from "~/components/product/productType1/children/specification/index.vue";
import Videos from "~/components/product/productType1/children/videos/index.vue";

export default {
    name: "ProductType1",
    components: {
        SwiperCompoinent,
        Attributes,
        AttributeSkeleton,
        HelpAndResources,
        Information,
        Specification,
        Videos,
    },
    setup(){
        const productStore = useProduct();
        const productName = ref(productStore.current.title);
        const AttSkeleton = ref(false);
        const SpecSkeleton = ref(false);
        const VideosSkeleton = ref(false);

        watch(() => productStore.AttributeSkeleton, (n, o) => {
            AttSkeleton.value = n;
        })

        watch(() => productStore.SpecificationSkeleton, (n, o) => {
            SpecSkeleton.value = n;
        })

        watch(() => productStore.VideosSkeleton, (n, o) => {
            VideosSkeleton.value = n;
        })

        return {
            AttSkeleton,
            productName,
            SpecSkeleton,
            VideosSkeleton,
        }
    }
}
</script>