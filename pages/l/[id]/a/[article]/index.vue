<template>
    <section class="min-h-[calc(100vh-340px)] pt-4" v-if="watchLoading">
        <breadcrumbSkeleton />

        <ArticleSkeleton />
    </section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>
    <!-- Render your component content here -->
    <main v-else class="min-h-[calc(100vh-340px)] pt-4">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />

        <Article />
    </main>
</template>

<script>
import breadcrumbSkeleton from "~/components/common/breadcrumbs/breadcrumbSkeleton.vue";
import filterArticlesSkeleton from "~/components/Articles/filterArticlesSkeleton.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";
import Article from "~/components/Article/index.vue";
import {ref} from "vue";
import { useArticle } from '~/store/index.js';
import ArticleSkeleton from "~/components/Article/articleSkeleton.vue";

export default {
    name: 'Article Single Page',
    components: {Breadcrumbs, filterArticlesSkeleton, breadcrumbSkeleton, Article, ArticleSkeleton},
    setup(){
        const route = useRoute();
        const articleStore = useArticle();
        const companySlug = ref(route.params.id);
        const articleSlug = ref(route.params.article);

        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);
        const breadcrumbs = ref([]);


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
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/a/${articleSlug.value}`);
                if (response.data.value.status == 200) {
                    // console.log(response.data.value)
                    await articleStore.saveArticleData(response.data.value.data.article);
                    await articleStore.saveRelatedArticles(response.data.value.data.related_articles);
                    // articleBody.value = response.data.value.data.article.body;
                    // await articlesStore.saveArticlesData(response.data.value.data.articles.data);
                    breadcrumbs.value = response.data.value.data.breadcrumbs;
                    // await updateMetaTags(response.data.value.data.seo);
                    // console.log(articleBody.value)
                }
            } catch (err) {
                error.value = err.message || 'سرور به مشکل خورده است.'
            } finally {
                loading.value = false
            }
        }

        loadData();

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n
        })

        return {
            loading,
            watchLoading,
            error,
            breadcrumbs,
        }
    }
}
</script>