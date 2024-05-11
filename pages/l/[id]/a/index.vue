<template>
    <section class="min-h-[calc(100vh-340px)] pt-4" v-if="watchLoading">
        <breadcrumbSkeleton />

        <filterArticlesSkeleton />

        <ArticlesSkeleton />

    </section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>
    <!-- Render your component content here -->
    <main v-else class="min-h-[calc(100vh-340px)] pt-4">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />

        <ArticlesFilter />

        <FilterList :handlePageChange="handlePageChange" />

    </main>
</template>

<script>
import breadcrumbSkeleton from "~/components/common/breadcrumbs/breadcrumbSkeleton.vue";
import filterArticlesSkeleton from "~/components/Articles/filterArticlesSkeleton.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";
import {useArticles, useCategory} from '~/store/index';
import { ref } from 'vue';
import ArticlesFilter from "~/components/Articles/articleFilters.vue";
import FilterList from "~/components/Articles/children/ArticleList.vue";
import ArticlesSkeleton from "~/components/Articles/ArticlesSkeleton.vue";

export default {
    name: 'Articles List',
    components: {ArticlesSkeleton, FilterList, Breadcrumbs, filterArticlesSkeleton, breadcrumbSkeleton, ArticlesFilter},
    setup(){
        const route = useRoute();
        const router = useRouter();
        const articlesStore = useArticles();
        const companySlug = ref(route.params.id);
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);
        const breadcrumbs = ref([]);
        const activeFilters = ref({...route.query});
        const str = ref("");

        // console.log(route.query);

        const updateMetaTags = (seo) =>{
            useHead({
                meta: [
                    { hid: 'robots', name: 'robots', content: seo.robot },
                ],
                link: {
                    rel: 'canonical',
                    href: `https://www.paye1.com/l/${seo.canonical}`
                }
            })

            useSeoMeta({
                title: seo.title,
                ogTitle: seo.og_title,
                description: seo.description,
                ogDescription: seo.og_description,
                ogType: seo.og_type,
                ogImage: seo.og_image,
                ogImageAlt: seo.image_alt,
                twitterCard: seo.twitter_card,
                twitterImage: seo.twitter_card_image,
            })
        }

        const loadData = async () => {
            try {

                loading.value = true;
                const filters = Object.keys(activeFilters.value).map(key => `${key}=${encodeURIComponent(activeFilters.value[key])}`).join("&");
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/a?${filters}`)
                if (response.data.value.status == 200) {
                    const articles = response.data.value.data.articles.data;
                    const pagination = response.data.value.data.articles.pagination;
                    const categories = response.data.value.data.article_types;
                    await articlesStore.saveArticlesData(articles, pagination, categories);
                    breadcrumbs.value = response.data.value.data.breadcrumbs;
                    await updateMetaTags(response.data.value.data.seo);
                }
            } catch (err) {
                error.value = err.message || 'سرور به مشکل خورده است.'
            } finally {
                loading.value = false
            }
        }

        loadData();

        const handlePageChange = async (page) => {
            activeFilters.value = {...route.query};
            activeFilters.value.page = page;
            await loadData();
            router.push({query: activeFilters.value});
        };

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n;
        })

        return {
            loading,
            watchLoading,
            error,
            breadcrumbs,
            handlePageChange,
        }
    }
}
</script>