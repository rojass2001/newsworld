"use client" // Ensures this component is used on the client-side in Next.js

import { useDispatch } from "react-redux" // Import useDispatch hook for dispatching actions to Redux
import { Appdispatch } from "@/redux/Store" // Import the type for the Redux dispatch function
import { fetchnews } from "@/redux/Newsslice" // Import the action to fetch news based on category
import Button from "./Button" // Import Button component for category buttons
import Box from "./Box" // Import Box component for layout structure
import { memo } from 'react' // Memoize the component to prevent unnecessary re-renders

// Define categories for filtering the news
const categories = ["economics", "Sports", "Business", "Politics", "Bitcoin"]

function Categories() {
  // Dispatch hook to send actions to the Redux store
  const dispatch: Appdispatch = useDispatch()

  return (
    // Box container for the category buttons with flex layout and horizontal overflow
    <Box className="w-full h-[80px] px-5 justify-start md:justify-center flex items-center overflow-x-auto gap-5">
      
      {/* Map over the categories and create a button for each one */}
      {categories.map((category) => (
        // Button for each category, onClick dispatches the fetchnews action with the category as parameter
        <Button
          onClick={async () => {
            // Dispatch the action to fetch news based on the selected category
            await dispatch(fetchnews(category))
          }}
          className="w-[130px] rounded-lg place-content-center h-9 bg-blue-600 text-center text-white"
          key={category}
        >
          {category} {/* Display category name inside the button */}
        </Button>
      ))}
    </Box>
  )
}

export default memo(Categories) // Memoize to prevent re-renders when props/state don't change
