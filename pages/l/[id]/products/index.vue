<template>
    <section class="min-h-[calc(100vh-340px)] pt-4" v-if="watchLoading">
        <breadcrumbSkeleton />

        <filterSkeleton />

        
    </section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>
    <!-- Render your component content here -->
    <main v-else class="min-h-[calc(100vh-340px)] pt-4">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />

        <CategoryFilter />

        <Products />

        <Contact />
    </main>
</template>

<script>
import { ref } from 'vue';
import { useCategory } from '~/store/index';
import CategoryFilter from '~/components/products/filter/index.vue';
import filterSkeleton from '~/components/products/filter/filterSkeleton.vue';
import Products from '~/components/products/products/index.vue';
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
    },
    setup(){
        const route = useRoute();
        const categoriesStore = useCategory();
        const companySlug = ref(route.params.id);
        const loading = ref(true);
        const error = ref(null);
        const pageTitle = ref('پایه یک');
        const pageDescription = ref('پایه یک، تنها مرجع تخصصی برای آشنایی با انواع خودروهای سنگین');
        const ogPageDescription = ref('پایه یک، اولین و تنها مرجع تخصصی در ایران است که به انواع ماشین های سنگین می پردازد و در تلاش است به سوالات بازار، پاسخی جامع دهد.');
        const watchLoading = ref(true);
        const breadcrumbs = ref([]);
        useHead({
            title: pageTitle.value,
            ogTitle: pageTitle.value,
            meta: [
                { name: 'description', content: pageDescription.value },
                { name: 'ogDescription', content: ogPageDescription.value }
            ],
            link: {
                rel: 'canonical',
                href: `https://www.paye1.com${route.path}`
            }
        })

        const loadData = async () => {
            try {
                loading.value = true;
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/p`)
                if (response.data.value.status == 200) {
                    await categoriesStore.saveCategoriesData(response.data.value.data.categories, response.data.value.data.products);
                    breadcrumbs.value = response.data.value.data.breadcrumbs;
                }
                console.log(response.data.value);
                // console.log(response.data.value);
                // console.log(response.data.value.products);
                // console.log(categoriesStore.categories);
                // console.log(categoriesStore.products);
                // pageTitle.value = response.data.value.title;
                // pageDescription.value = response.data.value.description;
                // ogPageDescription.value = response.data.value.description;
            } catch (err) {
                error.value = err.message || 'سرور به مشکل خورده است.'
            } finally {
                loading.value = false
            }
        }


        loadData();

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n
        })

        return {
            loading,
            watchLoading,
            error,
            breadcrumbs,
        }
    }
}
</script>