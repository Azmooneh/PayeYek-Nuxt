<template>
    <li class="flex flex-col">
        <div class="flex_between gap-4">
            <p
                class="pr-4 leading-8 relative text-normal text-base font-medium before:absolute before:content-[''] before:w-1 before:h-full before:top-0 before:right-0 before:rounded-l before:bg-normal"> نمایندگی {{ code }} تهران </p>
            <div class="cursor-pointer p-0.5" @click="toggleBranchVisiblity">
                <svg :class="'stroke-normal size-6 duration-300 ' + (branchState ? 'rotate-180' : '')"
                     viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9L12 14L7 9" stroke="current" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" />
                </svg>
            </div>
        </div>
        <section :class="'flex flex-col gap-4 overflow-hidden duration-300 ' + (branchState ? ' max-h-[32rem] py-4' : ' max-h-0 py-0')">
            <div class="p-4 rounded-custom border border-stone-700/20">
                <!-- title -->
                <p class="text-base font-medium text-stone-700 mb-4"> شعبه مرکزی </p>
                <section>
                    <!-- location -->
                    <div class="flex items-start gap-3.5 mb-4">
                        <i class="text-2xl font-medium text-normal font-Icomoon icon-marker-location"></i>
                        <p class="text-base font-normal text-stone-700 leading-7"> تهران، اشرفی اصفهانی، برج نگین رضا، واحد
                            112 </p>
                    </div>
                    <!-- phone -->
                    <a href="tel:02144000990" class="flex items-start gap-3.5 mb-2">
                        <i class="text-2xl font-medium text-normal font-Icomoon icon-phone"></i>
                        <p class="text-base font-normal text-stone-700 leading-7"> 021-44000990 </p>
                    </a>
                    <!-- address on utilities -->
                    <a href="geo:35.7330071,51.3335077" class="text-[#1EA0FF] text-base font-medium underline underline-offset-[6px]"> مسیریابی </a>
                </section>
            </div>
            <div class="p-4 rounded-custom border border-stone-700/20">
                <!-- title -->
                <p class="text-base font-medium text-stone-700 mb-4"> شعبه اسلامشهر </p>
                <section>
                    <!-- location -->
                    <div class="flex items-start gap-3.5 mb-4">
                        <i class="text-2xl font-medium text-normal font-Icomoon icon-marker-location"></i>
                        <p class="text-base font-normal text-stone-700 leading-7"> اسلامشهر، میدان نماز، خیابان عباس آباد، پلاک 8 </p>
                    </div>
                    <!-- phone -->
                    <a href="tel:02191006663" class="flex items-start gap-3.5 mb-2">
                        <i class="text-2xl font-medium text-normal font-Icomoon icon-phone"></i>
                        <p class="text-base font-normal text-stone-700 leading-7"> 021-91006663 </p>
                    </a>
                    <!-- address on utilities -->
                    <a href="geo:35.5664514,51.2684246" class="text-[#1EA0FF] text-base font-medium underline underline-offset-[6px]"> مسیریابی </a>
                </section>
            </div>
        </section>
    </li>
</template>

<script>
import { ref } from 'vue';
import {useCommon} from "~/store/index.js";

export default {
    name: 'Branches',


    setup() {
        const branchState = ref(true);
        const layoutStore = useCommon();
        const slug = ref(layoutStore.footerData.slug);
        const code = ref("");

        const toggleBranchVisiblity = () => {
            branchState.value = !branchState.value;
        }

        switch (slug.value) {
            case 'arian-diesel':
                code.value = 2111;
                break;
            case 'saipadiesel':
                code.value = 277;
                break;
            case 'carizan-khodro':
                code.value = 10183;
                break;
            default:
                code.value = "";
        }

        return {
            branchState,
            toggleBranchVisiblity,
            slug,
            code,
        }
    }
}
</script>