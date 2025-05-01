"use client"; // Ensures this slice works on the client-side in Next.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // Import Redux Toolkit methods for async actions and slices
import axios from "axios"; // Import Axios for making HTTP requests

// Async thunk to fetch news articles based on the search query
export const fetchnews = createAsyncThunk(
  "news/fetchnews", // Action name
  async (search: string) => {
    // Make GET request to the News API with the search query
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=919b265f33a24bb6b651bed7d74a4444`
    );
    console.log(response.data.articles); // Log fetched articles (for debugging)
    return response.data.articles; // Return the articles to the reducer
  }
);

// Initial state for the news slice
const INITIALSTATE = {
  newslist: [], // Holds the list of fetched news articles
};

// Create a slice of the Redux store to handle news-related actions and state
const newsslice = createSlice({
  name: "news", // Slice name
  initialState: INITIALSTATE, // Initial state for the slice
  reducers: {
    // Action to insert the fetched news into the state
    newsinsert: (state, action) => {
      state.newslist = action.payload; // Insert the news list into state
    },
  },
  extraReducers: (builder) => {
    // Handle different states of the fetchnews async action
    builder.addCase(fetchnews.pending, () => {
      console.log("pending"); // Log when the fetch is pending (could be useful for debugging)
    });
    builder.addCase(fetchnews.fulfilled, (state, action) => {
      state.newslist = action.payload; // Insert the fetched articles into the state
    });
    builder.addCase(fetchnews.rejected, (state, action) => {
      console.log("rejected", action.payload); // Log if the request fails (for debugging)
    });
  },
});

// Export the action to insert news into the state (if needed elsewhere)
export const { newsinsert } = newsslice.actions;

// Export the slice's reducer for use in the store
export default newsslice.reducer;
