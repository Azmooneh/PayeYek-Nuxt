<template>
    <section class="mb-10 grid grid-cols-1 border border-dark-100 p-4 rounded-custom mx-4 lg:container">
        <NuxtLink v-for="(article, index) in filteredArticles" :to="'/l/' + slug + '/a/' + article.slug" :key="index"
                  :class="'flex flex-col py-4 bg-white border-t sm:flex-row first:border-t-0 first:pt-0 last:pb-0 border-dark-100 ' + (evenOdd == 1 ? ' evenOdd_cards ' : ' bg-white ')">
            <!-- image -->
            <div
                class="overflow-hidden md:flex-none w-full relative pt-[61%] sm:pt-0 sm:w-72 md:w-80 lg:w-[23rem] sm:flex-none mb-3 sm:mb-0 rounded-custom">
                <NuxtImg :src="article.image" :alt="article.title"
                         class="absolute top-0 left-0 object-cover w-full h-full sm:static" height="100%" width="100%"
                         format="webp"/>
            </div>
            <!-- docs -->
            <div class="flex flex-col px-6 md:pl-8 sm:justify-center sm:flex-1">
                <h3 class="mb-4 text-lg font-medium text-stone-700 line-clamp-1"> {{ article.title }} </h3>
                <p
                    class="mb-4 text-sm font-normal leading-7 text-justify lg:text-base line-clamp-5 sm:line-clamp-3 lg:line-clamp-2 lg:h-24 sm:h-20 lg:leading-8 text-dark-500">
                    {{ article.description }}
                </p>
                <div class="flex items-center justify-between">
                    <p class="text-sm font-normal text-dark-500 lg:text-base"> {{ renderDate(article.created_at)
                        }}
                    </p>
                    <div
                        class="flex items-center gap-4 px-4 text-sm font-medium text-normal">
                        <span> ادامه </span>
                        <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16L9.41 14.59L3.83 9L16 9V7L3.83 7L9.41 1.41L8 0L0 8L8 16Z"
                                  fill="current"/>
                        </svg>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </section>
</template>

<script>
import {useCommon} from '~/store/index';

export default {
    name: 'ArticleList Type 4',
    props: {
        filteredArticles: Array,
        borderStyle: String,
        evenOdd: [String, Number],
        slug: String,
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