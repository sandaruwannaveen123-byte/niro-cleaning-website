import "./About.css";

function About() {
  return (
    <section
      className="about"
      id="about"
      data-aos="fade-up"
    >
      <div className="about-title">
        <span>About Us</span>
      </div>

      <div className="about-content">
        <h2>Trusted Cleaning Experts</h2>

        <p>
          At Niro Cleaning Services, we provide professional cleaning
          solutions for homes, offices, and commercial spaces.
          Our experienced team delivers reliable, affordable,
          and high-quality cleaning services tailored to your needs.
        </p>

        <div className="about-boxes">

          <div
            className="box"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>

          <div
            className="box"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>

          <div
            className="box"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3>100%</h3>
            <p>Satisfaction</p>
          </div>

        </div>

        <button className="about-btn">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default About;