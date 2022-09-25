import Garrafa from '../assets/Vinho_Tinto/calitera.png'
import ButtonAdd from '../components/ButtonAdd'
import Footer from '../components/Footer'

function ShoppingCart(){
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