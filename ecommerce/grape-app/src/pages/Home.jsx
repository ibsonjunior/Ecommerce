
import Footer from '../components/Footer';
import HarmonyCarousel from '../components/Harmony';
import MainContent from '../components/MainCarousel/index';
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