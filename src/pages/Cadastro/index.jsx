import { Button, Input, HeaderLogoTitle } from "../../components/index.components"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { ClientContext } from "../../providers/ContextProject"
import { Header, Main, MainContainer, TitleMain, StyleForm, StyleFormDiv,  StyleRadioContainer, StyleRadio, StyleRadioTitle, StyleRadioOptions  } from "./style"
import { HeaderHome } from "../../components/header/style"
import { useNavigate } from "react-router-dom"
import { StyleTitle2, StyleTextErro } from "../../styles/typography"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaRegister } from "../../schema/schema"

export function RegisterPage(){

    const { register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver:zodResolver(SchemaRegister)
    })

    const navigate = useNavigate()

    const { registration } = useContext(ClientContext)

    function retornarHomePage(){
        navigate("/")
    }

    function submit(formData){
        if (formData.admin == "true"){
            formData.admin = true
            registration(formData)
        }
        if (formData.admin == "false" || formData.admin == null){
            formData.admin = false
            registration(formData)
        }
        reset()
    }

    return(
        <>
             <Header>
                <HeaderHome>
                    <HeaderLogoTitle/>
                    <Button  onClick={retornarHomePage} > Pagina Login </Button> 
                </HeaderHome>
            </Header>
            <Main>
                <MainContainer>
                    <TitleMain>
                        <StyleTitle2> Cadastre-se </StyleTitle2>
                    </TitleMain>
                    <StyleForm onSubmit = { handleSubmit(submit) }>
                        <StyleFormDiv>
                            <div>
                                <Input
                                    type="text"
                                    placeholder="Nome completo"
                                    {...register("full_name")}
                                    
                                />
                                {errors.full_name ? <StyleTextErro>{errors.full_name.message}</StyleTextErro> : null }
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    placeholder="Nome de usuário"
                                    {...register("username")}
                                />
                                {errors.username ? <StyleTextErro>{errors.username.message}</StyleTextErro> : null }
                            </div>
                        </StyleFormDiv>
                        <StyleFormDiv>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="email"
                                    {...register("email")}
                                />
                                {errors.email ? <StyleTextErro>{errors.email.message}</StyleTextErro> : null }
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    placeholder="Número de telefone"
                                    {...register("phone_number")}
                                />
                                {errors.phone_number ? <StyleTextErro>{errors.phone_number.message}</StyleTextErro> : null }
                            </div>      
                        </StyleFormDiv>
                        <StyleFormDiv >
                            <div>
                                <Input
                                    type="password"
                                    placeholder="Senha"
                                    {...register("password")}
                                />
                                {errors.password ? <StyleTextErro>{errors.password.message}</StyleTextErro> : null }
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    placeholder="Digite a senha novamente"
                                    {...register("confirm")}
                                />
                                {errors.confirm ? <StyleTextErro>{errors.confirm.message}</StyleTextErro> : null }
                            </div>
                        </StyleFormDiv>
                        <StyleRadioContainer>
                            <StyleRadio>
                            <StyleRadioTitle>
                                <p>É administrador geral?</p>
                            </StyleRadioTitle>
                            <StyleRadioOptions>                           
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
                            </StyleRadioOptions>
                            </StyleRadio>
                        </StyleRadioContainer>
                        <Button button="button2" type="submit">Cadastrar</Button>
                    </StyleForm>
                </MainContainer>
            </Main>
           
        </>  
    )
}