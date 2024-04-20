<template>
    <Title_type_1 :landSlug="landSlug" v-if="headerType == 1" :title="title" :section="section" />
</template>

<script>

import Title_type_1 from './children/title_type_1.vue';

export default {
    name: 'Titles',
    components: {
        Title_type_1,
    },
    props: {
        landSlug: String,
        headerType: Number,
        title: String,
        section: String,
    },
    setup(){

    }
}
</script>