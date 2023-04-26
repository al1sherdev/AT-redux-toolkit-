import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Login
        loginUserStart: state => {
            state.isLoading = true
        },
        loginUserSuccess: state => {},
        loginUserFailed: state => {},

        // Register
        registerUserStart: state => {
            state.isLoading = true
        },
        registerUserSuccess: state => {
            state.isLoading = false
            state.loggedIn = true 
        },
        registerUserFailed: state => {
            state.error = 'error',
            state.isLoading = false
        },
    }
})

export const { loginUserStart, registerUserStart, registerUserSuccess, registerUserFailed } = authSlice.actions
export default authSlice.reducer