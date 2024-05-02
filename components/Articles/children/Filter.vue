<template>
    <ul
        class="flex items-center flex-wrap gap-x-2 gap-y-4 list-none text-base font-medium *:rounded-custom *:flex_center *:h-8 *:px-3 *:cursor-pointer *:border *:border-stone-700 *:text-stone-700">
        <li :class="filterState === 'all' ? '!border-normal !text-normal' : ''"
            @click="changeFilter('all')"> همه موارد </li>
        <li :class="filterState === 'news' ? '!border-normal !text-normal' : ''"
            @click="changeFilter('news')"> اخبار </li>
        <li :class="filterState === 'sell' ? '!border-normal !text-normal' : ''"
            @click="changeFilter('sell')"> اطلاعیه </li>
        <li :class="filterState === 'blog' ? '!border-normal !text-normal' : ''"
            @click="changeFilter('blog')"> وبلاگ </li>
    </ul>
</template>

<script>
import {ref} from "vue";

export default {
    name: 'Articles Filter',
    setup(){
        const route = useRoute();
        const router = useRouter();
        // const categoryFilterState = ref('all');
        const initialArticleFilter = route.query.f || 'all';
        const filterState = ref(initialArticleFilter);

        watch(() => route.query.f, (newCategory, oldCategory) => {
            // Update filterState whenever route.query.category changes
            filterState.value = newCategory || 'all'; // Set filterState to newCategory if it exists, otherwise set it to 0
        });
        // const queryParam = ref('all');
        // const firstTime = ref(false);

        // const changeFilter = (filter) => {
            // if(firstTime.value)
            // {
            //     window.history.replaceState( {}, "",`?f=${filter}`);
            // }
            // categoryFilterState.value = filter;
            // firstTime.value = true;
        // }
        const changeFilter = id => {
            router.push({ path: route.path, query: {f: id} });
        }

        // onMounted(() => {
        //     const urlParams = new URLSearchParams(window.location.search);
        //     queryParam.value = urlParams.get('f') != null ? urlParams.get('f') : 'all';
        //
        //     changeFilter(queryParam.value);
        // })

        return {
            // categoryFilterState,
            changeFilter,
            filterState,
        }
    }
}
</script>