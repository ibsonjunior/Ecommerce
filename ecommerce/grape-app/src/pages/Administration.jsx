import { Navbar } from "react-bootstrap";
import Form from "../components/Form";
import Footer from "../components/Footer"


export default function Administration(){
    return(
        <>
        <Navbar />

        <Form />

        <div className="delete__item">
         <label htmlFor="idProduct"> Deletar produto
            <input type="number" placeholder="id do produto" />
            <button className="btn__delete">DELETAR</button>
         </label>
        </div>

        <div className="update__item">
         <label htmlFor="idProduct"> Atualizar produto
            <input type="number" placeholder="id do produto" />
            <button className="btn__delete">Procurar</button>
         </label>
        </div>

        <Footer />
        </>
    )
}