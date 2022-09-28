import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cordeiro from '../assets/Vinho_Branco/Cordeiro.png'
import GuardaRios from '../assets/Vinho_Branco/GuardaRios.png'
import Footer from '../components/Footer'
import React, { useState, useEffect } from 'react'

export default function Wines() {

  const [wineList, setWineList] = useState([])

  useEffect(() => {
    fetch("http://52.53.186.98:9000/products").then((response) => {
      response.json().then((data) => {
        setWineList(data);
        console.log(data);
      });
    });
  }, []);

  let vinhoTinto = [];
  let vinhoBranco= [];
  let vinhoVerde= [];

  vinhoTinto = wineList.filter((vinho) => {
    if(vinho.categories[0].id === 1 ){
      return vinho;
    }
  })

  vinhoBranco = wineList.filter((vinho) => {
    if(vinho.categories[0].id === 2 ){
      return vinho;
    }
  })

  vinhoVerde = wineList.filter((vinho) => {
    if(vinho.categories[0].id === 3 ){
      return vinho;
    }
  })

  console.log(vinhoTinto)
  console.log(vinhoBranco)
  console.log(vinhoVerde)

  return(

    <>
        <div className="container_wines">
          <div className="wines">
         
            <div>
              <h1 className="wine_titles">Vinhos</h1>
            </div>

            <h2 className="wine_name"> vinhoTinto.categories </h2>
             
            <section className="wines_section"> 
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner carousel-div ">
                  <div className="carousel-item carousel-wine-item active">
                    <img src={Cordeiro} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item carousel-wine-item">
                    <img src={GuardaRios} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item carousel-wine-item">
                    <img src={Cordeiro} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item carousel-wine-item">
                    <img src={GuardaRios} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item carousel-wine-item">
                    <img src={Cordeiro} className="d-block w-100" alt="..." />
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

            </section>

                 
            <Footer />

          </div>

        </div>

      

    </>
  
  )

}