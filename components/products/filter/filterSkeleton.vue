<template>
    <section class="container mb-8">
        <ul class="flex items-center gap-2 overflow-auto">
            <li class="h-10 w-20 rounded-custom bg_skeleton" v-for="(x, index) in 5" :key="index"></li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Filter Skeleton',
}
</script>