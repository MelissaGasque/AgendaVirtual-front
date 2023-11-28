import { useContext } from "react"
import {  InternalContext } from "../../../providers/index.providers"
import { Button, Input } from "../../index.components"
import { useForm } from "react-hook-form"


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
        <>
            <div>
                <h2> Atualização de conta </h2>
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
                <div>
                    <Button type="submit">Atualizar</Button>
                    <Button onClick={deleteClient}> Deletar conta </Button>
                </div>
            </form>
        </>
    )
}