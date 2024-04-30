<template>
    <section :class="'mb-4 lg:mb-16 relative ' + parentStyle" v-if="articles.length">
        <section class="container">
            <!-- title -->
            <Titles :landSlug="slug" :headerType="headerType" :title="'محصولات شرکت ' + companyName" section="a" />

            <Articles :articleCardType="articleCardType" :slug="slug" :borderStyle="borderStyle" :evenOdd="evenOdd" />
        </section>
    </section>

</template>

<script>
import { useCompanyData, useCommon } from '~/store/index';
import Titles from '~/components/companyLanding/common/titles/index.vue';
import Articles from '~/components/companyLanding/articles/children/index.vue';

export default {
    name: 'Articles Parent',
    components: {
        Titles,
        Articles,
    },
    setup() {
        const companyStore = useCompanyData();
        const layoutStore = useCommon();
        const articles = ref(companyStore.articles);
        const parentStyle = ref("");
        const containerStyle = ref("");
        const borderStyle = ref("");
        const companyName = ref(layoutStore.footerData.title);
        const headerType = ref(layoutStore.footerData.styles.section_header_type);
        const slug = ref(layoutStore.footerData.slug);
        const evenOdd = ref(layoutStore.footerData.styles.article_striped);
        const articleCardType = ref(layoutStore.footerData.styles.article_card_type);

        switch (layoutStore.footerData.styles.article_card_type) {
            case 7:
                parentStyle.value = "bg-stone-200 py-4 sm:py-10 md:py-14 lg:pt-16 lg:pb-20 xl:pb-24"
                break;
            case 8:
                parentStyle.value = "bg-stone-200 py-4 sm:py-10 md:py-14 lg:pt-16 lg:pb-20 xl:pb-24"
                break;

            default:
                break;
        }

        switch (layoutStore.footerData.styles.border_type) {
            case 1:
                borderStyle.value = "border border-stone-400";
                break;
            case 2:
                borderStyle.value = "drop-shadow-base";
                break;
            default:
                borderStyle.value = "";
                break;
        }

        return {
            slug,
            parentStyle,
            containerStyle,
            articles,
            headerType,
            companyName,
            articleCardType,
            borderStyle,
            evenOdd,
        }
    }
}
</script>