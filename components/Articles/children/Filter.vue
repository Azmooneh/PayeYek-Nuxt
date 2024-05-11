<template>
    <ul
        class="flex items-center flex-wrap gap-x-2 gap-y-4 list-none text-base font-medium *:rounded-custom *:flex_center *:h-8 *:px-3 *:cursor-pointer *:border *:border-stone-700 *:text-stone-700">
        <li :class="filterState === '' ? '!border-normal !text-normal' : ''"
            @click="changeFilter('')"> همه موارد </li>
        <li v-for="(category, index) in categories" :key="index" :class="filterState === category.type_en ? '!border-normal !text-normal' : ''"
            @click="changeFilter(category.type_en)"> {{ category.type_fa }} </li>
    </ul>
</template>

<script>
import {ref} from "vue";
import {useArticles} from "~/store/index.js";

export default {
    name: 'Articles Filter',
    setup(){
        const route = useRoute();
        const router = useRouter();
        const companySlug = ref(route.params.id);
        const articlesStore = useArticles();
        const categories = ref(articlesStore.Categories);
        const initialArticleFilter = route.query.f || '';
        const filterState = ref(initialArticleFilter);
        const activeFilters = ref({...route.query});

        watch(() => route.query.f, (newCategory, oldCategory) => {
            // Update filterState whenever route.query.category changes
            filterState.value = newCategory || ''; // Set filterState to newCategory if it exists, otherwise set it to 0
        });

        const loadData = async () => {
            try {
                const filters = Object.keys(activeFilters.value).map(key => `${key}=${encodeURIComponent(activeFilters.value[key])}`).join("&");
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/a?${filters}`)
                if (response.data.value.status == 200) {
                    const articles = response.data.value.data.articles.data;
                    const pagination = response.data.value.data.articles.pagination;
                    const categories = response.data.value.data.article_types;
                    await articlesStore.saveArticlesData(articles, pagination, categories);
                    // breadcrumbs.value = response.data.value.data.breadcrumbs;
                    // await updateMetaTags(response.data.value.data.seo);
                }
            } catch (error) {
                console.log(error)
            }
        }

        const changeFilter = async id => {
            activeFilters.value = {};
            activeFilters.value.f = id;
            console.log(id)
            await loadData();
            router.push({ path: route.path, query: activeFilters.value });
        }

        return {
            changeFilter,
            filterState,
            categories,
        }
    }
}
</script>