import { createContext, useState } from "react";
import { api } from "../service/api"
import { useNavigate } from "react-router-dom";

export const ClientContext = createContext({})
export function ProjectProvider({children}){
    const navigate = useNavigate()

    const [ modalIsOpen, setIsOpen ] = useState(false)
    const [ clientToken, setClientToken ] = useState(null)

    async function registrationAPI(formData){
        try{
            await api.post("/clients", formData)
            setIsOpen(false)
        }catch (error){
            // toast.error("Ops! Algo deu errado")
            console.log("não foi criada")
        }
      }
    
    async function login(formData){
        try{
            const response = await api.post("/login", formData)
            const token = response.data.token
            localStorage.setItem("@clientToken", token.token)
            localStorage.setItem("@clientID", token.clientId)
            localStorage.setItem("@client", JSON.stringify(token))
            setClientToken(token)
            navigate("/internalPage")
        } 
        catch(error){ 
            console.log("não foi")
        }
    }

    function logout(){
        localStorage.removeItem("@clienToken")
        localStorage.removeItem("@clientID")
        setClientToken(null)
        navigate("/")
    }

    return(
        <ClientContext.Provider value={{ login, logout, registrationAPI, modalIsOpen, setIsOpen, clientToken, setClientToken }}>
            {children}
        </ClientContext.Provider>
    )
}