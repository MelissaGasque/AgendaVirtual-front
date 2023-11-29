import { StyledButton } from "./style"

export function Button({ button, type, onClick, children }){
    return(
        <StyledButton $button={button} type={type} onClick={onClick}>
            {children}
        </StyledButton>
    )
}