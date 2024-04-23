<template>
    <section
        class="container flex items-center overflow-auto gap-2 text-[10px] sm:text-xs lg:text-sm font-normal text-[#8A8B8C] mb-4 pb-1.5">
        <template v-for="(breadcrumb, index) in 3" :key="index">
            <div v-if="index < 2" class="flex items-center gap-1 flex-none">
                <span class="h-4 sm:h-5 lg:h-6 rounded-custom bg_skeleton w-16"></span>
                <svg class="stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 17L10 12L15 7" stroke="current" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
            <div v-if="index == 2" class="flex items-center gap-1 flex-none">
                <span class="h-4 sm:h-5 lg:h-6 rounded-custom bg_skeleton w-16"></span>
            </div>
        </template>
    </section>
</template>

<script>
export default {
    name: 'Breadcrumbs Skeleton',
}
</script>