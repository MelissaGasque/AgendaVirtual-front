import { createContext, useState, useContext, useEffect } from "react"
import { api } from "../service/api"
import { ClientContext } from "./ContextProject"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const InternalContext = createContext({})
export function ProjectProviderInternal({children}){
    const { logout, setClientUser, clientUser } = useContext(ClientContext)

    const [ modalUpdateOpen, setModalUpdateOpen ] = useState(false)
    const [ modalAddContactOpen, setModalAddContactOpen ] = useState(false)
    const [ modalOtherClientsOpen, setModalOtherClientsOpen ] = useState(false)
    const [ modalUpdateContactOpen, setModalUpdateContactOpen ] = useState(false)
    const [ modalDeleteContat, setModalDeleteContact ] = useState(false)
    const [ listContacts, setListContacts ] = useState([])
    const [ listClients, setListClients ] = useState([]) 
    const [ contactId, setContactId ] = useState("")

    useEffect(() => {
        localStorage.setItem("@client", JSON.stringify(clientUser))
    }, [clientUser])

    async function updateClient(formData, id){
        const token = localStorage.getItem("@clientToken")
        try {
            await api.patch(`/clients/${id}`, formData, {
                headers:{
                  Authorization:` Bearer ${token}`
                }
            })
            setClientUser((clientUser) => ({ ...clientUser, ...formData }))
            setListClients((listClients) => [...listClients, formData])
            toast.success("Atualização realizada!")
            setTimeout(() => {
                setModalUpdateOpen(false);
                window.location.reload()
            }, 2000);   
        } catch (error) {
            toast.error("Erro ao atualizar" )
        }
    }

    async function deleteClientAPI(id){
        const token = localStorage.getItem("@clientToken")
        try{
            await api.delete(`/clients/${id}`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            logout()
        } catch(error){
            toast.error("Conta deletada")
        }
    }

    async function createContact(formData){
        const token = localStorage.getItem("@clientToken")
        try {
            await api.post(`/contacts`, formData, {
                headers:{
                  Authorization:` Bearer ${token}`
                }
            })
            setListContacts((listContacts) => [...listContacts, formData])
            setModalAddContactOpen(false)
            window.location.reload()
        } catch (error) {
            const errorMessage = error.response.data.message || "Erro desconhecido";
            toast.error("Contato não foi criado " + errorMessage)
        }
    }

    async function updateContact(formData){
        const token = localStorage.getItem("@clientToken")
        const contact_Id = contactId
        console.log(contact_Id)
        try {
            await api.patch(`/contacts/${contact_Id}`, formData, {
                headers:{
                  Authorization:` Bearer ${token}`
                }
            })
            setModalUpdateContactOpen(false)
            setContactId("")
            setListContacts((listContacts) => {
                return listContacts.map((contact) =>
                  contact.id === contact_Id ? { ...contact, ...formData } : contact
                )
            })
            toast.success("Contato atualizado")
        } catch (error) {
            const errorMessage = error.response.data.message || "Erro desconhecido";
            toast.error("Erro ao atualizar o Contato: " + errorMessage)
        }
    }

    async function deleteContact(){
        const token = localStorage.getItem("@clientToken")
        const contact_Id = contactId
        console.log(contact_Id)
        
        try{
            await api.delete(`/contacts/${contact_Id}`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
    
            setListContacts((listContacts) => {
                return listContacts.filter((contact) => contact.id !== contact_Id);
            })
     
            setModalDeleteContact(false)
            setContactId("")
            toast.success("Contato deletado")
        } catch(error){
            const errorMessage = error.response.data.message || "Erro desconhecido";
            toast.error("Erro ao deletar o Contato: " + errorMessage)
        }
    }
    return(
        <InternalContext.Provider 
            value={{ modalUpdateOpen, setModalUpdateOpen, modalAddContactOpen, setModalAddContactOpen,
            modalOtherClientsOpen, setModalOtherClientsOpen, modalUpdateContactOpen, setModalUpdateContactOpen,
            modalDeleteContat, setModalDeleteContact, updateClient, deleteClientAPI, createContact, listContacts,
            setListContacts, updateContact, contactId, setContactId, deleteContact, listClients, setListClients }}>
                {children}
        </InternalContext.Provider>
    )
}