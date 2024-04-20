<template>
    <Title_type_1 :slug="slug" v-if="headerType == 1" />
</template>

<script>

import Title_type_1 from './children/title_type_1.vue';

export default {
    name: 'Titles',
    components: {
        Title_type_1,
    },
    props: {
        slug: String,
        headerType: Number,
    },
    setup(){

    }
}
</script>