import { useContext } from "react"
import { InternalContext } from "../../../providers/ContextProjectInternal"
import { Button } from "../../buttons"
import { StyledBackdrop, StyledModal, StyleButtons } from "./style"
import { StyleTitle2 } from "../../../styles/typography"


export function DeleteContact(){
    const { modalDeleteContat, setModalDeleteContact, deleteContact } = useContext(InternalContext)

    async function deletar(){
        deleteContact()
    }

    function cancelar(){
        setModalDeleteContact(false)
    }

    if(!modalDeleteContat){
        return null
    }
    return(
        <StyledBackdrop>
            <StyledModal>
                <StyleTitle2>Deseja excluir o contato?</StyleTitle2>
                <StyleButtons>
                    <Button button="button2" onClick={deletar}>Excluir</Button>
                    <Button button="button4" onClick={cancelar}>Cancelar</Button>
                </StyleButtons>
            </StyledModal>
        </StyledBackdrop>
    )
}