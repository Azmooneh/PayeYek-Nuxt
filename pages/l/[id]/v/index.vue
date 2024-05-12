<template>
    <section class="min-h-[calc(100vh-340px)] pt-4" v-if="watchLoading">
        <breadcrumbSkeleton />

        <VideosSkeleton />

    </section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>

    <!-- Render your component content here -->
    <main v-else class="min-h-[calc(100vh-340px)] pt-4">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />

        <section class="pt-4 relative mb-8 sm:mb-24 lg:mb-28 container">
            <section class="flex flex-col gap-4 mb-8 lg:mb-16 sm:flex-row-reverse sm:justify-between sm:items-center">
                <form @submit.prevent="activeFilter('keyword')" class="relative w-full h-12 sm:w-72">
                    <input type="text"
                           class="w-full h-full outline-none border-b border-x-0 border-t-0 border-b-dark-100 focus:ring-0 focus:border-b-stone-700 transition-[border] peer pl-10 pr-3 placeholder:text-[#888b93] text-sm font-normal text-stone-700"
                           placeholder="جستجو مطلب" v-model="initialSearch" />
                    <button type="submit" class="absolute flex-none w-8 h-8 left-2 top-2 flex_center text-stone-400 peer-focus:text-[#111827]">
                        <svg class="size-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.9284 17.0396L20.4016 20.3996M19.2816 11.4396C19.2816 15.7695 15.7715 19.2796 11.4416 19.2796C7.11165 19.2796 3.60156 15.7695 3.60156 11.4396C3.60156 7.1097 7.11165 3.59961 11.4416 3.59961C15.7715 3.59961 19.2816 7.1097 19.2816 11.4396Z"
                                stroke="current" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                </form>

                <ul class="flex items-center flex-wrap gap-x-2 gap-y-4 list-none text-base font-medium *:rounded-custom *:flex_center *:h-8 *:px-3 *:cursor-pointer *:border *:border-stone-700 *:text-stone-700">
                    <li :class="activeSort === 'asc' ? '!bg-normal !text-white !border-0' : ''" @click="activeFilter('sort', 'asc')"> جدید ترین </li>
                    <li :class="activeSort === 'desc' ? '!bg-normal !text-white !border-0' : ''" @click="activeFilter('sort', 'desc')"> قدیمی ترین </li>
                </ul>
            </section>

            <ul class="grid grid-cols-1 md:grid-cols-2 list-none lg:w-full gap-4">
                <li v-for="(video, index) in videoList" :key="index" class="relative w-full pt-[56%] cursor-pointer rounded-custom overflow-hidden videoThumbnails" @click="showVideoByThumbnail(video.link)">
                    <NuxtImg :src="video.image" :alt="video.alt" class="absolute top-0 left-0 w-full h-full object-cover z-[1]" width="753" height="404" format="webp" />
                    <!-- play icon -->
                    <PlayIcon classNames="size-14 sm:size-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]" />
                    <div class="absolute text-white bottom-0 left-0 w-full z-[2] flex flex-col justify-end px-4 pb-5 bg-gradient-to-t from-black to-transparent h-1/2">
                        <p class="w-full text-sm font-medium sm:text-lg line-clamp-1 select-none"> {{ video.alt }} </p>
                    </div>
                </li>
            </ul>

            <Pagination :landSlug="companySlug" :productPagination="videoPagination" @page-change="handlePageChange" classNames="mt-8" v-if="videoList.length > 10" />

            <!-- video modal -->
            <section class="fixed flex_center inset-0 z-[4] bg-black/60" v-if="videoModal !== ''" @click="hideVideoByThumbnail">
                <div class="w-full max-w-[640px] lg:max-w-[796px] xl:max-w-[900px] 2xl:max-w-[1024px] iframe_styles flex_center"
                     id="ifame-box" v-html="videoModal">
                </div>
            </section>
        </section>
    </main>
</template>

<script>
import breadcrumbSkeleton from "~/components/common/breadcrumbs/breadcrumbSkeleton.vue";
import Section from "~/components/layout/footer/children/sections/section.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";
import {ref, onMounted, onUnmounted} from "vue";
import PlayIcon from "~/components/kit/Icons/PlayIcon.vue";
import VideosSkeleton from "~/components/videos/videosSkeleton.vue";
import Pagination from "~/components/common/pagination/index.vue";

export default {
    name: 'Videos',
    components: {Pagination, PlayIcon, Breadcrumbs, Section, breadcrumbSkeleton, VideosSkeleton},
    setup(){
        const route = useRoute();
        const router = useRouter();
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);
        const breadcrumbs = ref([]);
        const companySlug = ref(route.params.id);
        const activeFilters = ref(computed(()=> route.query));
        const videoList = ref([]);
        const videoPagination = ref({});
        const searchFilterState = ref(computed(() => {
            if(route.query.keyword){
                return route.query.keyword;
            } else {
                return "";
            }
        }));
        const initialSearch = ref(searchFilterState.value);
        const activeSort = ref(computed(() => {
            if(!!route.query.sort){
                return route.query.sort;
            } else {
                return "asc";
            }
        }));
        const videoModal = ref("");

        const showVideoByThumbnail = (link) => {
            videoModal.value = link;
        }

        const hideVideoByThumbnail = () => {
            videoModal.value = "";
        }

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

        const loadData = async (obj) => {
            try {
                loading.value = true;
                const filters = Object.keys(obj).map(key => `${key}=${encodeURIComponent(obj[key])}`).join("&");
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/videos?${filters}`);
                console.log(response.data.value);
                if (response.data.value && response.data.value.status == 200) {
                    breadcrumbs.value = response.data.value.breadcrumbs;
                    await updateMetaTags(response.data.value.seo);
                    videoList.value = response.data.value.data.videos;
                    videoPagination.value = response.data.value.data.pagination;
                }
            } catch (err) {
                error.value = err.message || 'سرور به مشکل خورده است.'
            } finally {
                loading.value = false;
            }
        }

        loadData(activeFilters.value);

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n;
        })

        const activeFilter = (type, value) => {
            const obj = {...activeFilters.value};
            if(type === 'sort'){
                obj.sort = value;
                activeSort.value = value;
            } else if (type === 'keyword'){
                obj.keyword = initialSearch.value;
            }
            loadData(obj);
            router.push({ query: obj });
        }

        watch(() => initialSearch.value, (n, o) => {
            initialSearch.value = n;
        })

        const handlePageChange = (page) => {
            const obj = {...activeFilters.value};
            obj.page = page;
            loadData(obj);
            router.push({ query: obj });
        }

        return{
            error,
            watchLoading,
            breadcrumbs,
            videoList,
            initialSearch,
            activeSort,
            showVideoByThumbnail,
            hideVideoByThumbnail,
            videoModal,
            activeFilter,
            companySlug,
            handlePageChange,
            videoPagination,
        }
    }
}
</script>