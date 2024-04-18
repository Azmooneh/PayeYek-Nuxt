<template>
    <div v-for="(company, index) in 16" :key="index"
        class="rounded-lg bg-white border border-[#e5e5e5] py-4 px-2 flex flex-col items-center gap-4">
        <div class="rounded-full overflow-hidden size-24 bg_skeleton border border-[#e5e5e5]"></div>
        <p class="w-24 h-5 mx-auto rounded-full bg_skeleton md:h-6"></p>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    name: 'Skeleton',
    props: {
        status: Boolean,
    },
}
</script>