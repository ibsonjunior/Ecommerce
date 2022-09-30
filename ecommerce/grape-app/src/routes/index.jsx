import { Routes, Route, BrowserRouter } from "react-router-dom";

import ProductContextProvider from "../context/ProductContext";
import NavOffCanvas from "../components/NavOff";
import Home from "../pages/Home";
import Wines from "../pages/Wines";
import TopWines from "../pages/TopWines";
import Harmonizations from "../pages/Harmonizations";
import ShoppingCart from "../pages/ShoppingCart";
import NossaHistoria from "../pages/NossaHistoria";
import Administration from "../pages/Administration";
import WineProduct from "../pages/WineProduct";

import "../styles/grapeApp.css";

const RouteList = () => {
  return (
    <>
      <BrowserRouter>
        <ProductContextProvider>
          <NavOffCanvas />
          <div className="mainContent"> </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Vinhos" element={<Wines />} />
            <Route path="/Melhores-avaliados" element={<TopWines />} />
            <Route path="/Harmonizacoes" element={<Harmonizations />} />
            <Route path="/Carrinho" element={<ShoppingCart />} />
            <Route path="/NossaHistoria" element={<NossaHistoria />} />
            <Route path="/Administration" element={<Administration />} />
            <Route path="/WineProduct" element={<WineProduct />} />
          </Routes>
        </ProductContextProvider>
      </BrowserRouter>
    </>
  );
};

export default RouteList;
