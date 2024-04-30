<template>
    <section class="mb-4 sm:mb-0 w-full grid grid-cols-1 gap-4 md:grid-cols-3">
        <NuxtLink v-for="(article, index) in (articleList.length > 2 ? articleList.slice(0, 2) : articleList)" :key="index" :to="'/l/' + slug + '/a/' + article.slug" class="relative aspect-video rounded-custom overflow-hidden hover:scale-[1.025] duration-300">
            <NuxtImg :src="article.image" :alt="article.title" class="size-full absolute top-0 left-0 rounded-custom" height="100%" width="100%" format="webp" />
            <div class="bg-gradient-to-t w-full h-full flex flex-col gap-2 p-4 justify-end from-black/80 to-black/25 z-[2] relative">
                <h3 class="text-lg lg:text-xl xl:text-2xl font-medium text-white line-clamp-1"> {{ article.title }} </h3>
                <p class="text-sm font-normal text-white line-clamp-1"> {{ article.description }} </p>
            </div>
        </NuxtLink>
        <!-- extra items -->
        <div v-if="articleList.length > 2" class="aspect-video rounded-custom overflow-hidden bg-center bg-cover bg-no-repeat bg-[url(https://paye1.com/storage/media/land/files/TSjaNrAaA470PmgitjoXLMwUJTHKQVvoVt62fvDP.png)] hover:scale-[1.025] duration-300">
            <div class="flex_center bg-gradient-to-t from-black/80 to-black/25 w-full h-full">
                <NuxtLink :to="'/l/' + slug + '/a/'" class="h-11 w-44 flex_center border border-white rounded-custom text-lg font-medium text-white bg-transparent hover:bg-black/20"> آرشیو اخبار و مقالات </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
import { NuxtLink, NuxtImg } from "#components";

export default {
    name: "Article Type 8",
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