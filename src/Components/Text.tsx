"use client" // Ensures this component runs on the client-side in Next.js

import React from 'react' // Import React for JSX
import { memo } from 'react' // Import memo for preventing unnecessary re-renders

// Define the Text component, which takes children (text content) and an optional className
function Text({ children, className }: { children?: React.ReactNode, className?: string }) {
  return (
    <>
      {/* Render the text within a <p> tag and apply any passed className */}
      <p className={className}>{children}</p>
    </>
  )
}

// Memoize the component to optimize performance by preventing unnecessary re-renders
export default memo(Text)
