<template>
    <section>
        <header class="sticky top-0 z-[4] drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] bg-white" v-if="status">
            <section class="container flex items-center justify-between h-16 gap-5 sm:h-20">
                <div class="flex items-center gap-2">
                    <!-- hamburger menu -->
                    <button @click="toggleMenu(true)"
                        class="p-1 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400">
                        <HamburgerMenu />
                        <span class="sr-only">Toggle sidebar</span>
                    </button>
                    <!-- logo -->
                    <NuxtLink :to="`/l/${slug}`" class="sm:flex sm:items-center sm:gap-2">
                        <div class="h-14 sm:h-[72px]">
                            <img :src="logo" :alt="title" class="object-contain h-full" />
                        </div>
                        <div class="flex-col justify-center hidden sm:flex max-w-48">
                            <h3 class="text-sm font-bold lg:text-base font-iran"> {{ title }} </h3>
                            <h4 class="text-[10px] lg:text-xs text-gray-500 font-inter text-start">
                                {{ generateEnName() }}
                            </h4>
                        </div>
                    </NuxtLink>
                </div>
    
                <!-- term of sale -->
                <NuxtLink
                    class="w-28 sm:w-32 h-10 px-0.5 text-sm sm:text-base font-normal text-white bg-normal hover:bg-focus focus:bg-focus focus:shadow-focus focus:shadow-shadowNormal rounded-custom flex_center"
                    :to="`/l/${slug}/articles?f=sell`"> شرایط فروش </NuxtLink>
            </section>
    
            <!-- visible on desktop -->
            <section class="hidden lg:block h-16 bg-[#f5f5f5]">
                <section class="container h-full flex_between">
                    <Navbar classNames="flex" />
                    <Socialmedia />
                </section>
            </section>
        </header>
    
        <HeaderSkeleton :status="status" />
    </section>
</template>

<script>
import { NuxtLink } from "#components";
import { useCommon } from '~/store/index';
import Navbar from "~/components/layout/header/children/navbar.vue";
import Socialmedia from '~/components/common/socialmedia/index.vue';
import HamburgerMenu from "~/components/kit/Icons/HamburgerMenu.vue";
import HeaderSkeleton from '~/components/layout/header/headerSkeleton.vue';

export default {
    name: 'Header',
    components: {
        Navbar,
        Socialmedia,
        HamburgerMenu,
        HeaderSkeleton,
    },
    setup(){
        const layoutStore = useCommon();
        const slug = ref(computed(() => layoutStore.footerData.slug));
        const logo = ref(computed(() => layoutStore.footerData.logo));
        const title = ref(computed(() => layoutStore.footerData.title));
        const status = ref();
        const isFilled = ref(computed(() => {
            if(!!layoutStore.footerData){
                return true;
            } else {
                return false;
            }
        }));
        
        if(isFilled.value){
            status.value = isFilled.value;
        }
        
        watch(() => isFilled.value, (n, o) => {
            status.value = n;
        })
        // console.log(isFilled.value);
        const toggleMenu = (status) => {
            layoutStore.toggleMenuStatus(status);
        }

        const generateEnName = () => {
            let enTitle = layoutStore.footerData.slug;
            // Remove hyphens if they exist and replace with space
            enTitle = enTitle.replace(/-/g, ' ');
            // Convert title to camel case
            enTitle = enTitle.replace(/\b\w/g, (match) => match.toUpperCase());
            // Capitalize the first letter of the first word
            enTitle = enTitle.charAt(0).toUpperCase() + enTitle.slice(1);
            return enTitle;
        }

        return {
            slug,
            logo,
            title,
            toggleMenu,
            generateEnName,
            isFilled,
            status,
        }
    }
}
</script>