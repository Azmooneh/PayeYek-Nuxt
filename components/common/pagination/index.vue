<template>
    <section class="flex_center gap-2.5 mb-12">
        <!-- prev page -->
        <button class="size-7 flex_center cursor-pointer" v-if="productPagination.currentPage > 1" @click="changePage(productPagination.currentPage - 1)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 stroke-stone-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
        <template v-for="page in displayedPages" :key="page">
            <button :class="(productPagination.currentPage === page ? 'bg-normal text-white cursor-default pointer-events-none' : 'text-normal border border-stone-700 cursor-pointer') + ' text-lg font-medium h-7 w-11 rounded'" @click="changePage(page)" type="button">
                {{ page }}
            </button>
        </template>
        <!-- next page -->
        <button class="size-7 flex_center cursor-pointer" v-if="productPagination.currentPage < productPagination.totalPages" @click="changePage(productPagination.currentPage + 1)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-5 stroke-stone-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
            </svg>
        </button>
    </section>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        productPagination: {
            type: Object,
            default: {},
        },
        landSlug: String,
        handlePageChange: Function,
    },
    emits: ['page-change'],
    setup(props, { emit }){
        console.log(props.productPagination)
        const displayedPages = computed(() => {
            const minPage = Math.max(1, props.productPagination.currentPage - 1);
            const maxPage = Math.min(props.productPagination.totalPages, props.productPagination.currentPage + 1);
            const pages = [];
            for (let i = minPage; i <= maxPage; i++) {
                pages.push(i);
            }
            return pages;
        });

        const changePage = (page) => {
            emit('page-change', page);
        };

        return {
            displayedPages,
            changePage,
        }
    }
}
</script>