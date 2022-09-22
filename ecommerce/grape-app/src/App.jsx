import "./provisoryCss.css";

import NavOffCanvas from "./components/NavOff";
import Home from "./pages/Home";
import Wines from "./pages/Wines";
import TopWines from "./pages/TopWines";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavOffCanvas />

      <div>
        {
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Vinhos" element={<Wines />} />

            <Route path="/Melhores-avaliados" element={<TopWines />} />
          </Routes>
        }
      </div>
    </>
  );
}

export default App;