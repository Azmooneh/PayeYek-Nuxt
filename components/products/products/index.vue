<template>
    <ProductCardTypeOne />
</template>

<script>
import ProductCardTypeOne from './children/PTypeOne.vue';
import { useCategory } from '~/store/index';

export default {
    name: 'Product Switch',
    components: {
        ProductCardTypeOne,
    },
    setup(){
        const categoriesStore = useCategory();
        const ProductCardType = ref(1);
        const productList = categoriesStore.products;

        console.log(productList.value);

        return {
            ProductCardType,
        }
    }
}
</script>