<template>
    <section class="mb-10 grid grid-cols-1 lg:divide-y lg:divide-y-stone-400 container gap-6 sm:gap-4">
        <NuxtLink v-for="(article, index) in filteredArticles" :key="index" :to="'/l/' + slug + '/a/' + article.slug"
                     :class="'flex flex-col sm:flex-row bg-white overflow-hidden relative ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards rounded-custom sm:py-2 sm:px-1 lg:py-6 lg:px-4' : ' bg-white')">
            <!-- image -->
            <div
                class="overflow-hidden md:flex-none w-full relative pt-[61%] sm:pt-0 sm:w-72 md:w-80 lg:w-[23rem] sm:flex-none">
                <NuxtImg :src="article.image" :alt="article.title"
                     class="absolute top-0 left-0 object-cover w-full h-full sm:static rounded-custom" height="100%" width="100%"
                         format="webp" />
            </div>
            <!-- docs -->
            <div class="px-4 pb-6 pt-2.5 md:pl-10 lg:pl-4 flex flex-wrap sm:flex-1">
                <div class="order-1 w-2/3 sm:w-full sm:mb-4 lg:flex_between lg:gap-8">
                    <h3 class="text-base sm:text-lg font-medium text-stone-700 line-clamp-2 sm:line-clamp-1"> {{ article.title
                        }} </h3>
                    <h4
                        class="absolute top-4 left-3 sm:left-auto sm:right-56 sm:top-4 md:right-64 lg:static px-3 py-1.5 lg:px-2 lg:w-28 lg:flex_center text-sm font-medium rounded-full bg-stone-400 text-stone-700">
                        {{ article.type === "blog" ? 'بلاگ' : (article.type === "sell" ? 'اطلاعیه' :
                        (article.type === "news" ? 'خبر' : article.type)) }} </h4>
                </div>
                <h3
                    class="flex justify-end order-2 flex-none w-1/3 text-xs sm:text-sm font-normal sm:order-3 text-stone-700 sm:w-full sm:justify-start">
                    {{ renderDate(article.created_at) }} </h3>

                <div
                    class="order-3 w-full mt-2 text-sm font-normal leading-7 text-justify sm:mb-2 sm:mt-0 sm:order-2 line-clamp-5 sm:line-clamp-3 lg:line-clamp-2 lg:h-16 sm:h-20 lg:leading-8 text-dark-500">
                    {{ article.description }}
                </div>
            </div>
        </NuxtLink>
    </section>
</template>

<script>
import {useCommon} from '~/store/index';

export default {
    name: 'ArticleList Type 5',
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