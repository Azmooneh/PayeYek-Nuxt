<template>
    <Article_type_1 :slug="slug" v-if="articleCardType == 1" :articleList="articleList" :evenOdd="evenOdd" :borderStyle="borderStyle" />
    <Article_type_2 :slug="slug" v-if="articleCardType == 2" :articleList="articleList" :evenOdd="evenOdd" :borderStyle="borderStyle" />
    <Article_type_3 :slug="slug" v-if="articleCardType == 3" :articleList="articleList" :evenOdd="evenOdd" :borderStyle="borderStyle" />
    <Article_type_4 :slug="slug" v-if="articleCardType == 4" :articleList="articleList" :evenOdd="evenOdd" :borderStyle="borderStyle" />
    <Article_type_6 :slug="slug" v-if="articleCardType == 6" :articleList="articleList" :evenOdd="evenOdd" :borderStyle="borderStyle" />
    <articleSwiperType v-if="articleCardType == 5" :slug="slug" :borderStyle="borderStyle" :evenOdd="evenOdd" />
    <Article_type_7 :slug="slug" v-if="articleCardType == 7" :articleList="articleList" :evenOdd="evenOdd" :borderStyle="borderStyle" />
    <Article_type_8 :slug="slug" v-if="articleCardType == 8" :articleList="articleList" :evenOdd="evenOdd" :borderStyle="borderStyle" />
</template>

<script>

import Article_type_1 from "~/components/companyLanding/articles/children/children/article_type_1.vue";
import Article_type_2 from "~/components/companyLanding/articles/children/children/article_type_2.vue";
import Article_type_3 from "~/components/companyLanding/articles/children/children/article_type_3.vue";
import Article_type_4 from "~/components/companyLanding/articles/children/children/article_type_4.vue";
import articleSwiperType from "~/components/companyLanding/articles/children/children/article_type_5.vue";
import Article_type_6 from "~/components/companyLanding/articles/children/children/article_type_6.vue";
import Article_type_7 from "~/components/companyLanding/articles/children/children/article_type_7.vue";
import Article_type_8 from "~/components/companyLanding/articles/children/children/article_type_8.vue";
import { useCompanyData, useCommon } from '~/store/index';

export default {
    name: 'Article Switch',
    components: {
        articleSwiperType,
        Article_type_1,
        Article_type_2,
        Article_type_3,
        Article_type_4,
        Article_type_6,
        Article_type_7,
        Article_type_8,
    },
    props: {
        articleCardType: [String, Number],
        slug: String,
        borderStyle: String,
        evenOdd: [String, Number],
    },
    setup(){
        const companyStore = useCompanyData();
        const articleList = ref(companyStore.articles);

        return {
            articleList,
        }
    }
}
</script>