<template>
    <!-- <section :class="'min-h-screen font-yekan ' + companyTheme + ' ' + companyRadius"> -->
    <section :class="'number-fa ' + computedClass">
        <Header />
        
        <Sidebar />

        <slot />

        <Footer />
    </section>
</template>

<script>
import { useStyles, useCommon } from '~/store/index';
import { ref, watch } from 'vue';
import Footer from '~/components/layout/footer/index.vue';
import Header from '~/components/layout/header/index.vue';

import Sidebar from '~/components/layout/sidebar/index.vue';

export default {
    name: 'layout',
    components: {
        Footer,
        Header,
        Sidebar,
    },
    setup() {
        const layoutStore = useCommon();
        // const styleStore = useStyles();
        const companyTheme = ref("");
        const companyRadius = ref("");
        const status = ref(false);

        const checkTheme = company => {
            switch (company) {
                case 1:
                    companyTheme.value = "theme_arian"
                    break;
                case 2:
                    companyTheme.value = "theme_saipa"
                    break;
                case 3:
                    companyTheme.value = "theme_soroush"
                    break;
                case 4:
                    companyTheme.value = "theme_pilsan"
                    break;
                case 5:
                    companyTheme.value = "theme_bahman"
                    break;
                case 6:
                    companyTheme.value = "theme_carizan"
                    break;
                case 7:
                    companyTheme.value = "theme_arya"
                    break;
                case 8:
                    companyTheme.value = "theme_ikco"
                    break;
                case 10:
                    companyTheme.value = "theme_mayan"
                    break;
                case 11:
                    companyTheme.value = "theme_azhitech"
                    break;
                case 12:
                    companyTheme.value = "theme_titan"
                    break;
                case 13:
                    companyTheme.value = "theme_rakhsh"
                    break;
                case 14:
                    companyTheme.value = "theme_rakhsh"
                    break;
                case 15:
                    companyTheme.value = "theme_caspian"
                    break;
                case 16:
                    companyTheme.value = "theme_amico"
                    break;
                case 17:
                    companyTheme.value = "theme_shayan"
                    break;
                case 18:
                    companyTheme.value = "theme_farda"
                    break;
                case 20:
                    companyTheme.value = "theme_mammut"
                    break;

                default:
                    companyTheme.value = "theme_arian"
                    break;
            }
        }

        const checkRadius = radius => {
            switch (radius) {
                case 0:
                    companyRadius.value = "rounded_none"
                    break;
                case 2:
                    companyRadius.value = "rounded_sm"
                    break;
                case 4:
                    companyRadius.value = "rounded_base"
                    break;
                case 6:
                    companyRadius.value = "rounded_md"
                    break;
                case 8:
                    companyRadius.value = "rounded_lg"
                    break;
                case 12:
                    companyRadius.value = "rounded_xl"
                    break;
                case 16:
                    companyRadius.value = "rounded_2xl"
                    break;
                default:
                    companyRadius.value = "rounded_base"
                    break;
            }
        }

        // const checkThemeAndRadius = () => {
        //     if (layoutStore.footerData.styles && layoutStore.footerData.styles.land_id) {
        //         checkTheme(layoutStore.footerData.styles.land_id);
        //     }
        //     if (layoutStore.footerData.styles && layoutStore.footerData.styles.radius) {
        //         checkRadius(layoutStore.footerData.styles.radius);
        //     }
        // }

        const checkThemeAndRadius = () => {
            if (layoutStore.footerData && layoutStore.footerData.styles) {
                if (layoutStore.footerData.styles.land_id) {
                    checkTheme(layoutStore.footerData.styles.land_id);
                }
                if (layoutStore.footerData.styles.radius) {
                    checkRadius(layoutStore.footerData.styles.radius);
                }
                status.value = true;
            }
            // console.log(layoutStore.footerData);
        }

        // watch(() => [layoutStore.footerData.styles.land_id, layoutStore.footerData.styles.radius], ([newLandId, newRadius]) => {
        //     checkTheme(newLandId);
        //     checkRadius(newRadius);
        // });

        watch(() => layoutStore.footerData, (newFooterData) => {
            if (newFooterData) {
                checkThemeAndRadius();
            }
        });
        
        const computedClass = ref('');

        watch([companyTheme, companyRadius], () => {
            computedClass.value = `min-h-screen font-yekan ${companyTheme.value} ${companyRadius.value}`;
            status.value = true;
        });

        checkThemeAndRadius();
        // console.log(companyTheme.value);
        // if(companyTheme.value && companyRadius.value){
        //     computedClass.value = `min-h-screen font-yekan ${companyTheme.value} ${companyRadius.value}`;
        // }
        // console.log(companyTheme.value, companyRadius.value);
        
        // console.log(status.value);
        return {
            companyTheme,
            companyRadius,
            computedClass,
            status,
        }
    }
}
</script>