import { useForm } from "react-hook-form"
import { useContext } from "react"
import { InternalContext } from "../../../providers/ContextProjectInternal"
import { Button, Input } from "../../index.components"


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
        <>
            <div>
                <h2> Atualização do contato </h2>
                <Button button="x" onClick={closeModal}>X</Button>
            </div>
            <form onSubmit = { handleSubmit(submit) }>
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
                <div>
                    <Button type="submit">Atualizar</Button>
                </div>
            </form>
        </>
    )
}