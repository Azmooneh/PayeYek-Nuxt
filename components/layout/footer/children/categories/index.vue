<template>
    <section class="flex flex-col md:gap-8">
        <div class="flex items-center justify-between">
            <p class="text-base font-medium"> {{ categories.title }} </p>
            <button type="button" class="cursor-pointer md:hidden" @click="toggleState">
                <svg :class="toggleDropdown ? 'rotate-180' : 'rotate-0'" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 14L11.9992 9.42L7 14" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </div>
        <div class="flex flex-col gap-4 overflow-hidden duration-300"
            :class="toggleDropdown ? 'py-4 md:py-0 max-h-60 md:max-h-full' : 'py-0 max-h-0 md:max-h-full'">
            <NuxtLink v-for="(page, index) in categories.items" :key="index" :to="`/l/${companySlug}/p?f=${page.slug}`"> {{ page.title }} </NuxtLink>
        </div>
    </section>
</template>

<script>
import { useCommon } from '~/store/index';

export default {
    name: 'Categories',
    setup() {
        const toggleDropdown = ref(false);
        const layoutStore = useCommon();
        const categories = ref([]);
        const companySlug = ref(layoutStore.footerData.slug);

        if (layoutStore.footerData.category.length > 0) {
            const obj = {
                title: 'انواع محصولات',
                items: layoutStore.footerData.category,
            }
            categories.value = obj;
        }

        const toggleState = () => {
            toggleDropdown.value = !toggleDropdown.value;
        }

        return {
            companySlug,
            toggleDropdown,
            toggleState,
            categories,
        }
    }
}
</script>