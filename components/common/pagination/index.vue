<template>
    <section class="flex_center gap-2.5 mb-12">
        <!-- prev page -->
        <button class="size-7 flex_center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 stroke-stone-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
        <button class="h-7 w-11 cursor-pointer rounded border border-stone-700 text-lg font-medium" type="button">
            1
        </button>
        <button class="h-7 w-11 cursor-pointer rounded border border-stone-700 text-lg font-medium" type="button">
            2
        </button>
        <button class="h-7 w-11 cursor-pointer rounded border border-stone-700 text-lg font-medium" type="button">
            3
        </button>
        <!-- next page -->
        <button class="size-7 flex_center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-5 stroke-stone-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
            </svg>
        </button>
    </section>
</template>

<script>
export default {
    name: 'Pagination',
    props: {

    },
    setup(){

    }
}
</script>