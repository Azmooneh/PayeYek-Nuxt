<template>
    <section class="grid grid-cols-1 gap-8">
        <SwiperCompoinent />

        <Attributes v-if="AttributeSkeleton" :Attributes="Attributes" />
        <p v-else>vblidxufbrv iurhgv nosireugh vo</p>

    </section>
</template>

<script>
import {useProduct} from "~/store/index.js";
import SwiperCompoinent from "~/components/product/productType1/children/Swiper.vue";
import Attributes from "~/components/product/productType1/children/attributes/index.vue";

export default {
    name: "ProductType1",
    components: {
        SwiperCompoinent,
        Attributes,
    },
    setup(){
        const route = useRoute();
        // const productStore = useProduct();
        const productSlug = ref(route.params.product);
        const AttributeSkeleton = ref(false);
        const Attributes = ref([]);

        const { data, pending, error, refresh } = useFetch(() =>
            `${useRuntimeConfig().public.apiBase}/l/p/${productSlug.value}/information`
        );

        watchEffect(() => {
            if(data.value && data.value.status == 200) {
                AttributeSkeleton.value = true;
                Attributes.value = data.value.data;
            }
        });

        return {
            AttributeSkeleton,
            Attributes,
        }
    }
}
</script>