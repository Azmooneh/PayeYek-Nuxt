<template>
    <section class="container" v-if="loading">
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
    <section v-else-if="error" class="flex_center w-full h-screen flex-col gap-4">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-center text-base caption_color font-medium"> ارور: {{ error }} </p>
    </section>
    <!-- Render your component content here -->
    <main v-else>
        <Header />
        <Sidebar />
        <Slider />
        <Theme1 />
        <Products />
        <Articles />
        <Videos />
        <Contact />
    </main>
</template>

<script>
import { getApiRequest } from '~/helper/common';
import { useCompanyData, useStyles } from '~/store/index';
import { ref } from 'vue';
import Header from '~/components/layout/header/index.vue';
import Sidebar from '~/components/layout/sidebar/index.vue';
import Slider from '~/components/companyLanding/Slider/index';
import SliderSkeleton from '~/components/companyLanding/Slider/skeleton';
import Theme1 from '~/components/companyLanding/quickAccessPanel/theme1';
import SkeletonQuickAccess from '~/components/companyLanding/quickAccessPanel/skeletonQuickAccess';
import Products from '~/components/companyLanding/products/index';
import ProductSkeleton from '~/components/companyLanding/products/productSkeleton';
import Articles from '~/components/companyLanding/articles/index';
import ArticlesSkeleton from '~/components/companyLanding/articles/articlesSkeleton';
import Videos from '~/components/companyLanding/videos/index';
import VideosSkeleton from '~/components/companyLanding/videos/VideosSkeleton.vue';
import Contact from '~/components/companyLanding/contact/index.vue';

export default {
    name: 'Company',
    components: {
        Header,
        Sidebar,
        Slider,
        SliderSkeleton,
        Theme1,
        Products,
        SkeletonQuickAccess,
        ProductSkeleton,
        Articles,
        ArticlesSkeleton,
        Videos,
        VideosSkeleton,
        Contact,
    },
    setup() {
        const route = useRoute();
        const companyStore = useCompanyData();
        const styleStore = useStyles();
        const companySlug = ref(route.params.id);
        const loading = ref(true)
        const error = ref(null)

        const loadData = async () => {
            try {
                const response = await getApiRequest(`l/${companySlug.value}`)
                await styleStore.saveStyles(response.styles) // Wait for saveStyles to finish
                await companyStore.saveCompanyData(response) // Then save company data
            } catch (err) {
                error.value = err.message || 'سرور به مشکل خورده است.'
            } finally {
                loading.value = false
            }
        }

        loadData();

        return {
            loading,
            error
        }
    }
}
</script>