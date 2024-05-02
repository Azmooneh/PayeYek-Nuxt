<template>
    <section class="relative flex-col gap-4 flex_center h-80 sm:h-96 mb-10">
        <p class="pb-4 text-base font-normal border-b sm:text-lg border-b-normal text-stone-700 mr-6"> محتوایی با این مشخصات
            پیدا
            نشد. </p>
        <p class="text-sm font-normal sm:text-base text-stone-700 mr-6"> پیشنهاد می کنیم فیلتر ها را تغییر دهید. </p>

        <!-- icon -->
        <svg class="absolute translate-x-1/2 -translate-y-1/2 size-80 sm:size-96 top-1/2 right-1/2" viewBox="0 0 362 362" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2"
                  d="M281.179 283.479L351.799 351.799M329.026 169.613C329.026 257.654 257.654 329.026 169.613 329.026C81.571 329.026 10.1992 257.654 10.1992 169.613C10.1992 81.571 81.571 10.1992 169.613 10.1992C257.654 10.1992 329.026 81.571 329.026 169.613Z"
                  stroke="#58595B" stroke-width="20" stroke-linecap="round" />
        </svg>

    </section>
</template>

<script>
export default {
    name: "EmptyFilters",
}
</script>