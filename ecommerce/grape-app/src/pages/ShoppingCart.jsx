import React, { useState, useEffect} from 'react'
import Garrafa from '../assets/Vinho_Tinto/calitera.png'
import ButtonAdd from '../components/ButtonAdd'
import Footer from '../components/Footer'

function ShoppingCart(){

    // const [wineState, setWine] = useState([]);

    useEffect(() => {
      fetch("http://54.177.105.189:9000/products").then((response) => {
        response.json().then((data) => {
        //   setWine(data);
          console.log(data);
        });
      });
    }, []);
  

    return(
        <>
        <div className="shoppingCart">
        <div className="shoppingCart__Card">
            <h1>Compras</h1>
            <div className="purchaseSummary">
                <div className="itemPurchase"> <img src={ Garrafa } alt="" /> </div>
                <div className="purchaseOptions"> 
                <h2>Calitera</h2>    
                <ButtonAdd />          
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default ShoppingCart