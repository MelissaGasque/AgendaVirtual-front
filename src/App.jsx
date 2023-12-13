import { RoutesMain } from "./routes/routesMain"
import { GlobalReset, GlobalStyle } from "../src/styles/index"
import { ProjectProvider } from "./providers/ContextProject"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalReset/>
      <GlobalStyle/>
      <ProjectProvider>
        <RoutesMain/>
      </ProjectProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
