<template>
    <section class="grid grid-cols-1 lg:grid-cols-9 gap-8 mb-16 lg:mb-36 container 2xl:max-w-7xl">
<!--        mobile slider-->
        <div class="mb-2.5 lg:mb-8 sm:container lg:hidden">
            <div class="relative pt-[100%] w-full">
                <div class="absolute size-full bg_skeleton_smooth top-0 left-0 flex_center">
                    <div class="bg_skeleton size-48 rounded-2xl"></div>
                </div>
            </div>
        </div>

<!--        desktop slider-->
        <div class="grid-cols-5 gap-5 hidden lg:grid col-span-6">
<!--            thumbnails-->
            <div class="col-span-1 w-full pt-0.5 content-center">
                <div class="grid grid-cols-1 gap-4">
                    <div v-for="(thumb, index) in 5" :key="index"
                         class="w-full cursor-pointer aspect-video rounded-custom bg_skeleton">
                    </div>
                </div>
            </div>

            <div class="col-span-4">
                <div class="w-full pt-[100%] relative bg_skeleton rounded-custom">
                    <div class="absolute inset-0 cursor-pointer"></div>
                </div>
            </div>
        </div>

<!--        attributes-->
        <section class="lg:col-span-3 lg:px-0">
            <p class="h-7 sm:h-8 mb-8 lg:mb-12 xl:h-10 w-20 sm:w-32 lg:w-40 rounded-full xl:w-48"></p>
<!--            attributes-->
            <ul class="grid grid-cols-2 gap-1 list-none *:px-2 mb-10 lg:mb-[72px]">
                <!-- usage-->
                <li v-for="item in 6" class="h-20 *:h-5 *:rounded-full *:bg_skeleton rounded-custom flex_center flex-col gap-1 bg_skeleton_smooth">
                    <p class="w-20"></p>
                    <p class="w-28"></p>
                </li>
            </ul>

            <section class="flex flex-col items-center gap-2">
                <div class="h-7 bg_skeleton rounded-custom h-11 w-52"></div>
                <div class="h-7 bg_skeleton rounded-custom h-11 w-52"></div>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: "Product Single Skeleton Default",
}
</script>