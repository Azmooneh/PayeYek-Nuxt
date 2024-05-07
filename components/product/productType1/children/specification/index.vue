<template>
    <section class="mb-16 lg:mb-36">
        <h3 class="relative text-xl mb-7 font-medium text-stone-700 before:size-3 before:bg-normal before:rounded-custom before:absolute before:content-[''] before:top-1/2 before:-translate-y-1/2 before:right-0 pr-6 lg:pr-8"> مشخصات </h3>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-stone-700">
            <Specifications v-for="(specification, index) in SpecificationArray" :key="index" :data="specification" />
        </ul>
    </section>
</template>

<script>
import {useProduct} from "~/store/index.js";
import Specifications from "~/components/product/productType1/children/specification/children/specifications.vue";

export default {
    name: "Specification Type 1",
    components: {
        Specifications,
    },
    setup(){
        const productStore = useProduct();
        const specificarions = ref(productStore.Specification);
        const SpecificationArray = ref([]);
        for (const [key, value] of Object.entries(specificarions.value)) {
            const obj = {
                title: key,
                list: value
            }
            SpecificationArray.value.push(obj);
        }

        return {
            SpecificationArray,
        }
    }
}
</script>