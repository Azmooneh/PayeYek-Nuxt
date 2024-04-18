<template>
    <footer class="bg-stone-900 px-10 py-10">
        <section class="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-4 mb-16 lg:gap-10">
            <!-- about -->
            <section class="flex flex-col gap-4 md:gap-8 lg:col-span-2">
                <p class="text-white text-base font-medium"> درباره شرکت </p>
                <div class="text-sm font-normal text-white leading-7 text-justify">
                    {{ description }}
                </div>
            </section>

            <!-- footer lists -->
            <section
                class="grid grid-cols-1 md:grid-cols-3 md:col-span-3 gap-8 md:gap-4 lg:gap-10 text-white lg:col-span-3">
                <Sections :data="footerList" />

                <Categories :data="categories" />
            </section>

        </section>
    </footer>
</template>

<script>
import { useCompanyData } from '~/store/index';
import Sections from './children/sections/sections.vue';
import Categories from './children/categories/index.vue';

export default {
    name: 'Footer',
    components: {
        Sections,
        Categories,
    },
    setup() {
        const route = useRoute();
        const companyStore = useCompanyData();
        const slug = ref("");
        const logo = ref("");
        const title = ref("");
        const description = ref("");
        const categories = ref([]);

        const footerList = [
            {
                title: 'دسترسی سریع',
                items: [
                    {
                        title: 'محصولات',
                        slug: `/l/${slug.value}products`
                    },
                    {
                        title: 'درباره ما',
                        slug: `/l/${slug.value}about`
                    },
                ],
            },
            {
                title: 'دانستنی',
                items: [
                    {
                        title: 'نمایندگی فروش مجاز',
                        slug: `/l/${slug.value}`
                    },
                    {
                        title: 'اطلاعیه های فروش',
                        slug: `/l/${slug.value}articles?f=sell`
                    },
                    {
                        title: 'مطالب وبلاگ',
                        slug: `/l/${slug.value}articles?f=blog`
                    },
                ],
            },
        ]

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

        useFetch(`${useRuntimeConfig().public.apiBase}/l/${route.params.id}/footer`).then(response => {
            slug.value = response.data.value.slug;
            logo.value = response.data.value.logo;
            title.value = response.data.value.title;
            description.value = response.data.value.description;

            if (response.data.value.category.length > 0) {
                const obj = {
                    title: 'انواع محصولات',
                    items: response.data.value.category,
                }
                categories.value = obj;
                // console.log(categories.value);
            }
        })


        return {
            logo,
            title,
            description,
            slug,
            generateEnName,
            footerList,
            categories,
        }
    }
}
</script>