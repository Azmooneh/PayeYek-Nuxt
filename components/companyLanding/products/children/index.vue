<template>
    <Product_type_1 :slug="slug" v-if="productCardType == 1" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_2 :slug="slug" v-if="productCardType == 2" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_3 :slug="slug" v-if="productCardType == 3" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_4 :slug="slug" v-if="productCardType == 4" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_5 :slug="slug" v-if="productCardType == 5" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_6 :slug="slug" v-if="productCardType == 6" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_7 :slug="slug" v-if="productCardType == 7" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_8 :slug="slug" v-if="productCardType == 8" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_9 :slug="slug" v-if="productCardType == 9" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_10 :slug="slug" v-if="productCardType == 10" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_11 :slug="slug" v-if="productCardType == 11" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_12 :slug="slug" v-if="productCardType == 12" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_13 :slug="slug" v-if="productCardType == 13" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_14 :slug="slug" v-if="productCardType == 14" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_15 :slug="slug" v-if="productCardType == 15" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Product_type_16 :slug="slug" v-if="productCardType == 16" :borderStyle="borderStyle" :evenOdd="evenOdd" />
</template>

<script>
import Product_type_1 from './children/product_type_1.vue';
import Product_type_2 from './children/product_type_2.vue';
import Product_type_3 from './children/product_type_3.vue';
import Product_type_4 from './children/product_type_4.vue';
import Product_type_5 from './children/product_type_5.vue';
import Product_type_6 from './children/product_type_6.vue';
import Product_type_7 from './children/product_type_7.vue';
import Product_type_8 from './children/product_type_8.vue';
import Product_type_9 from './children/product_type_9.vue';
import Product_type_10 from './children/product_type_10.vue';
import Product_type_11 from './children/product_type_11.vue';
import Product_type_12 from './children/product_type_12.vue';
import Product_type_13 from './children/product_type_13.vue';
import Product_type_14 from './children/product_type_14.vue';
import Product_type_15 from './children/product_type_15.vue';
import Product_type_16 from './children/product_type_16.vue';

import {ref} from "vue";
import {useCommon} from "~/store/index.js";

export default {
    name: 'Product Types',
    components: {
        Product_type_1,
        Product_type_2,
        Product_type_3,
        Product_type_4,
        Product_type_5,
        Product_type_6,
        Product_type_7,
        Product_type_8,
        Product_type_9,
        Product_type_10,
        Product_type_11,
        Product_type_12,
        Product_type_13,
        Product_type_14,
        Product_type_15,
        Product_type_16,
    },
    props: {
        slug: String,
        productCardType: Number,
    },
    setup(){
        const layoutStore = useCommon();
        const borderStyle = ref("");
        const evenOdd = ref(layoutStore.footerData.styles.product_striped);

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
            evenOdd,
        }
    }
}
</script>