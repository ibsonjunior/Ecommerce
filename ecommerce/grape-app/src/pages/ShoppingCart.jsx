import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import Garrafa from '../assets/Vinho_Tinto/calitera.png'
import ButtonAdd from '../components/ButtonAdd'
import Footer from '../components/Footer'

function ShoppingCart(){

const {cart, setCart} = useContext(ProductContext);
console.log(cart);

// const itens = cart.map((products) => (products.map((products))))

// console.log(itens);

// useEffect(()=>{
        
//     setCart(JSON.parse(localStorage.getItem("Products")))
// })

// setCart(... {id:3, title: 'Sangue de boi'}); 
// const [setWines] = useContext(ProductProvider); 
// setWine(... {id:3, title:"Galioto"});

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
            <ul className="bg-dark"
            style={{ width: "100vw", height: "30vh"}}>


            {cart.map((wine) => ( 
                <li className="text-light">{wine.description}</li>
            
            ))}

            
            </ul>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default ShoppingCart