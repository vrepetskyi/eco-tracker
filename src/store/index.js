import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos";
import messages from "./messages";
import articles from "./articles";

const store = configureStore({
  reducer: {
    todos,
    messages,
    articles,
  },
});

export default store;

const syncLocalStorage = () => {
  const state = store.getState();
  localStorage.setItem("completedTodos", JSON.stringify(state.todos.completed));
  localStorage.setItem("activeTodosIds", JSON.stringify(state.todos.activeIds));
};

store.subscribe(syncLocalStorage);
