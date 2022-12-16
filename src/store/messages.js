import { createSlice } from "@reduxjs/toolkit";

export const messages = createSlice({
  name: "messages",
  initialState: {
    messages: [],
  },
});

export default messages.reducer;
