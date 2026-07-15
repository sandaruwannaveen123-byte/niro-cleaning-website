import "./Hero.css";

function Hero(){

  return (
   <section
  className="hero"
  data-aos="fade-up"
>

      <div className="hero-content">

        <span className="badge">
          Premium Cleaning Service
        </span>

        <h1>
          Niro Cleaning Services
          <br />
          For Your Perfect Space
        </h1>

        <p>
          Professional cleaning solutions for homes, offices and businesses.
        </p>

        <div className="hero-buttons">

          <button>
            Book Now
          </button>

          <button className="second">
            Our Services
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;