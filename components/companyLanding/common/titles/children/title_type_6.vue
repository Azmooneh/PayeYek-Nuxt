<template>
    <div class="flex items-center justify-between gap-4 mb-2 lg:mb-4 default_container">
        <div class="hidden sm:flex items-center gap-4">
            <!-- circle-->
            <div class="size-3 bg-normal"></div>
            <h3 class="mb-2 text-xl font-normal text-center text-stone-700"> {{ title }} </h3>
        </div>
        <NuxtLink :to="`/l/${landSlug}/${section}`" class="text-base font-medium">
            <span class="hidden sm:block text-normal"> {{ showAll }} </span>
            <span class="sm:hidden block text-stone-700"> {{ title }} </span>
        </NuxtLink>
    </div>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'Title Type 6',
    props: {
        landSlug: String,
        title: String,
        section: String,
        showAll: String,
    },
}
</script>