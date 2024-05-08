<template>
    <main class="relative pt-4 container mb-8 sm:mb-24 lg:mb-28">
        <div class="flex items-start justify-between gap-4 mb-2.5 md:mb-4 text-normal">
            <h1 class="text-xl font-medium leading-8 sm:text-2xl"> {{ title }} </h1>
            <p class="flex-none mt-1 text-sm font-normal"> {{ renderDate(dateCreated) }} </p>
        </div>

        <div class="w-full relative pt-[56%] mb-2 md:mb-4 lg:mb-8 rounded-custom overflow-hidden">
            <NuxtImg :src="image" :alt="title" class="absolute top-0 left-0 w-full h-full" height="100%" width="100%" format="webp" />
            <div class="absolute z-[1] bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent">
            </div>
        </div>

        <!-- details-->
        <section class="mb-8 overflow-hidden lg:mb-16 custom_article_styles custom_table_striped_container" v-html="body">
        </section>

        <!-- contact to expert-->
        <section
            class="flex flex-col bg-white border border-[#F0F3F7] rounded-custom overflow-hidden mb-8 sm:mx-6 md:mx-10 lg:mb-12">
            <!-- title-->
            <div
                class="w-full h-20 text-xl font-black text-white lg:text-2xl bg-stone-700 drop-shadow-base flex_center">
                <p> ارتباط با کارشناسان فروش </p>
            </div>
            <form action="#" method="#" class="flex flex-col items-center px-5 pt-6 pb-10">
                <p class="mb-6 text-base font-normal leading-7 text-center text-stone-700"> جهت ارتباط و اطلاع از
                    شرایط فروش شماره خود را وارد کنید. </p>
                <input name="phone" type="tel"
                       class="bg-white mb-5 max-w-64 h-11 border border-[#CFD1D4] focus:border-[#CFD1D4] focus:ring-0 rounded-custom outline-none w-full placeholder:text-[#acacac] text-base font-normal px-3 text-stone-700 tracking-widest"
                       placeholder="09" />
                <button type="submit"
                        class="w-full text-base font-medium text-white rounded-custom flex_center max-w-64 h-11 bg-normal hover:bg-focus focus:bg-focus focus:shadow-focus focus:shadow-shadowNormal">
                    ثبت درخواست </button>
            </form>
        </section>

<!--        articles-->
        <section class="relative flex flex-col pb-10 sm:pb-0">
            <h3 class="mb-2 text-base font-medium text-center sm:text-lg text-stone-700"> آخرین اخبار و اطلاعیه ها
            </h3>
            <hr class="mx-auto mb-6 w-60 sm:w-96 border-normal lg:mb-0" />
<!--            {{// &#45;&#45; show all &#45;&#45;}}-->
<!--            <NuxtLink :to="`/l/${slug}/a?f=${slides[0].type}`"-->
<!--                  class="hidden float-left px-2 mb-3 mr-auto text-base font-normal cursor-pointer text-normal lg:inline-block">-->
<!--                نمایش همه </NuxtLink>-->
<!--            <MoreArticles :slides="{{ $land->articles }}" borderType="{{ $borderType }}" striped="{{$land->styles->article_striped}}" landSlug="{{ $land->slug }}" containerClass="{{ $land->styles->border_type == 2 ? '!py-6' : '' }}" />-->
<!--            <Swiper v-bind="settings" class="w-full">-->
<!--                <SwiperSlide v-for="(article, index) in 5" :key="index" class="bg-red-500 p-20"></SwiperSlide>-->
<!--            </Swiper>-->
            <Swiper v-bind="settings" :class="'w-full articleSliderTypeFive ' + containerClass" :modules="[SwiperPagination, SwiperAutoplay, SwiperNavigation]">
                <SwiperSlide v-for="(article, index) in slides" :key="index" :class="'flex flex-col flex-none overflow-hidden rounded-custom ' + borderType + (striped == 1 ? ' evenOdd_cards' : ' bg-white')">
                    <div class="relative w-full pt-[56%]">
                        <img :src="article.image" :alt="article.title" class="absolute top-0 left-0 object-cover w-full h-full" />
                    </div>
                    <!-- info -->
                    <div class="px-2 pt-3 pb-4">
                        <div class="gap-4 mb-1 flex_between">
                            <h3
                                class="text-base font-medium leading-7 sm:text-lg text-stone-700 line-clamp-1">
                                {{ article.title }} </h3>
                            <h4 class="flex-none text-sm font-medium leading-7 sm:text-base text-normal"> {{ renderDate(article.created_at) }} </h4>
                        </div>
                        <p
                            class="mb-2 text-sm font-normal leading-6 sm:leading-7 sm:h-20 sm:mb-3 text-justify text-stone-700 line-clamp-3 h-[72px]">
                            {{ article.description }}
                        </p>
                        <NuxtLink :to="'/l/' + slug + '/a/' + article.slug" classNames="mx-auto text-white bg-stone-700 text-lg font-medium flex_center h-10 w-32 rounded-custom"> بیشتر </NuxtLink>
                    </div>
                </SwiperSlide>
            </swiper>
        </section>
    </main>
</template>

<script>
import { NuxtLink ,NuxtImg } from "#components";
import { useCommon } from '~/store/index.js';

export default {
    name: "Article Type 1",
    props: {
        body: String,
        image: String,
        title: String,
        dateCreated: String,
        containerClass: String,
        slides: Array,
        borderType: String,
        striped: [String, Number],
    },
    setup(props){
        console.log(props.slides[0].type)
        const layoutStore = useCommon();
        const slug = ref(layoutStore.footerData.slug);
        const settings = {
            slidesPerView: 3,
            spaceBetween: 16,
            // pagination: true,
            // loop: true,
            // autoplay: {
            //     delay: 3500,
            //     disableOnInteraction: false,
            // },
            navigation: true,
            speed: 1000,
            pagination: {
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
            }
        };
        // const breakpoints = {
        //     320: {
        //         slidesPerView: "auto",
        //         spaceBetween: 20,
        //     },
        //     1024: {
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //     },
        // }

        const renderDate = (string) => {
            return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(new Date(string));
        };


        onMounted(() => {
            const section = document.querySelector('.custom_article_styles');

            // If section exists, find h3 elements within it
            if (section) {
                const h3Elements = section.querySelectorAll('h3, h2');

                // Output or manipulate the h3 elements as needed
                h3Elements.forEach((h3, index) => {
                    const uniqueId = `section-${index + 1}`; // Generate a unique ID
                    h3.id = uniqueId; // Assign the unique ID to the h3 element
                    // console.log(h3); // Output the assigned ID
                });
            } else {
                console.error('Section with class "custom_article_styles" not found');
            }
        })

        return {
            renderDate,
            slug,
            // breakpoints,
            settings,
        }
    }
}
</script>