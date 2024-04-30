<template>
    <section class="mb-4 sm:mb-0 w-full grid grid-cols-1 gap-4 md:grid-cols-3">
        <NuxtLink :to="'/l/' + slug + '/a/' + article.slug" v-for="(article, index) in articleList.slice(0,3)" :key="index" :class="'flex flex-col w-60 lg:w-full flex-none overflow-hidden rounded-custom bg-white ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards' : ' bg-white')">
            <div class="relative w-full pt-[56%]">
                <NuxtImg :src="article.image" :alt="article.title"
                     class="absolute top-0 left-0 w-full h-full object-cover" height="100%" width="100%" format="webp" />
            </div>
            <!-- info -->
            <div class="px-4 pt-3 pb-4 text-stone-700">
                <h3 class="mb-4 text-sm sm:text-base lg:text-lg font-medium line-clamp-1"> {{ article.title }} </h3>
                <p class="mb-6 text-xs sm:text-sm font-normal leading-5 sm:leading-6 md:h-12 text-justify md:line-clamp-2">
                    {{ article.description }}
                </p>
                <p class="text-xs sm:text-sm font-normal">
                    {{ renderDate(article.created_at) }}
                </p>
            </div>
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