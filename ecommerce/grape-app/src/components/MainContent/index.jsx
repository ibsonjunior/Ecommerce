import Carousel from 'react-bootstrap/Carousel';

function MainContent() {
    return (
        <>
        <div className="Container_wines">

            <div className="wine_home">
                <h1 className="wine_title">
                    Melhores Avaliados
                </h1>

                
            </div>

            <section className="wines">

                <h2 className="wine_name">
                        Vinho Branco
                </h2>

                                
                    <Carousel className="carousel__div" >

                        <Carousel.Item>
                        <div className="carousel__item"></div>
                                    <Carousel.Caption className="spacee" >
                                    <h1 className="carousel__title">TITULO</h1>
                                    <p className="carousel__title">Legend 2</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                        <div className="carousel__item"></div>
                                    <Carousel.Caption className="spacee" >
                                    <h1 className="carousel__title">TITULO</h1>
                                    <p className="carousel__title">Legend 2</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                        <div className="carousel__item"></div>
                                    <Carousel.Caption className="spacee" >
                                    <h1 className="carousel__title">TITULO</h1>
                                    <p className="carousel__title">Legend 2</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                        <div className="carousel__item"></div>
                                    <Carousel.Caption className="spacee" >
                                    <h1 className="carousel__title">TITULO</h1>
                                    <p className="carousel__title">Legend 2</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                        <div className="carousel__item"></div>
                                    <Carousel.Caption className="spacee" >
                                    <h1 className="carousel__title">TITULO</h1>
                                    <p className="carousel__title">Legend 2</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>  

            </section>


        </div>
            
           

        </>
    )
}

export default MainContent