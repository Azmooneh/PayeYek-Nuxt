export const getApiRequest = (api) => {
    return new Promise((resolve, reject) => {
        $fetch(`${useRuntimeConfig().public.apiBase}/${api}`, {
            method: 'Get',
        }).then(response => {
            resolve(response);
        }).catch(error => {
            console.log(error);
            reject(error);
        });
    });
};