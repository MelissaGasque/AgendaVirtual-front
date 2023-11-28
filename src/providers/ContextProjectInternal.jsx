import { createContext, useState, useContext } from "react"
import { api } from "../service/api"
import { ClientContext } from "./ContextProject"

export const InternalContext = createContext({})
export function ProjectProviderInternal({children}){
    const { logout } = useContext(ClientContext)

    const [ modalUpdateOpen, setModalUpdateOpen ] = useState(false)
    const [ modalAddContactOpen, setModalAddContactOpen ] = useState(false)
    const [ modalOtherClientsOpen, setModalOtherClientsOpen ] = useState(false)
    const [ modalUpdateContactOpen, setModalUpdateContactOpen ] = useState(false)
    const [ modalDeleteContat, setModalDeleteContact ] = useState(false)
    const [ listContacts, setListContacts ] = useState([])
    const [ contactId, setContactId ] = useState("")

    async function createContact(formData){
        const token = localStorage.getItem("@clientToken")
        try {
            await api.post(`/contacts`, formData, {
                headers:{
                  Authorization:` Bearer ${token}`
                }
            })
            console.log("criou contato")
            setListContacts((listContacts) => [...listContacts, formData])
            // mostra que deu certo
        } catch (error) {
            console.log("não criou contato")
        }
    }

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

    async function updateContact(formData){
        const token = localStorage.getItem("@clientToken")
        const contact_Id = contactId
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
        } catch (error) {
            console.log("não rolou o update")
        }
    }

    async function deleteContact(){
        const token = localStorage.getItem("@clientToken")
        const contact_Id = contactId
        
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
        } catch(erro){
            console.log(erro)
        }
    }
    return(
        <InternalContext.Provider 
            value={{ modalUpdateOpen, setModalUpdateOpen, modalAddContactOpen, setModalAddContactOpen,
            modalOtherClientsOpen, setModalOtherClientsOpen, modalUpdateContactOpen, setModalUpdateContactOpen,
            modalDeleteContat, setModalDeleteContact, updateClient, deleteClientAPI, createContact, listContacts,
            setListContacts, updateContact, contactId, setContactId, deleteContact }}>
                {children}
        </InternalContext.Provider>
    )
}