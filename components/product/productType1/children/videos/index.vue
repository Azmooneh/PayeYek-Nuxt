<template>
    <section class="mb-16 lg:mb-36">
        <h3 class="relative text-xl mb-7 font-medium text-stone-700 before:size-3 before:bg-normal before:rounded-custom before:absolute before:content-[''] before:top-1/2 before:-translate-y-1/2 before:right-0 pr-6 lg:pr-8"> ویدیو </h3>
        <ul class="flex list-none lg:w-full flex-col gap-4">
            <li v-for="(video, index) in VideosArray" :key="index" class="w-full relative pt-[56%] cursor-pointer rounded-custom overflow-hidden" @click="showVideoByThumbnail(video.link)">
                <NuxtImg :src="video.image" :alt="video.alt" class="absolute top-0 left-0 w-full h-full object-cover z-[1]" width="753" height="404" format="webp" />
                <PlayIcon classNames="size-14 sm:size-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]" />
                <div class="absolute text-white bottom-0 left-0 w-full z-[2] flex flex-col justify-end px-4 pb-5 bg-gradient-to-t from-black to-transparent h-1/2">
                    <p class="w-full text-sm font-medium sm:text-lg line-clamp-1 select-none"> {{ video.alt }} </p>
                </div>
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
import {useProduct} from "~/store/index.js";
import PlayIcon from "~/components/kit/Icons/PlayIcon.vue";

export default {
    name: "Videos Type 1",
    components: {
        PlayIcon,
    },
    setup(){
        const productStore = useProduct();
        const videos = ref(productStore.Videos);
        const VideosArray = ref([]);
        VideosArray.value = videos.value;
        const videoModal = ref("");

        const showVideoByThumbnail = (link) => {
            videoModal.value = link;
        }

        const hideVideoByThumbnail = () => {
            videoModal.value = "";
        }
        console.log(VideosArray.value);

        return {
            VideosArray,
            videoModal,
            showVideoByThumbnail,
            hideVideoByThumbnail,
        }
    }
}
</script>