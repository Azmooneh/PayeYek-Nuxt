<template>
    <main class="container pt-20 pb-6 sm:pb-10 font-iran">
        <img src="https://paye1.com/assets/landing/logo.png" alt="paye1" class="h-24 mx-auto mb-10 sm:mb-14" />
        <h1 class="max-w-md px-4 mx-auto mb-10 leading-9 text-justify text-gray-800">
            پایه یک، تنها مرجع تخصصی برای آشنایی با انواع خودروهای سنگین
            <strong class="text-red-700"> بزودی در دسترس شما خواهد بود... </strong>
        </h1>
        <section class="grid max-w-5xl grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:mx-auto">
            <company :companyList="companies" v-if="companiesLoaded" />
            <!-- skeleton -->
            <skeleton v-else />
        </section>
    </main>
</template>

<script>
import company from '~/components/landing/company.vue';
import skeleton from '~/components/landing/skeleton.vue';
// import { getApiRequest } from '~/helper/common';
import { ref } from 'vue';
import { onBeforeRouteLeave } from '#vue-router';
import { useCompanyData, useCommon } from '~/store/index';

export default {
    name: 'home',
    components: {
        company,
        skeleton,
    },
    setup(){
        const pageTitle = ref('پایه یک');
        const pageDescription = ref('پایه یک، تنها مرجع تخصصی برای آشنایی با انواع خودروهای سنگین');
        const ogPageDescription = ref('پایه یک، اولین و تنها مرجع تخصصی در ایران است که به انواع ماشین های سنگین می پردازد و در تلاش است به سوالات بازار، پاسخی جامع دهد.');
        const companyStore = useCompanyData();
        const layoutStore = useCommon();
        const companies = ref([]);
        const companiesLoaded = ref(false);
        const route = useRoute();
        

        definePageMeta({
            layout: 'landing',
        })

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

        const loadData = () => {
            companiesLoaded.value = false;
            useFetch(`${useRuntimeConfig().public.apiBase}/l/pages`, {
                method: 'get',
            }).then(response => {
                companies.value = response.data.value;
                companiesLoaded.value = true;
            })
        }

        loadData();

        const clearStoreData = () => {
            companyStore.companyData = {};
            companyStore.slides = null;
            companyStore.products = null;
            companyStore.articles = null;
            companyStore.videos = null;
            layoutStore.footerData = null;
        };

        onBeforeRouteLeave((to, from, next) => {
            clearStoreData();
            next();
        });

        return {
            companies,
            companiesLoaded,
        }
    }
}
</script>