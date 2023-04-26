import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance";

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
        // Sign project
        signUserStart: state => {
            state.isLoading = true
        },
        signUserSuccess: (state, action) => {
            state.isLoading = false
            state.loggedIn = true 
            state.user = action.payload
            setItem('token', action.payload.token)
        },
        signUserFailed: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        logoutUser: state => {
            state.user = null
            state.loggedIn = false
        }
    }
})

export const { signUserStart, signUserSuccess, signUserFailed, logoutUser } = authSlice.actions
export default authSlice.reducer