import { createSlice } from "@reduxjs/toolkit";

export const articles = createSlice({
  name: "articles",
  initialState: {
    all: [
      {
        image: "image_url",
        name: "Article name",
        url: "some_url",
      },
    ],
  },
});

export default articles.reducer;
