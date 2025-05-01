"use client"; // Ensures this code runs only on the client-side in Next.js

import { configureStore } from "@reduxjs/toolkit"; // Import Redux Toolkit's configureStore to create the store
import newsslice from './Newsslice'; // Import the news slice reducer

// Function to configure and create the Redux store
export default function makeStore() {
    return configureStore({
        reducer: {
            news: newsslice, // Register the 'news' reducer in the store
        }
    });
}

// Create the store using the makeStore function
export const store = makeStore();

// Export types for TypeScript support
export type Rootstate = ReturnType<typeof store.getState>; // Type for the root state of the store
export type Appdispatch = typeof store.dispatch; // Type for the dispatch method of the store
