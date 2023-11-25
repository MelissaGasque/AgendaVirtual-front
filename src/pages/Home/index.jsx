import { Button, Input } from "../../components/index.components"
import { ModalCadastro } from "../../components/modals/modalCadastro"
import { useForm } from "react-hook-form"
import { useContext} from "react" 
import { ClientContext } from "../../providers/ContextProject"


export function HomePage(){
    const { login, setIsOpen } = useContext(ClientContext)

    const { register, handleSubmit, reset } = useForm()

    function submit(formData){
        login(formData)
        reset()
    }

    function openModal(){
        setIsOpen(true)
    }

    return(
        <>
            <div>
                <header>
                    <div>
                        {/* <img src={} alt="logo da empresa"/> */}
                        <h1>Sua agenda virtual</h1>
                    </div>
                    <Button onClick= { openModal } > Cadastro </Button>
                </header>
            </div>
            <main>
                <form onSubmit = { handleSubmit(submit) }>
                    <Input
                        type="text"
                        placeholder="Digite seu username"
                        {...register("username")}
                    />
                    <Input
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                    <div>
                        <Button type="submit">Entrar</Button>
                    </div>
                </form>
            </main>
            <ModalCadastro/>
        </>
    )
}