<template>
    <section class="min-h-[calc(100vh-340px)] pt-4" v-if="watchLoading">
        <breadcrumbSkeleton />

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
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";
import {ref} from "vue";
import { useCommon } from "~/store/index.js";

export default {
    name: "Sale Notice",
    components: {
        Breadcrumbs,
        breadcrumbSkeleton,
    },
    setup(){
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);
        const breadcrumbs = ref([]);

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n;
        });

        return {
            watchLoading,
            error,
            breadcrumbs,
        }
    }
}
</script>