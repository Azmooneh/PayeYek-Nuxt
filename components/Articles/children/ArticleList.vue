<template>
    <ArticleTypeOne :slug="slug" :evenOdd="evenOdd" v-if="articlesCardType == 1" :filteredArticles="filteredList" :borderStyle="borderStyle" :articlesPagination="articlesPagination" :handlePageChange="handlePageChange" />
    <ArticleTypeTwo :slug="slug" :evenOdd="evenOdd" v-if="articlesCardType == 2" :filteredArticles="filteredList" :borderStyle="borderStyle" :articlesPagination="articlesPagination" :handlePageChange="handlePageChange" />
    <ArticleTypeThree :slug="slug" :evenOdd="evenOdd" v-if="articlesCardType == 3" :filteredArticles="filteredList" :borderStyle="borderStyle" :articlesPagination="articlesPagination" :handlePageChange="handlePageChange" />
    <ArticleTypeFour :slug="slug" :evenOdd="evenOdd" v-if="articlesCardType == 4" :filteredArticles="filteredList" :borderStyle="borderStyle" :articlesPagination="articlesPagination" :handlePageChange="handlePageChange" />
    <ArticleTypeFive :slug="slug" :evenOdd="evenOdd" v-if="articlesCardType == 5" :filteredArticles="filteredList" :borderStyle="borderStyle" :articlesPagination="articlesPagination" :handlePageChange="handlePageChange" />
    <ArticleTypeSix :slug="slug" :evenOdd="evenOdd" v-if="articlesCardType == 6" :filteredArticles="filteredList" :borderStyle="borderStyle" :articlesPagination="articlesPagination" :handlePageChange="handlePageChange" />
    <ArticleTypeSeven :slug="slug" :evenOdd="evenOdd" v-if="articlesCardType == 7" :filteredArticles="filteredList" :borderStyle="borderStyle" :articlesPagination="articlesPagination" :handlePageChange="handlePageChange" />
    <EmptyFilters v-if="filteredList.length == 0" />
</template>

<script>
import ArticleTypeOne from "~/components/Articles/children/children/ArticleTypeOne.vue";
import ArticleTypeTwo from "~/components/Articles/children/children/ArticleTypeTwo.vue";
import ArticleTypeThree from "~/components/Articles/children/children/ArticleTypeThree.vue";
import ArticleTypeFour from "~/components/Articles/children/children/ArticleTypeFour.vue";
import ArticleTypeFive from "~/components/Articles/children/children/ArticleTypeFive.vue";
import ArticleTypeSix from "~/components/Articles/children/children/ArticleTypeSix.vue";
import ArticleTypeSeven from "~/components/Articles/children/children/ArticleTypeSeven.vue";
import EmptyFilters from "~/components/Articles/emptyFilters.vue";
import { useCommon, useArticles } from '~/store/index';

export default {
    name: 'ArticleList Switch',
    components: {
        ArticleTypeOne,
        ArticleTypeTwo,
        ArticleTypeThree,
        ArticleTypeFour,
        ArticleTypeFive,
        ArticleTypeSix,
        ArticleTypeSeven,
        EmptyFilters,
    },
    props: {
        handlePageChange: Function,
    },
    setup(){
        const route = useRoute();
        const layoutStore = useCommon();
        const articlesStore = useArticles();
        const evenOdd = ref(layoutStore.footerData.styles.a_striped);
        const articlesCardType = ref(layoutStore.footerData.styles.a_card_type);
        const slug = ref(layoutStore.footerData.slug);
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
        const articlesList = ref(articlesStore.Articles);
        const articlesPagination = ref(articlesStore.Pagination);
        const filteredList = ref(articlesList.value);
        const filterState = ref(computed(() => {
            if (route.query.f) {
                return route.query.f;
            } else if (!!!route.query.f){
                return '';
            } else {
                watch(() => route.query.f, (n, o) => {
                    return n;
                })
            }
        })); // Current filter state
        watch(() => articlesStore.Articles, (n, o) => {
            filteredList.value = n;
        })
        watch(() => articlesStore.Pagination, (n, o) => {
            console.log(n)
            articlesPagination.value = n;
        })
        // console.log(articlesStore.Pagination);

        // const initialLoadFilter = () => {
        //     if (filterState.value === '') {
        //         filteredList.value = articlesList.value;
        //     } else {
        //         articlesList.value.filter(article => {
        //             if (article.type === filterState.value) {
        //                 filteredList.value.push(article);
        //             }
        //         })
        //     }
        // }

        // initialLoadFilter();

        // watch(() => route.query.f, (n, o) => {
        //     if (n) {
        //         filteredList.value = [];
        //         if (filterState.value === '') {
        //             filteredList.value = articlesList.value;
        //         } else {
        //             initialLoadFilter();
        //         }
        //     } else {
        //         // Handle case when no category is selected
        //     }
        // })

        return {
            evenOdd,
            articlesCardType,
            slug,
            filteredList,
            borderStyle,
            articlesPagination,
        }
    }
}
</script>