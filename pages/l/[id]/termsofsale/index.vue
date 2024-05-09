<template>
    <section class="min-h-[calc(100vh-340px)] pt-4" v-if="watchLoading">
        <breadcrumbSkeleton />

    </section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>
    <!-- Render your component content here -->
    <main v-else class="min-h-[calc(100vh-340px)] pt-4">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />

        <section class="relative container mb-8 sm:mb-24 lg:mb-28" v-show="hasTerms">
            <div class="w-full relative pt-[56%] mb-4 sm:mb-6 lg:mb-8 rounded-custom overflow-hidden">
                <NuxtImg :src="mainImage" :alt="`اطلاعیه فروش ${companyName}`" class="absolute top-0 left-0 w-full h-full" height="100%" width="100%"
                         format="webp"/>
                <div
                    class="absolute cursor-default z-[1] bottom-0 left-0 w-full h-full sm:h-1/3 bg-gradient-to-t from-black to-transparent p-4 sm:px-8 lg:px-12 lg:pb-8 sm:pb-6 text-white gap-2 flex items-end justify-between">
                    <div class="flex justify-end flex-col sm:gap-2 lg:gap-4">
                        <h1 class="text-base font-medium sm:text-2xl lg:text-3xl"> اطلاعیه فروش {{ companyName }} </h1>
<!--                        <p class="text-xs sm:text-sm font-normal"> {{ renderDate(dateCreated) }} </p>-->
                    </div>
                    <i class="cursor-pointer p-1 font-Icomoon icon-ic_baseline-share text-lg sm:text-xl lg:text-2xl text-white" @click="copyShareLink"></i>
                </div>
            </div>

            <section class="grid grid-cols-1 lg:grid-cols-12 lg:gap-4 xl:gap-5 mb-12">
                <!-- toc-->
                <div class="hidden lg:block lg:col-span-4" v-if="tocTitles.length">
                    <div class="sticky rounded-custom top-40 max-h-[28rem] xl:max-h-[34rem] overflow-auto bg-stone-200 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        <div class="py-6 h-auto xl:py-8 px-4 xl:px-8 flex flex-col">
                            <a v-for="(title, index) in tocTitles" :href="`#section-${index+1}`" :id="`toc-title-${index+1}`" @click.prevent="scrollToElement(`toc-title-${index+1}`)" :key="index" :class="'mb-6 cursor-pointer last:mb-0 text-sm font-medium text-stone-700 pr-5 relative before:absolute before:top-1.5 before:right-0 before:size-2 before:rounded-full before:border-2 before:border-normal toc-link'" > {{ title }} </a>
                        </div>
                    </div>
                </div>

                <!-- details-->
                <section :class="'custom_article_styles cursor-default custom_table_striped_container ' + (tocTitles.length ? 'lg:col-span-8' : 'lg:col-span-12')">
                    <section v-for="(article, index) in articleList" :key="index" :id="`section-${index+1}`">
                        <h3> {{article.title}} : {{ renderDate(article.created_at) }} </h3>
                        <article class="overflow-hidden" v-html="article.body"></article>
                    </section>
                </section>
            </section>
        </section>

        <section v-show="!hasTerms">
            اطلاعیه فروشی وجود ندارد
        </section>

        <Contact />
    </main>
</template>

<script>
import breadcrumbSkeleton from "~/components/common/breadcrumbs/breadcrumbSkeleton.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";
import {ref} from "vue";
import Section from "~/components/layout/footer/children/sections/section.vue";
import {toast} from "vue3-toastify";
import Contact from "~/components/companyLanding/contact/index.vue";

export default {
    name: 'Terms Of Sale',
    components: {Section, Breadcrumbs, breadcrumbSkeleton, Contact},
    setup(){
        const route = useRoute();
        const companySlug = ref(route.params.id);
        const loading = ref(true);
        const error = ref(null);
        const watchLoading = ref(true);
        const breadcrumbs = ref([]);
        const mainImage = ref(null);
        const companyName = ref("");
        const tocTitles = ref([]);
        const articleList = ref([]);
        const hasTerms = ref(false);

        watch(() => loading.value, (n, o) => {
            watchLoading.value = n;
        })

        const renderDate = (string) => {
            return new Intl.DateTimeFormat('fa-IR', {dateStyle: 'medium'}).format(new Date(string));
        };

        const updateMetaTags = (seo) =>{
            useHead({
                meta: [
                    { hid: 'robots', name: 'robots', content: seo.robot },
                ],
                link: {
                    rel: 'canonical',
                    href: `https://www.paye1.com/l/${seo.canonical}`
                }
            })

            useSeoMeta({
                title: seo.title,
                ogTitle: seo.og_title,
                description: seo.description,
                ogDescription: seo.og_description,
                ogType: seo.og_type,
                ogImage: seo.og_image,
                ogImageAlt: seo.image_alt,
                twitterCard: seo.twitter_card,
                twitterImage: seo.twitter_card_image,
            })
        }

        const loadData = async () => {
            try {
                loading.value = true;
                const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/sale-terms`);
                    console.log(response.data.value)
                if (response.data.value && response.data.value.status == 200 && response.data.value.data.sale_terms.length > 0) {
                    hasTerms.value = true;
                    mainImage.value = response.data.value.data.primary_image;
                    tocTitles.value = response.data.value.data.titles;
                    companyName.value = response.data.value.data.land_name;
                    articleList.value = response.data.value.data.sale_terms;
                    breadcrumbs.value = response.data.value.data.breadcrumbs;
                    await updateMetaTags(response.data.value.data.seo);
                } else if(response.data.value && response.data.value.status == 200 && response.data.value.data.sale_terms.length == 0){{
                    hasTerms.value = false;
                }}
            } catch (err) {
                error.value = err.message || 'سرور به مشکل خورده است.'
            } finally {
                loading.value = false
            }
        }

        loadData();

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

        const scrollStopped = () => {
            const section = document.querySelector('.custom_article_styles');
            if (section) {
                const headings = section.querySelectorAll('article');
                const scrollPosition = window.scrollY;

                headings.forEach(function(heading) {
                    var top = heading.offsetTop;
                    var bottom = top + heading.offsetHeight;
                    var id = heading.getAttribute('id');
                    var tocLinks = document.querySelectorAll('.toc-link');

                    if (scrollPosition >= top && scrollPosition < (bottom + 47)) {
                        tocLinks.forEach(function(link) {
                            link.classList.remove('before:bg-normal');
                            if (link.getAttribute('href') === '#' + id) {
                                link.classList.add('before:bg-normal');
                            }
                        });
                    }
                });
            } else {
                console.error('Section with class "custom_article_styles" not found');
            }
        }

        onMounted(() => {
            // if(hasTerms.value){
                scrollStopped();
                document.addEventListener('scroll', scrollStopped);
            // }
        })

        const scrollToElement = (event) => {
            const targetId = document.getElementById(event).getAttribute("href");
            const targetElement = document.querySelector(targetId);
            const yOffset = -160;
            console.log(targetId)
            targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            const finalY = window.scrollY + targetElement.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: finalY, behavior: "smooth" });
        }


        return {
            watchLoading,
            error,
            breadcrumbs,
            mainImage,
            copyShareLink,
            tocTitles,
            articleList,
            scrollToElement,
            hasTerms,
            companyName,
            renderDate,
        }
    }
}
</script>