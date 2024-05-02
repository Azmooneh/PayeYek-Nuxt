<template>
    <Article_Type_1 />
</template>

<script>
import Article_Type_1 from "~/components/Article/children/Article_Type_1.vue";
import {ref} from "vue";
import {useCommon} from "~/store/index.js";

export default {
    name: "Article Single Switch",
    components: {
        Article_Type_1,
    },
    setup(){
        const layoutStore = useCommon();
        const articleType = ref(layoutStore.footerData.styles.a_view_type);
    }
}
</script>