<template>
    <section class="min-h-[calc(100vh-340px)] pt-4" v-if="watchLoading">
        <breadcrumbSkeleton/>

        <filterSkeleton/>

        <productSkeleton/>
    </section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>
    <!-- Render your component content here -->
    <main v-else class="min-h-[calc(100vh-340px)] pt-4">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>

        <CategoryFilter/>

        <Products/>

        <Contact/>
    </main>
</template>

<script>
import {ref} from 'vue';
import {useCategory} from '~/store/index';
import CategoryFilter from '~/components/products/filter/index.vue';
import filterSkeleton from '~/components/products/filter/filterSkeleton.vue';
import Products from '~/components/products/products/index.vue';
import productSkeleton from '~/components/products/products/productSkeleton.vue';
import Contact from '~/components/companyLanding/contact/index.vue';
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue';
import breadcrumbSkeleton from '~/components/common/breadcrumbs/breadcrumbSkeleton.vue';

export default {
    name: 'Product Categories',
    components: {
        CategoryFilter,
        Products,
        Contact,
        filterSkeleton,
        Breadcrumbs,
        breadcrumbSkeleton,
        productSkeleton,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const categoriesStore = useCategory();
        const companySlug = ref(route.params.id);
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);
        const breadcrumbs = ref([]);
        const prevQuery = ref(route.query.page);
        const activeFilters = {};
        const str = ref("");

        const updateMetaTags = (seo) => {
            useHead({
                meta: [
                    {hid: 'robots', name: 'robots', content: seo.robot},
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

        const loadData = async (filter = '') => {
            try {
                loading.value = true;
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/p${filter}`)
                if (response.data.value.status == 200) {
                    console.log(response.data.value)
                    await categoriesStore.saveCategoriesData(response.data.value.data.products);
                    await updateMetaTags(response.data.value.seo);
                    breadcrumbs.value = response.data.value.breadcrumbs;
                }
            } catch (err) {
                error.value = err.message || 'سرور به مشکل خورده است.'
            } finally {
                loading.value = false
            }
        }

        loadData();

        const handlePageChange = (page) => {
            activeFilters.page = page;
            str.value = Object.keys(activeFilters).map(key => `${key}=${encodeURIComponent(activeFilters[key])}`).join("&");
            loadData(`?${str.value}`);
            router.push({ path: route.path, query: activeFilters });
        };

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n
        })

        if (prevQuery.value) {
            handlePageChange(prevQuery.value);
        } else {
            loadData();
        }

        // definePageMeta({
        //     middleware: ["redirect"]
        // })

        return {
            loading,
            watchLoading,
            error,
            breadcrumbs,
        }
    }
}
</script>