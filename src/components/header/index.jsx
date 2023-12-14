import { Logo } from "../../imagens/index"
import { LogoImg, HeaderTitleLogo } from "./style"
import { StyleTitle } from "../../styles/typography"


export function HeaderLogoTitle(){
    return(
        <HeaderTitleLogo>
            <LogoImg src={ Logo } alt="logo: Uma agenda laranja com vermelho e com expiral azul"/>
            <StyleTitle>Sua agenda virtual</StyleTitle>
        </HeaderTitleLogo>
    )
}
