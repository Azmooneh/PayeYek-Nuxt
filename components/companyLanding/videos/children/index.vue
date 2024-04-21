<template>
    <VTypeSix :videoList="videoList" :showVideoByThumbnail="showVideoByThumbnail" />
</template>

<script>
import VTypeSix from './children/VTypeSix.vue';

export default {
    name: 'Video Single',
    components: {
        VTypeSix,
    },
    props: {
        videoList: Array,
        showVideoByThumbnail: Function,
    },
    setup(){
        const videoType = ref(6);

        return {
            videoType,
        }
    }
}
</script>