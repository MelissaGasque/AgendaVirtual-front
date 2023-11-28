import { useContext } from "react"
import { InternalContext } from "../../../providers/ContextProjectInternal"
import { Button } from "../../buttons"


export function DeleteContact(){
    const { modalDeleteContat, setModalDeleteContact, deleteContact } = useContext(InternalContext)

    async function deletar(){
        console.log("clicou em deletar")
        deleteContact()
    }

    function cancelar(){
        setModalDeleteContact(false)
    }

    if(!modalDeleteContat){
        return null
    }
    return(
        <div>
            <h1>Deseja mesmo excluir o usuario X?</h1>
            <div>
                <Button onClick={deletar}>Excluir</Button>
                <Button onClick={cancelar}>Cancelar</Button>
            </div>
        </div>

    )
}