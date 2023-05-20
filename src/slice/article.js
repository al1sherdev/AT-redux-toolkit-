import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    articles: [],
    articleDetail: null,
    error: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticlesStart: state => {
            state.isLoading = true
        },
        getArticlesSucces: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        getArticleFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        getArticleDetailStart: state => {
            state.isLoading = true
        },
        getArticleDetailSuccess: (state, action) => {
            state.isLoading = false
            state.articleDetail = action.payload
        },
        getArticleDetailFailed: state => {
            state.isLoading = false
        },
        postArticleStart: state => {
            state.isLoading = true
        },
        postArticleSuccess: state => {
            state.isLoading = false
        },
        postArticleFailed: state => {
            state.isLoading = false
            state.error = "error"
        },
    },
     
})

export const { getArticlesStart, 
                getArticlesSucces, 
                getArticleFailed, 
                getArticleDetailStart, 
                getArticleDetailSuccess, 
                getArticleDetailFailed,
                postArticleStart,
                postArticleSuccess,
                postArticleFailed,
            } = articleSlice.actions
export default articleSlice.reducer