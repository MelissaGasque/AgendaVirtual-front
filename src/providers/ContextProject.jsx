import { createContext, useState, useEffect } from "react"
import { api } from "../service/api"
import { useNavigate } from "react-router-dom"

export const ClientContext = createContext({})
export function ProjectProvider({children}){

    const navigate = useNavigate()

    const [ clientToken, setClientToken ] = useState(null)
    const [ clientUser, setClientUser ] = useState(null)
    const [ loading, setLoading ] = useState(true) 
    

        useEffect(() => {
           const token = localStorage.getItem("@clientToken")
           const client = JSON.parse(localStorage.getItem("@client"))

           if(! token ){
            setLoading(false)
            return
           }
           api.defaults.headers.common.Authorization = `Bearer ${token}`
           setClientUser(client)
           console.log(clientUser)
           setLoading(false)
        }, [])

        async function login(formData) {
            try {
              const response = await api.post("/login", formData)
          
                const token = response.data.token.token
                const clientId = response.data.token.user.id
                const clientUser = response.data.token.user
            
                // api.defaults.headers.common.Authorization = `Bearer ${token}`

                localStorage.setItem("@clientToken", token)
                localStorage.setItem("@clientID", clientId)
                setClientToken(token)
                setClientUser(clientUser)
                localStorage.setItem("@client", JSON.stringify(clientUser))
                navigate("/internalPage")
             
            } catch (error) {
              console.log("Não foi possível realizar o login", error)
            }
          }


    async function registration(formData){
        try{
            await api.post("/clients", formData)
            navigate("/")
        }catch (error){
            // toast.error("Ops! Algo deu errado")
            console.log("não foi criada")
        }
      }
    

    function logout(){
        localStorage.removeItem("@clientToken")
        localStorage.removeItem("@clientID")
        localStorage.removeItem("@client")
        setClientToken(null)
        setClientUser(null)
        navigate("/")
    }


    return(
        <ClientContext.Provider value={{ login, loading, logout, registration, clientToken, setClientToken,  clientUser, setClientUser }}>
            {children}
        </ClientContext.Provider>
    )
}