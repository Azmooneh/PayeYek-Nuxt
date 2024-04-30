<template>
    <section class="container flex items-center overflow-auto gap-2 text-[10px] sm:text-xs lg:text-sm font-normal text-[#8A8B8C] mb-4 pb-1.5">
        <NuxtLink to="/" class="flex items-center gap-1 flex-none group">
            <span> خانه </span>
            <svg class="stroke-current group-hover:rotate-180 duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 17L10 12L15 7" stroke="current" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </NuxtLink>
        <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
            <NuxtLink to="/" v-if="index < breadcrumbs.length -1" class="flex items-center gap-1 flex-none group">
                <span> {{ breadcrumb.title }} </span>
                <svg class="stroke-current group-hover:rotate-180 duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 17L10 12L15 7" stroke="current" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </NuxtLink>
            <div v-if="index == breadcrumbs.length -1" class="flex items-center gap-1 flex-none cursor-default">
                <span> {{ breadcrumb.title }} </span>
            </div>
        </template>
    </section>
</template>

<script>
export default {
    name: 'Breadcrumbs',
    props: {
        breadcrumbs: Array,
    }
}
</script>