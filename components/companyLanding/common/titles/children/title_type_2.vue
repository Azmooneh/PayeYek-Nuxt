<template>
    <div class="flex items-center gap-4 mb-2 lg:mb-4">
        <!-- circle-->
        <div class="size-3 rounded-full bg-normal"></div>
        <h3 class="text-xl font-normal text-center text-stone-700"> {{ title }} </h3>
        <NuxtLink :to="`/l/${landSlug}/${section}`" class="text-normal text-base font-medium hidden sm:block"> ({{ showAll }}) </NuxtLink>
    </div>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'Title Type 2',
    props: {
        landSlug: String,
        title: String,
        section: String,
        showAll: String,
    },
}
</script>