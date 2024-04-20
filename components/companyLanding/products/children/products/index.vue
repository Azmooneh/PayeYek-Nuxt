<template>
    <Product_type_11 :slug="slug" />
</template>

<script>
import Product_type_11 from './children/product_type_11.vue';

export default {
    name: 'Product Types',
    components: {
        Product_type_11,
    },
    props: {
        slug: String,
    }
}
</script>