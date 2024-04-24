<template>
    <ProductCardTypeOne :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 1" />
    <ProductCardTypeTwo :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 2" />
    <ProductCardTypeThree :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 3" />
    <ProductCardTypeFour :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 4" />
    <ProductCardTypeFive :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 5" />
    <ProductCardTypeSix :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 6" />
    <ProductCardTypeSeven :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 7" />
    <ProductCardTypeEight :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 8" />
    <ProductCardTypeNine :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 9" />
    <ProductCardTypeTen :productList="productList" :categories="categoryList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 10" />
    <ProductCardTypeEleven :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 11" />
    <ProductCardTypeTwelve :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 12" />
    <ProductCardTypeThirteen :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 13" />
    <ProductCardTypeFourteen :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 14" />
    <ProductCardTypeFifteen :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd" :borderStyle="borderStyle" v-if="cardType == 15" />
</template>

<script>
import ProductCardTypeOne from './children/PTypeOne.vue';
import ProductCardTypeTwo from './children/PTypeTwo.vue';
import ProductCardTypeThree from './children/PTypeThree.vue';
import ProductCardTypeFour from './children/PTypeFour.vue';
import ProductCardTypeFive from './children/PTypeFive.vue';
import ProductCardTypeSix from './children/PTypeSix.vue';
import ProductCardTypeSeven from './children/PTypeSeven.vue';
import ProductCardTypeEight from './children/PTypeEight.vue';
import ProductCardTypeNine from './children/PTypeNine.vue';
import ProductCardTypeTen from './children/PTypeTen.vue';
import ProductCardTypeEleven from './children/PTypeEleven.vue';
import ProductCardTypeTwelve from './children/PTypeTwelve.vue';
import ProductCardTypeThirteen from './children/PTypeThirteen.vue';
import ProductCardTypeFourteen from './children/PTypeFourteen.vue';
import ProductCardTypeFifteen from './children/PTypeFifteen.vue';
import { useCategory, useCommon } from '~/store/index';

export default {
    name: 'Product Switch',
    components: {
        ProductCardTypeOne,
        ProductCardTypeTwo,
        ProductCardTypeThree,
        ProductCardTypeFour,
        ProductCardTypeFive,
        ProductCardTypeSix,
        ProductCardTypeSeven,
        ProductCardTypeEight,
        ProductCardTypeNine,
        ProductCardTypeTen,
        ProductCardTypeEleven,
        ProductCardTypeTwelve,
        ProductCardTypeThirteen,
        ProductCardTypeFourteen,
        ProductCardTypeFifteen,
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
        // const cardType = ref(layoutStore.footerData.styles.category_card_type);
        const cardType = ref(15);
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
            } else if (!!!route.query.category){
                return 0;
            } else {
                watch(() => route.query.category, (n, o) => {
                    return n;
                })
            }
        })); // Current filter state

        const initialLoadFilter = () => {
            if (filterState.value == 0) {
                filteredList.value = productList.value;
            } else {
                productList.value.filter(product => {
                    if (product.category_id == filterState.value) {
                        filteredList.value.push(product);
                    }
                })
            }
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