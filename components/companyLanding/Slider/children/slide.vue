<template>
    <NuxtLink :to="slide.link" class="relative w-full pt-[56%] block rounded-b-custom overflow-hidden">
        <!-- <img class="absolute top-0 left-0 object-cover w-full h-full" width="100%" height="100%" :src="slide.image"
            :alt="slide.alt" v-if="loaded"> -->
        <NuxtImg class="absolute top-0 left-0 object-cover w-full h-full" width="1280" height="720" :src="slide.image"
            :alt="slide.alt" format="webp" />
            <ul v-if="slide.infos"
                class="list-disc list-inside absolute top-2.5 sm:top-4 sm:right-2 lg:top-6 lg:right-4 shadow-md right-1 py-1 px-2 sm:px-4 sm:py-2 space-y-1.5 z-[1] bg-white/80 text-xs font-medium text-stone-700 rounded-custom">
                <template v-for="(li, innerIndex) in slide.infos" :key="innerIndex">
                    <li class="marker:text-stone-700 sm:text-sm md:text-base" v-if="li"
                        :class="{ 'hidden': innerIndex > 0, 'sm:list-item': innerIndex >= 1 && innerIndex < 3, 'md:list-item': innerIndex >= 3 }">
                        <p class="inline-flex truncate"> {{ li }} </p>
                    </li>
                </template>
            </ul>
            <!-- gradient background -->
            <div
                class="absolute bottom-0 left-0 w-full h-12 custom_gradient sm:h-24 lg:h-36 xl:h-52 bg-gradient-to-t from-black/80 sm:from-black/90 to-transparent">
            </div>
    </NuxtLink>
</template>

<script>
import { NuxtLink, NuxtImg } from "#components";
// import { ref } from 'vue';

export default {
    name: 'Slide',
    props: {
        slide: Object,
    },
    // setup(){
    //     const loaded = ref(false);


    //     return {
    //         loaded,
    //     }
    // }
    data() {
        return {
            loaded: false // Track whether the image is loaded or not
        };
    },
    mounted() {
        const img = new Image();
        img.onload = () => {
            this.loaded = true;
        };
        img.src = this.slide.image;
    },
}
</script>