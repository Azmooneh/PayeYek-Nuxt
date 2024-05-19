<template>
    <section class="bg-gray-50 dark:bg-gray-900 h-[calc(100%_-_65px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <section class="p-4 mx-auto max-w-screen-xl">
            <section class="grid gap-4 lg:grid-cols-2">
                <NuxtLink v-for="item in 5" to="/homepage/product" class="overflow-auto flex md:flex-row bg-white rounded-lg border border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-500">
                    <img class="shrink-0 object-cover size-56 md:size-56 lg:size-60"
                         src="https://postimage01.divarcdn.com/static/photo/afra/post/v9ef_bRHlO1kD-WC08FS3Q/f5a96689-1d90-4668-8f61-f9ce389a2f89.jpg"
                         alt="" />
                    <div class="w-full p-6 flex flex-col justify-around space-y-5">
                        <div class="flex justify-between items-center text-gray-500 gap-1">
                            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                <span class="text-nowrap bg-primary-100 text-primary-800 text-[0.7rem] font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200/75 dark:text-primary-800"> اسلام شهر </span>
                            </div>
                            <span class="text-[0.7rem] line-clamp-1">۳ ساعت پیش</span>
                        </div>

                        <div class="flex-1">
                            <h2 class="mb-2 line-clamp-2 text-sm md:text-base font-bold font-iran tracking-tight text-gray-900 dark:text-white">
                                بنز، S500 <span class="text-gray-300 dark:text-gray-700 px-1">|</span> تمیز و کم کار
                            </h2>
                            <div class="line-clamp-2 items-center text-xs md:text-sm font-light text-gray-500 dark:text-gray-400">
<!--                                <div class="empty:after:!mx-0 *:me-2">-->
<!--                                    <p class="bg-red-100 text-red-800 text-[0.7rem] font-medium inline-flex items-center px-2.5 rounded dark:bg-red-200/75 dark:text-red-800"> نردبان </p>-->
<!--                                </div>-->
                                <div class="last:*:after:hidden *:after:bg-gray-600 *:after:dark:bg-gray-600 *:after:size-1 *:after:rounded-full *:after:mt-2 *:after:mx-1.5 *:after:flex *:after:items-center *:inline-flex *:ms-1 first:*:ms-0">
                                    <span> 0 کیلومتر </span>
                                    <span> در حد نو </span>
                                    <span> قیمت مقطوع </span>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-row-reverse justify-between items-center ">
                                <span
                                    class="text-xs md:text-sm inline-flex items-center font-medium text-primary-600 dark:text-primary-500">۴,۸۰۰,۰۰۰ تومان</span>
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
    setup(){
        definePageMeta({
            layout: 'paye1',
        })
    }
}
</script>