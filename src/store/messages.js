import { createSlice } from "@reduxjs/toolkit";

export const messages = createSlice({
  name: "messages",
  initialState: {
    treeGrown: [
      "Big 👍 for your hard work!",
      "You've done enough for today - take some rest 😉",
      "Nature ❤️ you!",
      "You are on the right way, don't stop! ✨",
      "Wow... This tree is so beatiful! 😍",
    ],
  },
});

export default messages.reducer;
