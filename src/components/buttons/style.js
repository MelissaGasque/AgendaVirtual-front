import styled, { css } from "styled-components"

export const StyledButton = styled.button`
    height: 80px;
    font-size: 20px;
    font-weight: 600;
    padding: 1rem;
    border-radius: 0.25rem;
    background-color: var(--color-roxo-2);
    border: solid 5px var(--color-roxo-1);
    &:hover {
        background-color: var(--color-rosa-escuro);
        border-color: var(--color-rosa-claro);
    }

    ${({$button}) => {
        if($button === "button1"){
            return css`
                width: 10rem;  
            `
        }
    }}
    ${({$button}) => {
        if($button === "button2"){
            return css`
                width: 20rem;
            `
        }
    }}
      ${({$button}) => {
        if($button === "button3"){
            return css`
                width: 5rem;
                height: 4rem;
                font-size: 0.8rem;
                background-color: var(--color-azul-1);
                border: solid 5px var(--color-roxo-2);
                &:hover {
                    background-color: var(--color-amarelo);
                    border-color: var(--color-azul-1);
                }
                
            `
        }
    }}
    ${({$button}) => {
        if($button === "button4"){
            return css`
                width: 20rem;
                background-color: var(--color-amarelo);
            `
        }
    }}
`
