import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

// import { DeleteWine } from "../Form/Delete";

export default function ProductsAdm() {
  const [allProducts, setAllProducts] = useState([]);

  fetch("http://54.177.105.189:8081/products").then((response) => {
    response.json().then((data) => {
      setAllProducts(data);
      console.log(allProducts)
    });
  });

  return (
    <>
      <h1>Produtos cadastrados</h1>

      <div>
        <Container
          fluid
          className="allProductsAdm d-flex justify-content-center"
          style={{ width: "100vw" }}
        >
          <Row xs={2} md={4}>

            {allProducts.map((products) => (
              <Col xs={6} md={3}>
                <Card
                  id="allProductsCard01"
                  border="light"
                  className="allProductsCard bg-dark text-center text-light mb-4"
                  style={{ height: "50vh", width: "45vw" }}
                >
                  {products.categories.map((category) => (
                    <Card.Header>{category.name}</Card.Header>
                  ))}
                  <Card.Img
                    variant="top"
                    src={products.image}
                    style={{ height: "10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                      {products.description}
                      <br></br>
                      {products.price}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-md-center"> 
                    <div className="d-flex">
                    <Button
                      variant="primary"
                      style={{ height: "5vh", width: "20vw" }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      style={{ height: "5vh", width: "20vw" }}
                      // onClick={DeleteWine(products.id)}
                    >
                      Delete
                    </Button>
                    </div>
                    </Card.Footer>

                    {/* <h1>{products.title}</h1>
                    <p>{products.description}</p>
                    <p>{products.price}</p>
                    <img src={products.image} alt=""/>

                  </Row> */}
                </Card>
              </Col>
            ))}
            
          </Row>
        </Container>
      </div>
    </>
  );
}