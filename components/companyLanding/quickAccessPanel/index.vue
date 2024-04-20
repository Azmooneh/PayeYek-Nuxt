<template>
    <AccessPanelTypeOne v-if="panelType == 1" />
    <AccessPanelTypeTwo v-if="panelType == 2" />
    <AccessPanelTypeThree v-if="panelType == 3" />
</template>

<script>
import AccessPanelTypeOne from './children/panel_1.vue';
import AccessPanelTypeTwo from './children/panel_2.vue';
import AccessPanelTypeThree from './children/panel_3.vue';
import { useStyles } from '~/store/index';

export default {
    name: 'Quick Access Panel',
    components: {
        AccessPanelTypeOne,
        AccessPanelTypeTwo,
        AccessPanelTypeThree,
    },
    setup(){
        const styleStore = useStyles();
        const panelType = ref(styleStore.styles.quick_access_panel_type);

        return {
            panelType,
        }
    }
}
</script>