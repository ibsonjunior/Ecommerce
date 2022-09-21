import { useState } from 'react'
import OffcanvasExample from './components/Navbar';
import Home from './pages/Home'
import Sidebar from './components/Sidebar';
import WineProduct from './pages/WineProduct'
import './provisoryCss.css'
import Wines from './pages/Wines';



import { Routes, Route } from 'react-router-dom';

function App() {
  const [statusSidebar, setSidebar] = useState(false)

  return (
    <>

          <div >
            {
              /*
                O componente Nav é responsável pela navegação
                da Aplicação.
              */
            }
            <OffcanvasExample />
            <Sidebar statusSidebar={statusSidebar} setSidebar={setSidebar} />
          </div>


        <div >
				  <div >
					  {
						  <Routes>
							  <Route
								  path="/"
								  element={<Home />}
							  />

                <Route
                  path="/Vinhos"
                  element={<Wines/>}
                />

                <Route
                  path="/Melhores-avaliados"
                  element={<Wines/>}
                />
						  </Routes>
					  }
				  </div>
			  </div>

      
      <WineProduct />

    </>
  )
}

export default App