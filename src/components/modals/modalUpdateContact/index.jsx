import { useForm } from "react-hook-form"
import { useContext } from "react"
import { InternalContext } from "../../../providers/ContextProjectInternal"
import { Button, Input } from "../../index.components"
import { StyledBackdrop, StyledModal, StyleHeader, StyledForm } from "./style"
import { StyleTitle4 } from "../../../styles/typography"

export function UpdateContact(){
    const { modalUpdateContactOpen, setModalUpdateContactOpen, updateContact } = useContext(InternalContext)
   
    const { register, handleSubmit, reset } = useForm()

    function closeModal(){ 
        setModalUpdateContactOpen(false)
    }

    function submit(formData){
        const dadosParaEnviar = Object.fromEntries(
            Object.entries(formData).filter(([_, value]) => value !== "")
        )
        updateContact(dadosParaEnviar)
        reset()
    }

    if(!modalUpdateContactOpen){
        return null
    }

    return(
        <StyledBackdrop>
        <StyledModal>
            <StyleHeader>
                <StyleTitle4> Atualização do contato </StyleTitle4>
                <Button  button="button5" onClick={closeModal}>X</Button>
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
                <Input
                    type="text"
                    placeholder="Alterar Informações"
                    {...register("other_information")}
                />
                <Button button="button1" type="submit">Atualizar</Button>
            </StyledForm>
        </StyledModal>
        </StyledBackdrop>
    )
}