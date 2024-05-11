<template>
    <section class="mb-10 lg:mb-20 container">
        <h3 class="leading-7 lg:leading-8 bg_skeleton mb-4 lg:mb-8"></h3>
        <section class="grid grid-cols-1 lg:grid-cols-10 gap-5 drop-shadow-smooth bg_skeleton_smooth rounded-custom">
            <section class="lg:col-span-6 p-6 lg:pb-12">
                <section class="flex flex-col max-w-[33rem] w-full mx-auto">
                    <!-- vehicle price amount -->
                    <section class="mb-8 lg:mb-12">
                        <p class="h-5 w-24 rounded-full mr-4 bg_skeleton mb-4"></p>
                        <div class="w-full h-12 mb-6 font-medium text-sm flex_between px-6">
                            <!-- decrease -->
                            <div class="p-2 text-[#1EA0FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" class="size-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"/>
                                </svg>
                                <span class="sr-only"> decrease </span>
                            </div>
                            <p class="h-7 lg:h-9 sm:h-8 w-40 rounded-full bg_skeleton"></p>
                            <!-- increase -->
                            <div class="p-2 text-[#1EA0FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" class="size-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12 4.5v15m7.5-7.5h-15"/>
                                </svg>
                                <span class="sr-only"> increase </span>
                            </div>
                        </div>
                        <div class="h-2 w-full bg_Skeleton rounded-full mb-4"></div>
                        <div class="flex items-center justify-between mb-4">
                            <p class="h-5 w-16 rounded-full bg_skeleton"></p>
                            <p class="h-5 w-16 rounded-full bg_skeleton"></p>
                        </div>
                    </section>

                    <!-- payment duration -->
                    <section class="mb-8 lg:mb-12">
                        <p class="h-5 mr-4 mb-4 relative w-24 bg_skeleton rounded-full"></p>

                        <section class="flex_center gap-2 *:h-12 *:rounded-custom *:w-12 *:sm:w-24 *:lg:w-20 *:bg_skeleton">
                            <div v-for="box in 5"></div>
                        </section>
                    </section>

                    <!-- custom profit-->
                    <section class="flex flex-col gap-4">
                        <!--  inital profit-->
                        <div class="flex items-center gap-3 cursor-pointer">
                            <div class="size-4 rounded-full bg_skeleton"></div>
                            <span class="h-5 w-20 rounded-full bg_skeleton"></span>
                        </div>
                        <!--  custom profit-->
                        <div class="flex flex-col sm:flex-row gap-4 sm:gap-8">
                            <div class="flex items-center gap-3 cursor-pointer sm:flex-none">
                                <div class="size-4 rounded-full bg_skeleton"></div>
                                <span class="h-5 w-20 bg_skeleton rounded-full"></span>
                            </div>

                            <section class="flex-1 rounded-custom mx-auto sm:mx-0 bg_skeleton h-11 flex items-center">
                                <!-- decrease-->
                                <div class="flex_center size-11 bg_skeleton flex-none border-l border-stone-400"></div>
                                <div class="w-full max-w-80 bg_skeleton h-full"></div>
                                <!-- increase-->
                                <div class="flex_center size-11 flex-none bg_skeleton border-r border-stone-400"></div>
                            </section>
                        </div>
                    </section>
                </section>
            </section>

            <!-- total -->
            <section class="lg:col-span-4 bg-stone-200 rounded-b-custom lg:rounded-t-custom">
                <section
                    class="text-sm font-normal px-4 py-6 lg:py-12 lg:px-10 lg:flex lg:flex-col lg:h-full lg:justify-between">
                    <section>
                        <div class="flex_between mb-4 lg:mb-6">
                            <p class="h-6 lg:h-7 rounded-full bg_skeleton"></p>
                        </div>
                        <ul class="list-none mb-6">
                            <li class="border-b border-b-white py-4 flex_between gap-4" v-for="item in 4">
                                <p class="h-5 w-14 rounded-full bg_skeleton"></p>
                                <div class="flex_row gap-2 sm:gap-4">
                                    <p class="h-5 w-12 bg_skeleton rounded-full"></p>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <div class="mx-auto rounded-custom flex_center h-12 w-72 bg_skeleton"></div>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Calculator Skeleton default',
}
</script>