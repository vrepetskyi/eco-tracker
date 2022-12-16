import { configureStore } from "@reduxjs/toolkit";

const persistedState = localStorage.getItem("state");

export default configureStore({
  initialState: persistedState,
  reducer: {
    addGoal(state, action) {
      state.goals.push(action.payload)
    },
    removeGoal(state, action) {
      state.goals = state.goals.splice(action.payload, 1);
    },
    countAchievement(state, action) {
    },
  },
});
