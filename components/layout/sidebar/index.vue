<template>
    <aside :class="menuStatus ? 'translate-x-0' : 'translate-x-[100%]'"
        class="fixed top-0 ltr:left-0 rtl:right-0 z-[6] flex flex-col pb-5 px-4 w-64 h-screen pt-6 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:hidden">
        <!-- close menu -->
        <button type="button" class="p-1 mb-2 mr-auto cursor-pointer"
            @click="toggleMenu(false)">
            <svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12L6 6M12 12L18 18M12 12L18 6M12 12L6 18" stroke="#58595B" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>

        <Navbar classNames="flex" />
        <!-- <x-layout.landing.navbar :land="$land" class-names="flex" /> -->

        <!-- <x-layout.landing.social /> -->
        <Socialmedia />
    </aside>
    <!-- Sidebar - Mobile Shadow -->
    <div v-if="menuStatus" @click="toggleMenu(false)"
        class="bg-gray-900 bg-opacity-50 fixed inset-x-0 bottom-0 top-0 z-[5] lg:hidden"></div>
</template>

<script>
import { useCommon } from '~/store/index';
import Navbar from "~/components/layout/header/children/navbar.vue";
import Socialmedia from '~/components/common/socialmedia/index.vue';

export default {
    name: 'Sidebar',
    components: {
        Navbar,
        Socialmedia,
    },
    setup(){
        const layoutStore = useCommon();
        const menuStatus = ref(layoutStore.menuVisiblityStatus);

        const toggleMenu = (status) => {
            layoutStore.toggleMenuStatus(status);
        }

        console.log(layoutStore.menuVisiblityStatus);

        watch(() => layoutStore.menuVisiblityStatus, (n, o) => {
            menuStatus.value = n
        })

        return {
            toggleMenu,
            menuStatus,
        }
    }
}
</script>