import { createSlice } from "@reduxjs/toolkit"
import { login, logout, refreshUser, register } from "./operations";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' 


const initialState = {
        items: [],
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
            .addCase(register.pending, (state, action) => { })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;})
            .addCase(register.rejected, (state, action) => { })
            .addCase(login.pending, (state, action) => { })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, action) => { })
            .addCase(logout.pending, (state, action) => { })
            .addCase(logout.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logout.rejected, (state, action) => { })
            .addCase(refreshUser.fulfilled, (state, action) => { 
                state.user = action.payload;
                state.isLoggedIn = true;
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
