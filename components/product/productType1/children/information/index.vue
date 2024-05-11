<template>
    <section class="mb-16 lg:mb-36">
        <h3 class="relative text-xl mb-7 font-medium text-stone-700 before:size-3 before:bg-normal before:rounded-custom before:absolute before:content-[''] before:top-1/2 before:-translate-y-1/2 before:right-0 pr-6 lg:pr-8"> درباره محصول </h3>
        <article class="custom_article_styles" v-html="body"></article>
    </section>
</template>

<script>
import {useProduct} from "~/store/index.js";

export default {
    name: "Information Type 1",
    setup(){
        const productStore = useProduct();
        const body = ref(productStore.current.body);
        // console.log(body.value);

        return {
            body,
        }
    }
}
</script>