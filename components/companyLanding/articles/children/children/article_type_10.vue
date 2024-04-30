<template>
    <section class="mb-4 sm:mb-0 w-full grid grid-cols-1 gap-4">
        <NuxtLink :to="'/l/' + slug + '/a/' + article.slug" v-for="(article, index) in articleList.slice(0,4)" :key="index" :class="'flex flex-col sm:flex-row ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards' : ' bg-white')">
            <!-- image -->
            <div
                class="overflow-hidden md:flex-none w-full relative pt-[61%] sm:pt-0 sm:w-72 md:w-80 lg:w-[23rem] sm:flex-none mb-3 sm:mb-0 rounded-custom">
                <NuxtImg :src="article.image" :alt="article.title" class="absolute top-0 left-0 object-cover w-full h-full sm:static" height="100%" width="100%" format="webp" />
            </div>
            <!-- docs -->
            <article class="flex flex-col sm:justify-center text-stone-700 sm:flex-1 px-4 py-2">
                <h3 class="mb-1 text-base font-medium line-clamp-1"> {{ article.title }} </h3>
                <p class="text-normal text-sm font-normal mb-2"> {{ renderDate(article.created_at) }} </p>
                <p
                    class="text-sm text-justify lg:text-base line-clamp-3 lg:line-clamp-2 lg:h-24 leading-7 sm:h-20 lg:leading-8 mb-2 font-normal">
                    {{ article.description }}
                </p>
                <div class="flex items-center justify-end">
                    <div
                        class="text-sm font-medium flex_center gap-4">
                        <span> ادامه </span>
                        <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16L9.41 14.59L3.83 9L16 9V7L3.83 7L9.41 1.41L8 0L0 8L8 16Z" fill="current"/>
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
    name: "Article Type 9",
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