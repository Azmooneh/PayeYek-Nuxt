<template>
    <section class="relative w-full h-12 sm:w-72">
        <input type="text" v-model="searchValue"
               class="w-full h-full outline-none peer border-b border-x-0 border-t-0 border-b-dark-100 focus:border-b-stone-700 transition-[border] focus:ring-0 pl-10 pr-3 placeholder:text-[#888b93] text-sm font-normal text-stone-700"
               placeholder="جستجو مطلب" />
        <!-- icon-->
        <div class="absolute flex-none w-8 h-8 left-2 top-2 flex_center text-stone-400 peer-focus:text-[#111827]">
            <svg class="size-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.9284 17.0396L20.4016 20.3996M19.2816 11.4396C19.2816 15.7695 15.7715 19.2796 11.4416 19.2796C7.11165 19.2796 3.60156 15.7695 3.60156 11.4396C3.60156 7.1097 7.11165 3.59961 11.4416 3.59961C15.7715 3.59961 19.2816 7.1097 19.2816 11.4396Z"
                    stroke="current" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
        <!-- dropdown search -->
        <div class="absolute text-sm lg:leading-7 font-medium text-stone-700 top-12 inset-x-0 overflow-auto max-h-80 rounded-custom shadow-md bg-white z-[2] list-none" v-if="searchedList.length || noItem">
            <NuxtLink :to="`/l/${companySlug}/a/${searched.slug}`" class="px-4 py-2 cursor-pointer flex_row gap-2 last:before:hidden hover:bg-stone-200 relative before:absolute before:content-[''] before:bottom-0 before:inset-x-4 before:h-px before:bg-gray-200" v-for="(searched, index) in searchedList">
                <div class="aspect-video h-10 sm:h-12 lg:h-14 rounded-custom">
                    <NuxtImg :src="searched.image" format="webp" class="h-full rounded-custom" />
                </div>
                <p class="line-clamp-1 sm:line-clamp-2" v-text="searched.title"></p>
            </NuxtLink>
            <div class="px-4 py-2 cursor-pointer flex_row gap-2 hover:bg-stone-200 relative before:absolute before:content-[''] before:bottom-0 before:inset-x-4 before:h-px before:bg-gray-200" v-if="noItem">
                <div class="aspect-video bg_skeleton h-10 sm:h-12 lg:h-14 rounded-custom">

                </div>
                <p class="line-clamp-1 sm:line-clamp-2"> آیتمی یافت نشد </p>
            </div>
        </div>
    </section>
</template>

<script>
import { useCommon } from "~/store/index.js"

export default {
    name: "Article Search",
    setup(){
        const layoutStore = useCommon();
        const companySlug = ref(layoutStore.footerData.slug);
        const searchValue = ref("");
        const activeFilters = {};
        const str = ref("");
        const landId = ref(layoutStore.footerData.styles.land_id);
        const searchedList = ref([]);
        const noItem = ref(false);

        const loadSearchData = async (word) => {
            try {
                activeFilters.land_id = landId.value;
                activeFilters.keyword = word;
                str.value = Object.keys(activeFilters).map(key => `${key}=${encodeURIComponent(activeFilters[key])}`).join("&");
                const response = await $fetch(`${useRuntimeConfig().public.apiBase}/l/a/search?${str.value}`)
                if (response && response.status == 200 && response.data.length > 0) {
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
            if(n !== ""){
                loadSearchData(n);
            } else {
                searchedList.value = [];
                noItem.value = false;
            }
        })


        return {
            searchValue,
            searchedList,
            companySlug,
            noItem,
        }
    }
}
</script>