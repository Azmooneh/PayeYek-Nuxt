<template>
    <ProductType1 v-if="productType == 2" />
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

        console.log(productType.value, productSlug.value);

        const { data, pending, error, refresh } = useFetch(() =>
            `${useRuntimeConfig().public.apiBase}/l/p/${productSlug.value}/information`
        );
        //
        // console.log("from outside", data.value)
        //
        watchEffect(() => {
            if(data.value && data.value.status == 200) {
                productStore.saveAttributes(data.value.data);
            }
            // console.log("from watcheffect", data.value.data)
        });


        return {
            productType,
        }
    }
}
</script>