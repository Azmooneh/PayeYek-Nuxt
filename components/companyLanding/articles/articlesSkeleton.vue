<template>
    <section class="mb-4 lg:mb-16">
        <div>
            <p class="mb-2 h-6 sm:h-7 mx-auto w-32 rounded-full bg_skeleton"></p>
            <p class="w-60 sm:w-96 h-px bg_skeleton mb-6 lg:mb-0 mx-auto"></p>
            <!-- show all -->
            <div class="flex justify-end">
                <div class="h-6 mr-auto mb-3 hidden lg:inline-block px-2 bg_skeleton w-20 rounded-full"></div>
            </div>
        </div>
        <ul class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3 list-none sm:mb-0 w-full">
            <li v-for="(article, index) in 3" :key="index" class="flex flex-col w-60 lg:w-full flex-none overflow-hidden rounded-custom bg_skeleton_smooth">
                <div class="aspect-video bg_skeleton rounded-custom"></div>
                <!-- info -->
                <div class="px-4 pt-3 pb-4">
                    <p class="mb-4 h-5 sm:h-6 lg:h-7 w-24 rounded-full bg_skeleton"></p>
                    <p class="mb-6 h-5 sm:h-6 md:h-12 bg_skeleton rounded-2xl"></p>
                    <p class="h-4 sm:h-5 bg_skeleton rounded-full"></p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Articles Skeleton',
    setup(){
        
    }
}
</script>