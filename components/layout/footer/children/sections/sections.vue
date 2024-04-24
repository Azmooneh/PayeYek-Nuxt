<template>
    <section class="flex flex-col md:gap-8" v-for="(section, index) in footerList" :key="index">
        <Section :data="section" />
    </section>
</template>

<script>
import Section from './section.vue';
import { useCommon } from '~/store/index';

export default {
    name: 'Sections',
    components: {
        Section,
    },
    setup(){
        const layoutStore = useCommon();
        const footerList = ref([
            {
                title: 'دسترسی سریع',
                items: [
                    {
                        title: 'محصولات',
                        slug: `/l/${layoutStore.footerData.slug}/p`
                    },
                    {
                        title: 'درباره ما',
                        slug: `/l/${layoutStore.footerData.slug}/about`
                    },
                ],
            },
            {
                title: 'دانستنی',
                items: [
                    {
                        title: 'نمایندگی فروش مجاز',
                        slug: `/l/${layoutStore.footerData.slug}`
                    },
                    {
                        title: 'اطلاعیه های فروش',
                        slug: `/l/${layoutStore.footerData.slug}/a?f=sell`
                    },
                    {
                        title: 'مطالب وبلاگ',
                        slug: `/l/${layoutStore.footerData.slug}/a?f=blog`
                    },
                ],
            },
        ]);
        
        return {
            footerList,
        }
    }
}
</script>