<template>
    <section class="flex flex-col sm:flex-row items-center gap-4 text-stone-700 mb-8 lg:mb-14 container">
        <section class="group w-full prespective drop-shadow-base">
            <section
                class="bg-white rounded-custom h-40 sm:h-36 lg:h-44 relative w-full prespective-3d group-hover:rotateY-180 duration-500">
                <NuxtImg src="https://paye1.com/storage/media/land/files/JiREUtpyFF4CvjYgMC4OH3n616uqJEr05XYVXlRO.webp" alt="دسته بندی محصولات" class="absolute top-0 right-0 w-full h-full object-cover rounded-custom rotateY-180 backface-hidden" format="webp" />
                <div class="flex flex-col justify-center h-full gap-4 px-8 lg:px-10 rounded-custom border-r-4 lg:border-r-8 border-r-normal absolute top-0 right-0 w-full backface-hidden">
                    <h2 class="text-lg font-medium lg:text-2xl"> دسته بندی محصولات </h2>
                    <h4 class="text-sm leading-6 font-normal lg:text-base line-clamp-2"> مشخصات فنی، تصاویر و ویژگی تمام محصولات در یک نگاه </h4>
                </div>

                <div
                    class="absolute top-0 right-0 w-full h-full rounded-custom drop-shadow-base overflow-hidden rotateY-180 backface-hidden">
                    <div class="w-full h-full flex_center bg-gradient-to-t from-black/80 to-transparent">
                        <NuxtLink :to="`/l/${slug}/p`"
                            class="h-11 w-44 flex_center border border-white rounded-custom text-lg font-medium text-white bg-transparent hover:bg-black/20">
                        بیشتر بخوانید </NuxtLink>
                    </div>
                </div>
            </section>
        </section>
        <section class="group w-full prespective drop-shadow-base">
            <section
                class="bg-white rounded-custom h-40 sm:h-36 lg:h-44 relative w-full prespective-3d group-hover:rotateY-180 duration-500">
                <NuxtImg src="https://paye1.com/storage/media/land/files/oxqo99vTRSZxHQc170tSg5gww9eYAJgSdNqS1lN5.webp" alt="دسته بندی محصولات" class="absolute top-0 right-0 w-full h-full object-cover rounded-custom rotateY-180 backface-hidden" format="webp" />
                <div class="flex flex-col justify-center h-full gap-4 px-8 lg:px-10 rounded-custom border-r-4 lg:border-r-8 border-r-normal absolute top-0 right-0 w-full backface-hidden">
                    <h2 class="text-lg font-medium lg:text-2xl"> شرایط فروش </h2>
                    <h4 class="text-sm leading-6 font-normal lg:text-base line-clamp-2"> دریافت جدید ترین بخشنامه ها و طرح های فروش برای سال جاری </h4>
                </div>

                <div
                    class="absolute top-0 right-0 w-full h-full rounded-custom drop-shadow-base overflow-hidden rotateY-180 backface-hidden">
                    <div class="w-full h-full flex_center bg-gradient-to-t from-black/80 to-transparent">
                        <NuxtLink :to="`/l/${slug}/a?f=sell`"
                            class="h-11 w-44 flex_center border border-white rounded-custom text-lg font-medium text-white bg-transparent hover:bg-black/20">
                        بیشتر بخوانید </NuxtLink>
                    </div>
                </div>
            </section>
        </section>
        <section class="group w-full prespective drop-shadow-base">
            <section
                class="bg-white rounded-custom h-40 sm:h-36 lg:h-44 relative w-full prespective-3d group-hover:rotateY-180 duration-500">
                <NuxtImg src="https://paye1.com/storage/media/land/files/LtpO2xM1qwTNLpLS1Y2tE6GKJ3X3CIValEOE1VgJ.webp" alt="دسته بندی محصولات" class="absolute top-0 right-0 w-full h-full object-cover rounded-custom rotateY-180 backface-hidden" format="webp" />
                <div class="flex flex-col justify-center h-full gap-4 px-8 lg:px-10 rounded-custom border-r-4 lg:border-r-8 border-r-normal absolute top-0 right-0 w-full backface-hidden">
                    <h2 class="text-lg font-medium lg:text-2xl"> اخبار و مقالات </h2>
                    <h4 class="text-sm leading-6 font-normal lg:text-base line-clamp-2"> معرفی و بررسی محصولات، مقایسه و اخبار روز مربوطه </h4>
                </div>

                <div
                    class="absolute top-0 right-0 w-full h-full rounded-custom drop-shadow-base overflow-hidden rotateY-180 backface-hidden">
                    <div class="w-full h-full flex_center bg-gradient-to-t from-black/80 to-transparent">
                        <NuxtLink :to="`/l/${slug}/a?f=news`"
                            class="h-11 w-44 flex_center border border-white rounded-custom text-lg font-medium text-white bg-transparent hover:bg-black/20">
                        بیشتر بخوانید </NuxtLink>
                    </div>
                </div>
            </section>
        </section>
    </section>
</template>

<script>
import { NuxtLink, NuxtImg } from "#components";
import { useCommon } from '~/store/index';

export default {
    name: '',
    setup() {
        const layoutStore = useCommon();

        return {
            slug: layoutStore.footerData.slug
        }
    }
}
</script>