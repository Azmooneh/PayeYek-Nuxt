<template>
    <section :class="'mb-4 lg:mb-16 relative container ' + parentStyle" v-if="articles.length">
        <section :class="containerStyle">
            <!-- title -->
            <Titles :landSlug="slug" :headerType="headerType" :title="'محصولات شرکت ' + companyName" section="articles" />

            <section class="w-full">
                <articleSwiperType />
            </section>
        </section>
    </section>

</template>

<script>
// import { NuxtLink } from "#components";
import { useCompanyData, useStyles } from '~/store/index';
import articleSwiperType from '~/components/companyLanding/articles/articleSwiperType/index.vue';
import Titles from '~/components/companyLanding/common/titles/index.vue';

export default {
    name: 'Articles',
    components: {
        articleSwiperType,
        Titles,
    },
    setup() {
        const companyStore = useCompanyData();
        const styleStore = useStyles();
        const articles = ref(companyStore.articles);
        const parentStyle = ref("");
        const containerStyle = ref("");
        const headerType = ref(1);
        const articleCardType = ref(5);

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
            headerType,
            companyName: companyStore.companyData.title,
            articleCardType,
        }
    }
}
</script>