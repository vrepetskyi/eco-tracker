import { createSlice } from "@reduxjs/toolkit";

export const articles = createSlice({
  name: "articles",
  initialState: {
    all: [
      {
        id: 0,
        image:
          "https://www.greenjournal.co.uk/wp-content/uploads/2019/08/recycling.jpg",
        name: "Ways to Dispose of Waste without Harming the Environment",
        url: "https://www.greenjournal.co.uk/2019/08/ways-to-dispose-of-waste-without-harming-the-environment/",
      },
      {
        id: 1,
        image:
          "https://saveonenergy.ca/-/media/Images/SaveOnEnergy/residential/family-in-the-kitchen.ashx?h=416&w=625&la=en&hash=E63DFCE7F4C0C3F3DB240DF9AABEBC10",
        name: "12 ways to make your home more energy efficient",
        url: "https://saveonenergy.ca/en/For-Your-Home/Advice-and-Tips/12-ways-to-make-your-home-more-energy-efficient",
      },
      {
        id: 2,
        image:
          "https://images.squarespace-cdn.com/content/v1/5981c7129f7456741cde6662/1506330633931-M5QBGD36DM2QERR65HTL/Patagonia-Don%27t+buy+this+jacket?format=500w",
        name: "How can we reduce our Fashion Environmental Impact?",
        url: "https://www.sustainyourstyle.org/en/reducing-our-impact",
      },
    ],
  },
});

export default articles.reducer;
