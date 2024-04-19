<template>
    <section class="relative pt-20 bg-stone-200 pb-14 lg:pt-16 lg:pb-24">
        <button class="absolute left-1/2 -translate-x-1/2 top-[-34px] group" id="scrollToTopBtn" type="button" @click="scrollToTopSmoothly">
            <svg width="137" height="70" viewBox="0 0 137 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M129.267 35C97.7671 35 105.767 70 70.7671 70C35.7671 70 39.7671 35 9.76701 35C-27.233 35 51.4371 0 70.7671 0C90.0971 0 158.767 35 129.267 35Z"
                    fill="white" />
            </svg>
            <!-- icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="absolute w-6 h-6 -translate-x-2 -translate-y-1/2 stroke-stone-700 top-2/3 left-1/2 group-hover:stroke-normal">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
            </svg>
        </button>
        <form action="#" class="flex flex-col items-center default_container">
            <p class="mb-6 text-base font-semibold text-center lg:text-xl xl:text-2xl lg:mb-4 text-stone-700"> ارتباط با
                کارشناسان فروش </p>
            <p class="mb-3 text-sm font-normal text-center lg:text-base lg:mb-4 text-stone-700"> جهت ارتباط و اطلاع از
                شرایط فروش شماره خود را وارد کنید. </p>
            <input type="tel" name="phone"
                class="h-11 w-full max-w-64 focus:ring-0 dir-ltr mb-16 outline-none rounded-custom border border-[#CFD1D4] focus:border-[#CFD1D4] placeholder:text-[#ACACAC]"
                placeholder="09" />
            <button type="submit"
                class="w-full text-lg font-medium text-white cursor-pointer rounded-custom h-11 max-w-64 flex_center bg-normal">
                ارسال </button>
        </form>
    </section>
</template>

<script>
import { scrollToTopSmoothly } from '~/helper/common';

export default {
    name: 'Contact',
    setup(){

        return{
            scrollToTopSmoothly,
        }
    }
}
</script>