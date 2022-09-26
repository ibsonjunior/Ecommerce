import FormPost from "../components/Form/Post";
import FormDelete from "../components/Form/Delete";
import FormUpdate from "../components/Form/Update";
import Footer from "../components/Footer";

import { Navbar } from "react-bootstrap";

export default function Administration() {
  return (
    <>
      <Navbar />

      <FormPost />

      <FormDelete />

      <FormUpdate />

      {/* <div className="update__item">
        <label htmlFor="idProduct">
          {" "}
          Atualizar produto
          <input type="number" placeholder="id do produto" />
          <button className="btn__delete">Procurar</button>
        </label>
      </div> */}

      <Footer />
    </>
  );
}