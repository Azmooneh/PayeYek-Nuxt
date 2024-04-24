<template>
    <ProductCardTypeOne :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 1" />
    <ProductCardTypeTwo :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 2" />
    <ProductCardTypeThree :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 3" />
    <ProductCardTypeFour :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 4" />
    <ProductCardTypeFive :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 5" />
    <ProductCardTypeTen :productList="productList" :categories="categoryList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 10" />
</template>

<script>
import ProductCardTypeOne from './children/PTypeOne.vue';
import ProductCardTypeTwo from './children/PTypeTwo.vue';
import ProductCardTypeThree from './children/PTypeThree.vue';
import ProductCardTypeFour from './children/PTypeFour.vue';
import ProductCardTypeFive from './children/PTypeFive.vue';
import ProductCardTypeTen from './children/PTypeTen.vue';
import { useCategory, useCommon } from '~/store/index';

export default {
    name: 'Product Switch',
    components: {
        ProductCardTypeOne,
        ProductCardTypeTwo,
        ProductCardTypeThree,
        ProductCardTypeFour,
        ProductCardTypeFive,
        ProductCardTypeTen,
    },
    setup() {
        const route = useRoute();
        const categoriesStore = useCategory();
        const ProductCardType = ref(10);
        const productList = ref(categoriesStore.products);
        const categoryList = ref(categoriesStore.categories);
        const layoutStore = useCommon();
        const slug = ref(layoutStore.footerData.slug);
        const evenOdd = ref(layoutStore.footerData.styles.category_striped);
        const cardType = ref(layoutStore.footerData.styles.category_card_type);
        const filteredList = ref([]); // Filtered list of products
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
        const filterState = ref(computed(() => {
            if (route.query.category) {
                return route.query.category;
            } else {
                watch(() => route.query.category, (n, o) => {
                    return n;
                })
            }
        })); // Current filter state

        const initialLoadFilter = () => {
            productList.value.filter(product => {
                if (product.category_id == filterState.value) {
                    filteredList.value.push(product);
                }
            })
        }

        initialLoadFilter();

        watchEffect(() => {
            if (route.query.category) {
                filteredList.value = [];
                if (filterState.value == 0) {
                    filteredList.value = productList.value;
                } else {
                    initialLoadFilter();
                }
            } else {
                // Handle case when no category is selected
            }
        });

        return {
            ProductCardType,
            productList,
            categoryList,
            slug,
            evenOdd,
            borderStyle,
            filteredList,
            cardType,
        }
    }
}
</script>