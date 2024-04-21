<template>
    <section v-if="filterType == 1" class="container mb-8">
        <ul class="text-base font-medium text-stone-700 flex items-center gap-2">
            <li @click="changeFilter(0)" :class="filterState == 0 ? 'text-white bg-normal border-normal ' : ''"
                class="h-10 px-3 flex items-center cursor-pointer rounded-custom border border-stone-400"> همه </li>
            <li v-for="(category, index) in categories" :key="index" @click="changeFilter(category.id)"
                :class="filterState == category.id ? 'text-white bg-normal border-normal ' : ''"
                class="h-10 px-3 flex items-center cursor-pointer rounded-custom border border-stone-400">
                {{ category.title }}
            </li>
        </ul>
    </section>
</template>

<script>
import { useCategory } from '~/store/index';

export default {
    name: 'Filter Types',
    setup() {
        const categoriesStore = useCategory();
        const filterType = ref(1);
        const filterState = ref(0);
        const categories = ref(categoriesStore.categories);

        const changeFilter = id => {
            console.log(id);
        }


        return {
            filterType,
            filterState,
            categories,
            changeFilter,
        }
    }

}
</script>