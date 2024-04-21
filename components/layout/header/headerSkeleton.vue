<template>
    <header class="sticky top-0 z-[4] drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] bg_skeleton_smooth" v-if="!status">
        <section class="flex items-center justify-between gap-5 container h-16 sm:h-20">
            <div class="flex items-center gap-2">
                <!-- hamburger menu -->
                <div class="bg_skeleton rounded-lg cursor-pointer lg:hidden size-8"></div>
                <!-- logo -->
                <div class="sm:flex sm:items-center sm:gap-2">
                    <div class="h-14 sm:h-[72px]">
                        <div class="aspect-square h-full bg_skeleton rounded-full"></div>
                    </div>
                    <div class="hidden sm:flex gap-1 flex-col justify-center max-w-48">
                        <p class="h-5 lg:h-6 w-20 rounded-full bg_skeleton"></p>
                        <p class="h-2.5 lg:h-4 w-12 rounded-md lg:rounded-lg bg_skeleton"></p>
                    </div>
                </div>
            </div>

            <div class="w-28 sm:w-32 h-10 px-0.5 bg_skeletonrounded-custom"></div>
        </section>

        <!-- visible on desktop -->
        <section class="hidden lg:block h-16 bg-[#f5f5f5]">
            <section class="flex_between container h-full">
                <NavbarSkeleton />
                <!-- <Socialmedia /> -->
            </section>
        </section>
    </header>
</template>

<script>
import NavbarSkeleton from "~/components/layout/header/children/navbarSkeleton.vue";
import Socialmedia from '~/components/common/socialmedia/index.vue';

export default {
    name: 'Header',
    components: {
        NavbarSkeleton,
        Socialmedia,
    },
    props: {
        status: Boolean,
    }
}
</script>