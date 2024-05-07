<template>
    <ul class="text-sm font-normal grid grid-cols-2 gap-1 list-none *:px-2">
        <li v-for="(item, index) in 6" :key="index" class="h-20 *:h-5 rounded-custom *:rounded-full flex_center flex-col gap-1 bg_skeleton_smooth">
            <p class="w-20 bg_skeleton"></p>
            <p class="w-28 bg_skeleton"></p>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Attrubutes Skeleton Type 1',
}
</script>