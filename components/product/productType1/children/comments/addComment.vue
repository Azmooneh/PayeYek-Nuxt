<template>
    <section class="mb-10 lg:mb-28">
        <p class="relative text-xl lg:text-2xl text-center mb-4 font-medium text-stone-700"> ثبت دیدگاه </p>
        <p class="text-sm md:text-base font-normal text-stone-700 mb-4 text-center"> با وارد کردن مشخصات خوددیدگاهتان را ثبت
            کنید. </p>
        <section class="flex flex-col items-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-2 w-full max-w-64 mb-6 sm:max-w-[30rem] md:mb-9">
                <input v-model="name" type="text" required
                       :class="'h-12 focus:ring-0 rounded-custom outline-none w-full placeholder:text-[#888b93] text-sm font-normal pr-3 pl-6 text-stone-700 dir-rtl ' + borderStyle"
                       placeholder="نام و نام خانوادگی (اجباری)" />
                <input v-model="phone" type="tel"
                       :class="'h-12 focus:ring-0 rounded-custom outline-none w-full placeholder:text-[#888b93] text-sm font-normal pr-3 pl-6 text-stone-700 dir-rtl ' + borderStyle"
                       placeholder="شماره همراه" />
                <input v-model="email" type="email"
                       :class="'col-span-full h-12 focus:ring-0 rounded-custom outline-none w-full placeholder:text-[#888b93] text-sm font-normal pr-3 pl-6 text-stone-700 dir-rtl ' + borderStyle"
                       placeholder="ایمیل" />
                <textarea v-model="comment" required rows="5"
                          :class="'col-span-full h-full resize-none peer focus:ring-0 rounded-custom outline-none w-full placeholder:text-[#888b93] text-sm font-normal pr-3 pl-6 text-stone-700 ' + borderStyle"
                          placeholder="دیدگاه (اجباری)"></textarea>
            </div>
            <button type="button" @click="sendComment"
                    class="rounded-custom flex_center w-64 h-11 text-white bg-normal hover:bg-focus focus:bg-focus focus:shadow-focus focus:shadow-shadowNormal">
                ارسال </button>
        </section>
    </section>
</template>

<script>
import { useCommon, useProduct } from "~/store/index.js";
import { toast } from 'vue3-toastify';

export default {
    name: 'Add Comment Type 1',
    setup(){
        const layoutStore = useCommon();
        const productStore = useProduct();
        const borderStyle = ref("");
        const name = ref("");
        const phone = ref("");
        const email = ref("");
        const comment = ref("");
        const landId = ref(layoutStore.footerData.styles.land_id);
        const productId = ref(productStore.current.id);
        switch (layoutStore.footerData.styles.border_type) {
            case (2):
                borderStyle.value = "drop-shadow-base border-0";
                break;
            default:
                borderStyle.value = "border border-stone-400 focus:border-stone-400";
        }

        const resetCommentValues = () => {
            name.value = "";
            phone.value = "";
            email.value = "";
            comment.value = "";
        }

        const sendComment = () => {
            const body = {
                land_id: landId.value,
                product_id: productId.value,
                comment: comment.value,
                name: name.value,
                phone: phone.value,
                email: email.value,
            }

            if (name.value === "") {
                toast.error("نام و نام خانوادگی خالیست.", {
                    autoClose: 3000,
                    limit: 2,
                });
            } else if (comment.value === "") {
                toast.error("محتوای نظر خالیست.", {
                    autoClose: 3000,
                    limit: 2,
                });
            } else {
                $fetch(`${useRuntimeConfig().public.apiBase}/l/comment/submit-comment`, {
                    method: "POST",
                    body: body,
                }).then(response => {
                    if (response.status == 200) {
                        toast.success("نظر شما با موفقیت ثبت شد.", {
                            autoClose: 3000,
                            limit: 2,
                        });
                        resetCommentValues();
                    }
                }).catch(error => console.log(error));
            }
        }

        return {
            name,
            phone,
            email,
            comment,
            borderStyle,
            sendComment,
        }
    }
}
</script>