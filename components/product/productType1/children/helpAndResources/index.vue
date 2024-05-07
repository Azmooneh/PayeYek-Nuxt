<template>
    <section class="flex flex-col items-center gap-2">
        <a href="#" v-if="catalog"
              class="text-lg font-medium bg-white border cursor-pointer rounded-custom text-normal border-normal hover:text-focus hover:border-focus flex_center h-11 w-52">
            دانلود کاتالوگ
        </a>
        <div
            class="text-lg font-medium text-white cursor-pointer rounded-custom bg-normal hover:bg-focus flex_center h-11 w-52"> مشاوره و خرید
        </div>
    </section>
</template>

<script>
import {useProduct} from "~/store/index.js";
import {ref} from "vue";

export default {
    name: 'Help and Resources',
    setup(){
        const productStore = useProduct();
        const catalog = ref(productStore.current.catalog);
        // console.log(catalog.value);

        return{
            catalog,
        }
    }
}
</script>