<template>
    <section class="container">
        <div class="mb-10 grid grid-cols-1 gap-4">
            <NuxtLink v-for="(article, index) in filteredArticles" :key="index" :to="'/l/' + slug + '/a/' + article.slug"
                      :class="'flex flex-col sm:flex-row rounded-custom bg-white overflow-hidden ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">
                <!-- image -->
                <div
                    class="overflow-hidden md:flex-none w-full relative pt-[61%] sm:pt-0 sm:w-72 md:w-80 lg:w-[23rem] sm:flex-none">
                    <NuxtImg :src="article.image" :alt="article.title"
                         class="absolute top-0 left-0 object-cover w-full h-full sm:static" height="100%" width="100%" format="webp" />
                </div>
                <!-- docs -->
                <div class="px-6 pb-6 pt-2.5 md:pl-10 flex flex-col sm:justify-center sm:flex-1">
                    <h3 class="mb-4 text-lg font-medium text-stone-700 line-clamp-1"> {{ article.title }} </h3>
                    <p
                        class="mb-4 text-sm font-normal leading-7 text-justify line-clamp-5 sm:line-clamp-3 lg:line-clamp-2 lg:h-16 sm:h-20 lg:leading-8 text-dark-500 ">
                        {{ article.description }}
                    </p>
                </div>
            </NuxtLink>
        </div>

        <Pagination :landSlug="slug" :productPagination="articlesPagination" @page-change="handlePageChange" />
    </section>
</template>

<script>
import { useCommon } from '~/store/index';
import Pagination from "~/components/common/pagination/index.vue";

export default {
    name: 'ArticleList Type 1',
    components: {Pagination},
    props: {
        filteredArticles: Array,
        borderStyle: String,
        evenOdd: [String, Number],
        slug: String,
        articlesPagination: Object,
        handlePageChange: Function,
    },
    setup(){
        const layoutStore = useCommon();
    }
}
</script>