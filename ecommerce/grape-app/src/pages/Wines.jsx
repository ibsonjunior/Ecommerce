import Carousel from 'carousel-react-rcdev'

function Vinhos() {
    return(
    
    <>
        <div className="Container_wines">
            <h1 className="wine_titles">
                Vinhos
            </h1>

            <section className="vinhosTinto">
                
                <h2 className="wine_names">
                    Vinho Tinto
                </h2>

                <Carousel>
        
                </Carousel>

            </section>

            <section className="vinhosBranco">

                <h2 className="wine_names">
                    Vinho Branco
                </h2>

                <Carousel>
                    {/* <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' /> */}
                </Carousel>

            </section>

            <section className="vinhosVerde">
                <h2 className="wine_names">
                    Vinho Verde
                </h2>

                <Carousel>
                    {/* <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
                    <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' /> */}
                </Carousel>
                
            </section>


        </div>
    
    
    </>
    )
    
    
}