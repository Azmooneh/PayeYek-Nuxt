<template>
    <section class="flex flex-col gap-4 mb-8 container sm:flex-row-reverse sm:justify-between sm:items-center">
        <!-- search-->
        <Search />

        <!-- filters -->
        <Filters />
    </section>

</template>

<script>
import Search from '~/components/Articles/children/Search.vue';
import Filters from '~/components/Articles/children/Filter.vue';

export default {
    name: 'Articles Filter',
    components: {
        Search,
        Filters,
    },
}
</script>