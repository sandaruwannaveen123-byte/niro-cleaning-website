import "./Map.css";

function Map() {

  return (

    <section
      className="map-section"
      id="location"
      data-aos="fade-up"
    >

      <div className="map-title">

        <span>Our Location</span>

        <h2>Visit Our Office</h2>

        <p>
          Find us easily using Google Maps.
        </p>

      </div>

      <div className="map-container">

      <iframe
  title="NiroClean Location"
  src="https://www.google.com/maps?q=Al+Sondos+Rosa+Dubai+Land+Residence+Complex+Dubai&output=embed"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>

    </section>

  );

}

export default Map;