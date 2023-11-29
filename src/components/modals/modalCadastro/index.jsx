import { Button, Input } from "../../index.components"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { ClientContext } from "../../../providers/ContextProject"


export function ModalCadastro(){

    const { register, handleSubmit, reset } = useForm()

    const { registrationAPI, modalIsOpen, setIsOpen } = useContext(ClientContext)


    function submit(formData){
        if (formData.admin == "true"){
            formData.admin = true
            registrationAPI(formData)
        }
        if (formData.admin == "false"){
            formData.admin = false
            registrationAPI(formData)
        }
        reset()
    }

    function closeModal(){
        setIsOpen(false)
    }

    if(!modalIsOpen){
        return null
    }

    return(
        <>
            <div>
                <div>
                    <h2> Cadastro de conta </h2>
                    <Button button="x" onClick={closeModal}>X</Button>
                </div>
                <form onSubmit = { handleSubmit(submit) }>
                    <Input
                        type="text"
                        placeholder="Nome completo"
                        {...register("full_name")}
                    />
                    <Input
                        type="text"
                        placeholder="Nome de usuário"
                        {...register("username")}
                    />
                    <Input
                        type="email"
                        placeholder="email"
                        {...register("email")}
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                    />
                    <Input
                        type="password"
                        placeholder="Digite a senha novamente"
                        {...register("confirm")}
                    />
                    <Input
                        type="text"
                        placeholder="Número de telefone"
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
                    </div>
                    <div>
                        <Button type="submit">Cadastrar</Button>
                    </div>
                </form>
            </div>
        </>
    )
}