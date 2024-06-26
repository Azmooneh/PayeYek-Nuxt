export const getApiRequest = (api) => {
    // console.log(useRuntimeConfig().public.apiBase);
    return new Promise((resolve, reject) => {
        // $fetch(`${useRuntimeConfig().public.apiBase}/${api}`, {
        useFetch(`${useRuntimeConfig().public.apiBase}/${api}`, {
            method: 'Get',
        }).then(response => {
            // console.log(`${useRuntimeConfig().public.apiBase}/${api}`);
            resolve(response);
        }).catch(error => {
            // console.log(error);
            reject(error);
        });
    });
};

export const scrollToTopSmoothly = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

export const numberWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getHoursPast = (publishTime) => {
    // Convert publishTime string to a Date object
    const publishDate = new Date(publishTime);

    // Get the current date and time
    const now = new Date();

    // Calculate the difference in hours
    const differenceInHours = (now - publishDate) / 1000 / 60 / 60;

    if (differenceInHours < 1) {
        return 'کمتر از 1 ساعت قبل';
    } else if (differenceInHours >= 1 && differenceInHours < 24) {
        return `${Math.floor(differenceInHours)} ساعت قبل`;
    } else {
        const daysPast = Math.floor(differenceInHours / 24);
        return `${daysPast} روز قبل`;
    }
}