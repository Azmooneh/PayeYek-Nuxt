<template>
    <ProductCardTypeTen :productList="productList" :categories="categoryList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" />
</template>

<script>
import ProductCardTypeTen from './children/PTypeTen.vue';
import { useCategory, useCommon } from '~/store/index';

export default {
    name: 'Product Switch',
    components: {
        ProductCardTypeTen,
    },
    setup() {
        const categoriesStore = useCategory();
        const ProductCardType = ref(10);
        const productList = ref(categoriesStore.products);
        const categoryList = ref(categoriesStore.categories);
        const layoutStore = useCommon();
        const slug = ref(layoutStore.footerData.slug);
        const evenOdd = ref(layoutStore.footerData.styles.category_striped);
        // console.log(layoutStore.footerData.styles);
        const borderStyle = computed(() => {
            switch (layoutStore.footerData.styles.border_type.toString()) {
                case '0':
                    return [
                        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'
                    ].includes(layoutStore.footerData.styles.category_card_type.toString()) ? '' : '';

                case '1':
                    return {
                        '1': ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11'],
                        '8': ['8']
                    }[layoutStore.footerData.styles.category_card_type.toString()] || 'border border-stone-400';

                case '2':
                    return {
                        '1': ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11'],
                        '8': ['8']
                    }[layoutStore.footerData.styles.category_card_type.toString()] || 'drop-shadow-base';

                default:
                    return '';
            }
        });

        return {
            ProductCardType,
            productList,
            categoryList,
            slug,
            evenOdd,
            borderStyle,
        }
    }
}
</script>