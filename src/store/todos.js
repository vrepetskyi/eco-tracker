import { createSlice } from "@reduxjs/toolkit";

const INITIAL_DISPLAY_QUANTITY = 3;

const initialAll = [
  {
    id: 0,
    objective: "Learn how to dispose of properly",
    articleId: 0,
  },
  {
    id: 1,
    objective: "Learn how to be energy efficient at home",
    articleId: 1,
  },
  {
    id: 2,
    objective: "Learn how to adjust your shopping habbits",
    articleId: 2,
  },
  {
    id: 3,
    objective: "Use an electronic ticket",
  },
  {
    id: 4,
    objective: "Make a contactless payment",
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

const arrayDifference = (array1, array2) =>
  array1.filter((val) => !array2.includes(val));

const pickRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const initialCompleted = (() => {
  if (!Array.isArray(lsCompleted)) {
    return [];
  }

  const isCompletedValid = ({ id, date }) =>
    !isNaN(Date.parse(date)) && isIdValid(id);

  return lsCompleted.filter(isCompletedValid);
})();

const initialActiveIds = (() => {
  if (!Array.isArray(lsActiveIds)) {
    return [0, 1, 2];
  }

  const uniqueActiveIds = [
    ...new Set(lsActiveIds.filter((id) => isIdValid(id))),
  ];

  while (uniqueActiveIds.length < INITIAL_DISPLAY_QUANTITY) {
    uniqueActiveIds.push(
      pickRandomElement(
        arrayDifference(
          initialAll.map(({ id }) => id),
          uniqueActiveIds
        )
      )
    );
  }

  return uniqueActiveIds;
})();

export const todos = createSlice({
  name: "todos",
  initialState: {
    all: initialAll,
    completed: initialCompleted,
    activeIds: initialActiveIds,
    DISPLAY_QUANTITY: INITIAL_DISPLAY_QUANTITY,
  },
  reducers: {
    completeTodo(state, { payload: completedId }) {
      state.completed.push({
        id: completedId,
        date: new Date().toJSON(),
      });

      if (state.activeIds.length > state.DISPLAY_QUANTITY) {
        state.activeIds = state.activeIds.filter((id) => id !== completedId);
        return;
      }

      const undisplayed = arrayDifference(
        state.all.map(({ id }) => id),
        state.activeIds
      );

      const unseen = undisplayed.filter(
        (id) =>
          !state.completed.indexOf(({ id: completedId }) => id === completedId)
      );

      const pickedId = pickRandomElement(unseen.length ? unseen : undisplayed);

      state.activeIds = state.activeIds.map((id) =>
        id === completedId ? pickedId : id
      );
    },
  },
});

export const { completeTodo } = todos.actions;

export default todos.reducer;
