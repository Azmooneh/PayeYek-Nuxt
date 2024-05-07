<template>
    <ul class="text-sm font-normal grid grid-cols-2 gap-1 list-none *:px-2 mb-10 lg:mb-[72px]">
        <!-- usage-->
        <li class="h-20 rounded-custom flex_center flex-col gap-1 bg-stone-200">
            <h3 class=" text-normal"> نوع کاربری </h3>
            <h3 class="text-stone-700 text-center"> {{ Attributes['usage'] }} </h3>
        </li>
        <!-- cabin-->
        <li class="h-20 rounded-custom flex_center flex-col gap-1 bg-stone-200 ">
            <h3 class=" text-normal"> نوع کابین </h3>
            <h3 class="text-stone-700 text-center"> {{ Attributes['cabin'] }} </h3>
        </li>
        <!-- tonnage-->
        <li class="h-20 rounded-custom flex_center flex-col gap-1 bg-stone-200">
            <h3 class=" text-normal"> تناژ </h3>
            <h3 class="text-stone-700 text-center"> {{ Attributes['tonnage'] }} </h3>
        </li>
        <!-- axle-->
        <li class="h-20 rounded-custom flex_center flex-col gap-1 bg-stone-200">
            <h3 class=" text-normal"> تعداد محور چرخ ها </h3>
            <h3 class="text-stone-700 text-center"> {{ Attributes['axle'] }} </h3>
        </li>
        <!-- year-->
        <li class="h-20 rounded-custom flex_center flex-col gap-1 bg-stone-200">
            <h3 class=" text-normal"> سال ساخت </h3>
            <h3 class="text-stone-700 text-center"> {{ Attributes['year'] }} </h3>
        </li>
        <!-- model-->
        <li class="h-20 rounded-custom flex_center flex-col gap-1 bg-stone-200">
            <h3 class=" text-normal"> مدل </h3>
            <h3 class="text-stone-700 text-center"> {{ Attributes['model'] }} </h3>
        </li>
    </ul>
</template>

<script>
import {useProduct} from "~/store/index.js";
import {ref} from "vue";

export default {
    name: "Attrubutes Type 1",
    setup(){
        const productStore = useProduct();
        const Attributes = ref(productStore.Attributes);

        return {
            Attributes,
        }
    }
}
</script>