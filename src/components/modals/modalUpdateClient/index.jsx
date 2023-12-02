import { useContext } from "react"
import {  InternalContext } from "../../../providers/index.providers"
import { Button, Input } from "../../index.components"
import { useForm } from "react-hook-form"
import { StyledBackdrop, StyledModal, StyleHeader, StyledForm, StyledButtons } from "./style"
import { StyleTitle4  } from "../../../styles/typography"


export function UpdateClient(){
    const { modalUpdateOpen, setModalUpdateOpen, updateClient,  deleteClientAPI } = useContext(InternalContext)


    const { register, handleSubmit, reset } = useForm()
    
    function closeModal(){
        setModalUpdateOpen(false)
    }

    if(!modalUpdateOpen){
        return null
    }

    function submit(formData){
        const dadosParaEnviar = Object.fromEntries(
            Object.entries(formData).filter(([_, value]) => value !== "")
          );
        const clientId = localStorage.getItem("@clientID")
        updateClient(dadosParaEnviar, clientId)
        reset()
    }
    
    function deleteClient(){
        const clientId = localStorage.getItem("@clientID")
        deleteClientAPI(clientId)
    }

    return(
        <StyledBackdrop>
            <StyledModal>
                <StyleHeader>
                    <StyleTitle4 typography="title1" > Atualizar conta </StyleTitle4>
                    <Button button="button5" onClick={closeModal}>X</Button>
                </StyleHeader>
                <StyledForm onSubmit = { handleSubmit(submit) }>
                    <Input
                        type="text"
                        placeholder="Alterar nome"
                        {...register("full_name")}
                    />
                    <Input
                        type="email"
                        placeholder="Alterar email"
                        {...register("email")}
                    />
                    <Input
                        type="text"
                        placeholder="Alterar telefone"
                        {...register("phone_number")}
                    />
                    <StyledButtons>
                        <Button button="button1"  type="submit">Atualizar</Button>
                        <Button button="button1"  onClick={deleteClient}> Deletar conta </Button>
                    </StyledButtons>
                </StyledForm>
            </StyledModal>
        </StyledBackdrop>
    )
}