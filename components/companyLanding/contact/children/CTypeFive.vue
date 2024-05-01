<template>
    <section class="container mb-8 lg:mb-12">
        <section
            class="flex flex-col pt-8 lg:pt-16 lg:pb-14 pb-24 bg-stone-950 rounded-custom border-x-2 sm:border-x-4 border-normal container lg:rounded-custom overflow-hidden bg-[url('https://paye1.com/storage/media/land/files/ISX8tSBCNQXQhcIE9FVZ5CNQmGNoXahyGBl4ZgEl.png')]">
            <form class="flex flex-col items-center px-5">
                <p class="mb-10 text-base sm:text-lg lg:text-xl xl:text-2xl font-normal leading-6 text-center text-white"> جهت
                    اطلاع از آخرین اطلاعیه های فروش شماره خود را وارد کنید. </p>
                <input name="phone" type="tel" autocomplete="off" v-model="phone"
                       class="bg-stone-200/10 mb-6 lg:mb-10 max-w-64 h-11 border border-[#CFD1D4] focus:border-[#CFD1D4] focus:ring-0 rounded-custom outline-none w-full placeholder:text-[#acacac] text-base font-normal px-3 text-white tracking-widest"
                       placeholder="09" />
                <button type="submit" @click.prevent="submitForm"
                        class="w-full text-base font-medium text-normal rounded-custom flex_center max-w-64 h-11 bg-transparent border-y border-x-4 border-normal">
                    ارسال </button>
            </form>
        </section>
    </section>
</template>

<script>
import {toast} from 'vue3-toastify';
import {ref} from "vue";

export default {
    name: 'Contact Type Five',
    setup() {
        const phone = ref("");


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