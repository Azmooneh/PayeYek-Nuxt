<template>
    <section class="bg-stone-200 lg:mb-10">
        <section class="container grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 py-4 lg:py-0">
            <div class="aspect-video">
                <NuxtImg src="https://paye1.com/storage/media/land/files/shqOUdZB4v1xSXk5ETyyvMQc517ITBp1dveLgPuj.png" alt="ارتباط با واحد فروش" class="size-full rounded-custom" height="100%" width="100%" format="webp" />
            </div>
            <div class="lg:flex justify-center flex-col">
                <p class="text-base sm:text-lg lg:text-xl font-normal text-stone-700 mb-8 lg:mb-6 lg:text-right xl:mb-8 text-center"> جهت ارتباط و اطلاع از شرایط فروش شماره خود را وارد کنید </p>
                <!-- form-->
                <form class="max-w-64 w-full mx-auto lg:mx-0 flex flex-col gap-10 lg:gap-6 xl:gap-10 items-center lg:items-start">
                    <input name="phone" type="tel" v-model="phone" autocomplete="off" class="border border-[#cfd1d4] focus:border-[#E2E8F0] h-12 focus:ring-0 rounded-custom outline-none w-full placeholder:text-[#acacac] text-base bg-transparent font-normal pr-6 pl-3 text-stone-700" placeholder="شماره همراه" />
                    <button type="submit" @click.prevent="submitForm" class="flex_center max-w-64 w-full h-11 text-white bg-normal hover:text-focus focus:text-focus rounded-custom"> ارسال </button>
                </form>
            </div>
        </section>
    </section>
</template>

<script>
import { NuxtImg } from "#components";
import {toast} from 'vue3-toastify';
import {ref} from "vue";

export default {
    name: 'Contact Type Six',
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
            phone,
            submitForm,
        }
    }
}
</script>