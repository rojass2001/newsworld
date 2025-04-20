import React from 'react'
type form = {
    className: string,
    children: React.ReactNode,
    submit: (e: React.FormEvent) => void
}

function Form({className,submit,children}:form) {
  return (
    <form className={className} onSubmit={submit}>
      {children}
    </form>
  )
}

export default Form
