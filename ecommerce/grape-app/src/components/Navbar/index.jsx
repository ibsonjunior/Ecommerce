import logo from '../../assets/Icones/Logo_NavBar.png'

import { FiMenu } from 'react-icons/fi'
import { TiShoppingCart } from 'react-icons/ti'

function Navbar({ statusSidebar, setSidebar }) {

    return (
        <>

            <div className="navbar">
              <button onClick={() => {setSidebar(!statusSidebar)}} tabIndex={1}><FiMenu /></button>  
                <div className="navbar__logo">
                    <img src={logo} alt="" />
                    <h1>sua adega virtual</h1>
                    <div className="navbar__search">
                        <input type="text" placeholder='Pesquise seu vinho'/>
                    </div>
                </div>
                <TiShoppingCart />



            </div>

        </>
    )

}

export default Navbar