<template>
    <section class="mb-4 sm:mb-8 lg:mb-16 relative z-[3] container" id="video-player-container">
        <div>
            <p class="mb-2 h-6 sm:h-7 mx-auto w-32 rounded-full bg_skeleton"></p>
            <p class="w-60 sm:w-96 h-px bg_skeleton mb-6 lg:mb-0 mx-auto"></p>
            <div class="flex justify-end">
                <div class="h-6 mr-auto mb-3 hidden lg:inline-block px-2 bg_skeleton w-20 rounded-full"></div>
            </div>
        </div>

        <ul class="flex list-none lg:w-full gap-4 sm:flex-row sm:items-center flex-col lg:grid lg:grid-cols-3 overflow-auto lg:overflow-visible">
            <li v-for="(video, index) in 3" :key="index" class="flex-none flex flex-col w-full sm:w-[448px] md:w-[480px] lg:w-full">
                <div class="aspect-video mb-4 bg_skeleton rounded-custom"></div>
                <p class="w-32 px-4 h-5 sm:h-7 rounded-full bg_skeleton"></p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Videos Skeleton',
}
</script>