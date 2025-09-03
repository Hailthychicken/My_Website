import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Section/About";
import Home from "./Components/Section/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Section/Projects";
import Contact from "./Components/Section/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="w-[vw] h-[100vh]">
        <Navbar />
        <Home />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
