<template>
    <ul
        :class="'flex list-none lg:w-full ' + (videoList.length == 1 ? 'justify-center' : (videoList.length == 2 ? 'gap-4 sm:flex-row sm:items-center flex-col lg:grid lg:grid-cols-2 overflow-auto lg:overflow-visible' : 'gap-4 sm:flex-row sm:items-center flex-col lg:grid lg:grid-cols-3 overflow-auto lg:overflow-visible'))">
        <li v-for="(video, index) in videoList.slice(0, 3)" @click="showVideoByThumbnail(video.link)" :key="index"
            :class="'flex-none flex flex-col ' + (videoList.length == 1 ? 'w-full sm:w-[448px] md:w-[480px] lg:w-[558px] xl:w-[720px]' : 'w-full sm:w-[448px] md:w-[480px] lg:w-full')">
            <div class="relative w-full pt-[62%] mb-4 cursor-pointer rounded-custom overflow-hidden">
                <NuxtImg :src="video.image" :alt="video.alt" class="absolute top-0 left-0 object-cover z-[1] h-full w-full"
                    width="100%" height="100%" format="webp" />
                <PlayIcon
                    classNames="size-14 sm:w-20 sm:h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]" />
                <div
                    class="absolute text-white bottom-0 left-0 w-full z-[2] flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent h-full">
                </div>
            </div>
            <p class="w-full px-4 text-sm font-medium select-none sm:text-lg line-clamp-1"> {{ video.alt }} </p>
        </li>
    </ul>
</template>

<script>
import PlayIcon from "~/components/kit/Icons/PlayIcon.vue";
import { NuxtImg } from "#components";

export default {
    name: 'Video Type Six',
    components: {
        PlayIcon,
    },
    props: {
        videoList: Array,
        showVideoByThumbnail: Function,
    },
}
</script>