<template>
    <ul
        class="flex items-center flex-wrap gap-x-2 gap-y-4 list-none text-base font-medium *:rounded-custom *:flex_center *:h-8 *:px-3 *:cursor-pointer *:border *:border-stone-700 *:text-stone-700">
        <li :class="categoryFilterState === 'all' ? '!border-normal !text-normal' : ''"
            @click="changeFilter('all')"> همه موارد </li>
        <li :class="categoryFilterState === 'news' ? '!border-normal !text-normal' : ''"
            @click="changeFilter('news')"> اخبار </li>
        <li :class="categoryFilterState === 'sell' ? '!border-normal !text-normal' : ''"
            @click="changeFilter('sell')"> اطلاعیه </li>
        <li :class="categoryFilterState === 'blog' ? '!border-normal !text-normal' : ''"
            @click="changeFilter('blog')"> وبلاگ </li>
    </ul>
</template>

<script>
import {ref} from "vue";

export default {
    name: 'Articles Filter',
    setup(){
        const categoryFilterState = ref('all');
        const queryParam = ref('all');
        const firstTime = ref(false);

        const changeFilter = (filter) => {
            if(firstTime.value)
            {
                window.history.replaceState( {}, "",`?f=${filter}`);
            }
            categoryFilterState.value = filter;
            firstTime.value = true;
        }

        onMounted(() => {
            const urlParams = new URLSearchParams(window.location.search);
            queryParam.value = urlParams.get('f') != null ? urlParams.get('f') : 'all';

            changeFilter(queryParam.value);
        })

        return {
            categoryFilterState,
            changeFilter,
        }
    }
}
</script>