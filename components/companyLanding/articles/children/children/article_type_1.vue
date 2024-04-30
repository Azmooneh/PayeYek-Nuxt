<template>
    <section class="mb-4 sm:mb-0 w-full grid grid-cols-1 gap-4">
        <NuxtLink :to="'/l/' + slug + '/a/' + article.slug" v-for="(article, index) in articleList.slice(0,4)" :key="index" :class="'flex flex-col sm:flex-row rounded-custom bg-white overflow-hidden ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">
            <!-- image -->
            <div
                class="overflow-hidden md:flex-none w-full relative pt-[61%] sm:pt-0 sm:w-72 md:w-80 lg:w-[23rem] sm:flex-none">
                <NuxtImg :src="article.image" :alt="article.title" class="absolute top-0 left-0 object-cover w-full h-full sm:static" height="100%" width="100%" format="webp" />
            </div>
            <!-- docs -->
            <div class="px-6 pb-6 pt-2.5 md:pl-10 text-stone-700 flex flex-col sm:justify-center sm:flex-1">
                <h3 class="mb-4 text-lg font-medium line-clamp-1"> {{ article.title }} </h3>
                <p class="text-sm text-justify line-clamp-5 sm:line-clamp-3 lg:line-clamp-2 lg:h-16 leading-7 sm:h-20 lg:leading-8 mb-4 font-normal">
                    {{ article.description }}
                </p>
                <div class="text-lg font-medium flex_center h-10 w-32 rounded-custom mr-auto text-white bg-normal hover:bg-focus focus:shadow-focus focus:shadow-shadowNormal">
                    <span> بیشتر </span>
                </div>
            </div>
        </NuxtLink>
    </section>
</template>

<script>
import { NuxtLink, NuxtImg } from "#components";

export default {
    name: "Article Type 1",
    props: {
        slug: String,
        articleList: Array,
        borderStyle: String,
        evenOdd: [String, Number],
    }
}
</script>