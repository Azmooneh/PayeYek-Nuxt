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
import { useCompanyData } from '~/store/index';
import { ref } from 'vue';
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

export default {
    name: 'Company',
    components: {
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
    },
    setup() {
        const route = useRoute();
        const companyStore = useCompanyData();
        const companySlug = ref(route.params.id);
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);

        const updateMetaTags = (seo) =>{
            console.log(seo)
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

        const loadData = async () => {
            try {
                loading.value = true;
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}`);
                if(response.data.value.status == 200){
                    await companyStore.saveCompanyData(response.data.value.data) // Then save company data
                    await updateMetaTags(response.data.value.data.seo);
                }
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