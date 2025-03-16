import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthState } from "../types";

const API_URL = process.env.REACT_APP_API_URL;

// ✅ User Signup
export const signupUser = createAsyncThunk("auth/signup", async (userData: { email: string; password: string }) => {
  const res = await axios.post(`${API_URL}/auth/signup`, userData);
  return res.data;
});

// ✅ User Login
export const loginUser = createAsyncThunk("auth/login", async (userData: { email: string; password: string }) => {
  const res = await axios.post(`${API_URL}/auth/login`, userData);
  return res.data;
});

// 🎯 Reducer
const initialState: AuthState = { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
        state.token = action.payload.token;
      });
  },
});

export default authSlice.reducer;
