"use client" // Ensures this component runs on the client-side in Next.js

import React from 'react' // Import React for JSX support
import { memo } from 'react' // Memoize the component to prevent unnecessary re-renders
type ButtonProps = {
  onClick?: () => Promise<void> | void, // Optional onClick function that can return a Promise
  children: React.ReactNode, // The content inside the button
  className: string, // Class name for custom styling
  type?: "submit" | "reset" | "button" // Optional type for the button (default is "button")
}
// Button component definition with typing for props
function Button({
  onClick, // Optional click handler that can be asynchronous
  children, // Content inside the button (text, elements, etc.)
  className, // Class name to apply custom styling
  type // Button type, either "submit", "reset", or "button"
}:ButtonProps) {
  return (
    // Render the button element with the provided type, className, and onClick handler
    <button type={type} className={className} onClick={() => onClick && onClick()}>
      {children} {/* Render the children inside the button */}
    </button>
  )
}

// Memoize the Button component to prevent unnecessary re-renders if props haven't changed
export default memo(Button)
