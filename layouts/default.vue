<template>
    <section :class="'bg-[#f2f2f2] min-h-screen ' + companyTheme + ' ' + companyRadius">
        <slot />

    </section>
</template>

<script>
import { useStyles } from '~/store/index';
import { ref, watch } from 'vue'

export default {
    name: 'layout',
    setup() {
        const styleStore = useStyles();
        const companyTheme = ref("");
        const companyRadius = ref("");

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

        watch(() => styleStore.styles.land_id, (newVal) => {
            checkTheme(newVal);
        });

        if (styleStore.styles.land_id) {
            checkTheme(styleStore.styles.land_id);
        }

        watch(() => styleStore.styles.radius, (newVal) => {
            checkRadius(newVal);
        });

        if (styleStore.styles.radius) {
            checkRadius(styleStore.styles.radius);
        }

        return {
            companyTheme,
            companyRadius,
        }
    }
}
</script>