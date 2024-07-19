import { useEffect, useRef, useState } from "react";
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
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const closingMenu = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousemove", closingMenu);

    return () => {
      document.removeEventListener("mousemove", closingMenu);
    };
  }, [isOpen]);

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
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <div className=" overflow-x-hidden w-full" ref={navRef}>
      <Header isScrolled={isScrolled} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="mb-12">
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
