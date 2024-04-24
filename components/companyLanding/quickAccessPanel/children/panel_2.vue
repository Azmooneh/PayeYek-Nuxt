<template>
    <section
        class="container grid grid-cols-1 sm:grid-cols-3 gap-4 *:h-20 sm:*:h-32 sm:*:flex-col sm:*:justify-center sm:*:gap-4 md:*:h-36 lg:*:h-40 *:w-full *:rounded-custom *:bg-stone-200 *:flex *:items-center *:gap-5 *:px-4 text-sm lg:text-base font-medium text-stone-700 mb-4 md:mb-8 lg:mb-12">
        <NuxtLink :to="`/l/${slug}/p`" class="w-full">
            <img src="https://paye1.com/storage/media/land/files/WrOudpppgfjwGAW15Xomv1MxvrFKRHvpCIciGodK.png"
                alt="دسته بندی محصولات" class="w-24 object-cover h-16" width="auto" height="auto" />
            <p> دسته بندی محصولات </p>
        </NuxtLink>
        <NuxtLink :to="`/l/${slug}/a?f=news`" class="w-full">
            <img src="https://paye1.com/storage/media/land/files/TDyZRfLWmO6QQHBoXTmH2nQV8rrqaMGc98NuCTTI.png"
                alt="آخرین اخبار" class="w-24 object-cover h-16" width="auto" height="auto" />
            <p> آخرین اخبار </p>
        </NuxtLink>
        <NuxtLink :to="`/l/${slug}/a?f=sell`" class="w-full">
            <img src="https://paye1.com/storage/media/land/files/AzFbYA9pwsk1JXCuNit48gIxfdJL9GNEURuTX3H9.png"
                alt="شرایط فروش" class="w-24 object-cover h-16" width="auto" height="auto" />
            <p> شرایط فروش </p>
        </NuxtLink>
    </section>
</template>

<script>
import { NuxtLink } from "#components";
import { useCompanyData } from '~/store/index';

export default {
    name: '',
    setup() {
        const companyStore = useCompanyData();

        return {
            slug: companyStore.companyData.slug
        }
    }
}
</script>