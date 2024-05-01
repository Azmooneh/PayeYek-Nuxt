<template>
    <section class="relative pt-20 bg-stone-200 pb-14 lg:pt-16 lg:pb-20">
        <div class="absolute left-1/2 -translate-x-1/2 top-[-34px] group cursor-pointer" @click="scrollToTopSmoothly">
            <svg width="137" height="70" viewBox="0 0 137 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M129.267 35C97.7671 35 105.767 70 70.7671 70C35.7671 70 39.7671 35 9.76701 35C-27.233 35 51.4371 0 70.7671 0C90.0971 0 158.767 35 129.267 35Z"
                    fill="white"/>
            </svg>
            <!-- icon -->
            <svg
                class="absolute size-7 -translate-x-3 -translate-y-1/2 stroke-stone-700 top-2/3 left-1/2 group-hover:stroke-normal"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
            </svg>
        </div>
        <form class="flex flex-col items-center container">
            <p class="mb-10 text-base sm:text-lg font-semibold text-center lg:text-xl xl:text-2xl text-stone-700 px-10">
                جهت
                اطلاع از آخرین اطلاعیه های فروش شماره خود را وارد کنید. </p>
            <!--            <p class="mb-3 text-sm font-normal text-center lg:text-base lg:mb-4 text-stone-700"> جهت اطلاع از آخرین اطلاعیه های فروش شماره خود را وارد کنید. </p>-->
            <input type="tel" name="phone" v-model="phone" autocomplete="off"
                   class="h-11 w-full max-w-64 focus:ring-0 dir-ltr mb-6 outline-none rounded-custom border border-[#CFD1D4] focus:border-[#CFD1D4] placeholder:text-[#ACACAC]"
                   placeholder="09"/>
            <button type="submit" @click.prevent="submitForm"
                    class="w-full text-lg font-medium text-white cursor-pointer rounded-custom h-11 max-w-64 flex_center bg-normal">
                ارسال
            </button>
        </form>

    </section>
</template>

<script>
import {scrollToTopSmoothly} from '~/helper/common';
import {toast} from 'vue3-toastify';
import {ref} from "vue";

export default {
    name: 'Contact Type One',
    setup() {
        const phone = ref("09");


        const submitForm = () => {
            if (phone.value.toString().length != 11) {
                toast.error("شماره موبایل خود را به درستی وارد کنید.", {
                    autoClose: 3000,
                    limit: 2,
                });
            } else {
                toast.success("اطلاعات شما ذخیره شد. منتظر تماس کارشناسان ما باشید.", {
                    autoClose: 3000,
                    limit: 2,
                });
            }
        }

        return {
            scrollToTopSmoothly,
            phone,
            submitForm,
        }
    }
}
</script>