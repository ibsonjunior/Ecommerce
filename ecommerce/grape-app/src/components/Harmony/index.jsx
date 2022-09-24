import Aves from "../../assets/Harmonization/Aves.png";
import Carne from "../../assets/Harmonization/Carne_Curada.png";
// import Cordeiro from '../../assets/Harmonization/Cordeiro.png'
// import Massas from '../../assets/Harmonization/Massas.png'
// import Peixe from '../../assets/Harmonization/Peixe.png'

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