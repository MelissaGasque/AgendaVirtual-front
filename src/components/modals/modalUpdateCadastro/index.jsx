import { useContext } from "react"
import { ClientContext, InternalContext } from "../../../providers/index.providers"
import { Button, Input } from "../../index.components"
import { useForm } from "react-hook-form"

export function UpdateContato(){
    const { clientToken } = useContext(ClientContext)
    const { modalUpdateOpen, setModalUpdateOpen, updateClient } = useContext(InternalContext)

    const { register, handleSubmit, reset } = useForm()
    
    function closeModal(){
        setModalUpdateOpen(false)
    }

    if(!modalUpdateOpen){
        return null
    }

    function submit(formData){
        const clientId = clientToken.clientId
        updateClient(formData, clientId)
        // reset()
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
                {/* <Input
                    type="text"
                    placeholder="Alterar usuário"
                    {...register("username")}
                />
                <Input
                    type="email"
                    placeholder="Alterar email"
                    {...register("email")}
                />
                <Input
                    type="password"
                    placeholder="Alterar Senha"
                    {...register("password")}
                />
                <Input
                    type="text"
                    placeholder="Alterar telefone"
                    {...register("phone_number")}
                />
                <div>
                    <p>É administrador geral?</p>
                    <label>Sim</label>
                    <input
                        type="radio"
                        value="true"
                        name="admin"
                        {...register("admin")}
                    />
                    <label>Não</label>
                    <input
                    type="radio"
                    value="false"
                    name= "admin" 
                    {...register("admin")}
                />
                </div> */}
                <div>
                    <Button type="submit">Atualizar</Button>
                </div>
            </form>
        </>
    )
}