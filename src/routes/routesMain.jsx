import { Route, Routes } from "react-router-dom"
import { HomePage, InternalPage } from "../pages/index.pages"
import { ProjectProviderInternal }  from "../providers/ContextProjectInternal"


export function RoutesMain(){
    
    return(
        <Routes>
            <Route path="/" element = {<HomePage/>}/>
            <Route path="/internalPage"
                element = {
                    <ProjectProviderInternal>
                        <InternalPage/>
                    </ProjectProviderInternal>
                } 
            />
        </Routes>
    )
}