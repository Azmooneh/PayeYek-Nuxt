<template>
    <section class="container" v-if="watchLoading">
        <!-- <HeaderSkeleton /> -->
        <!-- slider skeleton -->
        <SliderSkeleton />
        <!-- quick access panel skeleton -->
        <SkeletonQuickAccess />
        <!-- products -->
        <ProductSkeleton />
        <!-- articles -->
        <ArticlesSkeleton />
        <!-- videos -->
        <VideosSkeleton />
    </section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>
    <!-- Render your component content here -->
    <main v-else class="min-h-[calc(100vh-340px)]">
        <!-- <Header />
        <Sidebar /> -->
        <Slider />
        <QuickAccessPAnel />
        <Products />
        <Articles />
        <Videos />
        <Contact />
        <!-- <Footer /> -->
    </main>
</template>

<script>
// import { getApiRequest } from '~/helper/common';
import { useCompanyData, useStyles } from '~/store/index';
import { ref } from 'vue';
import Header from '~/components/layout/header/index.vue';
import HeaderSkeleton from '~/components/layout/header/headerSkeleton.vue';
import Sidebar from '~/components/layout/sidebar/index.vue';
import Slider from '~/components/companyLanding/Slider/index';
import SliderSkeleton from '~/components/companyLanding/Slider/skeleton';
import QuickAccessPAnel from '~/components/companyLanding/quickAccessPanel/index.vue';
import SkeletonQuickAccess from '~/components/companyLanding/quickAccessPanel/skeletonQuickAccess';
import Products from '~/components/companyLanding/products/index';
import ProductSkeleton from '~/components/companyLanding/products/productSkeleton';
import Articles from '~/components/companyLanding/articles/index';
import ArticlesSkeleton from '~/components/companyLanding/articles/articlesSkeleton';
import Videos from '~/components/companyLanding/videos/index';
import VideosSkeleton from '~/components/companyLanding/videos/VideosSkeleton.vue';
import Contact from '~/components/companyLanding/contact/index.vue';
import Footer from '~/components/layout/footer/index.vue';

export default {
    name: 'Company',
    components: {
        Header,
        HeaderSkeleton,
        Sidebar,
        Slider,
        SliderSkeleton,
        QuickAccessPAnel,
        Products,
        SkeletonQuickAccess,
        ProductSkeleton,
        Articles,
        ArticlesSkeleton,
        Videos,
        VideosSkeleton,
        Contact,
        Footer,
    },
    setup() {
        const route = useRoute();
        const companyStore = useCompanyData();
        const styleStore = useStyles();
        const companySlug = ref(route.params.id);
        const loading = ref(true);
        const error = ref(null);
        const pageTitle = ref('پایه یک');
        const pageDescription = ref('پایه یک، تنها مرجع تخصصی برای آشنایی با انواع خودروهای سنگین');
        const ogPageDescription = ref('پایه یک، اولین و تنها مرجع تخصصی در ایران است که به انواع ماشین های سنگین می پردازد و در تلاش است به سوالات بازار، پاسخی جامع دهد.');
        const watchLoading = ref(true);
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
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}`)
                await styleStore.saveStyles(response.data.value.styles) // Wait for saveStyles to finish
                await companyStore.saveCompanyData(response.data.value) // Then save company data
                pageTitle.value = response.data.value.title;
                pageDescription.value = response.data.value.description;
                ogPageDescription.value = response.data.value.description;
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
            error
        }
    }
}
</script>