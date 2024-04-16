<template>
    <section class="container" v-if="loading">
        <!-- skeleton -->
        <section class="relative pt-[56%] w-full mb-8">
            <div class="absolute top-0 right-0 w-full h-full bg_skeleton rounded-b-custom"></div>
        </section>
    </section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex_center w-full h-screen flex-col gap-4">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-center text-base caption_color font-medium"> ارور: {{ error }} </p>
    </section>
    <!-- Render your component content here -->
    <main v-else>
        <Slider />

    </main>
</template>

<script>
import { getApiRequest } from '~/helper/common';
import { useCompanyData, useStyles } from '~/store/index';
import { ref, onMounted } from 'vue';
import Slider from '~/components/companyLanding/Slider/index';

export default {
    name: 'Company',
    components: {
        Slider,
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