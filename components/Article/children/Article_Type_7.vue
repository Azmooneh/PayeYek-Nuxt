<template>
    <main class="relative container mb-8 sm:mb-24 lg:mb-28">
        <div class="w-full relative pt-[56%] mb-4 sm:mb-6 lg:mb-8 rounded-custom overflow-hidden">
            <NuxtImg :src="image" :alt="title" class="absolute top-0 left-0 w-full h-full" height="100%" width="100%"
                     format="webp"/>
            <div
                class="absolute cursor-default z-[1] bottom-0 left-0 w-full h-full sm:h-1/3 bg-gradient-to-t from-black to-transparent p-4 sm:px-8 lg:px-12 lg:pb-8 sm:pb-6 text-white gap-2 flex items-end justify-between">
                <div class="flex justify-end flex-col sm:gap-2 lg:gap-4">
                    <h1 class="text-base font-medium sm:text-2xl lg:text-3xl"> {{ title }} </h1>
                    <p class="text-xs sm:text-sm font-normal"> {{ renderDate(dateCreated) }} </p>
                </div>
                <i class="cursor-pointer p-1 font-Icomoon icon-ic_baseline-share text-lg sm:text-xl lg:text-2xl text-white" @click="copyShareLink"></i>
            </div>
        </div>

        <section class="grid grid-cols-1 lg:grid-cols-12 lg:gap-4 xl:gap-5 mb-12">
            <!-- toc-->
            <div class="hidden lg:block lg:col-span-4">
                <ul class="rounded-custom py-8 xl:py-10 px-6 xl:px-8 bg-stone-200 list-none sticky top-40">
                    <li v-for="(title, index) in tocTitles" :key="index" :class="'mb-6 cursor-pointer last:mb-0 text-sm font-medium text-stone-700 pr-5 relative before:absolute before:top-1.5 before:right-0 before:size-2 before:rounded-full before:border-2 before:border-normal ' + (title.enter ? 'before:bg-normal' : '')" @click="scrollToElement(title.id)"> {{ title.title }} </li>
                </ul>
            </div>
            <!-- details-->
            <article class="overflow-hidden custom_article_styles cursor-default custom_table_striped_container lg:col-span-8" v-html="body">
            </article>
        </section>

        <!--        articles-->
        <section class="relative flex flex-col pb-10 sm:pb-0">
            <div class="flex items-center gap-2 mb-4">
                <div class="size-3 rounded-full bg-normal"></div>
                <p class="text-xl font-medium sm:text-lg xl:text-3xl text-stone-700"> مقالات مرتبط
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2 xl:gap-4 gap-4">
                <NuxtLink v-for="(article, index) in slides" :key="index" :to="'/l/' + slug + '/a/' + article.slug"
                          class="flex flex-col w-full overflow-hidden rounded-custom bg-white border border-stone-400">
                    <div class="relative w-full pt-[56%]">
                        <NuxtImg :src="article.image" :alt="article.title"
                             class="absolute top-0 left-0 object-cover w-full h-full" width="100%" height="100%" format="webp" />
                    </div>
                    <!-- info -->
                    <div class="px-2 pt-3 pb-4">
                        <h2
                            class="text-base mb-2 font-medium leading-7 sm:text-lg lg:text-base text-stone-700 sm:line-clamp-1">
                            {{ article.title }} </h2>
                        <p
                            class="mb-4 lg:mb-2 text-sm font-normal leading-6 sm:leading-7 sm:h-14 sm:mb-3 text-justify text-stone-700 line-clamp-2 h-12">
                            {{ article.description }}
                        </p>

                        <p class="float-left text-white bg-normal text-lg font-medium flex_center h-10 px-5 rounded-custom">
                            ادامه </p>
                    </div>
                </NuxtLink>
            </div>
        </section>
    </main>
</template>

<script>
import {NuxtLink, NuxtImg} from "#components";
import {useCommon} from '~/store/index.js';
import {toast} from 'vue3-toastify';
import Section from "~/components/layout/footer/children/sections/section.vue";

export default {
    name: "Article Type 7",
    components: {Section},
    props: {
        body: String,
        image: String,
        title: String,
        dateCreated: String,
        slides: Array,
        borderStyle: String,
    },
    setup() {
        const route = useRoute();
        const layoutStore = useCommon();
        const slug = ref(layoutStore.footerData.slug);
        const tocTitles = ref([]);
        const scrollTime = ref(null);

        const copyShareLink = () => {
            const tempInput = document.createElement('textarea');
            tempInput.value = `paye1.com${route.fullPath}`;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            toast.success("لینک کپی شد", {
                autoClose: 3000,
            });
        }

        const renderDate = (string) => {
            return new Intl.DateTimeFormat('fa-IR', {dateStyle: 'medium'}).format(new Date(string));
        };


        onMounted(() => {
            const section = document.querySelector('.custom_article_styles');

            // If section exists, find h3 elements within it
            if (section) {
                const titleElements = section.querySelectorAll('h3, h2');

                // Output or manipulate the h3 elements as needed
                titleElements.forEach((title, index) => {
                    console.log(title.getBoundingClientRect().top);
                    const titleObj = {
                        id: (index + 1),
                        title: title.textContent,
                        top: title.getBoundingClientRect().top,
                        enter: false,
                    };
                    const uniqueId = `section-${index + 1}`; // Generate a unique ID
                    title.id = uniqueId; // Assign the unique ID to the h3 element
                    tocTitles.value.push(titleObj);
                });
            } else {
                console.error('Section with class "custom_article_styles" not found');
            }
        })

        const scrollStopped = () => {
            const windowOffsetTop = (window.top.scrollY + 128);
            tocTitles.value.map(item => {
                item.enter = false;
            })
            for (let i = 0; i < tocTitles.value.length; i++) {
                if(tocTitles.value[i+1] != null){
                    if(tocTitles.value[i].top < windowOffsetTop && tocTitles.value[i+1].top > windowOffsetTop){
                        tocTitles.value[i].enter = true;
                        return false;
                    } else if(tocTitles.value[i].top > windowOffsetTop){
                        tocTitles.value[i].enter = true;
                        return false;
                    } else {
                        // console.log(windowOffsetTop)
                    }
                } else {
                    if(windowOffsetTop >= tocTitles.value[i].top){
                        tocTitles.value[i].enter = true;
                    }
                }
            }
        }

        const handleScroll = () => {
            clearTimeout(scrollTime.value);
            scrollTime.value = setTimeout(() => {
                scrollStopped();
            }, 50)
        }

        handleScroll();

        onMounted(() => {
            document.addEventListener('scroll', handleScroll);
        })

        const scrollToElement = id => {
            var element = document.getElementById(`section-${id}`);
            var headerOffset = 160;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }

        return {
            renderDate,
            slug,
            tocTitles,
            copyShareLink,
            scrollToElement,
        }
    }
}
</script>