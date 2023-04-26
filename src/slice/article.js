import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    articles: [],
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
        }
    },
     
})

export const { getArticlesStart, getArticlesSucces, getArticleFailed } = articleSlice.actions
export default articleSlice.reducer