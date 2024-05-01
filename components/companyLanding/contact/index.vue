<template>
    <CTypeOne v-if="ContactType == 1" />
    <CTypeThree v-if="ContactType == 3" />
    <CTypeFour v-if="ContactType == 4" />
    <CTypeFive v-if="ContactType == 5" />
</template>

<script>
import CTypeOne from './children/CTypeOne.vue';
import CTypeThree from './children/CTypeThree.vue';
import CTypeFour from './children/CTypeFour.vue';
import CTypeFive from './children/CTypeFive.vue';

export default {
    name: 'Contact Switch',
    components: {
        CTypeOne,
        CTypeThree,
        CTypeFour,
        CTypeFive,
    },
    setup(){
        const ContactType = ref(4);

        return{
            ContactType,
        }
    }
}
</script>