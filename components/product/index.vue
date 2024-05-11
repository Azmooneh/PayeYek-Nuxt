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
        const landId = ref(layoutStore.footerData.styles.land_id);
        const str = ref("");
        const commentsFilter = {
            landId: landId.value,
            productSlug: productSlug.value,
            perPage: 3,
        }

        str.value = Object.keys(commentsFilter).map(key => `${key}=${encodeURIComponent(commentsFilter[key])}`).join("&");

        const { data } = useFetch(() =>
            `${useRuntimeConfig().public.apiBase}/l/p/${productSlug.value}/information`
        );

        const response = useFetch(() =>
            `${useRuntimeConfig().public.apiBase}/l/p/${productSlug.value}/specification`
        );

        const videos = useFetch(() =>
            `${useRuntimeConfig().public.apiBase}/l/p/${productSlug.value}/videos`
        );

        const comments = useFetch(() =>
            `${useRuntimeConfig().public.apiBase}/l/comment/get-comment?${str.value}`
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

            // if(comments && comments.data.value != null){
            //     if(comments.data.value.status == 200) {
            //         productStore.saveComments(videos.data.value.data);
            //     }
            // }
            console.log(comments.data.value);
        });

        return {
            productType,
        }
    }
}
</script>