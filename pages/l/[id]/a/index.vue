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

    </main>
</template>

<script>
import breadcrumbSkeleton from "~/components/common/breadcrumbs/breadcrumbSkeleton.vue";
import filterSkeleton from "~/components/products/filter/filterSkeleton.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";
import { ref } from 'vue';

export default {
    name: 'Articles',
    components: {Breadcrumbs, filterSkeleton, breadcrumbSkeleton},
    setup(){
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);
        const breadcrumbs = ref([]);


        const loadData = async () => {
            try {
                loading.value = true;
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/p`)
                if (response.data.value.status == 200) {
                    await categoriesStore.saveCategoriesData(response.data.value.data.categories, response.data.value.data.products.data);
                    breadcrumbs.value = response.data.value.data.breadcrumbs;
                    await updateMetaTags(response.data.value.data.seo);
                }
            } catch (err) {
                error.value = err.message || 'سرور به مشکل خورده است.'
            } finally {
                loading.value = false
            }
        }

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