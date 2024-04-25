<template>
    <AccessPanelTypeOne v-if="panelType == 1" />
    <AccessPanelTypeTwo v-if="panelType == 2" />
    <AccessPanelTypeThree v-if="panelType == 3" />
    <AccessPanelTypeFive v-if="panelType == 5" />
    <AccessPanelTypeSix v-if="panelType == 6" />
    <AccessPanelTypeSeven v-if="panelType == 7" />
    <AccessPanelTypeEight v-if="panelType == 8" />
</template>

<script>
import AccessPanelTypeOne from './children/panel_1.vue';
import AccessPanelTypeTwo from './children/panel_2.vue';
import AccessPanelTypeThree from './children/panel_3.vue';
import AccessPanelTypeFive from './children/panel_5.vue';
import AccessPanelTypeSix from './children/panel_6.vue';
import AccessPanelTypeSeven from './children/panel_7.vue';
import AccessPanelTypeEight from './children/panel_8.vue';
import { useCommon } from '~/store/index';

export default {
    name: 'Quick Access Panel',
    components: {
        AccessPanelTypeOne,
        AccessPanelTypeTwo,
        AccessPanelTypeThree,
        AccessPanelTypeFive,
        AccessPanelTypeSix,
        AccessPanelTypeSeven,
        AccessPanelTypeEight,
    },
    setup(){
        const layoutStore = useCommon();
        // const panelType = ref(layoutStore.footerData.styles.quick_access_panel_type);

        return {
            panelType: 1,
        }
    }
}
</script>