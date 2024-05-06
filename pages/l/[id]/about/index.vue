<template>
    <section class="min-h-[calc(100vh-340px)] pt-4" v-if="watchLoading">
        <breadcrumbSkeleton/>

    </section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>
    <!-- Render your component content here -->
    <main v-else class="min-h-[calc(100vh-340px)] pt-4">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>

        <section class="container">
            <h2 class="text-stone-700 mb-4 text-lg sm:text-xl lg:text-2xl font-medium"> درباره ما </h2>
            <article class="overflow-hidden custom_article_styles cursor-default custom_table_striped_container" v-html="content"></article>
        </section>
    </main>
</template>
<script>
import breadcrumbSkeleton from "~/components/common/breadcrumbs/breadcrumbSkeleton.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";
// import {useCommon} from '~/store/index';
import {ref} from "vue";
import Section from "~/components/layout/footer/children/sections/section.vue";

export default {
    name: 'About Us',
    components: {
        Section,
        Breadcrumbs,
        breadcrumbSkeleton,
    },
    setup() {
        const route = useRoute();
        // const layoutStore = useCommon();
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);
        const breadcrumbs = ref([]);
        const companySlug = ref(route.params.id);
        const content = ref("");

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
        };

        const loadData = async (company) => {
            try {
                loading.value = true;
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${company}/about`)
                console.log(response.data.value);
                if (response.data.value.status == 200) {
                    content.value = response.data.value.data.about_us;
                    updateMetaTags(response.data.value.data.seo);
                    breadcrumbs.value = response.data.value.data.breadcrumbs;
                }
            } catch (err) {
                error.value = err.message || 'سرور به مشکل خورده است.'
            } finally {
                loading.value = false
            }
        };

        loadData(companySlug.value);

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n
        })

        return {
            error,
            watchLoading,
            breadcrumbs,
            content,
        }
    }
}
</script>