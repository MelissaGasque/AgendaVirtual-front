import { InternalContext } from "../../../providers/index.providers"
import { Button, Input } from "../../index.components"
import { useContext } from "react"
import { useForm } from "react-hook-form"


export function AdicionarContato(){
    const { modalAddContactOpen, setModalAddContactOpen } = useContext(InternalContext)

    const { register, handleSubmit, reset } = useForm()
    
    function closeModal(){
        setModalAddContactOpen(false)
    }

    if(!modalAddContactOpen){
        return null
    }

    function submit(formData){
        console.lof(formData)
    }

    return(
        <>
            <div>
                <h2> Todos os clientes </h2>
                <Button button="x" onClick={closeModal}>X</Button>
            </div>
            <form onSubmit = { handleSubmit(submit) }>
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
                <textarea
                    placeholder="Outras informações"
                    {...register("other_information")}
                />
                <div>
                    <Button type="submit">Adicionar Contato</Button>
                </div>
            </form>
        </>
    )
}