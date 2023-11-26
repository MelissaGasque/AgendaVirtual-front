import { createContext, useState, useContext, useEffect  } from "react"
import { api } from "../service/api"
import { ClientContext } from "./ContextProject"

export const InternalContext = createContext({})
export function ProjectProviderInternal({children}){
    const { logout } = useContext(ClientContext)

    const [ modalUpdateOpen, setModalUpdateOpen ] = useState(false)
    const [ modalAddContactOpen, setModalAddContactOpen ] = useState(false)
    const [ modalOtherClientsOpen, setModalOtherClientsOpen ] = useState(false)

    async function updateClient(formData, id){
        const token = localStorage.getItem("@clientToken")
        try {
            await api.patch(`/clients/${id}`, formData, {
                headers:{
                  Authorization:` Bearer ${token}`
                }
            })
            setModalUpdateOpen(false)
            setModalOtherClientsOpen(true)
            // mostra que deu certo
        } catch (error) {
            console.log("não rolou o update")
        }
    }
    async function deleteClientAPI(id){
        const token = localStorage.getItem("@clientToken")
        try{
            console.log(id)
            await api.delete(`/clients/${id}`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            logout()
        } catch(erro){
            console.log(erro)
        }
    }

    return(
        <InternalContext.Provider 
            value={{ modalUpdateOpen, setModalUpdateOpen, modalAddContactOpen, setModalAddContactOpen,
            modalOtherClientsOpen, setModalOtherClientsOpen, updateClient, deleteClientAPI }}>
                {children}
        </InternalContext.Provider>
    )
}