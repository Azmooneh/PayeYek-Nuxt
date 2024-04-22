<template>
    <ProductCardTypeTen :productList="productList" :categories="categoryList" :landSlug="slug" />
</template>

<script>
import ProductCardTypeTen from './children/PTypeTen.vue';
import { useCategory, useCommon } from '~/store/index';

export default {
    name: 'Product Switch',
    components: {
        ProductCardTypeTen,
    },
    setup(){
        const categoriesStore = useCategory();
        const ProductCardType = ref(1);
        const productList = ref(categoriesStore.products);
        const categoryList = ref(categoriesStore.categories);
        const layoutStore = useCommon();
        const slug = ref(layoutStore.footerData.slug);

        return {
            ProductCardType,
            productList,
            categoryList,
            slug,
        }
    }
}
</script>