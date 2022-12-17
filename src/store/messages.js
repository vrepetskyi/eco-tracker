import { createSlice } from "@reduxjs/toolkit";

export const messages = createSlice({
  name: "messages",
  initialState: {
    grownTreeMessages: [],
  },
});

export default messages.reducer;
