"use client" // Ensures this component runs on the client-side in Next.js

import React, { ReactNode } from 'react' // Import React and ReactNode type for children elements
import { memo } from 'react' // Memoize the component to prevent unnecessary re-renders

// Define the props for the Box component
type BoxProps = {
  className?: string // Optional className for custom styling
  children: ReactNode // The content to be rendered inside the <div>
  onClick?: () => Promise<void> | void // Optional click handler, can return a promise if async
}

// Box component definition
function Box({ className, children, onClick }: BoxProps) {
  return (
    // Render a <div> with optional className and onClick handler
    <div onClick={onClick} className={className}>
      {children} {/* Render the children elements */}
    </div>
  )
}

// Memoize the Box component to avoid unnecessary re-renders if props haven't changed
export default memo(Box)
