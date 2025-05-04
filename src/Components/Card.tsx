"use client"

import React from 'react' // Import React for JSX syntax
import Image from 'next/image' // Import Next.js Image component for optimized image loading
import { newslist } from '@/commontypes.ts/type' // Import type definition for news data
import Box from './Box' // Import Box component for layout
import Text from './Text' // Import Text component for consistent typography

// Card component that takes a "news" prop of type newslist
function Card({ news }: { news: newslist }) {
  return (
    // Container for the entire card with a minimum height and padding
    <Box className="min-h-[280px] pb-3 space-y-2 relative text-white border-2 border-white">
      
      {/* Box for image section with specified height */}
      <Box className="w-full relative h-[120px]">
        
        {/* Conditionally render image if urlToImage exists */}
        {news.urlToImage && (
          <Image
            className="w-full h-full" // Full width and height for the image
            fill // Fill the container
            objectFit="cover" // Ensure the image covers the container without distortion
            quality={75} // Set image quality for optimization
            src={news.urlToImage} // Image source from news data
            alt="image loading" // Fallback alt text for accessibility
          />
        )}
        
        {/* Fallback text while image is loading */}
        <Box className="w-full text-center">image loading</Box>
      </Box>

      {/* Title text of the news article, truncated to 50 characters */}
      <Text className="font-bold">{news.title?.slice(0, 50)}</Text>

      {/* Description text of the news article, also truncated to 50 characters */}
      <Text>{news.description?.slice(0, 50)}</Text>

      {/* Link to the full article */}
      <a href={news.url} className="px-4 py-2 absolute bottom-1 left-4 bg-blue-600">
        Read More
      </a>
    </Box>
  )
}

export default Card
