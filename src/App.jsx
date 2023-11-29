import { RoutesMain } from "./routes/routesMain"
import { GlobalReset, GlobalStyle } from "../src/styles/index"

function App() {
  return (
    <>
    <GlobalReset/>
    <GlobalStyle/>
    <div><RoutesMain/></div>
    </>
  )

}

export default App
