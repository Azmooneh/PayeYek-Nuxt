import Vue3Toastify, { toast } from 'vue3-toastify';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3Toastify, {
        rtl: true,
        limit: 3,
        position: toast.POSITION.TOP_RIGHT,
    });

    return {
        provide: { toast },
    };
});