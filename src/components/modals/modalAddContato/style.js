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
    width: 31.25rem;
    height: 33rem;
    background-color:var(--color-azul-2);

    @media(max-width: 867px){
        width: 90%
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyleHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-left: 2rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:0.5rem;
`

export const StyledTextArea = styled.textarea`
    width: 100%;
    height: 6rem;
    background-color: var(--color-amarelo);
    color: black;
`