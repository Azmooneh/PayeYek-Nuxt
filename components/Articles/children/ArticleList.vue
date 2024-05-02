<template>
    <ArticleTypeOne :slug="slug" :evenOdd="evenOdd" v-if="articlesCardType == 1" :filteredArticles="filteredList" />
    <ArticleTypeTwo :slug="slug" :evenOdd="evenOdd" v-if="articlesCardType == 2" :filteredArticles="filteredList" />
    <ArticleTypeThree :slug="slug" :evenOdd="evenOdd" v-if="articlesCardType == 3" :filteredArticles="filteredList" />
    <EmptyFilters v-if="filteredList.length == 0" />

</template>

<script>
import ArticleTypeOne from "~/components/Articles/children/children/ArticleTypeOne.vue";
import ArticleTypeTwo from "~/components/Articles/children/children/ArticleTypeTwo.vue";
import ArticleTypeThree from "~/components/Articles/children/children/ArticleTypeThree.vue";
import EmptyFilters from "~/components/Articles/emptyFilters.vue";
import { useCommon, useArticles } from '~/store/index';

export default {
    name: 'ArticleList Switch',
    components: {
        ArticleTypeOne,
        ArticleTypeTwo,
        ArticleTypeThree,
        EmptyFilters,
    },
    setup(){
        const route = useRoute();
        const layoutStore = useCommon();
        const articlesStore = useArticles();
        // const evenOdd = ref(layoutStore.footerData.styles.a_striped);
        const evenOdd = ref(1);
        // const articlesCardType = ref(layoutStore.footerData.styles.a_striped.a_card_type);
        const articlesCardType = ref(3);
        const slug = ref(layoutStore.footerData.slug);
        const articlesList = ref(articlesStore.Articles);
        const filteredList = ref([]);
        const filterState = ref(computed(() => {
            if (route.query.f) {
                return route.query.f;
            } else if (!!!route.query.f){
                return 'all';
            } else {
                watch(() => route.query.f, (n, o) => {
                    return n;
                })
            }
        })); // Current filter state

        const initialLoadFilter = () => {
            if (filterState.value === 'all') {
                filteredList.value = articlesList.value;
            } else {
                articlesList.value.filter(article => {
                    if (article.type === filterState.value) {
                        filteredList.value.push(article);
                    }
                })
            }
        }

        initialLoadFilter();

        watch(() => route.query.f, (n, o) => {
            if (n) {
                filteredList.value = [];
                if (filterState.value === 'all') {
                    filteredList.value = articlesList.value;
                } else {
                    initialLoadFilter();
                }
            } else {
                // Handle case when no category is selected
            }
        })

        return {
            evenOdd,
            articlesCardType,
            slug,
            filteredList,
        }
    }
}
</script>