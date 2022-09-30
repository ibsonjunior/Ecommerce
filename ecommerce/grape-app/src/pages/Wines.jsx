import { useContext, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import Footer from '../components/Footer'

import { ProductContext } from "../context/ProductContext";

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



  const { wines, setCart } = useContext(ProductContext);

  // const addToCart = (wine) => {
  //   setCart([wine]);
  // };

  const filteredWines = wines.filter((wines) =>
    wines.categories.find((categorie) => categorie.id === 1)
  );

  // useEffect(() => {

    const addProductCart = (props) => {

    if(localStorage.getItem('Products') === null) {

      localStorage.setItem('Products',JSON.stringify([props]));

    } else {

      localStorage.setItem(
        'Products', JSON.stringify([
          ...JSON.parse(localStorage.getItem('Products')),
          props])
          );
      }

      
      
    }



    useEffect(() => {
      const itens = JSON.parse(localStorage.getItem('Products'));
      if (itens) {
        setCart(itens);
      }
    }, []);
  // },
  // [addToCart]);

  // localStorage.clear();

  return (
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
                {/* <Link className="" to="/Carrinho"> */}
                {filteredWines.map((wine) => {
                  return (
                    <div key={wine.id}>
                      <div className="carousel-wine-item ">
                        <img
                          className="img_wine"
                          src={wine.image}
                          alt="wineImage"
                        />
                        <div className="div_wine">
                          <h4 className="title_">{wine.title}</h4>
                          <p className="description_wine">{wine.description}</p>
                          <button onClick={() => addProductCart([wine])}>
                            Compre
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* </Link> */}
              </Slider>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
