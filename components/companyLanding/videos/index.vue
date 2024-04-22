<template>
    <section class="mb-4 sm:mb-8 lg:mb-16 relative z-[3] container" id="video-player-container" v-if="videoList.length">
        <!-- title -->
        <Titles :landSlug="slug" :headerType="headerType" title="ویدیو ها" section="videos"  />
        <!-- videos -->
        <Videos :videoList="videoList" :showVideoByThumbnail="showVideoByThumbnail" />
    </section>
    <!-- video modal -->
    <section class="fixed flex_center inset-0 z-[4] bg-black/60" v-if="videoModal !== ''" @click="hideVideoByThumbnail">
        <div class="w-full max-w-[640px] lg:max-w-[796px] xl:max-w-[900px] 2xl:max-w-[1024px] iframe_styles flex_center"
            id="ifame-box" v-html="videoModal">
        </div>
    </section>
</template>

<script>
import Titles from '~/components/companyLanding/common/titles/index.vue';
import { useCompanyData } from '~/store/index';
import PlayIcon from "~/components/kit/Icons/PlayIcon.vue";
import Videos from './children/index.vue';

export default {
    name: 'Video List',
    components: {
        Titles,
        PlayIcon,
        Videos,
    },
    setup() {
        const companyStore = useCompanyData();
        // const styleStore = useStyles();
        const videoList = ref(companyStore.videos);
        // console.log(videoList.value);
        const videoModal = ref("");
        const headerType = ref(1);

        const showVideoByThumbnail = (link) => {
            videoModal.value = link;
        }

        const hideVideoByThumbnail = () => {
            videoModal.value = "";
        }

        return {
            slug: companyStore.companyData.slug,
            videoList,
            showVideoByThumbnail,
            hideVideoByThumbnail,
            videoModal,
            headerType,
        }
    }
}
</script>