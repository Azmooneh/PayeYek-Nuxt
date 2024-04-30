<template>
    <ul :class="'list-none lg:w-full mb-8 lg:mb-16 ' + (videoList.length == 1 ? 'justify-center flex' : (videoList.length == 2 ? 'flex gap-8 sm:flex-row sm:items-center flex-col lg:grid lg:grid-cols-2 overflow-auto lg:overflow-visible pb-4' : 'flex gap-8 sm:flex-row sm:items-center flex-col lg:grid lg:grid-cols-3 lg:grid-row-2 overflow-auto lg:overflow-visible pb-4 lg:gap-x-4 lg:gap-y-2'))">
        <li v-for="(video, index) in videoList.slice(0, 2)" @click="showVideoByThumbnail(video.link)" :key="index" :class="'flex-none ' + (videoList.length == 1 ? 'w-full sm:w-[448px] md:w-[480px] lg:w-[558px] xl:w-[720px]' : (videoList.length == 2 ? 'w-full sm:w-[448px] md:w-[480px] lg:w-full' : 'w-full sm:w-[448px] md:w-[480px] lg:w-full lg:first:col-span-2 lg:first:row-span-2'))">
            <div class="aspect-video relative rounded-custom overflow-hidden w-full hover:scale-[1.025] duration-300">
                <NuxtImg :src="video.image" :alt="video.alt" class="absolute top-0 left-0 w-full h-full object-cover z-[1] rounded-t-custom" width="100%" height="100%" format="webp" />
                <PlayIcon
                    classNames="size-14 sm:w-20 sm:h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]" />
                <div class="bg-gradient-to-t w-full h-full flex flex-col gap-2 p-4 justify-end from-black/80 to-black/25 relative z-[1]">
                    <p :class="'text-lg font-medium text-[#FFD598] line-clamp-1 select-none ' + (index == 0 && videoList.length > 2 ? 'lg:text-2xl' : '')"> {{ video.alt }} </p>
                </div>
            </div>
        </li>
        <li v-if="videoList.length > 2" class="flex-none w-full sm:w-[448px] md:w-[480px] lg:w-full">
            <div class="aspect-video relative rounded-custom overflow-hidden hover:scale-[1.025] duration-300">
                <NuxtImg src="https://paye1.com/storage/media/land/files/TxhDqKfxz3x5HukVh7GWz5Mv5lTpmt3lfo4xZecW.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover z-[1] rounded-t-custom" width="100%" height="100%" format="webp" />
                <div class="size-full flex_center bg-gradient-to-t from-black/80 to-black/60 relative z-[2]">
                    <NuxtLink :to="`/l/${slug}/v`" class="h-11 w-44 flex_center border-x-2 border-x-[#DBA14D] rounded-custom text-lg font-medium text-[#FFD598] bg-transparent hover:border-x-white hover:text-white"> آرشیو ویدیو ها </NuxtLink>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import PlayIcon from "~/components/kit/Icons/PlayIcon.vue";
import { useCommon } from '~/store/index';
import { NuxtImg } from "#components";

export default {
    name: 'Video Type Three',
    components: {
        PlayIcon,
    },
    props: {
        videoList: Array,
        showVideoByThumbnail: Function,
    },
    setup(){
        const layoutStore = useCommon();
        const slug = ref(layoutStore.footerData.slug);

        return {
            slug,
        }
    }
}
</script>