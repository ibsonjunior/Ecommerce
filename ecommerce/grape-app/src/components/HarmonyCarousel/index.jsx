import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function HarmonyCarousel() {
    return (
        <>
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
        </>
    )
}

export default HarmonyCarousel