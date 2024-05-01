<template>
    <CTypeOne v-if="ContactType == 1" />
    <CTypeThree v-if="ContactType == 3" />
    <CTypeFive v-if="ContactType == 5" />
</template>

<script>
import CTypeOne from './children/CTypeOne.vue';
import CTypeThree from './children/CTypeThree.vue';
import CTypeFive from './children/CTypeFive.vue';

export default {
    name: 'Contact Switch',
    components: {
        CTypeOne,
        CTypeThree,
        CTypeFive,
    },
    setup(){
        const ContactType = ref(3);

        return{
            ContactType,
        }
    }
}
</script>