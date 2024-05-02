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
import {useCommon} from "~/store/index.js";
import breadcrumbSkeleton from "~/components/common/breadcrumbs/breadcrumbSkeleton.vue";
import ArticlesFilter from "~/components/Articles/index.vue";
import filterArticlesSkeleton from "~/components/Articles/filterArticlesSkeleton.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";

export default {
    name: 'Article Single',
    components: {Breadcrumbs, filterArticlesSkeleton, ArticlesFilter, breadcrumbSkeleton},
    setup(){
        const layoutStore = useCommon();
        const articleType = ref(layoutStore.footerData.styles.a_view_type);

        console.log(layoutStore.footerData.styles)
    }
}
</script>