import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Sidebar from './components/Sidebar';
import WineProduct from './pages/WineProduct'
import './provisoryCss.css'



import { Routes, Route } from 'react-router-dom';

function App() {
  const [statusSidebar, setSidebar] = useState(false)

  return (
    <>
      <div >

        <div >
          <div >
            {
              /*
                O componente Nav é responsável pela navegação
                da Aplicação.
              */
            }
            <Navbar statusSidebar={statusSidebar} setSidebar={setSidebar} />
      <Sidebar statusSidebar={statusSidebar} setSidebar={setSidebar} />
          </div>
        </div>

        <div >
				  <div >
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

    </>
  )
}

export default App