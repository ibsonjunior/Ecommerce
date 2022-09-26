import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useState, useEffect } from "react";

function MainContent() {
  const [wineState, setWine] = useState([]);

  useEffect(() => {
    fetch("http://52.53.186.98:9000/products").then((response) => {
      response.json().then((data) => {
        setWine(data);
      });
    });
  }, []);

  let topWine = [];

  topWine = wineState.filter((vinho) => {
    if (vinho.price > 60.0) {
      return vinho;
    }
  });

  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={topWine[0]?.image} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={topWine[1]?.image} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={topWine[2]?.image} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <Carousel classNameName="Carousel">
                <div classNameName="carousel__div">
                    <div classNameName="carousel__item"></div>
                    <div classNameName="carousel__description">
                        <h1 classNameName="carousel__title">TITULO</h1>
                        <p >Legend 1</p>
                    </div>

                </div>
                <div classNameName="carousel__div">
                    <div classNameName="carousel__item"></div>
                    <div classNameName="carousel__description">
                        <h1 classNameName="carousel__title">TITULO</h1>
                        <p>Legend 2</p>
                    </div>

                </div>
                <div classNameName="carousel__div">
                    <div classNameName="carousel__item"></div>
                    <div classNameName="carousel__description">
                        <h1 classNameName="carousel__title">TITULO</h1>
                        <p>Legend 2</p>
                    </div>
                </div>
            </Carousel> */}
    </>
  );
}

export default MainContent;