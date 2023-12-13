import { useContext, useEffect, useState } from "react"
import { InternalContext, ClientContext } from "../../../providers/index.providers"
import { Button } from "../../index.components"
import { api } from "../../../service/api"
import { StyledBackdrop, StyledModal, ButtonDiv, MainPessoal, MainClients, AllClientsUl, AllClientsLi  } from "./style"
import { StyleTitle4, StyleTitle6, StyleTitle7 } from "../../../styles/typography"

export function ModalOtherClients(){ 
    const { modalOtherClientsOpen, setModalOtherClientsOpen, listClients, setListClients } = useContext(InternalContext)
    const { clientUser } = useContext(ClientContext)

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
        <StyledBackdrop>
        <StyledModal>
            <ButtonDiv>
                <Button button="button7" onClick={closeModal}>X</Button>
            </ButtonDiv>
            <main>
            {!isClientAdmin && (
                <MainPessoal>
                    <StyleTitle4> Olá {clientUser.username} </StyleTitle4>
                    <StyleTitle6>Nome Completo: {clientUser.full_name}</StyleTitle6>
                    <StyleTitle6>Email {clientUser.email} </StyleTitle6> 
                    <StyleTitle6>Telefone: {clientUser.phone_number} </StyleTitle6>
                </MainPessoal> 
            )}                
            {isClientAdmin && Array.isArray(listClients) && (      
                <MainClients>
                    <AllClientsUl >
                        {listClients.map((client) => (
                            <AllClientsLi  key={client.id}>
                                <StyleTitle6>{client.full_name} </StyleTitle6>
                                <StyleTitle7>username: {client.username}</StyleTitle7>
                                <StyleTitle7>Email: {client.email}</StyleTitle7>
                                <StyleTitle7>telefone: {client.phone_number}</StyleTitle7>
                                <StyleTitle7> Criado em: {client.created_at}</StyleTitle7>
                            </AllClientsLi>
                        ))}
                    </AllClientsUl>
                </MainClients> 
            )}
            </main>
     
        </StyledModal>            
        
        </StyledBackdrop>
    )
}