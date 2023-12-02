import { forwardRef } from "react"
import { StyledInput } from "./style"

export const Input = forwardRef(({ error, type, placeholder, id, ...rest }, ref) => {
    return (

          <StyledInput
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />

    )
       
  })