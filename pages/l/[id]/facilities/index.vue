<template>
    <main class="min-h-[calc(100vh-340px)] pt-4">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>

        <Installment_calculater />

        <!-- modal layer -->
        <div class="fixed inset-0 bg-[#ABABAB]/40 z-[5] backdrop-blur-2xl" v-show="modalState" @click="closeModalState">
        </div>

        <!-- information modal content -->
        <section
            class="flex px-4 lg:px-8 py-10 text-sm font-medium text-stone-700 flex-col bg-white sm:rounded-custom fixed top-0 drop-shadow-base right-0 w-full h-full sm:h-auto sm:max-w-[36rem] md:max-w-[40rem] lg:max-w-[44rem] sm:top-1/2 sm:right-1/2 sm:translate-x-1/2 sm:-translate-y-1/2 z-[6] overflow-hidden"
            v-show="informationState">
            <!-- close btn -->
            <div @click="closeInformationState"
                 class="absolute top-4 left-4 size-7 rounded-full bg-stone-200 flex_center cursor-pointer">
                <svg class="size-5 stroke-stone-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12L6 6M12 12L18 18M12 12L18 6M12 12L6 18" stroke="current" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <!-- title -->
            <p
                class="mb-4 pr-4 relative before:absolute before:top-1 before:right-0 before:size-2 before:rounded-full before:bg-normal cursor-default">
                اطلاعات بیشتر </p>
            <ul class="pr-6 space-y-2 list-inside list-disc cursor-default">
                <li class=""> تعداد چک های قابل پرداخت {{ Number(paymentDuration) + 1 }} چک</li>
                <li class=""> مبلغ بیمه بدنه به صورت جداگانه روی اقساط محاسبه و دریافت می شود.</li>
                <li class=""> هزینه عملیات بدون ارزش افزوده محاسبه گردیده است.</li>
                <li class=""> سود اقساط شما معادل نرخ مصوب بانک مرکزی یعنی 23 درصد است.</li>
            </ul>
        </section>

        <section>
            <h3 class="text-lg lg:text-2xl font-medium text-stone-700 mb-4 lg:mb-8 cursor-default"> مدارک مورد نیاز
                دریافت تسهیلات
            </h3>
            <Facilities classNames="mb-10 lg:mb-20"/>
        </section>

        <section
            class="grid grid-cols-1 lg:grid-cols-10 gap-5 drop-shadow-smooth bg-white rounded-custom facility_form">
            <section
                class="lg:col-span-6 p-6 order-2 text-stone-700 pt-6 px-4 lg:order-1 lg:px-10 lg:pt-16 flex flex-col justify-between">
                <div class="flex flex-col gap-2 lg:gap-6 cursor-default">
                    <h4 class="text-lg font-semibold lg:text-2xl"> دریافت تسهیلات در کوتاه ترین زمان </h4>
                    <p class="text-sm font-normal leading-6 lg:leading-7 mb-8 lg:mb-0">
                        با ثبت درخواست دریافت تسهیلات جهت خرید ماشین های سنگین، کارشناسان لیزینگ اتوبان با شما تماس
                        خواهند
                        گرفت و مراحل دریافت تسهیلات را متناسب با شرایط شما به صورت کامل به شما توضیح خواهند داد، پس از
                        تکمیل
                        اطلاعات اولیه پروسه دریافت تسهیلات آغاز خواهد شد.
                        در صورت تکمیل مدارک از سمت شما پروسه دریافت تسهیلات به سرعت طی شده و در مدت زمان 2 هفته می
                        توانید
                        مبلغ تسهیلات مورد نظر را دریافت نمایید.
                    </p>
                </div>
                <!-- icons -->
                <div class="flex items-end gap-6">
                    <FormIconOne classNames="w-full max-w-[480px] lg:max-w-80 xl:max-w-96"/>
                    <FormIconTwo classNames="hidden sm:block w-72 lg:w-44 xl:w-48"/>
                </div>
            </section>
            <!-- form -->
            <section
                class="lg:col-span-4 bg-stone-200 order-1 rounded-b-custom lg:rounded-t-custom pt-8 px-4 pb-12 lg:px-10 lg:order-2">
                <h4
                    class="text-sm pr-4 font-medium text-stone-700 mb-2 lg:mb-5 relative cursor-default before:absolute before:content-[''] before:rounded-full before:bg-normal before:top-1.5 before:right-0 before:size-2">
                    تسهیلات خودروی تجاری </h4>
                <p class="text-sm lg:text-base font-normal text-stone-700 mb-6 lg:mb-8 cursor-default"> برای درخواست
                    تسهیلات خودروی
                    تجاری
                    مشخصات را وارد کنید. </p>
                <section>
                    <div class="flex flex-col text-stone-700 gap-5 mb-9">
                        <div class="flex flex-col gap-1 relative">
                            <label class="text-sm font-normal text-stone-700 pr-2"> تسهیلات </label>
                            <select name="facilities" v-model="loanInitialValue" required
                                    class="h-11 rounded-custom border border-[#CFD1D4] focus:ring-0 outline-none focus:border-[#CFD1D4] text-sm font-normal validation-input">
                                <option value="0" selected disabled> انتخاب کنید</option>
                                <option v-for="(option, index) in loanOptions" :key="index" :value="option.key">
                                    {{ formatValue(option.value) }} تومان
                                </option>
                            </select>
                            <p class="absolute text-red-500 text-xs -bottom-5 right-2 font-normal" v-if="facilityAlert">
                                میزان تسهیلات را وارد کنید. </p>
                        </div>
                        <div class="flex flex-col gap-1 relative">
                            <label class="text-sm font-normal text-stone-700 pr-2"> نوع خودرو </label>
                            <select name="vehicles" v-model="categoryType" required
                                    class="h-11 rounded-custom border border-[#CFD1D4] focus:ring-0 outline-none focus:border-[#CFD1D4] text-sm font-normal validation-input">
                                <option value="0" selected disabled> انتخاب کنید</option>
                                <option v-for="(category, index) in categories" :value="category.id" :key="index">
                                    {{ category.title }}
                                </option>
                            </select>
                            <p class="absolute text-red-500 text-xs -bottom-5 right-2 font-normal" v-if="categoryAlert">
                                نوع خودرو را وارد کنید. </p>
                        </div>
                        <div class="flex flex-col gap-1 relative">
                            <label class="text-sm font-normal text-stone-700 pr-2"> نام و نام خانوادگی </label>
                            <input name="fullname" type="text" v-model="fullname" required
                                   class="validation-input h-11 rounded-custom border border-[#CFD1D4] focus:ring-0 outline-none focus:border-[#CFD1D4] text-sm font-normal placeholder:text-[#acacac]"
                                   placeholder="نام و نام خانوادگی خود را وارد کنید..."/>
                            <p class="absolute text-red-500 text-xs -bottom-5 right-2 font-normal" v-if="nameAlert"> نام
                                و نام خانوادگی خود را وارد کنید. (بیشتر از 3 کاراکتر) </p>
                        </div>
                        <div class="flex flex-col gap-1 relative">
                            <label class="text-sm font-normal text-stone-700 pr-2"> شماره موبایل </label>
                            <input name="phone" type="tel" v-model="phone" required
                                   class="validation-input h-11 dir-rtl rounded-custom border border-[#CFD1D4] focus:ring-0 outline-none focus:border-[#CFD1D4] text-sm font-normal placeholder:text-[#acacac]"
                                   placeholder="شماره موبایل خود را وارد کنید..."/>
                            <p class="absolute text-red-500 text-xs -bottom-5 right-2 font-normal" v-if="phoneAlert">
                                شماره موبایل خود را به درستی وارد کنید. </p>
                        </div>
                    </div>
                    <button type="button"
                            class="h-11 rounded-custom bg-normal text-lg font-medium text-white flex_center w-full max-w-[272px] mx-auto"
                            @click="submitForm">
                        ثبت درخواست
                    </button>
                </section>
            </section>
        </section>

        <!-- submit response message -->
        <section
            :class="'fixed top-4 sm:top-8 right-4 shadow-xl border-r-4 flex items-center rounded-xl p-4 h-20 w-full max-w-[90%] sm:max-w-[28rem] md:max-w-[32rem] sm:right-6 text-stone-700 text-sm sm:text-base sm:font-medium leading-6 sm:leading-7 z-[5] ' + (responseState === 'success' ? 'border-r-green-500 bg-[#E8FBED]' : 'border-r-red-600 bg-[#FFDEDE]')"
            v-if="responseShow"> {{ responseMessage }}
        </section>

    </main>
</template>

<script>
import Breadcrumbs from "~/components/common/breadcrumbs/index.vue";
import {ref} from "vue";
import { numberWithCommas } from "~/helper/common.js";
import Facilities from "~/components/Facilities/Facilities/index.vue";
import FormIconOne from "~/components/Facilities/Facilities/Icons/FormIconOne.vue";
import FormIconTwo from "~/components/Facilities/Facilities/Icons/FormIconTwo.vue";
import Installment_calculater from "~/components/Facilities/installment_calculater/index.vue";

export default {
    name: 'Facilities Page',
    components: {
        Breadcrumbs,
        Facilities,
        FormIconOne,
        FormIconTwo,
        Installment_calculater,
    },
    setup(){
        const breadcrumbs = ref([]);
        const categories = ref([]);
        const selectedProduct = ref("");
        const loanSteps = ref(100000000);
        const loanMin = ref(200000000);
        const loanMax = ref(3000000000);
        const loanInitialValue = ref(400000000);
        const paymentDuration = ref(24);
        const paymentDurationView = ref(0);
        const fund = ref(0);
        const loanPerMonth = ref(0);
        const refund = ref(0);
        const modalState = ref(false);
        const informationState = ref(false);
        const responseShow = ref(false);
        const responseState = ref("success");
        const loanOptions = ref([]);
        const categoryType = ref(0);
        const fullname = ref("");
        const phone = ref("");
        const phoneAlert = ref(false);
        const nameAlert = ref(false);
        const categoryAlert = ref(false);
        const facilityAlert = ref(false);
        const responseMessage = ref("");
        const timer = ref(3000);
        const profitState = ref("initial");
        const customProfit = ref("");
        const activeToolsButtons = ref(false);
        const calculationInterest = ref(0);
        const profitAlert = ref("");

        const generatePriceBackground = (value) => {
            let percentage = (value - loanMin.value) / (loanMax.value - loanMin.value) * 100;
            return `linear-gradient(to left, #1ea0ff ${percentage}%, transparent ${percentage}%)`;
        };

        const priceSliderBackground = computed(() => generatePriceBackground(loanInitialValue.value));

        const loanOrder = (payload) => {
            if (loanInitialValue.value < loanMax.value && payload === 'plus') {
                loanInitialValue.value = parseInt(loanInitialValue.value);
                loanInitialValue.value += loanSteps.value;
            } else if (loanInitialValue.value > loanMin.value && payload === 'minus') {
                loanInitialValue.value -= loanSteps.value;
            }
        }

        const trueCounselingState = () => {
            const element = document.querySelector('.facility_form');
            if (element) {
                const elementRect = element.getBoundingClientRect();
                const offset = elementRect.top - 180; // Adjusted by 100px
                window.scrollTo({top: window.pageYOffset + offset, behavior: 'smooth'});
            }
        }

        const trueInformationState = () => {
            informationState.value = true;
            modalState.value = true;
        }

        const closeModalState = () => {
            modalState.value = false;
            informationState.value = false;
        }

        const closeInformationState = () => {
            informationState.value = false;
            modalState.value = false;
        }

        const calculateValues = () => {
            // if(profitState.value === "initial") {
            //     loanInitialValue.value = parseInt(loanInitialValue.value);
            //     const wageMap = {
            //         12: 5.64,
            //         24: 9.735,
            //         36: 13.225,
            //         48: 16.19,
            //         60: 18.69
            //     };
            //
            //     const reFundMap = {
            //         12: 21.345,
            //         24: 40.085,
            //         36: 59.295,
            //         48: 79.015,
            //         60: 99.27,
            //     };
            //
            //     const wageValue = wageMap[paymentDuration.value];
            //     const refundWageValue = reFundMap[paymentDuration.value];
            //     wage.value = wageValue;
            //     refunWage.value = refundWageValue;
            //
            //
            //     const fullNumber = loanInitialValue.value - (loanInitialValue.value * wageValue) / 100;
            //     fund.value = Math.floor(fullNumber / 1000) * 1000;
            //
            //     const refundFullNumber = loanInitialValue.value + (loanInitialValue.value * refundWageValue) / 100;
            //     refund.value = Math.floor(refundFullNumber / 1000) * 1000;
            //
            //     const perMonthFullNumber = parseInt((refund.value - ((loanInitialValue.value * wageValue) / 100)) / paymentDuration.value);
            //     loanPerMonth.value = Math.floor(perMonthFullNumber / 1000) * 1000;
            //
            //     paymentDurationView.value = paymentDuration.value;
            // } else {
            //     console.log(profitState.value)
            // }
            if (profitState.value === 'initial') {
                calculationInterest.value = 40;
                profitAlert.value = "";
            } else if (profitState.value === 'custom' && customProfit.value < 1) {
                profitAlert.value = "سود مورد نظر شما باید بیشتر از 1 درصد باشد.";
                return false;
            } else if (profitState.value === 'custom' && customProfit.value > 100) {
                profitAlert.value = "سود مورد نظر شما باید کمتر از 100 درصد باشد.";
                return false;
            } else {
                calculationInterest.value = customProfit.value;
                profitAlert.value = "";
            }
            const interest = (Number(loanInitialValue.value) * Number(calculationInterest.value) * (Number(paymentDuration.value) + 1)) / 2400;
            loanPerMonth.value = Math.floor(((Number(loanInitialValue.value) + interest) / paymentDuration.value) / 1000) * 1000;
            paymentDurationView.value = paymentDuration.value;
            refund.value = Number(paymentDuration.value) * Number(loanPerMonth.value);
            const wageMap = {
                12: 5.64,
                24: 9.735,
                36: 13.225,
                48: 16.19,
                60: 18.69
            };
            const wageValue = wageMap[paymentDuration.value];
            const fullNumber = Number(loanInitialValue.value) - (Number(loanInitialValue.value) * wageValue) / 100;
            fund.value = Math.floor(fullNumber / 1000) * 1000;
            // fund.value = 0;

            activeToolsButtons.value = true;
        };

        const resetTotalAmounts = () => {
            loanPerMonth.value = 0;
            paymentDurationView.value = 0;
            refund.value = 0;
            fund.value = 0;
        }

        const checkProfit = () => {
            resetTotalAmounts();
            if (profitState.value === 'initial') {
                customProfit.value = "";
            } else {
                customProfit.value = 26;
            }
        }

        const decreasePercent = () => {
            if (customProfit.value <= 1) {
                customProfit.value = 1;
            } else {
                customProfit.value = customProfit.value - 1;
                calculationInterest.value = customProfit.value - 1;
            }
        }

        const increasePercent = () => {
            if (customProfit.value >= 100) {
                customProfit.value = 100;
            } else {
                customProfit.value = Number(customProfit.value) + 1;
                calculationInterest.value = Number(customProfit.value) + 1;
            }
        }

        watchEffect(() => {
            calculateValues();
        });

        const generateLoanOptions = () => {
            const start = 200;
            const end = 3000;
            const increment = 100;

            for (let value = start; value <= end; value += increment) {
                const formattedKey = String(value * 1000000).padStart(9, '0'); // Add leading zeros
                loanOptions.value.push({key: Number(formattedKey), value: value});
            }
        };

        const formatValue = (value) => {
            const formattedValue = value < 1000 ? value : (value / 1000);
            const unit = value < 1000 ? 'میلیون' : 'میلیارد';
            return `${formattedValue.toLocaleString('fa')} ${unit}`;
        };

        onMounted(() => {
            generateLoanOptions();
        });

        function myTimer(interval) {
            if (timer.value == 0) {
                responseShow.value = false;
                responseMessage.value = "";
                clearInterval(interval);
                return false;
            }
            timer.value -= 100;
        }

        const resetFormInputs = () => {
            const inputs = document.querySelectorAll('.validation-input');

            inputs.forEach((element) => {
                element.classList.remove('invalid:!border-red-500');
            });

            categoryType.value = 0;
            fullname.value = "";
            phone.value = "";
        }

        const submitForm = () => {
            const inputs = document.querySelectorAll('.validation-input');

            inputs.forEach((element) => {
                element.classList.add('invalid:!border-red-500');
            });

            for (const [field, value] of Object.entries({
                amount: loanInitialValue,
                phone: phone,
                category_id: categoryType,
                full_name: fullname
            })) {
                if (field === 'phone') {
                    if (value.value.toString().length != 11) {
                        phoneAlert.value = true;
                    } else {
                        phoneAlert.value = false;
                    }
                } else if (field === 'full_name') {
                    if (value.value.toString().length < 3 || value.value.toString().length > 63) {
                        nameAlert.value = true;
                    } else {
                        nameAlert.value = false;
                    }
                } else if (field === 'category_id') {
                    if (value.value == 0) {
                        categoryAlert.value = true;
                    } else {
                        categoryAlert.value = false;
                    }
                } else if (field === 'amount') {
                    if (value.value == 0) {
                        facilityAlert.value = true;
                    } else {
                        facilityAlert.value = false;
                    }
                }
            }

            if (!phoneAlert.value && !nameAlert.value && !categoryAlert.value && !facilityAlert.value) {
                const body = {
                    amount: loanInitialValue.value.toString(),
                    category_id: categoryType.value,
                    full_name: fullname.value.toString(),
                    phone: phone.value.toString(),
                    land_id: Number(props.landId),
                }

                // console.log(body)
                axios.post(`https://paye1.com/api/l/facilities-request`, body)
                    .then(function (response) {
                        // handle success
                        // console.log("success", response);
                        if (response.data.status == 200) {
                            responseShow.value = true;
                            responseMessage.value = "اطلاعات شما ثبت شد. منتظر تماس کارشناسان ما باشید.";
                            responseState.value = "success";
                            timer.value = 3000;
                            const myInterval = setInterval(() => myTimer(myInterval), 100);
                            resetFormInputs();
                        }
                    })
                    .catch(function (error) {
                        // handle error
                        console.log("catch", error.response);
                        if (error.response.data.status == 400) {
                            responseShow.value = true;
                            responseMessage.value = "اطلاعات شما قبلا ثبت شده است. منتظر تماس کارشناسان ما باشید.";
                            responseState.value = "error";
                            timer.value = 3000;
                            const myInterval = setInterval(() => myTimer(myInterval), 100);
                        } else if (error.response.data.status == 500) {
                            responseShow.value = true;
                            responseMessage.value = "خطایی سمت سرور رخ داده است. لطفا بعدا امتحان کنید.";
                            responseState.value = "error";
                            timer.value = 3000;
                            const myInterval = setInterval(() => myTimer(myInterval), 100);
                        }
                    })
                    .finally(function () {
                        // always executed
                    });
            }
        }


        return {
            breadcrumbs,
            selectedProduct,
            loanSteps,
            loanMin,
            loanMax,
            loanInitialValue,
            paymentDuration,
            numberWithCommas,
            loanOrder,
            priceSliderBackground,
            fund,
            loanPerMonth,
            refund,
            modalState,
            informationState,
            trueCounselingState,
            closeModalState,
            trueInformationState,
            closeInformationState,
            loanOptions,
            formatValue,
            submitForm,
            categoryType,
            fullname,
            phone,
            phoneAlert,
            nameAlert,
            categoryAlert,
            facilityAlert,
            responseState,
            responseMessage,
            responseShow,
            profitState,
            customProfit,
            paymentDurationView,
            // calculateValues,
            activeToolsButtons,
            checkProfit,
            profitAlert,
            decreasePercent,
            increasePercent,
            categories,
        }
    }
}
</script>