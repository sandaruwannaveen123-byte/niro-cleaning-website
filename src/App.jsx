import { useState } from "react";

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
import Loader from "./components/Loader";
import BookingPopup from "./components/BookingPopup";

function App() {

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>

      <Loader />

      <Navbar
        openPopup={() => setPopupOpen(true)}
      />

      <Hero />

      <Services />

      <About />

      <WhyChoose />

      <Contact />

      <Map />

      <Footer />

      <WhatsApp />

      <BackToTop />

      <BookingPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />

    </>
  );

}

export default App;