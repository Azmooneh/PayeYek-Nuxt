<template>
    <section class="mb-4 lg:mb-16 relative z-[1]">
        <div>
            <p class="mb-2 h-6 sm:h-7 mx-auto w-32 rounded-full bg_skeleton"></p>
            <p class="w-60 sm:w-96 h-px bg_skeleton mb-6 lg:mb-0 mx-auto"></p>
            <!-- show all -->
            <div class="flex justify-end">
                <div class="h-6 mr-auto mb-3 hidden lg:inline-block px-2 bg_skeleton w-20 rounded-full"></div>
            </div>
        </div>
        <div
            class="flex flex-col gap-4 items-center sm:flex-row sm:overflow-auto lg:justify-center lg:overflow-hidden">
            <div v-for="(product, index) in 4" :key="index" class="pt-2 px-8 w-72 sm:w-96 lg:w-full lg:max-w-[17rem] pb-5 lg:pt-3 items-center flex flex-col rounded-custom mx-auto lg:mx-0 bg_skeleton_smooth">
                <div class="mb-2 h-52 w-full rounded-2xl bg_skeleton"></div>
                <p class="mb-5 h-14 lg:h-7 w-20 rounded-2xl lg:rounded-full bg_skeleton"></p>
                <p class="mb-6 h-5 w-12 rounded-full bg_skeleton"></p>
                <div class="grid grid-cols-2 gap-3 w-56 lg:w-full">
                    <div class="w-full bg_skeleton h-11 rounded-custom col-span-2"></div>
                    <div class="w-full bg_skeleton h-11 rounded-custom"></div>
                    <div class="w-full bg_skeleton h-11 rounded-custom"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Product Skeleton',
}
</script>