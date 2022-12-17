import { createSlice } from "@reduxjs/toolkit";

const lsCompletedTodos = JSON.parse(localStorage.getItem("completedTodos"));
const lsActiveTodosIds = JSON.parse(localStorage.getItem("activeTodosIds"));

const pickRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const initialTodosIds = [0, 0, 0];

export const todos = createSlice({
  name: "completedTodos",
  initialState: {
    todos: [
      {
        id: 0,
        objective: "Learn about something...",
        details: "some_url",
      },
    ],
    completedTodos: Array.isArray(lsCompletedTodos) ? lsCompletedTodos : [],
    activeTodosIds: Array.isArray(lsActiveTodosIds)
      ? lsActiveTodosIds.filter((lsActiveTodoId) =>
          todos.find(({ todoId }) => lsActiveTodoId === todoId)
        )
      : initialTodosIds,
  },
  reducers: {
    completeTodo(state, action) {
      state.completedTodos.push({
        id: action.payload,
        date: new Date(),
      });

      if (state.activeTodosIds.length() > 3) {
        return;
      }

      const completedTodoIndex = state.activeTodosIds.indexOf(
        ({ id }) => id === action.payload
      );

      const unseenTodos = state.todos.filter(({ todoId }) =>
        completeTodo.find(({ completedTodoId }) => todoId === completedTodoId)
      );

      state.activeTodosIds[completedTodoIndex] = pickRandomElement(
        unseenTodos.length() ? unseenTodos : todos
      );
    },
  },
});

export const { completeTodo } = todos.actions;

export default todos.reducer;
