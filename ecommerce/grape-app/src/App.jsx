import "./styles/grapeApp.css";

import NavOffCanvas from "./components/NavOff";
import Home from "./pages/Home";
import Wines from "./pages/Wines";
import TopWines from "./pages/TopWines";
import Harmonizations from "./pages/Harmonizations";
import ShoppingCart from "./pages/ShoppingCart";
import NossaHistoria from "./pages/NossaHistoria";
import Administration from "./pages/Administration"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavOffCanvas />

      <div className="mainContent"> </div>

      <div>
        {
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/Vinhos"
              element={<Wines />}
            />

            <Route
              path="/Melhores-avaliados"
              element={<TopWines />}
            />

            <Route
              path="/Harmonizacoes"
              element={<Harmonizations />}
            />

            <Route
              path="/Carrinho"
              element={<ShoppingCart />}
            />

              <Route
              path="/NossaHistoria"
              element={<NossaHistoria />}
            />

              <Route
              path="/Administration"
              element={<Administration />}
            />

          </Routes>
        }
      </div>
    </>
  );
}

export default App;