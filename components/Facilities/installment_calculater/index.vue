<template>
    <section class="mb-10 lg:mb-20 container">
        <h3 class="text-lg lg:text-2xl font-medium cursor-default text-stone-700 mb-4 lg:mb-8"> محاسبه گر اقساط
            تسهیلات </h3>
        <section class="grid grid-cols-1 lg:grid-cols-10 gap-5 drop-shadow-smooth bg-white rounded-custom">
            <section class="lg:col-span-6 p-6 lg:pb-12">
                <section class="flex flex-col max-w-[33rem] w-full mx-auto">
                    <!-- vehicle price amount -->
                    <section class="mb-8 lg:mb-12">
                        <p
                            class="text-sm pr-4 font-medium text-stone-700 cursor-default mb-4 relative before:absolute before:content-[''] before:rounded-full before:bg-normal before:top-1.5 before:right-0 before:size-2">
                            میزان وام درخواستی </p>
                        <div class="w-full h-12 mb-6 font-medium text-sm flex_between px-6">
                            <!-- decrease -->
                            <button type="button"
                                    :class="'p-2 cursor-pointer text-[#1EA0FF] ' + (loanInitialValue > loanMin ? '' : 'opacity-40 pointer-events-none')"
                                    @click="loanOrder('minus')">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" class="size-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"/>
                                </svg>
                                <span class="sr-only"> decrease </span>
                            </button>
                            <p class="text-stone-950 lg:text-3xl font-medium text-xl sm:text-2xl cursor-default">
                                {{ numberWithCommas(loanInitialValue) }}
                                <span class="hidden sm:inline-block"> تومان </span>
                            </p>
                            <!-- increase -->
                            <button type="button"
                                    :class="'p-2 cursor-pointer text-[#1EA0FF] ' + (loanInitialValue < loanMax ? '' : 'opacity-40 pointer-events-none')"
                                    @click="loanOrder('plus')">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" class="size-6 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12 4.5v15m7.5-7.5h-15"/>
                                </svg>
                                <span class="sr-only"> increase </span>
                            </button>
                        </div>
                        <div class="h-2 w-full bg-stone-200 rounded-full mb-4 relative">
                            <input :style="{ background: priceSliderBackground }" type="range"
                                   class="dir-rtl absolute top-0.5 inset-x-0.5 range__input rounded-full"
                                   :min="loanMin" :max="loanMax" :value="loanInitialValue"
                                   v-model="loanInitialValue"
                                   :step="loanSteps"/>
                        </div>
                        <div
                            class="text-sm font-normal flex items-center justify-between mb-4 text-stone-700 cursor-default">
                            <p> 200 میلیون تومان </p>
                            <p> 3 میلیارد تومان </p>
                        </div>
                    </section>

                    <!-- payment duration -->
                    <section class="mb-8 lg:mb-12">
                        <p
                            class="text-sm pr-4 font-medium text-stone-700 mb-4 relative cursor-default before:absolute before:content-[''] before:rounded-full before:bg-normal before:top-1.5 before:right-0 before:size-2">
                            مدت زمان بازپرداخت <span class="sm:hidden text-stone-700 text-sm font-normal"> (سال)
                                </span></p>

                        <section class="flex_center gap-2 text-stone-700 text-base font-normal">
                            <div>
                                <input type="radio" value="12" v-model="paymentDuration" name="paymentDuration"
                                       id="12monthes" class="hidden peer"/>
                                <label for="12monthes"
                                       class="h-12 rounded-custom w-12 peer-checked:w-16 sm:w-24 sm:peer-checked:w-28 sm:gap-1 cursor-pointer lg:w-20 lg:peer-checked:w-32 ring-1 flex_center ring-stone-400 bg-white peer-checked:ring-[#1EA0FF] peer-checked:ring-2 peer-checked:bg-stone-200 peer-checked:font-medium peer-checked:text-xl duration-200">
                                    <span> 1 </span>
                                    <span class="hidden sm:block"> ساله </span>
                                </label>
                            </div>
                            <div>
                                <input type="radio" value="24" v-model="paymentDuration" name="paymentDuration"
                                       id="24monthes" class="hidden peer"/>
                                <label for="24monthes"
                                       class="h-12 rounded-custom w-12 peer-checked:w-16 sm:w-24 sm:peer-checked:w-28 sm:gap-1 cursor-pointer lg:w-20 lg:peer-checked:w-32 ring-1 flex_center ring-stone-400 bg-white peer-checked:ring-[#1EA0FF] peer-checked:ring-2 peer-checked:bg-stone-200 peer-checked:font-medium peer-checked:text-xl duration-200">
                                    <span> 2 </span>
                                    <span class="hidden sm:block"> ساله </span>
                                </label>
                            </div>
                            <div>
                                <input type="radio" value="36" v-model="paymentDuration" name="paymentDuration"
                                       id="36monthes" class="hidden peer"/>
                                <label for="36monthes"
                                       class="h-12 rounded-custom w-12 peer-checked:w-16 sm:w-24 sm:peer-checked:w-28 sm:gap-1 cursor-pointer lg:w-20 lg:peer-checked:w-32 ring-1 flex_center ring-stone-400 bg-white peer-checked:ring-[#1EA0FF] peer-checked:ring-2 peer-checked:bg-stone-200 peer-checked:font-medium peer-checked:text-xl duration-200">
                                    <span> 3 </span>
                                    <span class="hidden sm:block"> ساله </span>
                                </label>
                            </div>
                            <div>
                                <input type="radio" value="48" v-model="paymentDuration" name="paymentDuration"
                                       id="48monthes" class="hidden peer"/>
                                <label for="48monthes"
                                       class="h-12 rounded-custom w-12 peer-checked:w-16 sm:w-24 sm:peer-checked:w-28 sm:gap-1 cursor-pointer lg:w-20 lg:peer-checked:w-32 ring-1 flex_center ring-stone-400 bg-white peer-checked:ring-[#1EA0FF] peer-checked:ring-2 peer-checked:bg-stone-200 peer-checked:font-medium peer-checked:text-xl duration-200">
                                    <span> 4 </span>
                                    <span class="hidden sm:block"> ساله </span>
                                </label>
                            </div>
                            <div>
                                <input type="radio" value="60" v-model="paymentDuration" name="paymentDuration"
                                       id="60monthes" class="hidden peer"/>
                                <label for="60monthes"
                                       class="h-12 rounded-custom w-12 peer-checked:w-16 sm:w-24 sm:peer-checked:w-28 sm:gap-1 cursor-pointer lg:w-20 lg:peer-checked:w-32 ring-1 flex_center ring-stone-400 bg-white peer-checked:ring-[#1EA0FF] peer-checked:ring-2 peer-checked:bg-stone-200 peer-checked:font-medium peer-checked:text-xl duration-200">
                                    <span> 5 </span>
                                    <span class="hidden sm:block"> ساله </span>
                                </label>
                            </div>
                        </section>
                    </section>

                    <!-- custom profit-->
                    <section class="flex flex-col gap-4">
                        <!--  inital profit-->
                        <label for="initial-profit" class="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="profit" id="initial-profit" value="initial"
                                   class="hidden peer" v-model="profitState" @change="checkProfit"/>
                            <div
                                class="size-4 rounded-full border border-[#90A4AE] relative peer-checked:border-[#1EA0FF] peer-checked:bg-[#1EA0FF] before:absolute before:w-2 before:h-1 before:border-l before:border-b before:border-white before:top-1 before:left-[3px] before:-rotate-45 before:hidden peer-checked:before:block"></div>
                            <span class="cursor-pointer text-sm font-medium text-stone-700"> سود پیشفرض </span>
                        </label>
                        <!--  custom profit-->
                        <label for="custom-profit" class="flex flex-col sm:flex-row gap-4 sm:gap-8 relative">
                            <div class="flex items-center gap-3 cursor-pointer sm:flex-none">
                                <input type="radio" name="profit" id="custom-profit" value="custom"
                                       class="hidden peer" v-model="profitState" @change="checkProfit"/>
                                <div
                                    class="size-4 rounded-full border border-[#90A4AE] relative peer-checked:border-[#1EA0FF] peer-checked:bg-[#1EA0FF] before:absolute before:w-2 before:h-1 before:border-l before:border-b before:border-white before:top-1 before:left-[3px] before:-rotate-45 before:hidden peer-checked:before:block"></div>
                                <span class="cursor-pointer text-sm font-medium text-stone-700"> سود مورد نظر شما (درصد) </span>
                            </div>


                            <section
                                :class="'flex-1 rounded-custom mx-auto sm:mx-0 border h-11 flex items-center border-stone-400 ' + (profitState === 'initial' ? 'pointer-events-none opacity-50' : 'opacity-100')">
                                <!-- decrease-->
                                <button type="button" @click="decreasePercent"
                                        :class="'flex_center size-11 flex-none border-l border-stone-400 ' + (profitState === 'initial' ? '' : '')">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" class="size-6 stroke-[#1EA0FF]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"/>
                                    </svg>
                                </button>
                                <input type="number" v-model="customProfit"
                                       class="w-full text-center max-w-80 px-3 border-0 placeholder:text-stone-400 focus:ring-0 text-sm font-normal"
                                       placeholder="سود مورد نظر خود را وارد کنید"
                                       :disabled="profitState === 'initial'"/>
                                <!-- increase-->
                                <button type="button" @click="increasePercent"
                                        :class="'flex_center size-11 flex-none border-r border-stone-400 ' + (profitState === 'initial' ? '' : '')">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" class="size-6 stroke-[#1EA0FF]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M12 4.5v15m7.5-7.5h-15"/>
                                    </svg>
                                </button>
                            </section>
                            <p class="text-red-500 text-sm font-normal absolute -bottom-8 right-0"> {{ profitAlert
                                }} </p>
                        </label>
                    </section>
                </section>
            </section>

            <!-- total -->
            <section class="lg:col-span-4 bg-stone-200 rounded-b-custom lg:rounded-t-custom">
                <section
                    class="text-sm font-normal px-4 py-6 lg:py-12 lg:px-10 lg:flex lg:flex-col lg:h-full lg:justify-between">
                    <section>
                        <div class="flex_between mb-4 lg:mb-6">
                            <p class="text-base lg:text-lg font-medium text-stone-700 cursor-default"> نتیجه
                                محاسبه </p>
                            <p :class="'text-sm text-[#1EA0FF] border-b-2 border-b-transparent hover:border-b-[#1EA0FF] border-dashed font-medium cursor-pointer ' + (activeToolsButtons ? 'block' : 'hidden')"
                               @click="trueInformationState"> اطلاعات بیشتر </p>
                        </div>
                        <ul class="list-none text-[#90A4AE] mb-6 cursor-default">
                            <li class="border-b border-b-white py-4 flex_between gap-4 text-sm font-normal">
                                <p> مبلغ هر قسط </p>
                                <div class="flex_row gap-2 sm:gap-4">
                                    <p class="text-stone-950"> {{ numberWithCommas(loanPerMonth) }} </p>
                                    <p> تومان </p>
                                </div>
                            </li>
                            <li class="border-b border-b-white py-4 flex_between gap-4 text-sm font-normal">
                                <p> مدت زمان بازپرداخت </p>
                                <div class="flex_row gap-2 sm:gap-4">
                                    <p class="text-stone-950"> {{ paymentDurationView }} </p>
                                    <p> مـــــاه </p>
                                </div>
                            </li>
                            <li class="border-b border-b-white py-4 flex_between gap-4 text-sm font-normal">
                                <p class=""> مبلغ کل بازپرداخت </p>
                                <div class="flex_row gap-2 sm:gap-4">
                                    <p class="text-stone-950"> {{ numberWithCommas(refund) }} </p>
                                    <p class=""> تومان </p>
                                </div>
                            </li>
                            <li class="border-b border-b-white py-4 flex_between gap-4 text-sm font-normal"
                                v-if="profitState === 'initial'">
                                <p> خالص تسهیلات دریافتی </p>
                                <div class="flex_row gap-2 sm:gap-4">
                                    <p class="text-stone-950"> {{ numberWithCommas(fund) }} </p>
                                    <p class=""> تومان </p>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <button :disabled="!activeToolsButtons"
                            :class="'text-lg font-medium mx-auto rounded-custom text-white flex_center h-12 px-10 lg:px-14 xl:px-20 ' + (activeToolsButtons ? 'bg-normal cursor-pointer' : 'bg-stone-400 pointer-events-none')"
                            type="button" @click="trueCounselingState"> درخواست مشاوره
                    </button>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Installment Calculator',
    props: {
    }
}
</script>