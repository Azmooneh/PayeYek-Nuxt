<template>
    <h3 class="mb-6 text-lg lg:text-2xl font-medium text-center text-stone-700"> {{ title }} </h3>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'Title Type 5',
    props: {
        title: String,
    },
}
</script>