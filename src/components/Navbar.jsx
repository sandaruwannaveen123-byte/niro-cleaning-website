import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar({ openPopup }) {

  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    const handleScroll = () => {

      setSticky(window.scrollY > 80);

      const sections = ["home", "services", "about", "contact"];

      let currentSection = "home";

      sections.forEach((sectionId) => {

        const section = document.getElementById(sectionId);

        if(section){

          const sectionTop = section.offsetTop - 160;

          if(window.scrollY >= sectionTop){

            currentSection = sectionId;

          }

        }

      });

      setActiveSection(currentSection);

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);



  const closeMenu = () => {

    setOpen(false);

  };


  return (

    <nav className={sticky ? "navbar sticky" : "navbar"}>

      <div className="logo">

        <a href="#home" onClick={closeMenu}>

          Niro<span>Clean</span>

        </a>

      </div>


      <ul className={open ? "nav-links active" : "nav-links"}>

        <li>

          <a
            href="#home"
            className={activeSection==="home" ? "active-link" : ""}
            onClick={closeMenu}
          >

            Home

          </a>

        </li>


        <li>

          <a
            href="#services"
            className={activeSection==="services" ? "active-link" : ""}
            onClick={closeMenu}
          >

            Services

          </a>

        </li>


        <li>

          <a
            href="#about"
            className={activeSection==="about" ? "active-link" : ""}
            onClick={closeMenu}
          >

            About

          </a>

        </li>


        <li>

          <a
            href="#contact"
            className={activeSection==="contact" ? "active-link" : ""}
            onClick={closeMenu}
          >

            Contact

          </a>

        </li>

      </ul>



      <button
        className="nav-btn"
        onClick={()=>{
          openPopup();
          closeMenu();
        }}
      >

        Get Quote

      </button>



      <button
        className="hamburger"
        onClick={()=>setOpen(!open)}
        aria-label="Menu"
      >

        {open ? "✕" : "☰"}

      </button>

    </nav>

  );

}

export default Navbar;