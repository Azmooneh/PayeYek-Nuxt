<template>
    <section
        class="bg-gray-50 dark:bg-gray-900 h-[calc(100vh-61px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <section class="p-4 mx-auto container">
            <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <NuxtLink v-for="(ad, index) in Advertises" :key="index" :to="'/homepage/advertises/' + ad.tracking_code"
                          class="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300">
                    <div class="w-full md:w-36 lg:w-48 xl:w-40 md:flex-none">
                        <div class="relative w-full pt-[75%] md:pt-[100%]">
                            <img class="object-cover size-full absolute top-0 right-0"
                                 :src="`${useRuntimeConfig().public.imageUrl}/storage/` + ad.primary_image"
                                 alt="" draggable="false"/>
                        </div>
                    </div>
                    <div class="w-full p-4 flex flex-col justify-around md:justify-between space-y-5 md:space-y-0 md:py-2">
                        <div class="flex items-start gap-4 justify-between md:flex-col md:justify-start md:gap-0">
                            <h2 class="mb-2 line-clamp-2 text-sm md:text-base font-bold font-iran tracking-tight text-gray-900 dark:text-white">
                                {{ad.brand}} &nbsp; {{ad.model}} &nbsp; {{ad.title}}
                            </h2>
                            <span
                                class="text-nowrap bg-primary-100 text-primary-800 text-[0.7rem] font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200/75 dark:text-primary-800"> {{ad.city}} </span>
                        </div>

                        <div class="flex flex-row-reverse justify-between items-center ">
                                <span
                                    class="text-xs md:text-sm inline-flex items-center font-medium text-primary-600 dark:text-primary-500">{{numberWithCommas(ad.price)}} تومان</span>
                            <span class="text-[0.7rem] line-clamp-1 text-gray-900 dark:text-gray-300"> {{ getHoursPast(ad.published_at) }} </span>
                        </div>
                    </div>
                </NuxtLink>
            </section>
        </section>
    </section>
</template>

<script>
import {numberWithCommas} from "~/helper/common.js";

export default {
    name: 'Home',
    setup() {
        definePageMeta({
            layout: 'paye1',
        })

        const Advertises = ref([]);

        function getHoursPast(publishTime) {
            // Convert publishTime string to a Date object
            const publishDate = new Date(publishTime);

            // Get the current date and time
            const now = new Date();

            // Calculate the difference in hours
            const differenceInHours = (now - publishDate) / 1000 / 60 / 60;

            if (differenceInHours < 1) {
                return 'کمتر از 1 ساعت قبل';
            } else if (differenceInHours >= 1 && differenceInHours < 24) {
                return `${Math.floor(differenceInHours)} ساعت قبل`;
            } else {
                const daysPast = Math.floor(differenceInHours / 24);
                return `${daysPast} روز قبل`;
            }
        }

        const loadAdvertises = async () => {
            const response = await useFetch(`${useRuntimeConfig().public.apiBase}/ad/list`);
            console.log(response.data.value)
            if(response.data.value.status == 200){
                Advertises.value = response.data.value.data;
            };
        }

        loadAdvertises();



        return {
            Advertises,
            getHoursPast,
            numberWithCommas,
        }
    }
}
</script>