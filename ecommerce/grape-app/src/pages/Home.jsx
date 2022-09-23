import WineHouse from "../components/WineHouse";
import MainContent from "../components/MainCarousel/index";
import HarmonyCarousel from "../components/Harmony";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <WineHouse />
      <MainContent />

      <div className="harmony">
        <HarmonyCarousel />
      </div>

      <Footer />
    </>
  );
}

export default Home;