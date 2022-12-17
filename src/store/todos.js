import { createSlice } from "@reduxjs/toolkit";

const initialAll = [
  {
    id: 0,
    objective: "Learn about something1...",
    details: 0, // id of a blog article
    hash: "hash_to_article_section",
  },
  {
    id: 1,
    objective: "Learn about something2...",
    details: 0,
    hash: "hash_to_article_section",
  },
  {
    id: 2,
    objective: "Learn about something3...",
    details: 0,
    hash: "hash_to_article_section",
  },
  {
    id: 3,
    objective: "Learn about something4...",
    details: 0,
    hash: "hash_to_article_section",
  },
];

let lsCompleted;
try {
  lsCompleted = JSON.parse(localStorage.getItem("completedTodos"));
} catch {
  lsCompleted = null;
}

let lsActiveIds;
try {
  lsActiveIds = JSON.parse(localStorage.getItem("activeTodosIds"));
} catch {
  lsActiveIds = null;
}

const isIdValid = (testedId) => initialAll.find(({ id }) => testedId === id);

const initialCompleted = (() => {
  if (Array.isArray(lsCompleted)) {
    const isCompletedValid = ({ id, date }) =>
      date instanceof Date && !isNaN(date) && isIdValid(id);

    return lsCompleted.filter(isCompletedValid);
  }

  return [];
})();

const initialActiveIds = (() => {
  if (Array.isArray(lsActiveIds) && lsActiveIds.length === 3) {
    return lsActiveIds.filter((id) => isIdValid(id));
  }

  return [0, 1, 2];
})();

const pickRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

export const todos = createSlice({
  name: "todos",
  initialState: {
    all: initialAll,
    completed: initialCompleted,
    activeIds: initialActiveIds,
    DISPLAY_QUANTITY: 3,
  },
  reducers: {
    completeTodo(state, { payload: completedId }) {
      state.completed.push({
        id: completedId,
        date: new Date().toJSON(),
      });

      if (state.activeIds.length > state.DISPLAY_QUANTITY) {
        state.activeIds = state.activeIds.splice(completedId, 1);
        return;
      }

      const undisplayed = state.all.filter(
        ({ id }) => !state.activeIds.find((activeId) => id === activeId)
      );

      const unseen = undisplayed.filter(
        ({ id }) =>
          !state.completed.find(({ id: completedId }) => id === completedId)
      );

      state.unseen = unseen;
      state.undisplayed = undisplayed;

      const pickedId = pickRandomElement(
        unseen.length ? unseen : undisplayed
      ).id;

      state.activeIds = state.activeIds.map((id) =>
        id === completedId ? pickedId : id
      );
    },
  },
});

export const { completeTodo } = todos.actions;

export default todos.reducer;
