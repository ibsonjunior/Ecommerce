import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cordeiro from '../assets/Vinho_Branco/Cordeiro.png'
import GuardaRios from '../assets/Vinho_Branco/GuardaRios.png'
import Footer from '../components/Footer'

export default function Wines() {

  return(

    <>
        <div className="container_wines">
          <div className="wines">
         
            <div>
              <h1 className="wine_titles">Vinhos</h1>
            </div>

            <section className="wines_section">
              <h2 className="wine_name">Vinho Tinto</h2>
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
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