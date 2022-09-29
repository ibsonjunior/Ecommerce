
import Slider from "react-slick";
import Footer from '../components/Footer'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Wines() {
  var settings = {
    dots: true,
    infinite: true,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  const [wines, setWines] = useState([]);

    const url = "http://54.177.105.189:8081/products"
    useEffect(() => {
        fetch(url)
            .then(responseWines => responseWines.json())
            .then(WinesJSON => setWines(WinesJSON))

          
    }, []);

    


  return(

    <>
  
        <div className="container_wines">
          <div className="wines">
         
            <div className="div_wine_titles">
              <h1 className="wine_titles">Vinhos</h1>
            </div>

            <section className="wines_section">
              <h2 className="wine_name">Vinho Tinto</h2>
              <div>
              <Slider {...settings}>
                {wines.filter((wines) => wines.categories.find(categorie => categorie.id === 1)).map((wine) =>{
                return(  
                  <Link className="" to="/Carrinho">
                    <div key={wine.id}>
                          <div className="carousel-wine-item ">
                            <img className='img_wine' src={wine.image} alt="wineImage"/>
                            <div className="div_wine">
                                <h4 className='title_'>{wine.title}</h4>
                                <p className="description_wine">{wine.description}</p>
                                </div>
                          </div>
                      
                      
                        </div>
                  </Link>                        
                      
                 
                    )
                  })}
                </Slider>
      
                 </div> 
                
            </section>

          
            <section className="wines_section">
              <h2 className="wine_name">Vinho Branco</h2>
              <div>
              <Slider {...settings}>
                {wines.filter((wines) => wines.categories.find(categorie => categorie.id === 2)).map((wine) =>{
                return(  
                  <Link className="" to="/Carrinho">
                    <div key={wine.id}>
                          <div className="carousel-wine-item ">
                            <img className='img_wine' src={wine.image} alt="wineImage"/>
                            <div className="div_wine">
                                <h4 className='title_'>{wine.title}</h4>
                                <p className="description_wine">{wine.description}</p>
                                </div>
                          </div>
                      
                      
                        </div>
                  </Link>                        
                      
                 
                    )
                  })}
                </Slider>
      
                 </div> 
                
            </section>

            <section className="wines_section">
              <h2 className="wine_name">Vinho Verde</h2>
              <div>
              <Slider {...settings}>
                {wines.filter((wines) => wines.categories.find(categorie => categorie.id === 3)).map((wine) =>{
                return(  
                  <Link className="" to="/Carrinho">
                    <div key={wine.id}>
                          <div className="carousel-wine-item ">
                            <img className='img_wine' src={wine.image} alt="wineImage"/>
                            <div className="div_wine">
                                <h4 className='title_'>{wine.title}</h4>
                                <p className="description_wine">{wine.description}</p>
                                </div>
                          </div>
                      
                      
                        </div>
                  </Link>                        
                      
                 
                    )
                  })}
                </Slider>
      
                 </div> 
                
            </section>


            
           

          </div>

        </div>

      

    </>
  
  )

}