<template>
    <section class="bg-normal">
        <section class="container relative pt-10 pb-14 lg:pt-14 lg:pb-16">
            <p class="text-base sm:text-lg lg:text-xl xl:text-2xl font-normal text-white mb-8 lg:mb-10 text-center"> جهت اطلاع از آخرین اطلاعیه های فروش شماره خود را وارد کنید. </p>
            <!-- form-->
            <form class="max-w-64 w-full flex flex-col gap-10 mx-auto items-center">
                <input name="phone" v-model="phone" autocomplete="off" type="tel" class="border border-[#cfd1d4] focus:border-[#E2E8F0] h-12 focus:ring-0 rounded-custom outline-none w-full placeholder:text-white text-base bg-white/20 font-normal pr-6 pl-3 text-white" placeholder="شماره همراه" />
                <button type="submit" @click.prevent="submitForm" class="flex_center max-w-64 w-full h-11 text-normal bg-white hover:text-focus focus:text-focus rounded-custom"> ارسال </button>
            </form>
            <!-- scroll to top-->
            <button class="absolute left-10 lg:left-20 -bottom-9 group" type="button" @click="scrollToTopSmoothly">
                <svg width="137" height="70" viewBox="0 0 137 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.25632 35C38.7563 35 30.7563 0 65.7563 0C100.756 0 96.7563 35 126.756 35C163.756 35 85.0863 70 65.7563 70C46.4264 70 -22.2437 35 7.25632 35Z" fill="#1C1C1C"/>
                </svg>
                <!-- icon-->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 stroke-white/75 top-6 left-1/2 -translate-x-3.5 -translate-y-1/2 absolute group-hover:stroke-normal">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        </section>
    </section>
</template>

<script>
import {scrollToTopSmoothly} from '~/helper/common';
import {toast} from 'vue3-toastify';
import {ref} from "vue";

export default {
    name: 'Contact Type Four',
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