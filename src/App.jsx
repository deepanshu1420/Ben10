import { useRef } from "react";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Team from "./components/Team";
import BackToTop from "./components/BackToTop";

function App() {
  const homeRef = useRef(null);
  const aliensRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Hero
        homeRef={homeRef}
        aliensRef={aliensRef}
        aboutRef={aboutRef}
      />

      <Slider sliderRef={aliensRef} />

      <Team teamRef={aboutRef} />

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
}

export default App;