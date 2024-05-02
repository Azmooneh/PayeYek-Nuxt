<template>
    <section class="mb-10 grid grid-cols-1 border border-dark-100 p-4 rounded-custom mx-4 lg:container">
<!--        <NuxtLink  :key="index" :to="'/l/' + slug + '/a/' + article.slug"-->
<!--                  :class="'flex flex-col w-full flex-none overflow-hidden rounded-custom bg-white ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">-->
<!--            <div class="relative w-full pt-[56%]">-->
<!--                <NuxtImg :src="article.image" :alt="article.title"-->
<!--                     class="absolute top-0 left-0 object-cover w-full h-full" height="100%" width="100%" format="webp" />-->
<!--            </div>-->
<!--            &lt;!&ndash; info &ndash;&gt;-->
<!--            <div class="px-4 pt-3 pb-4">-->
<!--                <h3 class="mb-2 text-sm font-medium text-stone-700 line-clamp-1"> {{ article.title }} </h3>-->
<!--                <p class="h-10 mb-3 text-xs font-normal leading-5 text-justify text-stone-700 line-clamp-2">-->
<!--                    {{ article.description }}-->
<!--                </p>-->
<!--            </div>-->
<!--        </NuxtLink>-->
        <NuxtLink v-for="(article, index) in filteredArticles" :key="index" :to="'/l/' + slug + '/a/' + article.slug"
                     :class="'flex flex-col py-4 bg-white border-t sm:flex-row first:border-t-0 first:pt-0 last:pb-0 border-dark-100 ' + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">
            <!-- image -->
            <div
                class="overflow-hidden md:flex-none w-full relative pt-[61%] sm:pt-0 sm:w-72 md:w-80 lg:w-[23rem] sm:flex-none mb-3 sm:mb-0 rounded-custom">
                <NuxtImg :src="article.image" :alt="article.title"
                     class="absolute top-0 left-0 object-cover w-full h-full sm:static" height="100%" width="100%" format="webp" />
            </div>
            <!-- docs -->
            <div class="flex flex-col px-6 md:pl-8 sm:justify-center sm:flex-1">
                <h3 class="mb-4 text-lg font-medium text-stone-700 line-clamp-1"> {{ article.title }} </h3>
                <p
                    class="mb-4 text-sm font-normal leading-7 text-justify lg:text-base line-clamp-5 sm:line-clamp-3 lg:line-clamp-2 lg:h-24 sm:h-20 lg:leading-8 text-dark-500">
                    {{ article.description }}
                </p>
            </div>
        </NuxtLink>
    </section>
</template>

<script>
import {useCommon} from '~/store/index';

export default {
    name: 'ArticleList Type 3',
    props: {
        filteredArticles: Array,
        borderStyle: String,
        evenOdd: [String, Number],
        slug: String,
    },
    setup() {
        const layoutStore = useCommon();
    }
}
</script>