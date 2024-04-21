<template>
    <CTypeOne />
</template>

<script>
import CTypeOne from './children/CTypeOne.vue';

export default {
    name: 'Contact',
    components: {
        CTypeOne,
    },
    setup(){
        const ContactType = ref(1);

        return{
            ContactType,
        }
    }
}
</script>