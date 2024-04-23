<template>
    <section v-if="filterType == 1" class="container mb-8">
        <ul class="text-base font-medium text-stone-700 flex items-center gap-2 overflow-auto">
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
        const route = useRoute();
        const router = useRouter();
        const categoriesStore = useCategory();
        const filterType = ref(1);
        const initialCategory = route.query.category || 0; // Set initialCategory to route.query.category if it exists, otherwise set it to 0
        const filterState = ref(initialCategory); // Initialize filter state with initialCategory

        watch(() => route.query.category, (newCategory, oldCategory) => {
            // Update filterState whenever route.query.category changes
            filterState.value = newCategory || 0; // Set filterState to newCategory if it exists, otherwise set it to 0
        });
        // const filterState = ref(computed(() => {
        //     if (route.query.category) {
        //         return route.query.category;
        //     } else {
        //         watch(() => route.query.category, (n, o) => {
        //             return n;
        //         })
        //     }
        // })); // Current filter state
        const categories = ref(categoriesStore.categories);

        const changeFilter = id => {
            router.push({ path: route.path, query: {category: id} });
        }

        // console.log(categories.value);

        return {
            filterType,
            filterState,
            categories,
            changeFilter,
        }
    }

}
</script>