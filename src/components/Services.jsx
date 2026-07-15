import "./Services.css";
import { FaHome, FaBuilding, FaBroom, FaTruck } from "react-icons/fa";

function Services() {

  const services = [

    {
      icon: <FaHome />,
      title: "House Cleaning",
      text: "Professional cleaning service for your home and apartment."
    },

    {
      icon: <FaBuilding />,
      title: "Office Cleaning",
      text: "Keep your workplace clean, fresh and productive."
    },

    {
      icon: <FaBroom />,
      title: "Deep Cleaning",
      text: "Complete deep cleaning for every corner of your space."
    },

    {
      icon: <FaTruck />,
      title: "Move In / Out Cleaning",
      text: "Cleaning solutions when moving to a new place."
    }

  ];

  return (

    <section
      className="services"
      id="services"
      data-aos="fade-up"
    >

      <div className="services-title">

        <span>
          Our Services
        </span>

        <h2>
          Professional Cleaning Solutions
        </h2>

        <p>
          We provide high quality cleaning services for homes,
          offices and businesses.
        </p>

      </div>

      <div className="service-container">

        {services.map((service, index) => (

          <div
            className="service-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.text}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Services;