<template>
    <Product_type_1 :slug="slug" v-if="productCardType == 1" :borderStyle="borderStyle" />
    <Product_type_11 :slug="slug" v-if="productCardType == 11" />
</template>

<script>
import Product_type_1 from './children/product_type_1.vue';
import Product_type_11 from './children/product_type_11.vue';
import {ref} from "vue";
import {useCommon} from "~/store/index.js";

export default {
    name: 'Product Types',
    components: {
        Product_type_1,
        Product_type_11,
    },
    props: {
        slug: String,
        productCardType: Number,
    },
    setup(){
        const layoutStore = useCommon();
        const borderStyle = ref("");

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
                break;
        }

        return {
            borderStyle,
        }
    }
}
</script>