<template>
    <section class="mb-10 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container">
        <div v-for="(article, index) in 6" :key="index" class="flex flex-col w-full flex-none overflow-hidden rounded-custom bg_skeleton_smooth">
            <div class="relative w-full pt-[56%]">
                <div class="absolute top-0 left-0 bg_skeleton w-full h-full"></div>
            </div>
            <!-- info -->
            <div class="px-4 pt-3 pb-4">
                <p class="mb-2 h-5 rounded-full w-24 bg_skeleton"> {{ article.title }} </p>
                <p class="h-10 bg_skeleton rounded-2xl w-full">
                    {{ article.description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ArticlesSkeleton',
}
</script>