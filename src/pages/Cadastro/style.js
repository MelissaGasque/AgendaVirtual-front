import styled from "styled-components"

export const Header = styled.header`
    background-color: var(--color-rosa-escuro);
    width: 100vw;
    display: flex;
    justify-content: center;
`
export const Main = styled.main`
    background-color: var(--color-rosa-claro);
    height: 100vh;
    display: flex;
    justify-content: center; 
`
export const MainContainer = styled.div`
    width: 50rem;
    height: auto;
`

export const TitleMain = styled.div`
    margin-top: 1rem;
`

export const StyleForm = styled.form`
    background-color: var(--color-azul-2);
    border: 10px solid var(--color-azul-1);
    display: flex;
   flex-direction: column;
   justify-content: center;
   flex-wrap: wrap;
   align-items: center;
   margin-top: 0.5rem;
   border-radius: 1rem;
`

export const StyleFormDiv = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    gap:2rem;
    flex-wrap: wrap;

`
export const StyleRadioContainer = styled.div`
    width: 95%;
    margin-top: 0.5rem;
`
export const StyleRadio = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
    background-color: var(--color-amarelo);
    border-radius: 0.5rem;
    padding-bottom: 1rem;
`
export const StyleRadioTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 1rem;

`
export const StyleRadioOptions = styled.div`
    display: flex;
    flex-direction: row;
    
    background-color: var(--color-rosa-claro);
    width: 6rem;
    height: 1rem;
`