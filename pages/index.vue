<template>
    <main class="pt-20 pb-6 sm:pb-10 container font-iran">
        <img src="https://paye1.com/assets/landing/logo.png" alt="paye1" class="h-24 mb-10 mx-auto sm:mb-14" />
        <p class="text-justify leading-9 max-w-md mx-auto text-gray-800 mb-10 px-4">
            پایه یک، تنها مرجع تخصصی برای آشنایی با انواع خودروهای سنگین
            <strong class="text-red-700"> بزودی در دسترس شما خواهد بود... </strong>
        </p>
        <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl lg:mx-auto gap-2">
            <company :companyList="companies" :status="companiesLoaded" />
            <!-- skeleton -->
            <skeleton :status="!companiesLoaded" />
        </section>
    </main>
</template>

<script>
import company from '~/components/landing/company.vue';
import skeleton from '~/components/landing/skeleton.vue';
import { getApiRequest } from '~/helper/common';
import { ref } from 'vue';

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

        // console.log(useRuntimeConfig().public.apiBase);
        const loadData = () => {
            companiesLoaded.value = false;

            useFetch(`${useRuntimeConfig().public.apiBase}/l/pages`, {
                method: 'get',
            }).then(response => {
                companies.value = response.data.value;
                companiesLoaded.value = true;
            })

            // getApiRequest('l/pages').then(response => {
            //     console.log(response.data.value);
            //     companies.value = response.data.value;
            //     companiesLoaded.value = true;
            // })
        }

        loadData();

        return {
            companies,
            companiesLoaded,
        }
    }
}
</script>