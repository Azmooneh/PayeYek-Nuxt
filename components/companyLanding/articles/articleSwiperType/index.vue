<template>
    <swiper class="w-full swiper articleSliderTypeFive" :speed="750" :modules="[SwiperPagination, SwiperAutoplay, SwiperNavigation]" :slides-per-view="3" :spece-between="20"
        :breakpoints="breakpoints" :navigation="true" :pagination="{ clickable: true }">
        <swiper-slide v-for="(article, index) in articleList.slice(0,8)" :key="index"
            :class="'swiper-slide flex flex-col flex-none overflow-hidden rounded-custom ' + borderStyle + (evenOdd == 1 ? ' evenOdd_cards' : ' bg-white')">
            <div class="relative w-full pt-[56%]">
                <img :src="article.image" :alt="article.title"
                    class="absolute top-0 left-0 object-cover w-full h-full" />
            </div>
            <!-- info -->
            <div class="px-2 pt-3 pb-4">
                <div class="gap-4 mb-1 flex_between">
                    <h3 class="text-base font-medium leading-7 sm:text-lg text-stone-700 line-clamp-1">
                        {{ article.title }} </h3>
                    <h4 class="flex-none text-sm font-medium leading-7 sm:text-base text-normal"> {{
        renderDate(article.created_at) }} </h4>
                </div>
                <p
                    class="mb-2 text-sm font-normal leading-6 sm:leading-7 sm:h-20 sm:mb-3 text-justify text-stone-700 line-clamp-3 h-[72px]">
                    {{ article.description }}
                </p>
                <ArticleLink :href="'/l/' + landSlug + '/a/' + article.slug"
                    classNames="mx-auto text-white bg-stone-700 text-lg font-medium flex_center h-10 w-32 rounded-custom">
                    بیشتر </ArticleLink>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { NuxtLink } from "#components";
import { useCompanyData, useStyles } from '~/store/index';

export default {
    name: 'Slider Article',
    setup(){
        const breakpoints = {
            320: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
        const companyStore = useCompanyData();
        const styleStore = useStyles();
        const articleList = ref(companyStore.articles);
        const borderStyle = ref("");

        console.log(articleList.value);

        const renderDate = (string) => {
            return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(new Date(string))
        }

        switch (styleStore.styles.border_type) {
            case 0:
                borderStyle.value = "";
                break;
            case 1:
                borderStyle.value = "border border-stone-400";
                break;
            case 2:
                borderStyle.value = "drop-shadow-base";
                break;
        
            default:
                break;
        }

        return {
            breakpoints,
            articleList,
            renderDate,
            borderStyle,
            evenOdd: styleStore.styles.product_striped,
        }
    }
}
</script>