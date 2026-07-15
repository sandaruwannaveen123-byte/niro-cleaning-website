import "./WhyChoose.css";
import { FaUsers, FaShieldAlt, FaStar, FaClock } from "react-icons/fa";


function WhyChoose(){

  const features = [

    {
      icon:<FaUsers />,
      title:"Expert Team",
      text:"Our professional cleaners deliver reliable and high quality service."
    },

    {
      icon:<FaShieldAlt />,
      title:"Trusted Service",
      text:"Safe, secure and trusted cleaning solutions for every customer."
    },

    {
      icon:<FaStar />,
      title:"Quality Cleaning",
      text:"We focus on detailed cleaning with excellent results."
    },

    {
      icon:<FaClock />,
      title:"24/7 Support",
      text:"Flexible cleaning services available whenever you need."
    }

  ];


  return(

    <section 
      className="why"
      data-aos="fade-up"
    >

      <div className="why-title">

        <span>
          Why Choose Us
        </span>

        <h2>
          The Best Cleaning Service For You
        </h2>

        <p>
          We provide professional and trusted cleaning solutions.
        </p>

      </div>


      <div className="why-container">


      {
        features.map((item,index)=>(

          <div
            className="why-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

          </div>

        ))
      }


      </div>


    </section>

  );

}


export default WhyChoose;