import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
	--color-rosa-escuro: #FF89BF;
	--color-rosa-claro: #FEC3DF;
	--color-amarelo: #FFEEA8;
	--color-azul-1: #A0F3ED;
	--color-azul-2: #72F0EC;
	--color-roxo-1: #BDC0F7;
	--color-roxo-2: #9FA3E3;
    --color-white: #FFFFFF;
	--color-black: #000000
}

body{
    font-family: "Roboto", sans-serif;
	background-color: var(--color-rosa-claro);
	color: black;
}
`