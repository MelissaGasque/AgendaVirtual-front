import { InternalContext } from "../../../providers/index.providers"
import { Button, Input } from "../../index.components"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledBackdrop, StyledModal, StyleHeader, StyledForm, StyledTextArea } from "./style"
import { StyleTitle5 } from "../../../styles/typography"


export function AdicionarContato(){
    const { modalAddContactOpen, setModalAddContactOpen, createContact } = useContext(InternalContext)

    const { register, handleSubmit, reset } = useForm()
    
    function submit(formData){
        createContact(formData)
        reset()
    }

    function closeModal(){
        setModalAddContactOpen(false)
    }

    if(!modalAddContactOpen){
        return null
    }

    return(
        <StyledBackdrop>
        <StyledModal>
            <StyleHeader>
                <StyleTitle5 > Adicionar Contato </StyleTitle5>
                <Button button="button5" onClick={closeModal}>X</Button>
            </StyleHeader>
            <StyledForm onSubmit = { handleSubmit(submit) }>
                <Input
                    type="text"
                    placeholder="Nome do Contato"
                    {...register("full_name")}
                />
                <Input
                    type="email do contat0"
                    placeholder="email do contato"
                    {...register("email")}
                />
                <Input
                    type="text"
                    placeholder="Telefone do contato"
                    {...register("phone_number")}
                />
                <StyledTextArea
                    placeholder="Outras informações"
                    {...register("other_information")}
                />
                <Button button="button6" type="submit">Adicionar Contato</Button>
            </StyledForm>
        </StyledModal>
        </StyledBackdrop>
    )
}