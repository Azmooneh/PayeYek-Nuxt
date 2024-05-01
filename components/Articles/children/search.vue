<template>
    <section class="relative w-full h-12 sm:w-72">
        <input type="text"
               class="w-full h-full outline-none peer border-b border-x-0 border-t-0 border-b-dark-100 focus:border-b-stone-700 transition-[border] focus:ring-0 pl-10 pr-3 placeholder:text-[#888b93] text-sm font-normal text-stone-700"
               placeholder="جستجو مطلب" />
        <div class="absolute flex-none w-8 h-8 left-2 top-2 flex_center text-stone-400 peer-focus:text-[#111827]">
            <svg class="size-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.9284 17.0396L20.4016 20.3996M19.2816 11.4396C19.2816 15.7695 15.7715 19.2796 11.4416 19.2796C7.11165 19.2796 3.60156 15.7695 3.60156 11.4396C3.60156 7.1097 7.11165 3.59961 11.4416 3.59961C15.7715 3.59961 19.2816 7.1097 19.2816 11.4396Z"
                    stroke="current" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
    </section>
</template>

<script>
export default {
    name: "Article Search",
}
</script>