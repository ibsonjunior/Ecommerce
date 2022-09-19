import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Wines() {
    return(
    
    <>
        <div className="Container_wines">
            <h1 className="wine_titles">
                Vinhos
            </h1>

            <section className="red_wine">
                
                <h2 className="wine_names">
                    Vinho Tinto
                </h2>

                <Carousel className="Carousel__harmony">
                <div className="carousel__harmony__div">
                    <div className="carousel__item__harmony"></div>
                    <div className="carousel__description">
                        <h1 className="carousel__title">TITULO</h1>
                    </div>

                </div>
                <div className="carousel__harmony__div">
                    <div className="carousel__item"></div>
                    <div className="carousel__description">
                        <h1 className="carousel__title">TITULO</h1>
                    </div>

                </div>
                <div className="carousel__harmony__div">
                    <div className="carousel__item__harmony"></div>
                    <div className="carousel__description__harmony">
                        <h1 className="carousel__title">TITULO</h1>
                    </div>
                </div>
            </Carousel>

            </section>

            <section className="white_wine">

                <h2 className="wine_names">
                    Vinho Branco
                </h2>

                <Carousel className="Carousel__harmony">
                <div className="carousel__harmony__div">
                    <div className="carousel__item__harmony"></div>
                    <div className="carousel__description">
                        <h1 className="carousel__title">TITULO</h1>
                    </div>

                </div>
                <div className="carousel__harmony__div">
                    <div className="carousel__item"></div>
                    <div className="carousel__description">
                        <h1 className="carousel__title">TITULO</h1>
                    </div>

                </div>
                <div className="carousel__harmony__div">
                    <div className="carousel__item__harmony"></div>
                    <div className="carousel__description__harmony">
                        <h1 className="carousel__title">TITULO</h1>
                    </div>
                </div>
            </Carousel>

            </section>

            <section className="green_wine">
                <h2 className="wine_names">
                    Vinho Verde
                </h2>
                <Carousel className="Carousel__harmony">
                <div className="carousel__harmony__div">
                    <div className="carousel__item__harmony"></div>
                    <div className="carousel__description">
                        <h1 className="carousel__title">TITULO</h1>
                    </div>

                </div>
                <div className="carousel__harmony__div">
                    <div className="carousel__item"></div>
                    <div className="carousel__description">
                        <h1 className="carousel__title">TITULO</h1>
                    </div>

                </div>
                <div className="carousel__harmony__div">
                    <div className="carousel__item__harmony"></div>
                    <div className="carousel__description__harmony">
                        <h1 className="carousel__title">TITULO</h1>
                    </div>
                </div>
            </Carousel>
                
            </section>


        </div>
    
    
    </>
    )
    
    
}