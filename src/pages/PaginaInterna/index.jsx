import { useContext, useEffect, useState } from "react"
import { ClientContext, InternalContext } from "../../providers/index.providers"
import { Button } from "../../components/buttons"
import { AdicionarContato, ModalOtherClients, UpdateClient, UpdateContact, DeleteContact } from "../../components/index.components"
import { api } from "../../service/api"


export function InternalPage(){

    const { logout, clientUser } = useContext(ClientContext)
    const { setModalAddContactOpen, setModalUpdateOpen, setModalOtherClientsOpen,
        listContacts, setListContacts, setModalUpdateContactOpen, setModalDeleteContact,
        setContactId 
    } = useContext(InternalContext)

    const clientUsername = clientUser.username
    const clientAdmin = clientUser.admin

    useEffect(() => {
        async function generateListContacts(){
            const token = localStorage.getItem("@clientToken")
            try {
                const { data }= await api.get("/contacts", {
                    headers:{
                      Authorization:` Bearer ${token}`
                    }})
                setListContacts(data)
            }catch(error){
                console.log(error)
            }
        }
        generateListContacts()
    }, [])

    function logOut(){
        logout()
    }
    
    function editContact(contactId){
        setContactId(contactId)
        setModalUpdateContactOpen(true)
    }

    function deleteContact(contactId){
        setContactId(contactId)
        setModalDeleteContact(true)
    }
    
    function openModalAddContacts(){
        setModalAddContactOpen(true)
    }

    function openModalUpdateClient(){
        setModalUpdateOpen(true)
    }

    function openModalVerifyOtherClients(){
        setModalOtherClientsOpen(true)
    }

    return(
        <>
        <div>
            <header>
                <div>
                    {/* <img src={} alt="logo da empresa"/> */}
                    <h1>Sua agenda virtual</h1>
                </div>
                <Button onClick= { logOut } > Sair </Button>
            </header>
        </div>
        <main>
            <div>
                <h2>Olá, {clientUsername[0].toUpperCase() + clientUsername.slice(1)}!</h2>
                <h3> Seus contatos: </h3>
                <ul>
                    {listContacts.map((contact) => (
                        <li key={contact.id}>
                            <h5>{contact.full_name}{' '}
                            <Button onClick={() => editContact(contact.id)}>Editar</Button>{' '}
                            <Button onClick={() => deleteContact(contact.id)}>Deletar</Button>
                            </h5>
                            <p>email: {contact.email}</p>
                            <p>telefone: {contact.phone_number}</p>
                            <p>Outras informações sobre o contato: {contact.other_information}</p>
                            <p>Data de criação: {contact.created_at}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Button onClick= { openModalAddContacts }>Adicionar Contato</Button>
                <Button onClick= { openModalUpdateClient }>Alterar dados</Button>
                { (clientAdmin && <Button onClick= { openModalVerifyOtherClients }>Meus dados e Clientes</Button>)
                    || (!clientAdmin && <Button onClick= { openModalVerifyOtherClients }>Meus Dados</Button>)
                }
            </div>
        </main>
        <AdicionarContato/>
        <UpdateClient/>
        <ModalOtherClients/>
        <UpdateContact/>
        <DeleteContact/>
        </>
    )
}