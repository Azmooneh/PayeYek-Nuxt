<template>
    <section class="bg-normal">
        <section class="container relative pt-10 pb-14 lg:pt-14 lg:pb-16">
            <p class="text-base sm:text-lg lg:text-xl xl:text-2xl font-normal text-white mb-8 lg:mb-12 text-center"> جهت ارتباط و اطلاع از شرایط فروش شماره خود را وارد کنید </p>
            <!-- form-->
            <form class="max-w-64 w-full flex flex-col gap-10 mx-auto items-center">
                <input name="phone" type="tel" v-model="phone" autocomplete="off" class="border border-[#cfd1d4] focus:border-[#cfd1d4] h-12 focus:ring-0 rounded-custom outline-none w-full placeholder:text-[#888b93] text-base bg-white/20 font-normal pr-6 pl-3 text-white" placeholder="شماره همراه" />
                <button type="submit" @click.prevent="submitForm" class="flex_center max-w-64 w-full h-11 text-white bg-normal border border-white rounded-custom"> ارسال </button>
            </form>
        </section>
    </section>
</template>

<script>
import { NuxtImg } from "#components";
import {toast} from 'vue3-toastify';
import {ref} from "vue";

export default {
    name: 'Contact Type Seven',
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