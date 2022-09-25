import { Form, Navbar } from "react-bootstrap";


export default function Administration(){
    return(
        <>
        <div className="formSenditem">
        <Navbar />
        <Form>
            <label className="campoForm">
                Nome do vinho:
                <input type={"text"} name="name" />
            </label>
            <label className="campoForm">
                Descrição:
                <input type={"text"} name="description" />
            </label>
            <label>
                Preço:
                <input type={"number"} name="price" />
            </label>
            <label className="campoForm">
                Imagem:
                <input type={"text"} name="imageLink" />
            </label>

            <button>Cadastrar</button>
        </Form>
        </div>
        </>
    )
}