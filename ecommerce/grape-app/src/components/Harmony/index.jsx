import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Container, Card } from "react-bootstrap";

import Slider from "react-slick";

function HarmonyCarousel() {

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const [allHarmony, setAllHarmonies] = useState([]);

  const url = "http://54.215.156.182:8081/harmonies";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllHarmonies(data));
  }, []);

  return (

    <>
    <Container fluid className="topWines_carousel w-100 p-3">

      <div className="topWines_titles d-flex justify-content-around">
        <h1 className="topWine_title">Harmonizações</h1>
      </div>

      <Container className="w-70">
        <Slider {...settings}>
          {allHarmony.map((harmony) => {
              return (
                <Link className="" to="/Wine">
                    <Card
                      id={`topWine_${harmony.id}`}
                      border="light"
                      className="bg-dark text-light h-10 p-3 m-3"
                      key={harmony.id}
                    >
                      <Card.Img
                        variant="right"
                        src={harmony.image}
                        alt=""
                        className="topWine_img"
                        style={{ height: "30vh" }}
                      />
                      <Card.Body>
                        <Card.Title
                          className="topWine_text">
                          {harmony.nameplate}
                        </Card.Title>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-light">
                          Last updated 3 mins ago
                        </small>
                      </Card.Footer>
                    </Card>
                </Link>
              );
            })}
        </Slider>
      </Container>
    </Container>
  </>
  );
}

export default HarmonyCarousel;