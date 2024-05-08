<template>
    <section class="mb-16 lg:mb-36">
        <h3 class="relative text-xl mb-7 font-medium text-stone-700 before:size-3 before:bg-normal before:rounded-custom before:absolute before:content-[''] before:top-1/2 before:-translate-y-1/2 before:right-0 pr-6 lg:pr-8">
            دیدگاه
        </h3>

        <ul class="flex flex-col gap-6 text-stone-700">
            <li>
                <!-- user name-->
                <p class="block text-base font-medium mb-1.5 mr-2"> مهران محمودی </p>

                <!-- user comment-->
                <div :class="'rounded-custom p-4 ' + borderStype">
                    <div class="font-normal leading-6 lg:leading-7 text-justify text-sm lg:text-base">
                        نظر اول سایت
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import { useCommon } from "~/store/index.js";

export default {
    name: "Comments List Type 1",
    setup(){
        const layoutStore = useCommon();
        const borderStype = ref("");

        switch (layoutStore.footerData.styles.border_type) {
            case (1):
                borderStype.value = "border border-stone-400";
                break;
            case (2):
                borderStype.value = "drop-shadow-base";
                break;
            default:
                borderStype.value = "";
        }

        return {
            borderStype,
        }
        // $borderStyle = match($land->styles->border_type) {
        //     0  => 'bg-stone-700/5',
        //         1  => 'border border-stone-400',
        //         2  => 'drop-shadow-base',
        // default => ''
        // };
    }
}
</script>