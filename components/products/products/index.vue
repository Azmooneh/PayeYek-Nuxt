<template>
    <component :is="selectedComponent" :productList="filteredList" :landSlug="slug" :evenOdd="evenOdd"
               :borderStyle="borderStyle" :productPagination="productPagination"
               :handlePageChange="handlePageChange" />
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
import {useCategory, useCommon} from '~/store/index';
import {ref} from "vue";

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
        const router = useRouter();
        const categoriesStore = useCategory();
        const companySlug = ref(route.params.id);
        const productList = ref(categoriesStore.products.data);
        const productPagination = ref(categoriesStore.products.pagination);
        const categoryList = ref(categoriesStore.categories);
        const layoutStore = useCommon();
        const slug = ref(layoutStore.footerData.slug);
        const evenOdd = ref(layoutStore.footerData.styles.category_striped);
        const cardType = ref(layoutStore.footerData.styles.category_card_type);
        const filteredList = ref([]); // Filtered list of products
        const activeFilters = {};
        const str = ref("");
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
            } else if (!!!route.query.category) {
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

        const loadData = async (filter = '') => {
            const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/p${filter}`);
            if (response.data.value.status == 200) {
                await categoriesStore.saveCategoriesData(response.data.value.data.categories, response.data.value.data.products); // Then save company data
                // console.log(categoriesStore.products);
            }
        }

        const handlePageChange = (page) => {
            activeFilters.page = page;
            str.value = Object.keys(activeFilters).map(key => `${key}=${encodeURIComponent(activeFilters[key])}`).join("&");
            loadData(`?${str.value}`);
            router.push({path: route.path, query: activeFilters});
        };

        watch(() => categoriesStore.products.data, (n, o) => {
            filteredList.value = n;
        })

        watch(() => categoriesStore.products.pagination, (n, o) => {
            productPagination.value = n;
        })

        const selectedComponent = computed(() => {
            switch (cardType.value) {
                case 1:
                    return "ProductCardTypeOne";
                case 2:
                    return "ProductCardTypeTwo";
                case 3:
                    return "ProductCardTypeThree";
                case 4:
                    return "ProductCardTypeFour";
                case 5:
                    return "ProductCardTypeFive";
                case 6:
                    return "ProductCardTypeSix";
                case 7:
                    return "ProductCardTypeSeven";
                case 8:
                    return "ProductCardTypeEight";
                case 9:
                    return "ProductCardTypeNine";
                case 10:
                    return "ProductCardTypeTen";
                case 11:
                    return "ProductCardTypeEleven";
                case 12:
                    return "ProductCardTypeTwelve";
                case 13:
                    return "ProductCardTypeThirteen";
                case 14:
                    return "ProductCardTypeFourteen";
                case 15:
                    return "ProductCardTypeFifteen";
                default:
                    return null; // Handle default case if needed
            }
        })

        return {
            productList,
            categoryList,
            slug,
            evenOdd,
            borderStyle,
            filteredList,
            cardType,
            productPagination,
            handlePageChange,
            selectedComponent,
        }
    }
}
</script>