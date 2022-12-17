import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos";
import messages from "./messages";

const store = configureStore({
  reducer: {
    todos,
    messages,
  },
});

export default store;

const syncLocalStorage = () => {
  const state = store.getState();
  localStorage.setItem(
    "completedTodos",
    JSON.stringify(state.todos.completedTodos)
  );
  localStorage.setItem(
    "activeTodosIds",
    JSON.stringify(state.todos.activeTodosIds)
  );
};

store.subscribe(syncLocalStorage);
