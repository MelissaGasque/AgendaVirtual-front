import { createContext, useState } from "react";
import { api } from "../service/api"


export const InternalContext = createContext({})
export function ProjectProviderInternal({children}){

    const [ modalUpdateOpen, setModalUpdateOpen ] = useState(false)
    const [ modalAddContactOpen, setModalAddContactOpen ] = useState(false)
    const [ modalOtherClientsOpen, setModalOtherClientsOpen ] = useState(false)

    async function updateClient(formData, id){
        console.log("entrou na função")
        try {
            //PRECISA SER COLOCADO A LEITURA DO TOKEN
            await api.patch(`/clients/${id}`, formData)
            setModalUpdateOpen(false)
            // mostra que deu certo
            console.log("deu certo")
        } catch (error) {
            console.log("não rolou o update")
        }
    }

    return(
        <InternalContext.Provider 
            value={{ modalUpdateOpen, setModalUpdateOpen, modalAddContactOpen, setModalAddContactOpen,
            modalOtherClientsOpen, setModalOtherClientsOpen, updateClient }}>
                {children}
        </InternalContext.Provider>
    )
}