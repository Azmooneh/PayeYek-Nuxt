<template>
    <section class="mb-4 sm:mb-8 lg:mb-16 relative z-[3] container" id="video-player-container">
        <div class="">
            <h3 class="mb-2 text-base sm:text-lg font-medium text-center text-stone-700"> ویدیو ها </h3>
            <hr class="w-60 sm:w-96 border-normal mb-6 lg:mb-0 mx-auto" />
            <!-- show all -->
            <div class="flex justify-end">
                <NuxtLink :to="`/l/${slug}/videos`"
                    class="text-base font-normal text-normal mr-auto mb-3 hidden lg:inline-block px-2 cursor-pointer">
                    نمایش همه </NuxtLink>
            </div>
        </div>

        <ul
            :class="'flex list-none lg:w-full ' + videoList.length == 1 ? 'justify-center' : (videoList.length == 2 ? 'gap-4 sm:flex-row sm:items-center flex-col lg:grid lg:grid-cols-2 overflow-auto lg:overflow-visible' : 'gap-4 sm:flex-row sm:items-center flex-col lg:grid lg:grid-cols-3 overflow-auto lg:overflow-visible')">
            <li v-for="(video, index) in videoList.slice(0, 3)" @click="showVideoByThumbnail(video.link)" :key="index" :class="'flex-none flex flex-col ' + videoList.length == 1 ? 'w-full sm:w-[448px] md:w-[480px] lg:w-[558px] xl:w-[720px]' : 'w-full sm:w-[448px] md:w-[480px] lg:w-full'">
                <div class="relative w-full pt-[62%] mb-4 cursor-pointer rounded-custom overflow-hidden videoThumbnails">
                    <img :src="video.image" :alt="video.alt" class="absolute top-0 left-0 w-full h-full object-cover z-[1]" />
                    <PlayIcon classNames="size-14 sm:w-20 sm:h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]" />
                    <div
                        class="absolute text-white bottom-0 left-0 w-full z-[2] flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent h-full">
                    </div>
                </div>
                <p class="w-full px-4 text-sm font-medium sm:text-lg line-clamp-1 select-none"> {{ video.alt }} </p>
            </li>
        </ul>

    </section>
    <!-- video modal -->
    <section class="fixed flex_center inset-0 z-[4] bg-black/60" v-if="videoModal !== ''" @click="hideVideoByThumbnail">
        <div class="w-full max-w-[640px] lg:max-w-[796px] xl:max-w-[900px] 2xl:max-w-[1024px] iframe_styles flex_center"
            id="ifame-box" v-html="videoModal">
        </div>
    </section>
</template>

<script>
import { NuxtLink } from "#components";
import { useCompanyData, useStyles } from '~/store/index';
import PlayIcon from "~/components/kit/Icons/PlayIcon.vue";

export default {
    name: 'Videos',
    components: {
        PlayIcon,
    },
    setup() {
        const companyStore = useCompanyData();
        const styleStore = useStyles();
        const videoList = ref(companyStore.videos);
        const videoModal = ref("");

        console.log(videoList.value);

        const showVideoByThumbnail = (link) => {
            videoModal.value = link
        }

        const hideVideoByThumbnail = () => {
            videoModal.value = ""
        }

        return {
            videoList,
            showVideoByThumbnail,
            hideVideoByThumbnail,
            videoModal,
        }
    }
}
</script>