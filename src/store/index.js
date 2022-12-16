import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos";
import completedTodos from "./completedTodos";
import messages from "./messages";

const store = configureStore({
  reducer: {
    todos,
    completedTodos,
    messages,
  },
});

export default store;

const syncLocalStorage = () => {
  const state = store.getState();
  localStorage.setItem("completedTodosNumber", state.completedTodos.number);
  localStorage.setItem("completedTodosIds", state.completedTodos.ids);
};

store.subscribe(syncLocalStorage);
