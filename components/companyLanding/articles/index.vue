<template>
    <section :class="'mb-4 lg:mb-16 relative container ' + parentStyle" v-if="articles.length">
        <section :class="containerStyle">
            <div>
                <h3 class="mb-2 text-base sm:text-lg font-medium text-center text-stone-700"> آخرین اخبار و اطلاعیه ها </h3>
                <hr class="w-60 sm:w-96 border-normal mb-6 lg:mb-0 mx-auto" />
                <!-- show all -->
                <div class="flex justify-end">
                    <NuxtLink :to="`/l/${slug}/articles`"
                        class="text-base font-normal text-normal mr-auto mb-3 hidden lg:inline-block px-2 cursor-pointer">
                        نمایش همه </NuxtLink>
                </div>
            </div>

            <section class="w-full">
                <articleSwiperType />
            </section>
        </section>
    </section>

</template>

<script>
import { NuxtLink } from "#components";
import { useCompanyData, useStyles } from '~/store/index';
import articleSwiperType from '~/components/companyLanding/articles/articleSwiperType/index.vue'

export default {
    name: 'Articles',
    components: {
        articleSwiperType,
    },
    setup(){
        const companyStore = useCompanyData();
        const styleStore = useStyles();
        const articles = ref(companyStore.articles);
        const parentStyle = ref("");
        const containerStyle = ref("");

        switch (styleStore.styles.article_card_type) {
            case 7:
                parentStyle.value = "bg-stone-200 py-4 sm:py-10 md:py-14 lg:pt-16 lg:pb-20 xl:pb-24"
                break;
            case 8:
                parentStyle.value = "bg-stone-200 py-4 sm:py-10 md:py-14 lg:pt-16 lg:pb-20 xl:pb-24"
                break;
        
            default:
                break;
        }

        switch (styleStore.styles.article_card_type) {
            case 6:
                containerStyle.value = "lg:default_container"
                break;
                
            default:
                containerStyle.value = "default_container"
                break;
        }

        return {
            slug: companyStore.companyData.slug,
            parentStyle,
            containerStyle,
            articleCardType: styleStore.styles.article_card_type,
            articles,
        }
    }
}
</script>