import { defineStore } from 'pinia';

export const useCompanyData = defineStore('Company', {
    state: () => {
        return {
            companyData: {},
            slides: null,
            products: null,
            articles: null,
            videos: null,
        }
    },
    actions: {
        saveCompanyData(data){
            this.companyData = {
                title: data.title,
                slug: data.slug,
                logo: data.logo,
                description: data.description,
            };
            this.slides = data.slides;
            this.products = data.products;
            this.articles = data.articles;
            this.videos = data.videos;
        },
    },
})

export const useStyles = defineStore('Styles', {
    state: () => {
        return {
            styles: {},
        }
    },
    actions: {
        saveStyles(data){
            this.styles = data;
        },
    },
})

export const useCommon = defineStore('Common', {
    state: () => {
        return {
            menuVisiblityStatus: false,
            footerData: null,
            // styles: {},
        }
    },
    actions: {
        toggleMenuStatus(status){
            this.menuVisiblityStatus = status;
        },
        saveFooterData(data){
            this.footerData = data;
        },
    },
})

export const useCategory = defineStore('Category', {
    state: () => {
        return {
            categories: [],
            products: [],
        }
    },
    actions: {
        saveCategoriesData(categories, products){
            this.categories = categories;
            this.products = products;
        }
    },
})