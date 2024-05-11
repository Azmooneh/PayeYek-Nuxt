<template>
    <section class="flex flex-col items-center gap-2">
        <a href="#" v-if="catalog"
              class="text-lg font-medium bg-white border cursor-pointer rounded-custom text-normal border-normal hover:text-focus hover:border-focus flex_center h-11 w-52">
            دانلود کاتالوگ
        </a>
        <div @click="OpenModal"
            class="text-lg font-medium text-white cursor-pointer rounded-custom bg-normal hover:bg-focus flex_center h-11 w-52"> مشاوره و خرید
        </div>
    </section>

    <Counseling :showModal="showModal" :closeModal="closeModal" :changeCounselingStep="changeCounselingStep" :counselingStep="counselingStep" />
</template>

<script>
import {useProduct} from "~/store/index.js";
import {ref} from "vue";
import Counseling from "~/components/product/productType1/children/counseling/index.vue";

export default {
    name: 'Help and Resources',
    components: {
        Counseling
    },
    setup(){
        const productStore = useProduct();
        const catalog = ref(productStore.current.catalog);
        const showModal = ref(false);
        const counselingStep = ref(0);

        const OpenModal = () => {
            showModal.value = true;
        }

        const closeModal = () => {
            showModal.value = false;
            counselingStep.value = 0;
        }

        const changeCounselingStep = index => {
            counselingStep.value = index;
        }



        return{
            catalog,
            showModal,
            OpenModal,
            closeModal,
            changeCounselingStep,
            counselingStep,
        }
    }
}
</script>