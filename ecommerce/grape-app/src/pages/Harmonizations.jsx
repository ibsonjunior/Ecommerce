// import Aperitivo from "../assets/Harmonization/Aperitivo.png";
// import AperitivoLanches from "../assets/Harmonization/Aperitivos_E_Lanches.png";
import Aves from "../assets/Harmonization/Aves.png";
// import CarneCurada from "../assets/Harmonization";
// import CarneCaca from "../assets/Harmonization/Carne_De_Caça.png";
// import CarneVaca from "../assets/Harmonization/Carne_De_Vaca.png";
// import ComidaPicante from "../assets/Harmonization/Comida_Picante.png";
// import Cordeiro from "../assets/Harmonization/Cordeiro.png";
// import Marisco from "../assets/Harmonization/Marisco.png";
import Massas from "../assets/Harmonization/Massas.png";
// import Peixe from "../assets/Harmonization/Peixe.png";
// import PeixesMagros from "../assets/Harmonization/Peixe_Magros.png";
// import Porco from "../assets/Harmonization/Porco.png";
// import QueijoCabra from "../assets/Harmonization/Queijo_De_Cabra.png";
// import QueijoMaduro from "../assets/Harmonization/Queijo_Maduro.png";
// import QueijoSuaves_Moles from "../assets/Harmonization/Queijo_Suaves_E_Moles.png";
// import SobremesasComFrutas from "../assets/Harmonization/Sobremesas_Com_Frutas.png";
// import Vegetariano from "../assets/Harmonization/Vegetariano.png";
// import Vitela from "../assets/Harmonization/Vitela.png";

import { Container, Row, Col, Card } from "react-bootstrap";

function Harmonizations() {
  return (
    <>
    <Container fluid className="harmonyCards bg-dark">
      <Row xs={2} md={4}>
        <Col xs={6} md={3}>
          <Card
            id="card01"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Aves} />
            <Card.Body>
              <Card.Title>Aperitivos e Lanches</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card02"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Massas} />
            <Card.Body>
              <Card.Title>Aves</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card03"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Aves} />
            <Card.Body>
              <Card.Title>Carne Curada</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card04"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Massas} />
            <Card.Body>
              <Card.Title>Carne de Caça</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6} md={3}>
          <Card
            id="card05"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Aves} />
            <Card.Body>
              <Card.Title>Carne de Vaca</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card06"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Massas} />
            <Card.Body>
              <Card.Title>Comida Picante</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card07"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Aves} />
            <Card.Body>
              <Card.Title>Cordeiro</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card08"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Massas} />
            <Card.Body>
              <Card.Title>Marisco</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6} md={3}>
          <Card
            id="card09"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Aves} />
            <Card.Body>
              <Card.Title>Massas</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card10"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Massas} />
            <Card.Body>
              <Card.Title>Peixe (Salmão, Atum etc.)</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card11"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Aves} />
            <Card.Body>
              <Card.Title>Peixes Magros</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card12"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Massas} />
            <Card.Body>
              <Card.Title>Porco</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6} md={3}>
          <Card
            id="card13"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Aves} />
            <Card.Body>
              <Card.Title>Queijo de Cabra</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card14"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Massas} />
            <Card.Body>
              <Card.Title>Queijos Maduros</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card15"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Aves} />
            <Card.Body>
              <Card.Title>Queijos Suaves e Moles</Card.Title>
            </Card.Body>
          </Card>

          <Card
            id="card16"
            border="dark"
            className="harmonyCard bg-dark text-center text-light mb-4"
          >
            <Card.Img variant="top" src={Massas} />
            <Card.Body>
              <Card.Title>Sobremesas com Frutas</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
<div>


</div>




</>

  );
}

export default Harmonizations;