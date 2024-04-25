<template>
    <!-- <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 lg:mb-14 container">
        <section
            class="rounded-custom relative w-full aspect-video bg-no-repeat bg-cover bg-center bg-[url('https://paye1.com/storage/media/land/files/MwHxtT5HYWz6M2y6i9r3JKODUn3afBSt098ZxKRX.png')]">
            <div class="size-full flex_center rounded-custom bg-black/75">
                <NuxtLink :to="`/l/${slug}/p`"
                    class="h-11 w-52 flex_center border-x-2 border-[#FFD598] rounded-custom text-lg font-medium text-[#FFD598] bg-transparent hover:border-white hover:text-white">
                دسته بندی محصولات </NuxtLink>
            </div>
        </section>
        <section
            class="rounded-custom relative w-full aspect-video bg-no-repeat bg-cover bg-center bg-[url('https://paye1.com/storage/media/land/files/V8Bmbyq7hQhrvNT2WGLQgwayvtVlLC9Hc5MXqNvo.png')]">
            <div class="size-full flex_center rounded-custom bg-black/75">
                <NuxtLink :to="`/l/${slug}/a?f=sell`"
                    class="h-11 w-52 flex_center border-x-2 border-[#FFD598] rounded-custom text-lg font-medium text-[#FFD598] bg-transparent hover:border-white hover:text-white">
                شرایط فروش </NuxtLink>
            </div>
        </section>
        <section
            class="rounded-custom relative w-full aspect-video bg-no-repeat bg-cover bg-center bg-[url('https://paye1.com/storage/media/land/files/vzNKAVs3YxA6i2u3sLi8xJ0fLxvrRgrk95YxHXKi.png')]">
            <div class="size-full flex_center rounded-custom bg-black/75">
                <NuxtLink :to="`/l/${slug}/a?f=news`"
                    class="h-11 w-52 flex_center border-x-2 border-[#FFD598] rounded-custom text-lg font-medium text-[#FFD598] bg-transparent hover:border-white hover:text-white">
                اخبار و مقالات </NuxtLink>
            </div>
        </section>
    </section> -->
    <section class="bg-normal h-20 lg:h-28 w-full flex_center mt-[-23px] lg:mt-[-31px] mb-8">
        <section class="container w-full flex_center">
            <!-- @foreach ($categories as $item) -->
            <NuxtLink to="/"
                class="flex_center border-l border-l-white h-8 first:pr-0 last:pl-0 px-3 sm:px-6 lg:px-20 text-white text-sm sm:text-lg lg:text-2xl font-medium last:border-l-0">
                {{ title }} </NuxtLink>
            <!-- @endforeach -->
        </section>
    </section>
</template>

<script>
import { NuxtLink } from "#components";
import { useCompanyData } from '~/store/index';

export default {
    name: '',
    setup() {
        const companyStore = useCompanyData();

        return {
            slug: companyStore.companyData.slug
        }
    }
}
</script>