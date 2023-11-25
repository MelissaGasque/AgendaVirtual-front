import React from "react"

export const Input = React.forwardRef(function Input({ label, type, placeholder, id, ...rest }, ref) {
    return (
      <div>
        <p>{label}</p>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </div>
    )
  })