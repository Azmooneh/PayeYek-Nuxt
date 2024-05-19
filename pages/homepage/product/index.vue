<template>
    <section class="bg-gray-50 dark:bg-gray-900 h-[calc(100%_-_65px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <section class="p-4 mx-auto max-w-screen-xl">
            <!-- breadcrumbs -->
            <div class="text-gray-500 dark:text-gray-400 text-xs md:text-sm flex items-center gap-2">
                <NuxtLink to="/homepage"> پایه یک </NuxtLink>
                <NuxtLink to="/homepage" class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <span> آگهی </span>
                </NuxtLink>
            </div>

            <main class="grid grid-cols-1">
                <!-- slider -->
                <section>

                </section>
            </main>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Paye Yek Product Page',
    setup(){
        definePageMeta({
            layout: 'paye1',
        })
    }
}
</script>