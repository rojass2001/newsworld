"use client" // Ensures this component runs on the client-side in Next.js

import useForm from "@/customhooks/useForm" // Import custom hook to handle form state and submission
import Form from "./Form" // Import Form component for form structure
import Box from "./Box" // Import Box component for layout
import Button from "./Button" // Import Button component for the search action
import { memo } from "react" // Import memo for preventing unnecessary re-renders

function Searchbar() {
  // Use custom hook for form handling, which provides submit function and change handler
  const { submit, handlechange } = useForm() 

  return (
    <Box> {/* Box container for the searchbar */}
      <Form className="flex gap-1 items-center" submit={submit}>
        {/* Input field for entering search query */}
        <input 
          className="w-[90%] text-black bg-white h-7"
          type="text" 
          placeholder="Search News Here"
          onChange={handlechange} // Handle input change for search query
        />
        {/* Search button to trigger form submission */}
        <Button type="submit" className="bg-blue-600 text-white h-7">
          Search
        </Button>
      </Form>
    </Box>
  )
}

export default memo(Searchbar) // Memoize to optimize re-renders
