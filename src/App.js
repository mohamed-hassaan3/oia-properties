import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Infrastructure from "./components/Infrastructure";
import FloorPlans from "./components/FloorPlans";
import Location from "./components/Location";
import Nearby from "./components/Nearby";
import Download from "./components/Download";
import Footer from "./components/Footer";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <Header isScrolled={isScrolled} />
      <div className="mb-[400px] xl:mb-0  h-screen">
        <Home home="home" />
      </div>
      <Gallery />
      <About />
      <Infrastructure />
      <FloorPlans />
      <Location />
      <Nearby />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
