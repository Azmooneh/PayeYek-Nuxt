<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container" v-if="productList.length">
        <!-- title -->
        <Titles :landSlug="slug" :headerType="headerType" :title="'محصولات شرکت ' + companyName" section="p"  />
        <!-- products -->
        <ProductTypes :slug="slug" :productCardType="productCardType" />
    </section>
</template>

<script>
import { useCompanyData, useCommon } from '~/store/index';
import Titles from '~/components/companyLanding/common/titles/index.vue';
import ProductTypes from './children/index.vue';

export default {
    name: 'Products',
    components: {
        Titles,
        ProductTypes,
    },
    setup(){
        const companyStore = useCompanyData();
        const layoutStore = useCommon();
        const productList = ref(companyStore.products);
        const borderStyle = ref("");
        const headerType = ref(layoutStore.footerData.styles.section_header_type);
        const productCardType = ref(layoutStore.footerData.styles.product_card_type);
        const slug = ref(layoutStore.footerData.slug);
        const evenOdd = ref(layoutStore.footerData.styles.product_striped);
        const companyName = ref(layoutStore.footerData.title);
        switch (layoutStore.footerData.styles.border_type) {
            case 0:
                switch (layoutStore.footerData.styles.product_card_type) {
                    case 11:
                        borderStyle.value = "";
                        break;
                
                    default:
                        break;
                }
                break;
            case 1:
                switch (layoutStore.footerData.styles.product_card_type) {
                    case 11:
                        borderStyle.value = "border border-stone-400";
                        break;
                
                    default:
                        break;
                }
                break;
            case 2:
                switch (layoutStore.footerData.styles.product_card_type) {
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
        
        return {
            slug,
            productList,
            borderStyle,
            evenOdd,
            headerType,
            productCardType,
            companyName,
        }
    }
}
</script>