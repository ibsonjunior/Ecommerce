import { Ratio, Container, Row, Col } from "react-bootstrap";

function Media() {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs xl="11">
            <h1>De onde vem os Vinhos?!</h1>
            <Ratio aspectRatio="16x9">
              <iframe
                width="auto"
                height="auto"
                src="https://www.youtube.com/embed/AoxoXKXBvoE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Ratio>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Media;