<template>
    <div v-if="loading">Loading...</div>
    <!-- if we have error -->
    <section v-else-if="error" class="flex_center w-full h-screen flex-col gap-4">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-center text-base caption_color font-medium"> ارور: {{ error }} </p>
    </section>
    <!-- data -->
    <div v-else>
        <!-- Render your component content here -->
    </div>
</template>

<script>
import { getApiRequest } from '~/helper/common';
import { useCompanyData, useStyles } from '~/store/index';
import { ref, onMounted } from 'vue';

export default {
    name: 'Company',
    setup() {
        const route = useRoute();
        const companyStore = useCompanyData();
        const companySlug = ref(route.params.id);
        const styleStore = useStyles();
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