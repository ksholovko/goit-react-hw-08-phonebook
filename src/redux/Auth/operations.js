import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
}

export const register = createAsyncThunk(
    "auth/register",
    async ( credentials, thunkAPI) => {
        try {
          const response = await axios.post("/users/signup", credentials);
          console.log(response.data)
          setAuthHeader(response.data.token);
            return response.data;
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  });


  export const login = createAsyncThunk(
    "auth/login",
    async ( credentials, thunkAPI) => {
        try {
          const response = await axios.post("/users/login", credentials);
          setAuthHeader(response.data.token);
            return response.data;
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
    });
  
    export const logout = createAsyncThunk(
    "auth/logout",
    async ( _, thunkAPI) => {
        try {
          const response = await axios.post("/users/logout");
          clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
      });
  
      
      export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async ( _, thunkAPI) => {
      
          const { token } = thunkAPI.getState().auth;
      console.log(token);
      if (!token) {
        return thunkAPI.rejectWithValue("No valid token");
      }
      setAuthHeader(token)
      try {
        const response = await axios.get("/users/current");
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

  }
  );