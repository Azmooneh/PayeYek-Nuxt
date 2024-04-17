<template>
    <div class="flex_center gap-3.5">
        <!-- telegram -->
        <a href="#" :class="colorStyle" target="_blank">
            <Telegram />
        </a>
        <!-- instagram -->
        <a href="#" :class="colorStyle" target="_blank">
            <Instagram />
        </a>
        <!-- whatsapp -->
        <a href="#" :class="colorStyle" target="_blank">
            <Whatsapp />
        </a>
    </div>
</template>

<script>
import Telegram from './icons/telegram.vue';
import Instagram from './icons/instagram.vue';
import Whatsapp from './icons/whatsapp.vue';

export default {
    name: 'Social Media',
    components: {
        Telegram,
        Instagram,
        Whatsapp,
    },
    props: {
        isInFooter: {
            type: Boolean,
            default: false,
        },
    },
    setup(props){
        const colorStyle = ref("");

        switch (props.isInFooter) {
            case true:
                colorStyle.value = "text-white";        
                break;
            case false:
                colorStyle.value = "text-stone-700 focus:text-normal hover:text-normal";        
                break;
        }

        return {
            colorStyle,
        }
    }
}
</script>