import { useContext, useEffect } from "react"
import { ClientContext, InternalContext } from "../../providers/index.providers"
import { Button } from "../../components/buttons"
import { AdicionarContato, UpdateContato, ModalOtherClients } from "../../components/index.components"


export function InternalPage(){

    const { logout, clientToken, setClientToken } = useContext(ClientContext)
    const { setModalAddContactOpen, setModalUpdateOpen, setModalOtherClientsOpen } = useContext(InternalContext)

    useEffect(() => {
        const loggedInUser = localStorage.getItem("@client");
        // console.log(loggedInUser)
        function teste(){
            if (loggedInUser) {
                const foundUser = JSON.parse(loggedInUser);
                setClientToken(foundUser);
              }
        }
        teste()
      }, []);


    const clientUsername = clientToken.username
    const clientAdmin = clientToken.admin

    function logOut(){
        logout()
    }
    
    function openModalAddContacts(){
        setModalAddContactOpen(true)
    }
    function openModalUpdateClient(){
        setModalUpdateOpen(true)
    }
    function openModalVerifyOtherClients(){
        setModalOtherClientsOpen(true)
    }

    return(
        <>
        <div>
            <header>
                <div>
                    {/* <img src={} alt="logo da empresa"/> */}
                    <h1>Sua agenda virtual</h1>
                </div>
                <Button onClick= { logOut } > Sair </Button>
            </header>
        </div>
        <main>
            <div>
                <h2>Olá, {clientUsername[0].toUpperCase() + clientUsername.slice(1)}!</h2>
                <h3>Hora de adicionar contatos em sua agenda virtual!</h3>
            </div>
            <div>
                <Button onClick= { openModalAddContacts }>Adicionar Contato</Button>
                <Button onClick= { openModalUpdateClient }>Alterar dados</Button>
                { (clientAdmin && <Button onClick= { openModalVerifyOtherClients }>Meus dados e Clientes</Button>)
                    || (!clientAdmin && <Button onClick= { openModalVerifyOtherClients }>Meus Dados</Button>)
                }
            </div>
        </main>
        <AdicionarContato/>
        <UpdateContato/>
        <ModalOtherClients/>
        </>
    )
}