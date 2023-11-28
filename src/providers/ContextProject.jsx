import { createContext, useState } from "react"
import { api } from "../service/api"
import { useNavigate } from "react-router-dom"

export const ClientContext = createContext({})
export function ProjectProvider({children}){

    const navigate = useNavigate()

    const [ modalIsOpen, setIsOpen ] = useState(false)
    const [ clientToken, setClientToken ] = useState(null)
    const [ clientUser, setClientUser ] = useState(null)
    

        // useEffect(() => {
        //     async function validateToken(){
        //         const usuarioLogado = localStorage.getItem("@clientToken")
        //         if(usuarioLogado){
        //             const data = await api.post("/login", {usuarioLogado})
        //             if(data.user){
        //                 setClientUser(data.user)
        //             } 
        //         }
                
        //     }
        //     validateToken();
        // }, []);

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

            const token = response.data.token.token
            const clientId = response.data.token.user.id
            const clientUser = response.data.token.user

            localStorage.setItem("@clientToken", token)
            localStorage.setItem("@clientID", clientId)

            setClientToken(token)
            setClientUser(clientUser)
            
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
        setClientUser(null)
        navigate("/")
    }


    return(
        <ClientContext.Provider value={{ login, logout, registrationAPI, modalIsOpen, setIsOpen, clientToken, setClientToken,  clientUser, setClientUser }}>
            {children}
        </ClientContext.Provider>
    )
}