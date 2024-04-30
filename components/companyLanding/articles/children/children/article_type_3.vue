<template>
    <section :class="'mb-4 sm:mb-0 w-full grid grid-cols-1 p-4 rounded-custom ' + border">
        <NuxtLink :to="'/l/' + slug + '/a/' + article.slug" v-for="(article, index) in articleList.slice(0,4)" :key="index" class="flex flex-col sm:flex-row bg-white border-t first:border-t-0 py-4 first:pt-0 last:pb-0 border-dark-100">
            <!-- image -->
            <div
                class="overflow-hidden md:flex-none w-full relative pt-[61%] sm:pt-0 sm:w-72 md:w-80 lg:w-[23rem] sm:flex-none mb-3 sm:mb-0 rounded-custom">
                <NuxtImg :src="article.image" :alt="article.title" class="absolute top-0 left-0 object-cover w-full h-full sm:static" height="100%" width="100%" format="webp" />
            </div>
            <!-- docs -->
            <article class="px-6 md:pl-8 flex flex-col sm:justify-center sm:flex-1 text-stone-700">
                <h3 class="mb-4 sm:mb-2 text-lg font-medium line-clamp-1"> {{ article.title }} </h3>
                <p
                    class="text-sm text-justify lg:text-base line-clamp-5 sm:line-clamp-3 lg:line-clamp-2 lg:h-24 leading-7 sm:h-20 lg:leading-8 mb-4 sm:mb-2 font-normal">
                    {{ article.description }}
                </p>
                <div class="flex items-center justify-between">
                    <p class="text-sm font-normal lg:text-base"> {{ renderDate(article.created_at) }} </p>
                    <div
                        class="text-lg font-medium flex_center h-10 w-32 rounded-custom text-white bg-normal hover:bg-focus focus:shadow-focus focus:shadow-shadowNormal">
                        <span> بیشتر </span>
                    </div>
                </div>
            </article>
        </NuxtLink>
    </section>
</template>

<script>
import { NuxtLink, NuxtImg } from "#components";
import {useCommon} from "~/store/index.js";

export default {
    name: "Article Type 3",
    props: {
        slug: String,
        articleList: Array,
        borderStyle: String,
        evenOdd: [String, Number],
    },
    setup(){
        const border = ref("");
        const layoutStore = useCommon();
        const renderDate = (string) => {
            return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(new Date(string))
        }

        switch (layoutStore.footerData.styles.border_type) {
            case 1:
                border.value = "border border-stone-400";
                break;
            default:
                border.value = "";
                break;
        }


        return {
            renderDate,
            border,
        }
    }
}
</script>