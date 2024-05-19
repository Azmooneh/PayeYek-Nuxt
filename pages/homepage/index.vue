<template>
    <section
        class="bg-gray-50 dark:bg-gray-900 h-[calc(100vh-61px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <section class="p-4 mx-auto container">
            <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <NuxtLink v-for="item in 5" to="/homepage/product"
                          class="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300">
                    <div class="w-full md:w-36 lg:w-48 xl:w-40 md:flex-none">
                        <div class="relative w-full pt-[75%] md:pt-[100%]">
                            <img class="object-cover size-full absolute top-0 right-0"
                                 src="https://postimage01.divarcdn.com/static/photo/afra/post/v9ef_bRHlO1kD-WC08FS3Q/f5a96689-1d90-4668-8f61-f9ce389a2f89.jpg"
                                 alt="" draggable="false"/>
                        </div>
                    </div>
                    <div class="w-full p-4 flex flex-col justify-around md:justify-between space-y-5 md:space-y-0 md:py-2">
                        <div class="flex items-start gap-4 justify-between md:flex-col md:justify-start md:gap-0">
                            <h2 class="mb-2 line-clamp-2 text-sm md:text-base font-bold font-iran tracking-tight text-gray-900 dark:text-white">
                                کامیون کمپرسی جفت محور 26 تن Shacmoto
                            </h2>
                            <span
                                class="text-nowrap bg-primary-100 text-primary-800 text-[0.7rem] font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200/75 dark:text-primary-800"> اسلام شهر </span>
                        </div>

                        <div class="flex flex-row-reverse justify-between items-center ">
                                <span
                                    class="text-xs md:text-sm inline-flex items-center font-medium text-primary-600 dark:text-primary-500">۴,۸۰۰,۰۰۰ تومان</span>
                            <span class="text-[0.7rem] line-clamp-1 text-gray-900 dark:text-gray-300">۳ ساعت پیش</span>
                        </div>
                    </div>
                </NuxtLink>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Home',
    setup() {
        definePageMeta({
            layout: 'paye1',
        })
    }
}
</script>