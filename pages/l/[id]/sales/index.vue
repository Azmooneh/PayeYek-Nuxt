<template>
<!--    <section class="min-h-[calc(100vh-340px)] pt-4" v-if="watchLoading">-->
<!--        <breadcrumbSkeleton />-->

<!--    </section>-->
<!--    &lt;!&ndash; if we have error &ndash;&gt;-->
<!--    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center">-->
<!--        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>-->
<!--        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>-->
<!--    </section>-->
    <!-- Render your component content here -->
    <main class="min-h-[calc(100vh-340px)] pt-4 container">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />

<!--        <section class="container">-->
<!--            <h1 id="sale-title" class="text-center px-8 text-2xl md:text-[32px] font-normal mb-5 md:mb-8 text-normal"> نمایندگی 2111 آرین دیزل </h1>-->
<!--            <h3 id="sale-subtitle" class="text-xl font-normal mb-6 text-stone-700 md:text-2xl"> آرین دیزل </h3>-->
<!--            <p id="sale-desc" class="text-justify text-sm md:text-base md:mb-10 lg:mb-14 font-normal leading-6 md:leading-7 mb-5">-->
<!--                شرکت آرین دیزل پایا به عنوان نماینده رسمی خودروهای سبک تجاری (Light Truck) شرکت جک موتورز در ایران می باشد که با بهره وری از تجارب ارزنده مدیران و مهندسان خویش در عرصه خودروسازی، نسبت به انتخاب و عرضه محصولات کیفی، قابل اطمینان و رقابتی اقدام نموده است. با توجه به خط مشی این شرکت و در راستای کسب حداکثری رضایت مشتریان، شرکت آرین دیزل نسبت به ارائه مدل های مناسب، سخت کار و سازگار با اقلیم ایران با قیمت های رقابتی و شرایط فروش متنوع و نیز خدمات پس از فروش بطور گسترده در سطح کشور اقدام نموده است.-->
<!--            </p>-->
<!--        </section>-->

        <section class="grid grid-cols-1 mb-8 sm:mb-24 lg:mb-28 sm:grid-cols-2 sm:gap-2 lg:gap-5">
            <div class="mb-2 sm:hidden order-1">
                <select class="rounded-custom w-full border border-stone-700/20">
                    <option value="1" selected> تهران </option>
                </select>
            </div>
            <div class="w-full mb-16 h-auto order-2 p-2 rounded-custom bg-white relative sm:mb-0 border border-stone-700/20">
                <Map :clickOnState="clickOnState" />
            </div>
            <ul class="list-none flex flex-col gap-8 order-3 sm:order-1">
                <div class="mb-2 hidden sm:block">
                    <select class="rounded-custom w-full border border-stone-700/20">
                        <option value="1" selected> تهران </option>
                    </select>
                </div>
                 <Branches />
            </ul>
        </section>
    </main>
</template>

<script>
import breadcrumbSkeleton from "~/components/common/breadcrumbs/breadcrumbSkeleton.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";
import {ref} from "vue";
import {useCommon} from "~/store/index.js";
import Branches from "~/components/Sales/Branches/index.vue";
import Map from "~/components/Sales/Map/index.vue";


export default {
    name: 'Sales',
    components: {Breadcrumbs, breadcrumbSkeleton, Branches, Map},
    setup(){
        const layoutStore = useCommon();
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);
        const breadcrumbs = ref([
            {
                title: "نمایندگی فروش",
                url: null,
            }
        ]);
        // const slug = ref(layoutStore.footerData.slug);

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n;
        })

        const clickOnState = id => {
            return false;
        }

        return {
            watchLoading,
            error,
            breadcrumbs,
            clickOnState,
        }
    }
}
</script>