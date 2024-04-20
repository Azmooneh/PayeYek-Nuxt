<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container" v-if="productList.length">
        <!-- title -->
        <Titles :landSlug="slug" :headerType="headerType" :title="'محصولات شرکت ' + companyName" section="products"  />
        <!-- products -->
        <ProductTypes :slug="slug" :productCardType="productCardType" />
    </section>
</template>

<script>
// import { NuxtLink } from "#components";
import { useCompanyData, useStyles } from '~/store/index';
import Titles from '~/components/companyLanding/common/titles/index.vue';
import ProductTypes from './children/index.vue';

export default {
    name: 'Products',
    components: {
        Titles,
        ProductTypes,
    },
    setup(){
        // const route = useRoute();
        const companyStore = useCompanyData();
        const styleStore = useStyles();
        const productList = ref(companyStore.products);
        const borderStyle = ref("");
        const headerType = ref(1);
        const productCardType = ref(11);

        switch (styleStore.styles.border_type) {
            case 0:
                switch (styleStore.styles.product_card_type) {
                    case 11:
                        borderStyle.value = "";
                        break;
                
                    default:
                        break;
                }
                break;
            case 1:
                switch (styleStore.styles.product_card_type) {
                    case 11:
                        borderStyle.value = "border border-stone-400";
                        break;
                
                    default:
                        break;
                }
                break;
            case 2:
                switch (styleStore.styles.product_card_type) {
                    case 11:
                        borderStyle.value = "drop-shadow-base";
                        break;
                
                    default:
                        break;
                }
                break;
        
            default:
                borderStyle.value = "";
                break;
        }
        
        // console.log(styleStore.styles);

        return {
            slug: companyStore.companyData.slug,
            productList,
            borderStyle,
            evenOdd: styleStore.styles.product_striped,
            headerType,
            productCardType,
            companyName: companyStore.companyData.title,
        }
    }
}
</script>