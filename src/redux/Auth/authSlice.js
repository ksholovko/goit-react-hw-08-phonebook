import { createSlice } from "@reduxjs/toolkit"
import { login, logout, refreshUser, register } from "./operations";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' 


const initialState = {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    
}

const authSlice = createSlice({
   name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state) => {state})
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;})
            .addCase(register.rejected, (state) => {state})
            .addCase(login.pending, (state) => {state})
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state) => {state})
            .addCase(logout.pending, (state) => {state})
            .addCase(logout.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logout.rejected, (state) => {state})
            .addCase(refreshUser.pending, (state) => { 
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => { 
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;

            })
            .addCase(refreshUser.rejected, (state) => { 
                 state.isRefreshing = false;

        })
        

    }
 
})

// export const authReducer = authSlice.reducer;

const persistConfig = {
  key: 'auth',
    storage,
    whitelist: ['token'],
}

export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer)
