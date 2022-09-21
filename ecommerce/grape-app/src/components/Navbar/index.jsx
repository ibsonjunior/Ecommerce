import Logo from "../../assets/Icones/Logo_NavBar.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function OffcanvasExample() {
  return (
    <>
      <Navbar variant="light" bg="black" expand="sm" style={{ position: "fixed", width: "100vw"}} >
        <Container fluid>

          <Navbar.Brand href="#">
            <Link className="nav-link" to="/">
              <img className="logo" src={Logo} alt="" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle className="toggle" aria-controls="navbarScroll"/>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "160px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <Link className="nav-link" to="/Vinhos">
                  Vinhos
                </Link>
              </Nav.Link>

              <Nav.Link href="#action2">
                <Link className="nav-link" to="/Melhores-avaliados">
                  Melhores Avaliados
                </Link>
              </Nav.Link>

              <Nav.Link href="#action3">
                <Link className="nav-link" to="/Harmonizacoes">
                  Harmonizações
                </Link>
              </Nav.Link>

              <Nav.Link href="#action4">
                <Link className="nav-link" to="/Nossa-historia">
                  Nossa História
                </Link>
              </Nav.Link>

              <Nav.Link href="#action5">
                <Link className="nav-link" to="/Carrinho">
                  Carrinho
                </Link>
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;