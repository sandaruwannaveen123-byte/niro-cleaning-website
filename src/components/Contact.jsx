import { useState } from "react";
import "./Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    const whatsappNumber = "971501234567";

    const whatsappMessage = `
Hello NiroClean,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank");

  };

  return (
    <section
      className="contact"
      id="contact"
      data-aos="fade-up"
    >

      <div className="contact-title">

        <span>Contact Us</span>

        <h2>Get In Touch</h2>

        <p>
          Contact us today for a free cleaning quotation.
        </p>

      </div>


      <div className="contact-wrapper">

        <div
          className="contact-info"
          data-aos="fade-right"
        >

          <div className="info-box">

            <FaPhone className="info-icon" />

            <div>
              <h3>Phone</h3>
              <p>+971 56 181 0760</p>
            </div>

          </div>


          <div className="info-box">

            <FaEnvelope className="info-icon" />

            <div>
              <h3>Email</h3>
              <p>niroshanimhabalage@gmail.com</p>
            </div>

          </div>


          <div className="info-box">

            <FaMapMarkerAlt className="info-icon" />

            <div>
              <h3>Location</h3>
              <p>Dubai, UAE</p>
            </div>

          </div>

        </div>


        <form
          className="contact-form"
          data-aos="fade-left"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send via WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;