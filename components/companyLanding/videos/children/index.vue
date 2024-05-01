<template>
    <VTypeOne v-if="videoType == 1" :videoList="videoList" :showVideoByThumbnail="showVideoByThumbnail" />
    <VTypeTwo v-if="videoType == 2" :videoList="videoList" :showVideoByThumbnail="showVideoByThumbnail" />
    <VTypeThree v-if="videoType == 3" :videoList="videoList" :showVideoByThumbnail="showVideoByThumbnail" />
    <VTypeFour v-if="videoType == 4" :videoList="videoList" :showVideoByThumbnail="showVideoByThumbnail" />
    <VTypeFive v-if="videoType == 5" :videoList="videoList" :showVideoByThumbnail="showVideoByThumbnail" />
    <VTypeSix v-if="videoType == 6" :videoList="videoList" :showVideoByThumbnail="showVideoByThumbnail" />
    <VTypeSeven v-if="videoType == 7" :videoList="videoList" :showVideoByThumbnail="showVideoByThumbnail" />
</template>

<script>
import VTypeOne from './children/VTypeOne.vue';
import VTypeTwo from './children/VTypeTwo.vue';
import VTypeThree from './children/VTypeThree.vue';
import VTypeFour from './children/VTypeFour.vue';
import VTypeFive from './children/VTypeFive.vue';
import VTypeSix from './children/VTypeSix.vue';
import VTypeSeven from './children/VTypeSeven.vue';
import { useCommon } from '~/store/index';

export default {
    name: 'Video Single',
    components: {
        VTypeOne,
        VTypeTwo,
        VTypeThree,
        VTypeFour,
        VTypeFive,
        VTypeSix,
        VTypeSeven,
    },
    props: {
        videoList: Array,
        showVideoByThumbnail: Function,
    },
    setup(){
        const layoutStore = useCommon();
        const videoType = ref(layoutStore.footerData.styles.video_card_type);

        return {
            videoType,
        }
    }
}
</script>