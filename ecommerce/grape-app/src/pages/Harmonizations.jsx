// import Aperitivo from "../assets/Harmonizações/Aperitivo.png";
// import AperitivoLanches from "../assets/Harmonizações/Aperitivo_E_Lanches.png";
import Aves from "../assets/Harmonizações/Aves.png";
import CarneCurada from "../assets/Harmonizações/Carne_Curada.png";
// import CarneCaca from "../assets/Harmonizações/Carne_De_Caça.png";
// import CarneVaca from "../assets/Harmonizações/Carne_De_Vaca.png";
// import ComidaPicante from "../assets/Harmonizações/Comida_Picante.png";
import Cordeiro from "../assets/Harmonizações/Cordeiro.png";
// import Marisco from "../assets/Harmonizações/Marisco.png";
import Massas from "../assets/Harmonizações/Massas.png";
import Peixe from "../assets/Harmonizações/Peixe.png";
// import PeixesMagros from "../assets/Harmonizações/Peixe_Magros.png";
import Porco from "../assets/Harmonizações/Porco.png";
// import QueijoCabra from "../assets/Harmonizações/Queijo_De_Cabra.png";
import QueijoMaduro from "../assets/Harmonizações/Queijo_Maduro.png";
// import QueijoSuaves_Moles from "../assets/Harmonizações/Queijo_Suaves_E_Moles.png";
// import SobremesasComFrutas from "../assets/Harmonizações/Sobremesas_Com_Frutas.png";
import Vegetariano from "../assets/Harmonizações/Vegetariano.png";
// import Vitela from "../assets/Harmonizações/Vitela.png";

import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GroupExample() {
  return (
    <Row xs={2} md={2} className="g-2">
      {Array.from({ length: 4 }).map((_, idx) => (
        //
        <CardGroup className="mt-5 text-center text-white">
          <Col> 
            <Card border="dark" className="bg-dark mb-2"> {idx}
              <Card.Img variant="top" src={Massas} />
              <Card.Body>
                <Card.Title>Massas</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Cordeiro} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Cordeiro</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={QueijoMaduro} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  Queijo Maduro
                </Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>

            <Card border="dark" className="bg-dark mb-2">
              <Card.Img variant="top" src={Vegetariano} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Vegetariano</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </CardGroup>
      ))}
    </Row>
  );
}

export default GroupExample;