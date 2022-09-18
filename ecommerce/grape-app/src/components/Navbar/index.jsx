import logo from '../../assets/Icones/Logo_NavBar.png'


import { FiMenu } from 'react-icons/fi'
import { TiShoppingCart } from 'react-icons/ti'

function Navbar() {

    return (
        <>

            <div className="navbar">
                <FiMenu />
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