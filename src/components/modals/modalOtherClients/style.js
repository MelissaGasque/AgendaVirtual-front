import styled from "styled-components"

export const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9998;
`
export const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35rem;
    height: 30rem;
    background-color:var(--color-azul-2);
    border-radius: 0.5rem;

    @media(max-width: 867px){
        width: 90%
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ButtonDiv = styled.div`
    width: 93%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
`

export const MainPessoal = styled.div`
    background-color: var(--color-amarelo);
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap:2rem;
    border-radius: 0.6rem ;
    border: 5px solid var(--color-rosa-escuro);
    padding: 2rem;
    margin-top: -2rem;
    margin-left: -2.5rem;
`
export const MainClients = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
`
export const AllClientsUl = styled.ul`
    height: 25rem;
    width: 28rem;
    display: flex;
    flex-direction: column;
    gap:0.2rem;
    overflow-y:auto;
    margin-top: 1rem;

`
export const AllClientsLi = styled.li`
    background-color: var(--color-amarelo);
    border: solid 2px var(--color-rosa-escuro);
    border-radius: 0.5rem;
    padding: 1rem;
`