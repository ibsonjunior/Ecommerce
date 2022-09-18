import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function MainContent() {
    return (
        <>
            <Carousel className="Carousel">
                <div className="carousel__div">
                    <div className="carousel__item"></div>
                    <div className="carousel__description">
                        <h1 className="carousel__title">TITULO</h1>
                        <p >Legend 1</p>
                    </div>

                </div>
                <div className="carousel__div">
                    <div className="carousel__item"></div>
                    <div className="carousel__description">
                        <h1 className="carousel__title">TITULO</h1>
                        <p>Legend 2</p>
                    </div>

                </div>
                <div className="carousel__div">
                    <div className="carousel__item"></div>
                    <div className="carousel__description">
                        <h1 className="carousel__title">TITULO</h1>
                        <p>Legend 2</p>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default MainContent