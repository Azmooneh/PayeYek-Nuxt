<template>
    <main class="relative pt-4 container mb-8 sm:mb-24 lg:mb-28">
        <div class="flex items-start justify-between gap-4 mb-2.5 md:mb-4 text-normal">
<!--            <h1 class="text-xl font-medium leading-8 sm:text-2xl"> {{ article.title }} </h1>-->
<!--            <p class="flex-none mt-1 text-sm font-normal"> {{ // jdate($article->created_at)->format('%B، %Y') }} </p>-->
        </div>

        <div class="w-full relative pt-[56%] mb-2 md:mb-4 lg:mb-8 rounded-custom overflow-hidden">
<!--            <img :src="article.image" :alt="article.title" class="absolute top-0 left-0 w-full h-full" />-->
            <div class="absolute z-[1] bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent">
            </div>
        </div>

<!--        details-->
<!--        <section class="mb-8 overflow-hidden lg:mb-16 custom_article_styles custom_table_striped_container">-->
<!--            {!! $article->body !!}-->
<!--        </section>-->

<!--        contact to expert-->
        <section
            class="flex flex-col bg-white border border-[#F0F3F7] rounded-custom overflow-hidden mb-8 sm:mx-6 md:mx-10 lg:mb-12">
<!--            title-->
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
<!--            {{&#45;&#45; header &#45;&#45;}}-->
            <h3 class="mb-2 text-base font-medium text-center sm:text-lg text-stone-700"> آخرین اخبار و اطلاعیه ها
            </h3>
            <hr class="mx-auto mb-6 w-60 sm:w-96 border-normal lg:mb-0" />
<!--            {{// &#45;&#45; show all &#45;&#45;}}-->
<!--            <Link href="{{ route('landing.article.list', ['page' => $land->slug]) }}"-->
<!--                  class="hidden float-left px-2 mb-3 mr-auto text-base font-normal cursor-pointer text-normal lg:inline-block">-->
<!--                نمایش همه </Link>-->
<!--            <MoreArticles :slides="{{ $land->articles }}" borderType="{{ $borderType }}" striped="{{$land->styles->article_striped}}" landSlug="{{ $land->slug }}" containerClass="{{ $land->styles->border_type == 2 ? '!py-6' : '' }}" />-->
        </section>
    </main>
</template>

<script>
export default {
    name: "Article Type 1",
}
</script>