import {defineStore} from 'pinia';
import UniversalCookie from 'universal-cookie';

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
        saveCompanyData(data) {
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
        saveStyles(data) {
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
        toggleMenuStatus(status) {
            this.menuVisiblityStatus = status;
        },
        saveFooterData(data) {
            this.footerData = data;
        },
    },
})

export const useCategory = defineStore('Category', {
    state: () => {
        return {
            products: [],
        }
    },
    actions: {
        saveCategoriesData(products) {
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
        saveArticlesData(Articles, pagination, categories) {
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
        saveArticleData(Article) {
            this.Article = Article;
        },
        saveRelatedArticles(relatedArticles) {
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
            CommentsPagination: null,
        }
    },
    actions: {
        saveAttributes(attributes) {
            this.Attributes = attributes;
            this.AttributeSkeleton = true;
        },
        saveSpecification(specifications) {
            this.Specification = specifications;
            this.SpecificationSkeleton = true;
        },
        saveVideos(videos) {
            this.Videos = videos;
            this.VideosSkeleton = true;
        },
        saveComments(comments, pagination) {
            this.Comments = comments;
            this.CommentsPagination = pagination;
            this.CommentsSkeleton = true;
        },
        saveCurrent(data) {
            this.current = data;
        },
        reset() {
            this.Attributes = null;
            this.AttributeSkeleton = false;
            this.current = null;
            this.specification = null;
            this.SpecificationSkeleton = false;
            this.VideosSkeleton = false;
            this.Videos = null;
            this.Comments = null;
            this.CommentsPagination = null;
            this.CommentsSkeleton = false;
        }
    },
})

// function checkDarkmode(){
//     if(localStorage.getItem("payeYekDarkmode") == null || localStorage.getItem("payeYekDarkmode") === "false"){
//         return "false";
//     } else {
//         return "true";
//     }
// }

export const usePayeYek = defineStore('PayeYek', {
    state: () => {
        const theme = useCookie('darkmode');
        return {
            openSidebar: false,
            darkMode: theme.value != null ? theme.value : false,
        }
    },
    actions: {
        toggleSidebar() {
            this.openSidebar = !this.openSidebar;
        },
        toggleDarkmode(){
            this.darkMode = !this.darkMode;
            const cookies = new UniversalCookie();
            cookies.set('darkmode', this.darkMode);
            if (this.darkMode) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    },
})

export const usePayeYekAdvertiseSingle = defineStore('PayeYekAdvertiseSingle', {
    state: () => {
        return {
            primaryImage: null,
            thumbnailImages: null,
            sliderCompact: null,
            information: null,
        }
    },
    actions: {
        saveGallery(image, images, gallery){
            this.primaryImage = image;
            this.thumbnailImages = images;
            this.sliderCompact = gallery;
        },
        saveInformation(info){
            this.information = info;
        }
    },
})