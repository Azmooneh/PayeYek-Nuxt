<template>
    <section class="container mb-8 lg:mb-16 sm:flex-row-reverse sm:justify-between sm:items-center flex flex-col gap-4">
        <div class="relative w-full h-12 sm:w-72">
            <input type="text"
                   class="w-full h-full outline-none border-b border-x-0 border-t-0 border-b-dark-100 focus:ring-0 focus:border-b-stone-700 transition-[border] peer pl-10 pr-3 placeholder:text-[#888b93] text-sm font-normal text-stone-700"
                   placeholder="جستجو مطلب" v-model="searchValue" />
            <div class="absolute flex-none w-8 h-8 left-2 top-2 flex_center text-stone-400 peer-focus:text-[#111827]">
                <svg class="size-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.9284 17.0396L20.4016 20.3996M19.2816 11.4396C19.2816 15.7695 15.7715 19.2796 11.4416 19.2796C7.11165 19.2796 3.60156 15.7695 3.60156 11.4396C3.60156 7.1097 7.11165 3.59961 11.4416 3.59961C15.7715 3.59961 19.2816 7.1097 19.2816 11.4396Z"
                        stroke="current" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
            <!-- dropdown search -->
            <div class="absolute text-sm lg:leading-7 font-medium text-stone-700 top-12 inset-x-0 overflow-auto max-h-80 rounded-custom shadow-md bg-white z-[2] list-none" v-if="searchedList.length || noItem">
                <NuxtLink :to="`/l/${companySlug}/p/${searched.slug}`" class="px-4 py-2 cursor-pointer flex_row gap-2 last:before:hidden hover:bg-stone-200 relative before:absolute before:content-[''] before:bottom-0 before:inset-x-4 before:h-px before:bg-gray-200" v-for="(searched, index) in searchedList">
                    <div class="aspect-video h-10 sm:h-12 lg:h-14 rounded-custom">
                        <NuxtImg :src="searched.image" format="webp" class="h-full rounded-custom mx-auto" />
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="line-clamp-1" v-text="searched.name"></p>
                        <p class="line-clamp-1 text-xs"> مدل: {{ searched.model }} </p>
                    </div>
                </NuxtLink>
                <div class="px-4 py-2 cursor-pointer flex_row gap-2 hover:bg-stone-200 relative before:absolute before:content-[''] before:bottom-0 before:inset-x-4 before:h-px before:bg-gray-200" v-if="noItem">
                    <div class="aspect-video bg_skeleton h-10 sm:h-12 lg:h-14 rounded-custom">

                    </div>
                    <p class="line-clamp-1 sm:line-clamp-2"> آیتمی یافت نشد </p>
                </div>
            </div>
        </div>

        <ul class="text-base font-medium text-stone-700 flex items-center gap-2 overflow-auto" v-if="filterType == 1">
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
import {useCategory, useCommon} from '~/store/index';

export default {
    name: 'Filter Types',
    setup() {
        const route = useRoute();
        const router = useRouter();
        const layoutStore = useCommon();
        const categoriesStore = useCategory();
        const companySlug = ref(layoutStore.footerData.slug);
        const filterType = ref(1);
        const initialCategory = route.query.category || 0; // Set initialCategory to route.query.category if it exists, otherwise set it to 0
        const filterState = ref(initialCategory); // Initialize filter state with initialCategory
        const searchValue = ref("");
        const searchedList = ref([]);
        const noItem = ref(false);
        const searchTimeout = ref(null);
        const str = ref("");
        const landId = ref(layoutStore.footerData.styles.land_id);
        const categories = ref(layoutStore.footerData.category);

        const loadData = async (filter) => {
            try {
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/p?${filter}`)
                if (response.data.value.status == 200) {
                    console.log(response.data.value)
                    await categoriesStore.saveCategoriesData(response.data.value.data.products);
                }
            } catch (err) {
                console.log(err);
            }
        }

        const changeFilter = id => {
            filterState.value = id;
            const filter  = {category: id};
            const query = Object.keys(filter).map(key => `${key}=${encodeURIComponent(filter[key])}`).join("&");
            loadData(query);
            router.push({ query: filter });
        }

        const loadSearchData = async (filter) => {
            try {
                str.value = Object.keys(filter).map(key => `${key}=${encodeURIComponent(filter[key])}`).join("&");
                const response = await $fetch(`${useRuntimeConfig().public.apiBase}/l/p/search?${str.value}`)
                if (response && response.status == 200 && response.data.length > 0) {
                    console.log(response);
                    searchedList.value = response.data;
                    noItem.value = false;
                } else if(response && response.status == 200 && response.data.length == 0){
                    searchedList.value = [];
                    noItem.value = true;
                } else {
                    searchedList.value = [];
                    noItem.value = true;
                }
            } catch (err) {
                console.log(err)
                searchedList.value = [];
                noItem.value = true;
            }
        }

        watch(() => searchValue.value, (n, o) => {
            clearTimeout(searchTimeout.value);
            searchTimeout.value = setTimeout(() => {
                const filters = {};
                if(n === ""){
                    searchedList.value = [];
                    noItem.value = false;
                } else {
                    filters.land_id = landId.value;
                    filters.keyword = n;
                    loadSearchData(filters);
                }
            }, 300);
        })

        return {
            filterType,
            filterState,
            categories,
            changeFilter,
            searchValue,
            companySlug,
            searchedList,
            noItem,
        }
    }

}
</script>