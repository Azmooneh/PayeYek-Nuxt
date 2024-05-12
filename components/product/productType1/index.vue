<template>
    <section class="grid grid-cols-1 lg:grid-cols-9 gap-8 mb-16 lg:mb-36 container 2xl:max-w-7xl">
        <SwiperCompoinent />

        <section class="lg:col-span-3 lg:px-0">
            <h1 class="text-base leading-7 sm:text-xl sm:leading-8 mb-8 lg:mb-12 text-center font-semibold text-normal xl:text-3xl xl:leading-10"> {{ productName }} </h1>
            <Attributes v-if="AttSkeleton" />

            <AttributeSkeleton v-else />

            <HelpAndResources />
        </section>
    </section>


    <section class="grid grid-cols-1 gap-8 lg:grid-cols-9 mb-8 lg:gap-14 container">
        <div class="lg:col-span-6">
            <Information />

            <Specification v-if="SpecSkeleton && haveSpecification" />

            <Videos v-if="VideosSkeleton && haveVideo" />

            <Comments v-if="CommentsSkeleton && haveComment" />

            <AddComment />


        </div>

        <div class="hidden lg:block col-span-3">
            <div class="sticky w-full pt-[130%] top-40">
                <NuxtImg src="https://paye1.com/storage/media/land/files/kxHoy4SopVkrbIu4VooOIxxdkOPLa3nMEL9VF170.webp" class="absolute top-0 right-0 size-full rounded-custom" format="webp" />
            </div>
        </div>
    </section>

    <Contact />
</template>

<script>
import SwiperCompoinent from "~/components/product/productType1/children/Swiper.vue";
import Attributes from "~/components/product/productType1/children/attributes/index.vue";
import AttributeSkeleton from "~/components/product/productType1/children/attributes/attributeSkeleton.vue";
import {useProduct} from "~/store/index.js";
import HelpAndResources from "~/components/product/productType1/children/helpAndResources/index.vue";
import Information from "~/components/product/productType1/children/information/index.vue";
import Specification from "~/components/product/productType1/children/specification/index.vue";
import Videos from "~/components/product/productType1/children/videos/index.vue";
import Comments from "~/components/product/productType1/children/comments/list.vue";
import AddComment from "~/components/product/productType1/children/comments/addComment.vue";
import Contact from "~/components/companyLanding/contact/index.vue";

export default {
    name: "Product Type 1",
    components: {
        SwiperCompoinent,
        Attributes,
        AttributeSkeleton,
        HelpAndResources,
        Information,
        Specification,
        Videos,
        Comments,
        AddComment,
        Contact,
    },
    setup(){
        const productStore = useProduct();
        const productName = ref(productStore.current.title);
        const AttSkeleton = ref(false);
        const SpecSkeleton = ref(false);
        const VideosSkeleton = ref(false);
        const CommentsSkeleton = ref(false);
        const haveSpecification = ref(false);
        const haveVideo = ref(false);
        const haveComment = ref(false);

        watch(() => productStore.AttributeSkeleton, (n, o) => {
            AttSkeleton.value = n;
        })

        if(productStore.AttributeSkeleton){
            AttSkeleton.value = true;
        }

        watch(() => productStore.SpecificationSkeleton, (n, o) => {
            SpecSkeleton.value = n;
        })

        if(productStore.SpecificationSkeleton){
            SpecSkeleton.value = true;
        }

        watch(() => productStore.VideosSkeleton, (n, o) => {
            VideosSkeleton.value = n;
        })

        if(productStore.VideosSkeleton){
            VideosSkeleton.value = true;
        }

        watch(() => productStore.CommentsSkeleton, (n, o) => {
            CommentsSkeleton.value = n;
        })

        if(productStore.CommentsSkeleton){
            CommentsSkeleton.value = true;
        }

        watch(() => productStore.Specification, (n, o) => {
            if(Object.keys(n).length === 0){
                haveSpecification.value = false;
            } else {
                haveSpecification.value = true;
            }
        })

        watch(() => productStore.Videos, (n, o) => {
            if(Object.keys(n).length === 0){
                haveVideo.value = false;
            } else {
                haveVideo.value = true;
            }
        })

        watch(() => productStore.Comments, (n, o) => {
            if(Object.keys(n).length === 0){
                haveComment.value = false;
            } else {
                haveComment.value = true;
            }
        })

        // console.log(Object.keys(productStore.Specification).length === 0);

        return {
            AttSkeleton,
            productName,
            SpecSkeleton,
            VideosSkeleton,
            CommentsSkeleton,
            haveSpecification,
            haveVideo,
            haveComment,
        }
    }
}
</script>