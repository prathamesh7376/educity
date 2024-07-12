import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Programs" title="What we offer" />

        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="Gallary" title="Campus Photos" />
        <Campus />
        <Title subtitle="Testimonials" title="What Student says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="get In Tuch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
