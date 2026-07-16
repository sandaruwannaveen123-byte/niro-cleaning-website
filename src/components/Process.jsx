import "./Process.css";
import {
  FaCalendarCheck,
  FaTruck,
  FaBroom,
  FaSmile,
} from "react-icons/fa";

function Process() {

  const steps = [
    {
      icon: <FaCalendarCheck />,
      title: "Book Online",
      text: "Choose your cleaning service and schedule your preferred date and time.",
    },
    {
      icon: <FaTruck />,
      title: "We Arrive",
      text: "Our professional cleaning team arrives on time with all equipment.",
    },
    {
      icon: <FaBroom />,
      title: "Deep Cleaning",
      text: "We clean every corner using premium products and professional techniques.",
    },
    {
      icon: <FaSmile />,
      title: "Enjoy Clean Space",
      text: "Relax and enjoy a fresh, spotless and healthy environment.",
    },
  ];

  return (
    <section
      className="process"
      id="process"
      data-aos="fade-up"
    >

      <div className="process-title">

        <span>Our Process</span>

        <h2>How It Works</h2>

        <p>
          Booking a cleaning service has never been easier.
        </p>

      </div>

      <div className="process-grid">

        {steps.map((step, index) => (

          <div
            className="process-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >

            <div className="process-number">
              0{index + 1}
            </div>

            <div className="process-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Process;