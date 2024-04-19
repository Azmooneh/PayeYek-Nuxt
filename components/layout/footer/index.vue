<template>
    <footer class="px-10 py-10 bg-stone-900" v-if="isFilled">
        <section class="container grid grid-cols-1 gap-10 mb-16 md:grid-cols-4 lg:grid-cols-5 md:gap-4 lg:gap-10">
            <!-- about -->
            <section class="flex flex-col gap-4 md:gap-8 lg:col-span-2">
                <p class="text-base font-medium text-white"> درباره شرکت </p>
                <div class="text-sm font-normal leading-7 text-justify text-white">
                    {{ description }}
                </div>
            </section>

            <!-- footer lists -->
            <section
                class="grid grid-cols-1 gap-8 text-white md:grid-cols-3 md:col-span-3 md:gap-4 lg:gap-10 lg:col-span-3">
                <Sections />

                <Categories />
            </section>

        </section>

        <section class="flex-col gap-10 flex_center md:flex-row-reverse md:justify-between default_container">
            <Socialmedia :isInFooter="true" />

            <p class="text-xs font-normal text-center text-white sm:text-sm"> تمامی حقوق این سایت متعلق به نام برند است. © {{ new Intl.DateTimeFormat("fa",{year:"numeric"}).format(Date.now()) }} </p>
        </section>
    </footer>
</template>

<script>
import { useCompanyData, useCommon } from '~/store/index';
import Sections from './children/sections/sections.vue';
import Categories from './children/categories/index.vue';
import Socialmedia from '~/components/common/socialmedia/index.vue';

export default {
    name: 'Footer',
    components: {
        Sections,
        Categories,
        Socialmedia,
    },
    setup() {
        const route = useRoute();
        const companyStore = useCompanyData();
        const layoutStore = useCommon();
        const description = ref(computed(() => layoutStore.footerData.description));
        const isFilled = ref(computed(() => layoutStore.footerData));

        const generateEnName = () => {
            let enTitle = companyStore.companyData.slug;
            // Remove hyphens if they exist and replace with space
            enTitle = enTitle.replace(/-/g, ' ');
            // Convert title to camel case
            enTitle = enTitle.replace(/\b\w/g, (match) => match.toUpperCase());
            // Capitalize the first letter of the first word
            enTitle = enTitle.charAt(0).toUpperCase() + enTitle.slice(1);
            return enTitle;
        }

        const loadData = (company) => {
            useFetch(`${useRuntimeConfig().public.apiBase}/l/${company}/footer`).then(response => {
                layoutStore.saveFooterData(response.data.value);
            })
        }

        if (route.params.id) {
            loadData(route.params.id);
        }

        watch(() => route.params.id, (n, o) => {
            loadData(n);
        })




        return {
            description,
            generateEnName,
            isFilled,
        }
    }
}
</script>