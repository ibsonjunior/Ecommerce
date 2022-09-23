import Aves from "../../assets/Harmonizações/Aves.png";
import Carne from "../../assets/Harmonizações/Carne_Curada.png";
// import Cordeiro from '../../assets/Harmonizações/Cordeiro.png'
// import Massas from '../../assets/Harmonizações/Massas.png'
// import Peixe from '../../assets/Harmonizações/peixe.png'

function HarmonyCarousel() {
  return (
    <div className="harmony">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img src={Aves} alt="" />
          </div>
          <div className="col">
            <img src={Carne} alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={Aves} alt="" />
          </div>
          <div className="col">
            <img src={Carne} alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={Aves} alt="" />
          </div>
          <div className="col">
            <img src={Carne} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HarmonyCarousel;

{
  /* <Carousel classNameName="Carousel__harmony">
                <div classNameName="carousel__harmony__div">
                    <div classNameName="carousel__item__harmony"></div>
                    <div classNameName="carousel__description">
                        <h1 classNameName="carousel__title">TITULO</h1>
                    </div>

                </div>
                <div classNameName="carousel__harmony__div">
                    <div classNameName="carousel__item"></div>
                    <div classNameName="carousel__description">
                        <h1 classNameName="carousel__title">TITULO</h1>
                    </div>

                </div>
                <div classNameName="carousel__harmony__div">
                    <div classNameName="carousel__item__harmony"></div>
                    <div classNameName="carousel__description__harmony">
                        <h1 classNameName="carousel__title">TITULO</h1>
                    </div>
                </div>
            </Carousel> */
}