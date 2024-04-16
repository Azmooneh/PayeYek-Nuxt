<template>

    <section class="flex_center w-full h-screen flex-col gap-4 sm:gap-10 container">
        <div class="*:!h-60 *:sm:!h-80 *:md:!h-96">
            <Vue3Lottie
                animationLink="https://lottie.host/0e0586fa-4cd7-40f0-ab56-3af378cc3850/eIalqeNx9j.json"/>
        </div>
        <p class="text-center text-xl font-medium caption_color"> صفحه مورد نظر شما یافت نشد. </p>
    </section>
    
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'

export default {
    name: 'Error',
}
</script>