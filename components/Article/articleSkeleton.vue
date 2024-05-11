<template>
    <main class="relative container mb-8 sm:mb-24 lg:mb-28">
        <div class="w-full relative pt-[56%] mb-4 sm:mb-6 lg:mb-8 rounded-custom overflow-hidden">
            <div class="absolute top-0 left-0 size-full bg_skeleton_smooth"></div>
            <div
                class="absolute z-[1] bottom-0 left-0 size-full sm:h-1/3 p-4 sm:px-8 lg:px-12 lg:pb-8 sm:pb-6 gap-2 flex items-end justify-between">
                <div class="flex justify-end flex-col sm:gap-2 lg:gap-4">
                    <h1 class="h-6 sm:h-8 lg:h-10 rounded-full w-48 sm:w-80 lg:w-96 bg_skeleton"></h1>
                    <p class="h-4 sm:h-5 w-14 rounded-full bg_skeleton"></p>
                </div>
                <i class="size-7 sm:size-8 bg_skeleton rounded-full"></i>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Article Skeleton Default',
}
</script>