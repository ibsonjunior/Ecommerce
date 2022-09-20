import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Wines from './pages/Wines'
import WineProduct from './pages/WineProduct'
import Sidebar from './components/Sidebar';
import './provisoryCss.css'



import { Routes, Route } from 'react-router-dom';

function App() {
  const [ statusSidebar, setSidebar] = useState(false)

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
            <Navbar statusSidebar={statusSidebar} setSidebar={setSidebar} />

            <Sidebar statusSidebar={statusSidebar} setSidebar={setSidebar}/>
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
     
      <WineProduct />

      <Wines/>
    </>
  )
}

export default App