import styled from "styled-components"

export const Header = styled.header`
    background-color: var(--color-rosa-escuro);
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const ContainerMain = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-rosa-claro);
`

export const Main = styled.main`
    background-color: var(--color-rosa-claro);
    margin-top: 1rem;
    width: 70rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const MainCumprimento = styled.div`
    margin-top: 1rem;
    margin-bottom: 2rem;

`
export const MainCorpo = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    @media(max-width: 975px) {
        flex-direction: column-reverse;
    }
    /* background-color: purple; */
`
export const Configuracoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const MostrarDados = styled.div`
    border: solid 5px var(--color-roxo-2);
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.8rem;
    width: 60%;
    height: 70vh;
    background-color: var(--color-rosa-escuro);
    @media(max-width: 975px) {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`

export const ListaUL = styled.div`
    height: 90%;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap:0.4rem;
    overflow-y: scroll;
   
`

export const ListaLI = styled.li`
    border: 5px solid var(--color-amarelo);
    background-color: var(--color-rosa-claro);
    display: flex;
    flex-direction: column;
    gap:1rem;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
`

export const Contat = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`