import { useContext } from "react"
import { InternalContext } from "../../../providers/index.providers"
import { Button } from "../../index.components"


export function ModalOtherClients(){ 
    const { modalOtherClientsOpen, setModalOtherClientsOpen } = useContext(InternalContext)

    function closeModal(){
        setModalOtherClientsOpen(false)
    }
    if(!modalOtherClientsOpen){
        return null
    }
        //AQUI VAI TER UM USE-EFFECT
    // QUANDO A MODEL SE ABRIR JÁ VAI CARREGAR A LISTA COM OUTROS CLIENTES
    return(
        <>
            <div>
                <h2> Lista de Clientes </h2>
                <Button button="x" onClick={closeModal}>X</Button>
            </div>
            <div>
                <p> lISTA DE CLIENTES AQUI </p>
                <Button onClick={ closeModal }> Fechar </Button>
            </div>
        </>
    )
}