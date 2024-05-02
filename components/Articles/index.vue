<template>
    <section class="flex flex-col gap-4 mb-8 container sm:flex-row-reverse sm:justify-between sm:items-center">
        <!-- search-->
        <Search />

        <!-- filters -->
        <Filters />
    </section>

    <FilterList />
</template>

<script>
import { ref } from 'vue';
import Search from '~/components/Articles/children/Search.vue';
import Filters from '~/components/Articles/children/Filter.vue';
import FilterList from '~/components/Articles/children/ArticleList.vue';
import { useCommon } from '~/store/index';

export default {
    name: 'Articles Filter',
    components: {
        Search,
        Filters,
        FilterList,
    },
    setup(){
        const layoutStore = useCommon();

        // convert date to fa local
        const renderDate = (string) => {
            return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(new Date(string))
        }

        // const filteredArticles = computed(() => {
        //     return articleList.value.filter(article => {
        //         // Filter by category
        //         if (categoryFilterState.value !== 'all' && article.type !== categoryFilterState.value) {
        //             return false;
        //         }
        //         return true;
        //     });
        // });

        return {
            renderDate,
            // filteredArticles,
        }
    }
}
</script>