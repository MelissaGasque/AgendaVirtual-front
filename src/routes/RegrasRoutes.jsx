import { Outlet, useNavigate  } from "react-router-dom"
import { useContext } from "react"
import { ClientContext } from "../providers/ContextProject"

export function ProtectedRoutes(){
    const Navigate = useNavigate()
    const { loading } = useContext(ClientContext)
    const clientToken = localStorage.getItem("@clientToken")

    if (loading) {
        return <div>Carregando...</div>
    }

    if(clientToken){
        return <Outlet/>
    }else{
        Navigate("/")
    }

    return <Outlet />
}

export function PublicRoutes(){
    const Navigate = useNavigate()
    const clientToken = localStorage.getItem("@clientToken")

    if(clientToken){
        return <Outlet/>
    }else{
        Navigate("/")
    }

}

