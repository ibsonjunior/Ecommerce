
import Footer from '../components/Footer';
import HarmonyCarousel from '../components/HarmonyCarousel';
import MainContent from '../components/MainContent/index'

import WineHouse from "../components/WineHouse";

function Home(){
    return(
        <>
        <WineHouse />
        <MainContent />
        <div className="harmony">
        <HarmonyCarousel />
        </div>
        <Footer />
        </>
    )
}

export default Home;