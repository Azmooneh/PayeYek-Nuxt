import { defineStore } from 'pinia';
import {Pagination} from "swiper/modules";
import Categories from "~/components/layout/footer/children/categories/index.vue";

export const useCompanyData = defineStore('Company', {
    state: () => {
        return {
            companyData: {},
            slides: null,
            categories: null,
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
            this.categories = data.categories;
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

export const useArticles = defineStore('Articles', {
    state: () => {
        return {
            Articles: [],
            Pagination: {},
            Categories: [],
        }
    },
    actions: {
        saveArticlesData(Articles, pagination, categories){
            this.Articles = Articles;
            this.Pagination = pagination;
            this.Categories = categories;
        }
    },
})

export const useArticle = defineStore('Article', {
    state: () => {
        return {
            Article: [],
            RelatedArticles: [],
        }
    },
    actions: {
        saveArticleData(Article){
            this.Article = Article;
        },
        saveRelatedArticles(relatedArticles){
            this.RelatedArticles = relatedArticles;
        }
    },
})

export const useProduct = defineStore('Product', {
    state: () => {
        return {
            Attributes: null,
            AttributeSkeleton: false,
            current: null,
            SpecificationSkeleton: false,
            Specification: null,
            VideosSkeleton: false,
            Videos: null,
            CommentsSkeleton: false,
            Comments: null,
        }
    },
    actions: {
        saveAttributes(attributes){
            this.Attributes = attributes;
            this.AttributeSkeleton = true;
        },
        saveSpecification(specifications){
            this.Specification = specifications;
            this.SpecificationSkeleton = true;
        },
        saveVideos(videos){
            this.Videos = videos;
            this.VideosSkeleton = true;
        },
        saveComments(comments){
            this.Comments = comments;
            this.CommentsSkeleton = true;
        },
        saveCurrent(data){
            this.current = data;
        }
    },
})
