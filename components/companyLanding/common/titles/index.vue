<template>
    <Title_type_1 :landSlug="landSlug" v-if="headerType == 1" :title="title" :section="section" />
    <Title_type_2 :landSlug="landSlug" v-if="headerType == 2" :title="title" :section="section" showAll="نمایش همه" />
    <Title_type_3 :landSlug="landSlug" v-if="headerType == 3" :title="title" :section="section" showAll="آرشیو محصولات" />
    <Title_type_4 :landSlug="landSlug" v-if="headerType == 4" :title="title" :section="section" showAll="آرشیو" />
    <Title_type_5 v-if="headerType == 5" :title="title" />
    <Title_type_6 :landSlug="landSlug" v-if="headerType == 6" :title="title" :section="section" showAll="آرشیو" />
</template>

<script>

import Title_type_1 from './children/title_type_1.vue';
import Title_type_2 from './children/title_type_2.vue';
import Title_type_3 from './children/title_type_3.vue';
import Title_type_4 from './children/title_type_4.vue';
import Title_type_5 from './children/title_type_5.vue';
import Title_type_6 from './children/title_type_6.vue';

export default {
    name: 'Titles',
    components: {
        Title_type_1,
        Title_type_2,
        Title_type_3,
        Title_type_4,
        Title_type_5,
        Title_type_6,
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