import { Route, Routes } from "react-router-dom"
import { HomePage, RegisterPage, InternalPage } from "../pages/index.pages"
import { ProjectProviderInternal }  from "../providers/ContextProjectInternal"
import { ProtectedRoutes } from "./RegrasRoutes"


export function RoutesMain(){
    
    return(
        <Routes>
          
            <Route path="/" element = {<HomePage/>}/>
            <Route path="/register" element ={<RegisterPage/>}/>
       
            <Route element={<ProtectedRoutes/>}>
                <Route path="/internalPage"
                    element = {
                        <ProjectProviderInternal>
                            <InternalPage/>
                        </ProjectProviderInternal>
                    } 
                />
            </Route>
           
        </Routes>
    )
}