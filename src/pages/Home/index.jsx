import { Button, Input, HeaderLogoTitle } from "../../components/index.components"
import { useForm } from "react-hook-form"
import { useContext} from "react" 
import { ClientContext } from "../../providers/ContextProject"
import { HeaderHome } from "../../components/header/style"
import { Header, Form, Main } from "./style"
import { useNavigate } from "react-router-dom"


export function HomePage(){
    const { login } = useContext(ClientContext)
    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm()

    function cadastro(){
        navigate("/register")
    }

    function submit(formData){
        login(formData)
        reset()
    }

    return(
        <>
            <Header>
                <HeaderHome>
                    <HeaderLogoTitle/>
                    <Button button="button1" onClick={cadastro} > Cadastro </Button> 
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
        </>
    )
}