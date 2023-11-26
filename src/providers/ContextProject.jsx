import { createContext, useState, useEffect } from "react"
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

        // useEffect(() => {
        //     async function generateList(){
        //         const token = localStorage.getItem("@clientToken")
        //         try {
        //             const clientsList = await api.get("/clients", {
        //                 headers:{
        //                   Authorization:` Bearer ${token}`
        //                 }})
        //                 console.log("deu tudo certo")
        //             setListClients(clientsList)
        //                 console.log("adicionei no estado")
        //         }catch(error){
        //             console.log(error)
        //         }
        //     }
        //     // async function checkdminStatus(){
        //     //     const clientAdmin = response.data.token.user.admin
        //     //     console.log(clientAdmin)
        //     //     if(clientAdmin){
        //     //         generateList()
        //     //     }
        //     // }
        //     // checkdminStatus()
        //     generateList()
        // }, [])

    async function registrationAPI(formData){
        try{
            await api.post("/clients", formData)
            // setListClients((listClients) => [...listClients], formData)
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

    // async function generateList(){
    //     try {
    //         const clientsList = await api.get("/clients")
    //         setListClients(clientsList)
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    return(
        <ClientContext.Provider value={{ login, logout, registrationAPI, modalIsOpen, setIsOpen, clientToken, setClientToken,  clientUser, setClientUser }}>
            {children}
        </ClientContext.Provider>
    )
}