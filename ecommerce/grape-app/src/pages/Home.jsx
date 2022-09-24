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

    fetch("http://localhost:9000/categories").then((response) => {
      response.json().then((data) => {
        console.log(data[0]);
        console.log(data[0].products);
        console.log(data[0].products[0].image);
      });
    });
  }, []);



  return (
    <>
      <WineHouse />
      <MainContent />

      <div className="harmony">
        <HarmonyCarousel />
      </div>

      <Footer />
    </>
  );
}

export default Home;