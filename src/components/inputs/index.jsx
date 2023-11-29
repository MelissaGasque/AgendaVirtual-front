import React from "react"
import { StyledInput } from "./style"

export const Input = React.forwardRef(function Input({ label, type, placeholder, id, ...rest }, ref) {
    return (
        <StyledInput
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
    )
  })