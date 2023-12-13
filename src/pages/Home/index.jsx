import { Button, Input, HeaderLogoTitle } from "../../components/index.components"
import { useForm } from "react-hook-form"
import { useContext} from "react" 
import { ClientContext } from "../../providers/ContextProject"
import { HeaderHome } from "../../components/header/style"
import { Header, Form, Main } from "./style"
import { useNavigate } from "react-router-dom"
import { SchemaLogin } from "../../schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { StyleTextErro } from "../../styles/typography"


export function HomePage(){
    const { login } = useContext(ClientContext)
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState:{errors} } = useForm({
        resolver: zodResolver(SchemaLogin)
    })

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
                    <div>
                        <Input
                            type="text"
                            placeholder="Nome de usuário"
                            {...register("username")}
                        /> {errors.username ? <StyleTextErro>{errors.username.message}</StyleTextErro> : null }
                    </div>
                    <div>
                        <Input
                            type="password"
                            placeholder="Senha"
                            {...register("password")}
                        /> {errors.password ? <StyleTextErro>{errors.password.message}</StyleTextErro> : null }
                    </div>
                    <Button button="button1" type="submit">Entrar</Button> 
                </Form>
            </Main>
        </>
    )
}