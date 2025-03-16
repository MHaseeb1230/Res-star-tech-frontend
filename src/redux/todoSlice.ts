import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo, TodoState } from "../types";

const API_URL = process.env.REACT_APP_API_URL;

// ✅ Fetch Todos
export const fetchTodos = createAsyncThunk<Todo[], string>("todos/fetchTodos", async (userId) => {
  const res = await axios.get(`${API_URL}/todos?userId=${userId}`);
  return res.data;
});

// ✅ Add Todo
export const addTodo = createAsyncThunk<Todo, Omit<Todo, "_id">>("todos/addTodo", async (todo) => {
  const res = await axios.post(`${API_URL}/todos`, todo);
  return res.data;
});

// ✅ Delete Todo
export const deleteTodo = createAsyncThunk<string, string>("todos/deleteTodo", async (id) => {
  await axios.delete(`${API_URL}/todos/${id}`);
  return id;
});

// ✅ Toggle Todo
export const toggleTodo = createAsyncThunk<Todo, string>("todos/toggleTodo", async (id) => {
  const res = await axios.patch(`${API_URL}/todos/${id}`);
  return res.data;
});

// 🎯 Reducer
const initialState: TodoState = { items: [], loading: false };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((todo) => todo._id !== action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        const index = state.items.findIndex((todo) => todo._id === action.payload._id);
        state.items[index] = action.payload;
      });
  },
});

export default todoSlice.reducer;
