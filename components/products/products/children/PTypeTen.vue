<template>
    <section class="mb-4 lg:mb-16 relative z-[1] container">
        <div class="grid grid-cols-1 gap-12">
            <section class="flex flex-col" v-for="(product, index) in filteredList" :key="index">
                <p class="text-base lg:text-xl font-medium mb-4 text-stone-700 text-center"> محصولات {{ product.category_title
                    }} </p>
                <hr class="w-56 lg:w-96 border-normal mb-4 lg:mb-6 mx-auto" />
                <ul class="flex flex-col lg:flex-row mx-auto lg:mx-0 lg:items-start lg:justify-center lg:flex-wrap gap-1">
                    <li v-for="(item, index) in product.list" :key="index"
                        class="pt-2 px-8 w-72 sm:w-96 lg:w-full lg:max-w-[17rem] pb-5 lg:pt-3 items-center flex flex-col rounded-custom">
                        <NuxtLink :to="'/l/' + landSlug + '/products/' + item.slug" class="mb-2 h-52">
                            <img :src="item.image" :alt="item.name" class="object-contain h-full" />
                        </NuxtLink>
                        <NuxtLink :to="'/l/' + landSlug + '/products/' + item.slug"
                            class="mb-5 font-medium text-xl line-clamp-2 lg:line-clamp-1 text-stone-700 lg:h-[28px]"> {{
                item.name }} </NuxtLink>
                        <NuxtLink :to="'/l/' + landSlug + '/products/' + item.slug"
                            class="mb-6 font-normal text-sm line-clamp-1 text-stone-700 h-5"> مدل: {{ item.model }} </NuxtLink>
                        <!-- <div class="grid grid-cols-2 gap-3 w-56 lg:w-full">
                            <LandBtn text="خرید اقساطی" :to="'/l/' + landSlug + '/p/' + item.slug"
                                classNames="sameCategoryBtnStyle castegoryBtnfilled rounded-custom col-span-2" />
                            <LandBtn text="مشخصات" :to="'/l/' + landSlug + '/p/' + item.slug"
                                classNames="sameCategoryBtnStyle categoryBtnEmpty rounded-custom" />
                            <LandBtn text="کاتالوگ" :to="'/l/' + landSlug + '/p/' + item.slug"
                                classNames="sameCategoryBtnStyle categoryBtnEmpty rounded-custom" />
                        </div> -->
                    </li>
                </ul>
            </section>
        </div>
    </section>
</template>

<script>
import { NuxtLink } from "#components";

export default {
    name: 'Producy Type Ten',
    props: {
        productList: Array,
        categories: Array,
        landSlug: String,
    },
    setup(props) {
        // console.log(props.productList);
        // console.log(props.categories);
        const productList = ref(props.productList);
        const categoryList = ref(props.categories);
        const brandCategories = ref([]); // List of brand categories
        const removeDuplicated = ref([]); // List of unique brand categories
        // const allProductsList = ref([]); // List of all products
        const filteredList = ref([]); // Filtered list of products

        // Function to remove duplicates from an array
        function remove_duplicates_es6(arr) {
            let s = new Set(arr);
            let it = s.values();
            return Array.from(it);
        }

        categoryList.value.map(brand => {
            const brandId = brand.id;
            brandCategories.value.push(brandId);
        })

        removeDuplicated.value = remove_duplicates_es6(brandCategories.value);

        for (let index = 0; index < removeDuplicated.value.length; index++) {
            filteredList.value.push({});
            const catId = removeDuplicated.value[index];
            const catName = categoryList.value[index].title;
            filteredList.value[index].category_title = catName;
            filteredList.value[index].list = [];
            productList.value.filter(product => {
                if (product.category_id == catId) {
                    filteredList.value[index].list.push(product);
                }
            })
        }

        // for (let index = 0; index < removeDuplicated.value.length; index++) {
        //     filteredList.value.push([]);
        //     const element = removeDuplicated.value[index];
        //     productList.value.filter(product => {
        //         product.products.map(item => {
        //             if (item.brand_id == element) {
        //                 filteredList.value[index].push(item);
        //             }
        //         })
        //     })
        // }


        return {
            filteredList,
        }

    }
}
</script>