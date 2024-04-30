<template>
    <section class="mb-4 sm:mb-0 w-full grid grid-cols-1 gap-5">
        <NuxtLink :to="'/l/' + slug + '/a/' + article.slug" v-for="(article, index) in articleList.slice(0,4)" :key="index" :class="'flex flex-col sm:flex-row border border-stone-400 rounded-custom ' + (evenOdd == 1 ? 'evenOdd_cards' : 'bg-white')">
            <!-- image -->
            <div
                class="overflow-hidden md:flex-none w-full relative pt-[61%] sm:pt-0 sm:w-72 md:w-80 lg:w-[23rem] sm:flex-none mb-3 sm:mb-0 rounded-t-custom sm:rounded-r-custom sm:rounded-tl-none">
                <NuxtImg :src="article.image" :alt="article.title" class="absolute top-0 left-0 object-cover w-full h-full sm:static" height="100%" width="100%" format="webp" />
            </div>
            <!-- docs -->
            <article class="px-5 pb-4 lg:px-8 flex flex-col sm:justify-center lg:justify-start sm:flex-1 sm:py-2 lg:py-4 text-stone-700">
                <div class="flex mb-1 lg:mb-4 flex-col sm:flex-row gap-2 sm:justify-between">
                    <h3 class="text-base lg:text-lg font-medium line-clamp-1"> {{ article.title }} </h3>
                    <h4 class="text-normal text-sm font-normal sm:flex-none"> {{ renderDate(article.created_at) }} </h4>
                </div>
                <p
                    class="text-sm text-justify lg:text-base line-clamp-3 lg:line-clamp-2 lg:h-24 leading-7 sm:h-20 lg:leading-8 mb-4 font-normal">
                    {{ article.description }}
                </p>
                <div class="flex items-center justify-between sm:justify-end">
                    <div
                        class="text-sm font-medium flex_center gap-1">
                        <span> ادامه </span>
                        <svg class="fill-current" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00781 9.91693L4.39115 6.30026L8.00781 2.68359" stroke="#58595B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </article>
        </NuxtLink>
    </section>
</template>

<script>
import { NuxtLink, NuxtImg } from "#components";

export default {
    name: "Article Type 6",
    props: {
        slug: String,
        articleList: Array,
        borderStyle: String,
        evenOdd: [String, Number],
    },
    setup(){
        const renderDate = (string) => {
            return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(new Date(string))
        }

        return {
            renderDate,
        }
    }
}
</script>