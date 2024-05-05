<template>
    <section class="min-h-[calc(100vh-340px)] pt-4" v-if="watchLoading">
        <breadcrumbSkeleton/>

    </section>
    <!-- if we have error -->
    <section v-else-if="error" class="flex-col w-full h-screen gap-4 flex_center">
        <iframe src="https://lottie.host/embed/fa73d967-9d5d-40c4-ba37-d8dc01185d88/XVqCFf2DuQ.json"></iframe>
        <p class="text-base font-medium text-center caption_color"> ارور: {{ error }} </p>
    </section>
    <!-- Render your component content here -->
    <main v-else class="min-h-[calc(100vh-340px)] pt-4">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>

    </main>
</template>

<script>
import {useCommon} from "~/store/index.js";
import breadcrumbSkeleton from "~/components/common/breadcrumbs/breadcrumbSkeleton.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";
import {ref} from "vue";

export default {
  name: 'Product Single',
    components: {
        Breadcrumbs,
        breadcrumbSkeleton,
    },
  setup() {
      const route = useRoute();
      // const layoutStore = useCommon();
      const loading = ref(true);
      const error = ref(null);
      const watchLoading = ref(true);
      const companySlug = ref(route.params.id);
      const productSlug = ref(route.params.product);
      // console.log(companySlug.value);

      const updateMetaTags = (seo) => {
          useHead({
              meta: [
                  {hid: 'robots', name: 'robots', content: seo.robot},
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

      watch(() => loading.value, (n, o) => {
          watchLoading.value = n;
      })

      const loadData = async () => {
          try {
              loading.value = true;
              const response = await useFetch(`${useRuntimeConfig().public.apiBase}/l/${companySlug.value}/p/${productSlug.value}`);
              console.log(response.data.value);
              if (response.data.value.status == 200) {
                  // await categoriesStore.saveCategoriesData(response.data.value.data.categories, response.data.value.data.products.data);
                  // await updateMetaTags(response.data.value.data.seo);
                  // breadcrumbs.value = response.data.value.data.breadcrumbs;
              }
          } catch (err) {
              error.value = err.message || 'سرور به مشکل خورده است.'
          } finally {
              loading.value = false
          }
      }

      loadData();


    // definePageMeta({
    //   middleware: [
    //     function(to, from){
    //       console.log(to);
    //       if(to.name === 'l-id-p-product'){
    //         console.log("true");
    //       }
    //     }
    //   ]
    // })
  }
}
</script>