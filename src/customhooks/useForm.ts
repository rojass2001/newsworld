"use client" // Ensures this hook runs on the client-side in Next.js

import { fetchnews } from "@/redux/Newsslice"; // Import the fetchnews action from the Redux slice
import { useCallback, useState } from "react"; // Import hooks for state management and memoization
import { useDispatch } from 'react-redux'; // Import useDispatch hook to dispatch actions
import { Appdispatch } from "@/redux/Store"; // Import the Appdispatch type for type safety

// Custom hook to manage form input (search) and dispatch news fetching action
function useForm() {
  // State to manage the search query
  const [search, setsearch] = useState<string>("");

  // Dispatch hook to send actions to Redux store
  const dispatch = useDispatch<Appdispatch>();

  // Memoized function to handle changes in the search input field
  const handlechange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setsearch(e.target.value); // Update search state with the input value
    console.log(e.target.value); // Log the current value for debugging purposes
  }, []);

  // Form submission handler
  const submit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submit behavior
    dispatch(fetchnews(search)); // Dispatch the fetchnews action with the search query
  };

  // Return necessary functions and state for form handling
  return { handlechange, search, submit };
}

export default useForm; // Export the custom hook for use in components
