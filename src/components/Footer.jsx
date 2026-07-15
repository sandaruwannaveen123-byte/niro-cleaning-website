import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box" data-aos="fade-up">
          <h2>Niro<span>Clean</span></h2>

          <p>
            Professional cleaning solutions for homes,
            offices and commercial spaces.
          </p>
        </div>




        <div className="footer-box" data-aos="fade-up" data-aos-delay="200">
          <h3>Contact</h3>

          <p>📍 Dubai, UAE</p>
          <p>📞 +971 56 181 0760</p>
          <p>✉ niroshanimhabalage@gmail.com</p>
        </div>


        <div className="footer-box" data-aos="fade-up" data-aos-delay="300">
          <h3>Follow Us</h3>

          <div className="socials">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        © 2026 NiroClean. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;