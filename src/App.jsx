import { RoutesMain } from "./routes/routesMain"
import { GlobalReset, GlobalStyle } from "../src/styles/index"
import { ProjectProvider } from "./providers/ContextProject"

function App() {
  return (
    <>
      <GlobalReset/>
      <GlobalStyle/>
      <ProjectProvider>
        <RoutesMain/>
      </ProjectProvider>
    </>
  )
}

export default App
