import { createSlice } from "@reduxjs/toolkit";

export const messages = createSlice({
  name: "messages",
  initialState: {
    treeGrown: [],
  },
});

export default messages.reducer;
