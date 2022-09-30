import Garrafa from '../assets/Vinho_Tinto/vik_chile.png'
// import "../styles/pageStyle/WineProduct.css"
import ButtonCompra from '../components/ButtonCompra/index.jsx'

export default function WineProduct() {
  return (
    <>
      <div className="d-flex flex-row justify-content-between align-items-center mt-5">
                <img className="mt-5 mr-5 ml-5 w135 h200" src={ Garrafa } alt=""/>
                <h1 className="text-white">Vik</h1>
            </div>
            {/* informações */}
            <div className="d-flex flex-row justify-content-between align-items-center mt-5" >
                <span className="d-inline-block text-truncate text-light"><p>FRANÇA</p></span>
                <span className="d-inline-block text-truncate text-light"><p>VINHO TINTO</p></span>
                <span className="d-inline-block text-truncate text-light"><p>Millahue,2018</p></span>               
            </div>
            {/* box de preço */}
            <div className="card-body w-100 bg-dark p-3 d-flex justify-content-center">
                <div className="card-align justify-content-center">
                    <h5 className="card-title text-white justify-content-center">por: R${/* VAR PREÇO VINHO */}259,00</h5>
                    <p className="card-text text-white">ou 2x de R${/* PARCELA */}128,00</p>
                    <div className="d-flex">
                        <div >
                            <ButtonCompra />
                        </div>
                        {/* <ButtonRemove /> */}
                    </div>
                </div>
            </div>
            {/* descrição */}
            <div className="d-flex flex-row justify-content-between align-items-center mt-5">
                <ul>
                    <li className="text-white">COMPOSIÇÃO UVA: Malbec</li>
                    <li className="text-white">COR: Roxo intenso</li>
                    <li className="text-white">TEOR ALCÓOLICO: 13%</li>
                </ul>
            </div> 
    </>
  );
}