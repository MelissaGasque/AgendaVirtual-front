import styled, { css } from "styled-components"

export const StyledButton = styled.button`
    height: 80px;
    font-size: 20px;
    font-weight: 600;
    padding: 1rem;
    border-radius: 0.8rem;
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
    ${({$button}) => {
        if($button === "button5"){
            return css`
                 width: 1rem;
                height: 1rem;
                font-size: 0.8rem;
                display: flex;
                align-items: center;
                justify-content: center;
            `
        }
    }}
     ${({$button}) => {
        if($button === "button6"){
            return css`
                width: 20rem;
                height: 5rem;
                display: flex;
                align-items: center;
                justify-content: center;
            `
        }
    }}
      ${({$button}) => {
        if($button === "button7"){
            return css`
                 width: 0.5rem;
                height: 0.5rem;
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                justify-content: center;
            `
        }
    }}
`
