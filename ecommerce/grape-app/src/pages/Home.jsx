import WineHouse from "../components/WineHouse";
import TopWinesCarousel from "../components/MainCarousel/test";
import HarmonyCarousel from "../components/Harmony";
import Footer from "../components/Footer";


import React, { useState, useEffect} from "react";
import Media from "../components/Media";

function Home() {
  const [category, setCategory] = useState({
    idCategory: null,
    nameCategory: null,
    productsCategory: [{
      idWine: null,
      titleWine: null,
      descriptionWine: null,
      priceWine: null,
      imageWine: null
    }]
  });

/*   useEffect(() => {
    console.log("useEffect");

    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=2").then((response) => {
      response.json().then((data) => {
        console.log(data);
        console.log(data.cards);
        console.log(data.cards[0].image);
      });
    });
  }, []); */

  // useEffect(() => {
  //   console.log("useEffect");

  //   fetch("http://52.53.186.98:9000/products").then((response) => {
  //     response.json().then((data)=>{
  //       console.log(data)
  //     });
  //   });
  // }, []);

  



  return (
    <>
      <WineHouse />
   
      <TopWinesCarousel />

      <div className="harmony">
        <HarmonyCarousel />
      </div>

      <Media />

      {/* <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/watch?v=AoxoXKXBvoE&t=57s" title="YouTube video" allowfullscreen></iframe>
      </div> */}

      <Footer />

    </>
  );
}

export default Home;