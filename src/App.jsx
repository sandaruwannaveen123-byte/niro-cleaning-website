import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import BackToTop from "./components/BackToTop";

function App(){



  return (
    <>


      <Loader />

      
      <Navbar />
      <Hero />
     <Services />
      <About />
      <WhyChoose />
      <Contact />
      <Map />
      <Footer />
      <WhatsApp />
      <BackToTop />

    </>
  );

}

export default App;