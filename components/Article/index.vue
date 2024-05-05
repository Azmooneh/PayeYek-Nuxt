<template>
<!--    <Article_Type_1 :body="articleBody" :image="articleImage" :title="articleTitle" :dateCreated="articleData" :slides="slides" :containerClass="containerClass" v-if="cardType == 1" />-->
    <Article_Type_7 :body="articleBody" :image="articleImage" :title="articleTitle" :dateCreated="articleData" :slides="slides" :borderStyle="borderStyle" />
</template>

<script>
import Article_Type_1 from "~/components/Article/children/Article_Type_1.vue";
import Article_Type_7 from "~/components/Article/children/Article_Type_7.vue";
import {ref} from "vue";
import {useCommon, useArticle} from "~/store/index.js";

export default {
    name: "Article Single Switch",
    components: {
        Article_Type_1,
        Article_Type_7,
    },
    setup(){
        const layoutStore = useCommon();
        const articleStore = useArticle();
        const cardType = ref(layoutStore.footerData.styles.a_view_type);
        // const evenOdd = ref(layoutStore.footerData.styles.a_view_type);
        const borderStyle = computed(() => {
            switch (layoutStore.footerData.styles.border_type.toString()) {
                case '0':
                    return '';

                case '1':
                    return 'border border-stone-400';

                case '2':
                    return 'drop-shadow-base';

                default:
                    return '';
            }
        });
        const articleBody = ref(articleStore.Article.body);
        const articleImage = ref(articleStore.Article.image);
        const articleTitle = ref(articleStore.Article.title);
        const articleData = ref(articleStore.Article.created_at);
        const slides = ref(articleStore.RelatedArticles);
        const containerClass = ref("");
        // console.log(articleStore.RelatedArticles);

        // const articleType = ref(layoutStore.footerData.styles.a_view_type);
        switch (layoutStore.footerData.styles.border_type.toString()) {
            case ('2'):
                containerClass.value = "!py-6"

        }

        return {
            articleBody,
            articleImage,
            articleTitle,
            articleData,
            slides,
            containerClass,
            cardType,
            borderStyle,
        }
    }
}
</script>