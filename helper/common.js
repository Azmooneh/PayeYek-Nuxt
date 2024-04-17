export const getApiRequest = (api) => {
    console.log(useRuntimeConfig().public.apiBase);
    return new Promise((resolve, reject) => {
        // $fetch(`${useRuntimeConfig().public.apiBase}/${api}`, {
        useFetch(`${useRuntimeConfig().public.apiBase}/${api}`, {
            method: 'Get',
        }).then(response => {
            console.log(`${useRuntimeConfig().public.apiBase}/${api}`);
            resolve(response);
        }).catch(error => {
            console.log(error);
            reject(error);
        });
    });
};