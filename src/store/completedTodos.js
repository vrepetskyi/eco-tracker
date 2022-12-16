import { createSlice } from "@reduxjs/toolkit";

const localStorageNumber = Number(localStorage.getItem("completedTodosNumber"));
const localStorageIds = Array(localStorage.getItem("completedTodosIds"));

export const completedTodos = createSlice({
  name: "completedTodos",
  initialState: {
    number: localStorageNumber > 0 ? localStorageNumber : 0,
    ids: Array.isArray(localStorageIds) ? localStorageIds : [],
  },
  reducers: {
    add(state, action) {
      state.number += 1;
      state.ids.push(action.payload);
    },
  },
});

export const { add } = completedTodos.actions;

export default completedTodos.reducer;
