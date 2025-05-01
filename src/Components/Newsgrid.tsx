"use client" // Ensures this component runs on the client-side in Next.js

import { useDispatch, useSelector } from "react-redux" // Import Redux hooks for state management
import { fetchnews } from "../redux/Newsslice" // Import action to fetch news
import { useEffect, memo } from 'react' // Import memo for memoization to prevent unnecessary re-renders
import { Appdispatch, Rootstate } from '../redux/Store' // Import store types for type safety
import { newslist } from "@/commontypes.ts/type" // Import types for news item structure
import Card from "./Card" // Import Card component to display individual news items
import Box from "./Box" // Import Box component for layout structure

function Newsgrid() { 
  // Access newslist from Redux store state
  const { newslist } = useSelector((state: Rootstate) => state.news);

  // Initialize dispatch hook to dispatch actions to Redux store
  const dispatch = useDispatch<Appdispatch>() 

  // Fetch news when the component mounts using useEffect
  useEffect(() => {
    // Dispatch fetchnews action to load news for 'india'
    dispatch(fetchnews("india"))
  }, [dispatch]) // Dependency array ensures effect runs only on component mount

  return (
    <Box className="w-full py-6"> {/* Main container for the grid */}
      <Box className="w-full py-8 px-5 grid gap-x-12 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Render a Card for each news item */}
        {newslist?.map((news: newslist) => (
          // Pass news data to Card component, using news.url as a unique key
          <Card news={news} key={news.url} /> 
        ))}
      </Box>
    </Box>
  )
}

export default memo(Newsgrid) // Memoize the component to prevent unnecessary re-renders
