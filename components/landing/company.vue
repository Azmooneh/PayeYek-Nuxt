<template>
    <NuxtLink v-for="(company, index) in companyList" v-if="status" :key="index"
        class="rounded-lg bg-white border border-[#e5e5e5] py-4 px-2 flex flex-col items-center gap-4"
        :to="'/l/' + company.slug">
        <div class="rounded-full size-24 p-2 bg-[#f2f2f2] border border-[#e5e5e5]">
            <img :src="company.logo" :alt="company.title" class="h-full" />
        </div>
        <p class="text-center text-sm md:text-base font-medium caption_color"> {{ company.title }} </p>
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
    setup(props){
        console.log(computed(() => props.companyList));
    }
}
</script>