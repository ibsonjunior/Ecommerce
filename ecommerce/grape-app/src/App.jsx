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
    <Navbar statusSidebar={statusSidebar} setSidebar={setSidebar} />

    <Sidebar statusSidebar={statusSidebar} setSidebar={setSidebar}/>
      <Home/>
      <WineProduct />

      <Wines/>
    </>
  )
}

export default App