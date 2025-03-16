import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
  },
});

// TypeScript Types for State & Dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
