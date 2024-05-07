<template>
    <ProductType1 />
</template>

<script>
import {useCommon, useProduct} from "~/store/index.js";
import ProductType1 from "~/components/product/productType1/index.vue";
import {ref} from "vue";

export default {
    name: 'Product Single Switch',
    components: {
        ProductType1,
    },
    setup(){
        const route = useRoute();
        const layoutStore = useCommon();
        const productStore = useProduct();
        const productType = ref(layoutStore.footerData.styles.product_list_type);
        const productSlug = ref(route.params.product);

        const { data } = useFetch(() =>
            `${useRuntimeConfig().public.apiBase}/l/p/${productSlug.value}/information`
        );

        const response = useFetch(() =>
            `${useRuntimeConfig().public.apiBase}/l/p/${productSlug.value}/specification`
        );

        const videos = useFetch(() =>
            `${useRuntimeConfig().public.apiBase}/l/p/${productSlug.value}/videos`
        );

        watchEffect(() => {
            if(data.value && data.value.status == 200) {
                productStore.saveAttributes(data.value.data);
            }

            if(response && response.data.value != null){
                if(response.data.value.status == 200) {
                    productStore.saveSpecification(response.data.value.data.specification);
                }
            }

            if(videos && videos.data.value != null){
                if(videos.data.value.status == 200) {
                    productStore.saveVideos(videos.data.value.data.videos);
                }
            }
        });

        return {
            productType,
        }
    }
}
</script>