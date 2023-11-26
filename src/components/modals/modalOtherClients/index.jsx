import { useContext, useEffect, useState } from "react"
import { InternalContext, ClientContext } from "../../../providers/index.providers"
import { Button } from "../../index.components"
import { api } from "../../../service/api"


export function ModalOtherClients(){ 
    const { modalOtherClientsOpen, setModalOtherClientsOpen } = useContext(InternalContext)
    const { clientUser } = useContext(ClientContext)

    const [ listClients, setListClients ] = useState([]) 

    useEffect(() => {
        async function generateList(){
            const token = localStorage.getItem("@clientToken")
            const isAdm = clientUser.admin
            if(isAdm){
                try {
                    const { data }= await api.get("/clients", {
                        headers:{
                          Authorization:` Bearer ${token}`
                        }})
                    setListClients(data)
                }catch(error){
                    console.log(error)
                }
            }
        }
        generateList()
    }, [])

    function closeModal(){
        setModalOtherClientsOpen(false)
    }
    if(!modalOtherClientsOpen){
        return null
    }

    const isClientAdmin = clientUser && clientUser.admin;
    return(
        <>            
            <div>
            <Button button="x" onClick={closeModal}>X</Button>
            </div>
            <div>
                <h2> Olá {clientUser.username} </h2>
                <p>Nome Completo: {clientUser.full_name}</p>
                <div>
                    <p>Email {clientUser.email} </p> 
                    <Button>Adicionar outros</Button>
                </div>
                <div>
                    <p>Telefone: {clientUser.phone_number} </p>
                    <Button>Adicionar outros</Button>
                </div>
            </div> 
            
            {isClientAdmin && Array.isArray(listClients) && (      
                <div>
                    <h1> LISTA DE CLIENTES AQUI </h1>
                    <ul>
                        {listClients.map((client) => (
                            <li key={client.id}>
                                <h4>Nome: {client.full_name} </h4>
                                <h5>username: {client.username}</h5>
                                <p>Email: {client.email}</p>
                                <p>telefone: {client.phone_number}</p>
                                <p> Criado em: {client.created_at}</p>
                            </li>
                        ))}
                    </ul>
                </div> 
            )}
            <div>
                <Button onClick={ closeModal }> Fechar </Button>
            </div>
        </>
    )
}