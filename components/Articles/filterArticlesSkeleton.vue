<template>
    <section class="container mb-8 flex flex-col-reverse sm:flex-row md:justify-between md:items-center gap-4">
        <!-- search-->
        <ul class="flex items-center gap-2 overflow-auto">
            <li class="h-10 w-20 rounded-custom bg_skeleton" v-for="(x, index) in 5" :key="index"></li>
        </ul>
        <!-- search-->
        <section class="relative w-full h-12 sm:w-72">
            <div class="w-full h-full outline-none bg_skeleton rounded-custom"></div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Filter Articles Skeleton',
}
</script>