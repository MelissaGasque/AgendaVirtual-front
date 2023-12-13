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
    height: 29rem;
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

export const StyleHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin-left: 2rem;
    margin-bottom: 1rem;
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:0.5rem;
`
