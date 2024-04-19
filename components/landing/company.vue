<template>
    <NuxtLink v-for="(company, index) in companyList" :key="index"
        class="rounded-lg bg-white border border-[#e5e5e5] py-4 px-2 flex flex-col items-center gap-4"
        :to="{ name: 'Company', params: {id: company.slug} }">
        <div class="rounded-full size-24 p-2 bg-[#f2f2f2] border border-[#e5e5e5]">
            <img :src="company.logo" :alt="company.title" class="h-full" />
        </div>
        <h3 class="text-sm font-medium text-center md:text-base caption_color"> {{ company.title }} </h3>
    </NuxtLink>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'CompanyLink',
    props: {
        companyList: Array,
        status: Boolean,
    },
}
</script>