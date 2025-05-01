"use client" // Ensures this component runs on the client-side in Next.js

import Box from "./Box" // Import Box component for layout and styling
import Searchbar from "./Searchbar" // Import Searchbar component for user search input
import Text from "./Text" // Import Text component for displaying text content
import { memo } from 'react' // Import memo to prevent unnecessary re-renders

function Navbar() {
  return (
    <nav className="w-full fixed top-0 right-0 bg-black left-0 z-30">
      {/* Box container for the navbar with flex layout and shadow */}
      <Box className='w-full flex items-center bg-black px-2 justify-between shadow-md shadow-gray-300 min-h-[60px]'>
        
        {/* Logo section with a blue background and white text */}
        <Box className="h-[40px] w-[100px] md:min-w-[150px] rounded-lg bg-blue-600 flex text-xl text-white font-bold items-center place-content-center">
          {/* News World title */}
          <Text className="text-sm md:text-2xl">News World</Text>
        </Box>

        {/* Searchbar component for searching news */}
        <Searchbar />
      </Box>
    </nav>
  )
}

export default memo(Navbar) // Memoize the component to prevent unnecessary re-renders
