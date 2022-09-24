import Garrafa from '../assets/Vinho_Tinto/calitera.png'
import Footer from '../components/Footer'

function ShoppingCart(){
    return(
        <>
        <div className="shoppingCart">
        <div className="shoppingCart__Card">
            <h1>Compras</h1>
            <div className="purchaseSummary">
                <div className="itemPurchase"> <img src={ Garrafa } alt="" /> </div>
                <div className="purchaseOptions"> <h2>Calitera</h2>
                <div className="btn__options"> <button>-</button> 1 Garrafa <button>+</button> </div>                
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default ShoppingCart