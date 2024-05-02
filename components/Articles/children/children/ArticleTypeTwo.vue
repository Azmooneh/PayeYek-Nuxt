<template>
    <section class="mb-10 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container">
        <NuxtLink v-for="(article, index) in filteredArticles" :key="index" :href="'/l/' + slug + '/a/' + article.slug"
                  :class="'flex flex-col w-full flex-none overflow-hidden rounded-custom bg-white ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">
            <div class="relative w-full pt-[56%]">
                <NuxtImg :src="article.image" :alt="article.title"
                     class="absolute top-0 left-0 object-cover w-full h-full" height="100%" width="100%" format="webp" />
            </div>
            <!-- info -->
            <div class="px-4 pt-3 pb-4">
                <h3 class="mb-2 text-sm font-medium text-stone-700 line-clamp-1"> {{ article.title }} </h3>
                <p class="h-10 mb-3 text-xs font-normal leading-5 text-justify text-stone-700 line-clamp-2">
                    {{ article.description }}
                </p>
            </div>
        </NuxtLink>
    </section>
</template>

<script>
import {useCommon} from '~/store/index';

export default {
    name: 'ArticleList',
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