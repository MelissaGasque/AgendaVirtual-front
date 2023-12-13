import { useContext, useEffect } from "react"
import { ClientContext, InternalContext } from "../../providers/index.providers"
import { Button, HeaderLogoTitle } from "../../components/index.components"
import { AdicionarContato, ModalOtherClients, UpdateClient, UpdateContact, DeleteContact } from "../../components/index.components"
import { api } from "../../service/api"
import { HeaderHome } from "../../components/header/style"
import { Header, ContainerMain, Main, MainCumprimento, MainCorpo, Contat, ListaUL, ListaLI, Configuracoes,   MostrarDados } from "./style"
import { StyleTitle2, StyleTitle3, StyleName } from "../../styles/typography"

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
        <Header>
            <HeaderHome>
                <HeaderLogoTitle/>
                <Button button="button1" onClick= { logOut } > Sair </Button>
            </HeaderHome>
        </Header>
        <ContainerMain>
            <Main>
                <MainCorpo>
                    <MostrarDados>
                        <StyleTitle3> Seus contatos: </StyleTitle3>
                        <ListaUL>
                            {listContacts.map((contact) => (
                                <ListaLI key={contact.id}>
                                    <Contat>
                                        <StyleName>{contact.full_name}</StyleName>
                                        <div>
                                            <Button button="button3" onClick={() => editContact(contact.id)}>Editar</Button>{' '}
                                            <Button button="button3" onClick={() => deleteContact(contact.id)}>Deletar</Button>
                                        </div>
                                    </Contat>
                                    <p>email: {contact.email}</p>
                                    <p>telefone: {contact.phone_number}</p>
                                    <p>{contact.other_information}</p>
                                </ListaLI>
                            ))}
                        </ListaUL>
                    </MostrarDados>
                    <Configuracoes>
                        <MainCumprimento>
                            <StyleTitle2>Olá, {clientUsername[0].toUpperCase() + clientUsername.slice(1)}!</StyleTitle2>
                        </MainCumprimento>
                        <Button  button="button2" onClick= { openModalAddContacts }>Adicionar Contato</Button>
                        <Button  button="button2" onClick= { openModalUpdateClient }>Alterar dados</Button>
                        { (clientAdmin && <Button  button="button2" onClick= { openModalVerifyOtherClients }> Todos os Clientes</Button>)
                            || (!clientAdmin && <Button  button="button2" onClick= { openModalVerifyOtherClients }>Meus Dados</Button>)
                        }
                    </Configuracoes>
                </MainCorpo>
            </Main>
        </ContainerMain>
        <AdicionarContato/>
        <UpdateClient/>
        <ModalOtherClients/>
        <UpdateContact/>
        <DeleteContact/>
        </>
    )
}