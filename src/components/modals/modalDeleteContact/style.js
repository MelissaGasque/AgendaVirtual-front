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
    height: 25.6875rem;
    background-color:var(--color-azul-2);

    @media(max-width: 867px){
        width: 90%
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyleButtons = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`