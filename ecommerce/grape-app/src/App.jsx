import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Wines from './pages/Wines'
import WineProduct from './pages/WineProduct'
import './provisoryCss.css'



import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">

        <div className="row">
          <div className="col">
            {
              /*
                O componente Nav é responsável pela navegação
                da Aplicação.
              */
            }
            <Navbar />
          </div>
        </div>

        <div className="row my-3">
				  <div className="col">
					  {
						  <Routes>
							  <Route
								  path="/"
								  element={<Home />}
							  />
						  </Routes>
					  }
				  </div>
			  </div>
		  </div>
      {/* <Wines /> */}
      <WineProduct />

      <Wines/>
    </>
  )
}

export default App