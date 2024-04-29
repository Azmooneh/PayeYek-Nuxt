<template>
    <Product_type_1 :slug="slug" v-if="productCardType == 1" />
    <Product_type_11 :slug="slug" v-if="productCardType == 11" />
</template>

<script>
import Product_type_1 from './children/product_type_1.vue';
import Product_type_11 from './children/product_type_11.vue';

export default {
    name: 'Product Types',
    components: {
        Product_type_1,
        Product_type_11,
    },
    props: {
        slug: String,
        productCardType: Number,
    }
}
</script>