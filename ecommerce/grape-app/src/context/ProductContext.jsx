import { createContext,useState, useEffect } from "react";

export const ProductContext = createContext({});

const ProductContextProvider = ({children}) =>{
    const [wines, setWines] = useState([]);

    const [cart, setCart] = useState([]);

    // const saveCart = (cart) => {
    //   localStorage.setItem("wines", JSON.stringify(cart));
    //   setCart(wines);
    // };

    // saveCart();

    const url = "http://52.53.193.244:8081/products"

    useEffect(() => {
        fetch(url)
            .then(responseWines => responseWines.json())
            .then(WinesJSON => setWines(WinesJSON))  
    }, []);

    return(
        <ProductContext.Provider value={{wines, setWines, cart, setCart }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;