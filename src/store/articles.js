import { createSlice } from "@reduxjs/toolkit";

export const articles = createSlice({
  name: "articles",
  initialState: {
    all: [
      {
        id: 0,
        image: "image_url",
        name: "Article name",
        url: "https://www.goodenergy.co.uk/the-ultimate-20-step-guide-to-eco-friendly-living/",
      },
    ],
  },
});

export default articles.reducer;
