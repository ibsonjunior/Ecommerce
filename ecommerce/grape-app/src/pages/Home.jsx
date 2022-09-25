import WineHouse from "../components/WineHouse";
import MainContent from "../components/MainCarousel/index";
import HarmonyCarousel from "../components/Harmony";
import Footer from "../components/Footer";


import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    console.log("useEffect");

    fetch("http://54.219.149.136:9000/products").then((response) => {
      response.json().then((data)=>{
        console.log(data)
      });
    });
  }, []);



  return (
    <>
      <WineHouse />
      <h1>MELHORES VINHOS</h1>
      <MainContent />

      <div className="harmony">
        <HarmonyCarousel />
      </div>

      <Footer />

    </>
  );
}

export default Home;