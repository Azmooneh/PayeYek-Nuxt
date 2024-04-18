<template>
    <section class="flex flex-col md:gap-8" v-for="(section, index) in updatedData" :key="index">
        <Section :data="section" />
    </section>
</template>

<script>
import Section from './section.vue';

export default {
    name: 'Sections',
    components: {
        Section,
    },
    props: {
        data: Array,
    },
    setup(props){
        const updatedData = ref(computed(() => props.data))
        
        return {
            updatedData,
        }
    }
}
</script>