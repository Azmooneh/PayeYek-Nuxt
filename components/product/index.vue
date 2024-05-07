<template>
    <ProductType1 v-if="productType == 2" />
</template>

<script>
import {useCommon} from "~/store/index.js";
import ProductType1 from "~/components/product/productType1/index.vue";
import {ref} from "vue";

export default {
    name: 'Product Single Switch',
    components: {
        ProductType1,
    },
    setup(){
        const layoutStore = useCommon();
        const productType = ref(layoutStore.footerData.styles.product_list_type);


        return {
            productType,
        }
    }
}
</script>