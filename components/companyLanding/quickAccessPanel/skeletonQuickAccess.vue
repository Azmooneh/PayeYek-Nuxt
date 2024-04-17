<template>
    <section
        class="grid grid-cols-1 sm:grid-cols-2 mb-12 gap-4 lg:gap-5 lg:rounded-none lg:*:rounded-custom *:rounded-custom sm:*:rounded-none sm:rounded-custom sm:overflow-hidden sm:gap-0 *:bg-[#f5f5f5] *:flex_center *:flex-col">
        <!-- branches -->
        <div class="h-40">
            <div class="size-8 mb-3 bg_skeleton rounded-full"></div>
            <p class="mx-auto bg_skeleton h-[18px] w-20 rounded-full mb-0.5"></p>
            <p class="mx-auto h-3.5 rounded-full w-28 bg_skeleton"></p>
        </div>
        <!-- terms of sale -->
        <div class="h-40">
            <div class="size-8 mb-3 bg_skeleton rounded-full"></div>
            <p class="mx-auto bg_skeleton h-[18px] w-20 rounded-full mb-0.5"></p>
            <p class="mx-auto h-3.5 rounded-full w-28 bg_skeleton"></p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SkeletonQuickAccess',
}
</script>