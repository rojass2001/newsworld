"use client" // Ensures this component runs on the client-side in Next.js

import React from 'react' // Import React for JSX syntax

// Define the type for Form props
type form = {
  className?: string, // Optional className for custom styling
  children: React.ReactNode, // Children elements (form controls like inputs, buttons)
  submit: (e: React.FormEvent) => void // The submit handler function to handle form submission
}

// Form component definition with typed props
function Form({ className, submit, children }: form) {
  return (
    // Render a form element with the provided className and submit handler
    <form className={className} onSubmit={submit}>
      {children} {/* Render the form children (inputs, buttons, etc.) inside the form */}
    </form>
  )
}

export default Form // Export the Form component
