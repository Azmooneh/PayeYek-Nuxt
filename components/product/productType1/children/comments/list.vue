<template>
    <section class="mb-16 lg:mb-36">
        <h3 class="relative text-xl mb-7 font-medium text-stone-700 before:size-3 before:bg-normal before:rounded-custom before:absolute before:content-[''] before:top-1/2 before:-translate-y-1/2 before:right-0 pr-6 lg:pr-8">
            دیدگاه
        </h3>

        <ul class="flex flex-col gap-6 text-stone-700">
            <li v-for="(comment, index) in commentList" :key="index">
                <!-- user name-->
                <p class="block text-base font-medium mb-1.5 mr-2"> {{ comment.name }} </p>

                <!-- user comment-->
                <div :class="'rounded-custom p-4 ' + borderStype">
                    <div class="font-normal leading-6 lg:leading-7 text-justify text-sm lg:text-base">
                        {{ comment.comment }}
                    </div>
                </div>
            </li>
        </ul>

        <Pagination classNames="mt-8" :scrollToTop="false" :landSlug="companySlug" :productPagination="pagination" @page-change="handlePageChange" />
    </section>
</template>

<script>
import { useCommon, useProduct } from "~/store/index.js";
import Pagination from "~/components/common/pagination/index.vue";
import {ref} from "vue";

export default {
    name: "Comments List Type 1",
    components: {Pagination},
    setup(){
        const route = useRoute();
        const layoutStore = useCommon();
        const productStore = useProduct();
        const companySlug = ref(layoutStore.footerData.slug);
        const borderStype = ref("");
        const commentList = ref(productStore.Comments);
        const pagination = ref(productStore.CommentsPagination);
        const landId = ref(layoutStore.footerData.styles.land_id);
        const productSlug = ref(route.params.product);
        const commentsFilter = {
            landId: landId.value,
            productSlug: productSlug.value,
            perPage: 3,
            page: 1,
        }

        switch (layoutStore.footerData.styles.border_type) {
            case (2):
                borderStype.value = "drop-shadow-base";
                break;
            default:
                borderStype.value = "border border-stone-400";
        }

        const handlePageChange = async (page) => {
            commentsFilter.page = page;
            const str = Object.keys(commentsFilter).map(key => `${key}=${encodeURIComponent(commentsFilter[key])}`).join("&");
            const response = await $fetch(`${useRuntimeConfig().public.apiBase}/l/comment/get-comment?${str}`);
            if(response != null){
                if(response.status == 200) {
                    const commentList = response.data;
                    const pagination = response.pagination;
                    productStore.saveComments(commentList, pagination);
                }
            }
        }

        watch(() => productStore.Comments, (newValue) => {
            commentList.value = newValue;
        })

        watch(() => productStore.CommentsPagination, (newValue) => {
            pagination.value = newValue;
        })

        return {
            borderStype,
            commentList,
            pagination,
            companySlug,
            handlePageChange,
        }
    }
}
</script>