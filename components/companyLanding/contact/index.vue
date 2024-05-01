<template>
    <CTypeOne v-if="ContactType == 1" />
    <CTypeTwo v-if="ContactType == 2" />
    <CTypeThree v-if="ContactType == 3" />
    <CTypeFour v-if="ContactType == 4" />
    <CTypeFive v-if="ContactType == 5" />
    <CTypeSix v-if="ContactType == 6" />
    <CTypeSeven v-if="ContactType == 7" />
</template>

<script>
import CTypeOne from './children/CTypeOne.vue';
import CTypeTwo from './children/CTypeTwo.vue';
import CTypeThree from './children/CTypeThree.vue';
import CTypeFour from './children/CTypeFour.vue';
import CTypeFive from './children/CTypeFive.vue';
import CTypeSix from './children/CTypeSix.vue';
import CTypeSeven from './children/CTypeSeven.vue';

export default {
    name: 'Contact Switch',
    components: {
        CTypeOne,
        CTypeTwo,
        CTypeThree,
        CTypeFour,
        CTypeFive,
        CTypeSix,
        CTypeSeven,
    },
    setup(){
        const ContactType = ref(7);

        return{
            ContactType,
        }
    }
}
</script>