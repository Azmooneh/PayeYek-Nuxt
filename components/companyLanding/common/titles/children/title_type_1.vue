<template>
    <div>
        <h3 class="mb-2 text-base font-medium text-center sm:text-lg text-stone-700"> {{ title }} </h3>
        <hr class="mx-auto mb-6 w-60 sm:w-96 border-normal lg:mb-0" />
        <!-- show all -->
        <div class="flex justify-end">
            <NuxtLink :to="`/l/${slug}/products`"
                class="hidden px-2 mb-3 mr-auto text-base font-normal cursor-pointer text-normal lg:inline-block">
                نمایش همه </NuxtLink>
        </div>
    </div>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'Title',
    props: {
        slug: String,
        title: String,
    },
    setup(){
        
    }
}
</script>