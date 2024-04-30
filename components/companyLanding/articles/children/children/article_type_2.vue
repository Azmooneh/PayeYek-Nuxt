<template>
    <section class="mb-4 sm:mb-0 w-full flex gap-4 items-center overflow-auto p-4 scrollbar-none md:scrollbar-thin lg:grid lg:grid-cols-4 lg:p-0 lg:overflow-visible">
        <NuxtLink :to="'/l/' + slug + '/a/' + article.slug" v-for="(article, index) in articleList.slice(0,4)" :key="index" :class="'flex flex-col w-60 lg:w-full flex-none overflow-hidden rounded-custom bg-white ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">
            <div class="relative w-full pt-[56%]">
                <NuxtImg :src="article.image" :alt="article.title"
                     class="absolute top-0 left-0 w-full h-full object-cover" height="100%" width="100%" format="webp" />
            </div>
            <!-- info -->
            <div class="px-4 pt-3 pb-4">
                <h3 class="mb-2 text-sm font-medium text-stone-700 line-clamp-1"> {{ article.title }} </h3>
                <p class="mb-3 text-xs font-normal leading-5 h-10 text-justify text-stone-700  line-clamp-2">
                    {{ article.description }}
                </p>
                <div
                    class="text-lg font-medium flex_center h-10 w-32 rounded-custom mx-auto lg:ml-0 text-white bg-normal hover:bg-focus focus:shadow-focus focus:shadow-shadowNormal">
                    <span> بیشتر </span>
                </div>
            </div>
        </NuxtLink>
    </section>
</template>

<script>
import { NuxtLink, NuxtImg } from "#components";

export default {
    name: "Article Type 2",
    props: {
        slug: String,
        articleList: Array,
        borderStyle: String,
        evenOdd: [String, Number],
    }
}
</script>