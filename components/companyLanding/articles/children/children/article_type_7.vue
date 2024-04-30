<template>
    <section class="mb-4 sm:mb-0 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <template v-for="(article, key, index) in ArticlesRowList" :key="index">
            <div class="[&:nth-of-type(3)]:col-span-2">
                <section :class="'sm:flex sm:flex-col sm:p-4 sm:bg-white border-0 sm:rounded-custom ' + borderStyle + ' sm:border-2'">
                    <p class="hidden sm:block text-base font-normal lg:text-xl mb-4 text-stone-700"> {{ key === 'blog' ? 'بلاگ' : (key === 'news' ? 'اخبار و مقالات' : (key === 'sell' ? 'شرایط فروش' : '')) }} </p>
                    <section :class="'flex flex-col bg-white rounded-custom overflow-hidden p-4 sm:p-0 sm:border-0 ' + borderStyle + ' border-2'">
                        <NuxtLink v-for="(item, index) in article.slice(0, 2)" :key="'a-' + index" :to="'/l/' + slug + '/a/' + item.slug" :class="'pt-4 border-b border-stone-400 last:border-b-0 ' + (article.length >= 2 ? 'pb-3' : '')">
                            <div class="flex flex-col gap-3 lg:flex-row lg:mb-4">
                                <!-- image -->
                                <div class="h-24 lg:w-28 lg:flex-none rounded-custom">
                                    <NuxtImg :src="item.image" :alt="item.title" class="h-full mx-auto object-contain lg:mx-0" height="100%" width="100%" format="webp" />
                                </div>
                                <!-- info -->
                                <div class="flex flex-col text-stone-700 gap-1 lg:gap-2">
                                    <p class="text-sm lg:text-base xl:text-lg font-medium lg:line-clamp-1"> {{ item.title }} </p>
                                    <p class="text-xs lg:text-sm lg:leading-6 font-normal line-clamp-1 lg:line-clamp-2 h-4 lg:h-12"> {{ item.description }} </p>
                                </div>
                            </div>
                            <div class="hidden lg:flex items-center justify-end gap-4 text-normal text-base font-medium">
                                <span> ادامه </span>
                                <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16L9.41 14.59L3.83 9L16 9V7L3.83 7L9.41 1.41L8 0L0 8L8 16Z" fill="current"/>
                                </svg>
                            </div>
                        </NuxtLink>
                    </section>
                </section>
            </div>
        </template>
    </section>
</template>

<script>
import { NuxtLink, NuxtImg } from "#components";

export default {
    name: "Article Type 4",
    props: {
        slug: String,
        articleList: Array,
        borderStyle: String,
        evenOdd: [String, Number],
    },
    setup(props){
        const ArticlesRowList = ref(Object.groupBy(props.articleList, ({ type }) => type));
        const renderDate = (string) => {
            return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(new Date(string))
        }

        return {
            renderDate,
            ArticlesRowList,
        }
    }
}
</script>