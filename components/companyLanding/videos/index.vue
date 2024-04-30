<template>
    <section class="mb-4 sm:mb-8 lg:mb-16 relative z-[3] container" id="video-player-container" v-if="videoList.length">
        <!-- title -->
        <Titles :landSlug="slug" :headerType="headerType" title="ویدیو ها" section="v"  />
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
import { useCompanyData, useCommon } from '~/store/index';
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
        const videoList = ref(companyStore.videos);
        const layoutStore = useCommon();
        const videoModal = ref("");
        const headerType = ref(layoutStore.footerData.styles.section_header_type);
        const slug = ref(layoutStore.footerData.slug);

        const showVideoByThumbnail = (link) => {
            videoModal.value = link;
        }

        const hideVideoByThumbnail = () => {
            videoModal.value = "";
        }

        return {
            slug,
            videoList,
            showVideoByThumbnail,
            hideVideoByThumbnail,
            videoModal,
            headerType,
        }
    }
}
</script>