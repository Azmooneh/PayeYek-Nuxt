<template>
    <section class="container">
        <div class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 lg:grid-cols-3 lg:gap-y-12">
            <NuxtLink v-for="(article, index) in filteredArticles" :key="index" :to="'/l/' + slug + '/a/' + article.slug"
                         :class="'flex flex-col w-full flex-none overflow-hidden rounded-custom bg-white ' + borderStyle">
                <div class="relative w-full pt-[56%]">
                    <NuxtImg :src="article.image" :alt="article.title"
                         class="absolute top-0 left-0 object-cover w-full h-full" height="100%" width="100%"
                             format="webp" />
                </div>
                <!-- info -->
                <div class="px-4 pt-3 pb-4">
                    <div class="flex flex-col mb-2 gap-1 sm:flex-row sm:justify-between sm:gap-4">
                        <h3 class="text-base font-medium text-stone-700 line-clamp-1"> {{ article.title }} </h3>
                        <h4 class="text-sm font-normal text-normal flex-none"> {{ renderDate(article.created_at) }} </h4>
                    </div>
                    <p class="h-12 mb-3 text-sm font-normal leading-6 text-justify text-stone-700 line-clamp-2 lg:line-clamp-3 lg:h-[84px] lg:leading-7">
                        {{ article.description }}
                    </p>

                    <div class="flex items-center gap-2 text-sm font-normal text-stone-700 float-right hover:text-stone-800">
                        <p> ادامه </p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.332 12.6673L5.66536 8.00065L10.332 3.33398" stroke="#58595B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <Pagination :landSlug="slug" :productPagination="articlesPagination" @page-change="handlePageChange" />
    </section>
</template>

<script>
import {useCommon} from '~/store/index';
import Pagination from "~/components/common/pagination/index.vue";

export default {
    name: 'ArticleList Type 6',
    components: {Pagination},
    props: {
        filteredArticles: Array,
        borderStyle: String,
        evenOdd: [String, Number],
        slug: String,
        articlesPagination: Object,
        handlePageChange: Function,
    },
    setup() {
        const layoutStore = useCommon();

        const renderDate = (string) => {
            return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(new Date(string))
        }

        return {
            renderDate,
        }
    }
}
</script>