import { Button, Input, ModalCadastro, HeaderLogoTitle } from "../../components/index.components"
import { useForm } from "react-hook-form"
import { useContext} from "react" 
import { ClientContext } from "../../providers/ContextProject"
import { HeaderHome } from "../../components/header/style"
import { Header, Form, Main } from "./style"



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
            <Header>
                <HeaderHome>
                    <HeaderLogoTitle/>
                    <Button button="button1" onClick= { openModal } > Cadastro </Button>
                </HeaderHome>
            </Header>
            <Main>
                <Form onSubmit = { handleSubmit(submit) }>
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
                    <Button button="button1" type="submit">Entrar</Button> 
                </Form>
            </Main>
            <ModalCadastro/>
        </>
    )
}