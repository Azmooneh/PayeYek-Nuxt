<template class="">
    <section class="font-yekan number-fa">
        <Header />

        <slot />
    </section>
</template>

<script>
import Header from "~/components/paye1/layout/header/index.vue";
import {usePayeYek} from "~/store/index.js";

export default {
    name: "Paye1",
    components: {
        Header,
    },
    setup(){
        const payeYekStore = usePayeYek();
        const isDark = payeYekStore.darkMode;

        useHead({
            script: [{
                children: `
                if(${isDark}){
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
                `}]
        })
    }
}
</script>