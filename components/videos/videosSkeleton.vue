<template>
    <section class="pt-4 relative mb-8 sm:mb-24 lg:mb-28 container">
        <section class="flex flex-col gap-4 mb-8 lg:mb-16 sm:flex-row-reverse sm:justify-between sm:items-center">
            <div class="relative w-full h-12 sm:w-72 rounded-full bg_skeleton"></div>

            <ul class="flex items-center flex-wrap gap-x-2 gap-y-4 list-none *:rounded-full *:w-20 *:h-8 *:bg_skeleton">
                <li v-for="item in 3"></li>
            </ul>
        </section>

        <ul class="grid grid-cols-1 md:grid-cols-2 list-none lg:w-full gap-4">
            <li v-for="(video, index) in 4" :key="index" class="relative w-full pt-[56%] rounded-xl bg_skeleton_smooth">
                <div class="absolute bottom-6 right-6 h-5 sm:h-7 rounded-full w-48 bg_skeleton"></div>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    name: 'Videos Skeleton Type 1 ',
}
</script>