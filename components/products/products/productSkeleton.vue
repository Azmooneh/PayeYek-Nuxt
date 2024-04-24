<template>
    <section class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="(item, index) in 12" :key="index" class="bg_skeleton_smooth pt-2 px-8 w-full pb-5 lg:pt-3 items-center flex flex-col rounded-custom">
            <div class="mb-2 h-52">
                <img class="size-full rounded-custom bg_skeleton" />
            </div>
            <div class="mb-5 h-[72px] rounded-2xl lg:rounded-full lg:h-[28px]"></div>
            <div class="mb-6 rounded-full bg_skeleton h-5"></div>
            <div class="grid grid-cols-2 gap-3 w-56 lg:w-full">
                <div class="h-11 w-full bg_skeleton rounded-custom col-span-2"></div>
                <div class="h-11 w-full bg_skeleton rounded-custom"></div>
                <div class="h-11 w-full bg_skeleton rounded-custom"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Product Skeleton',
}
</script>