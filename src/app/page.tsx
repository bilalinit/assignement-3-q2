import Extension from "./components/Extension";
import Hero from "./components/Hero";
import Management from "./components/Management";
import NavBar from "./components/NavBar";
import Customise from "./components/Customise"
import Work from "./components/Work";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <div >
    <NavBar />
    <Hero />
    <Management />
    <Extension />
    <Customise />
    <Work />
    <Sponsors />
    <Footer/>
    </div>
  );
}