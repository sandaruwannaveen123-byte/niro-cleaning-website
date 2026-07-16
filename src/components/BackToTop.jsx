import { useState } from "react";
import "./BookingPopup.css";

function BookingPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "House Cleaning",
    date: "",
    time: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "971561810760";

    const bookingMessage = `
New Cleaning Booking

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}

Message:
${formData.message || "No additional message"}
    `;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        bookingMessage
      )}`;

    setSuccess(true);

    setTimeout(() => {
      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "House Cleaning",
        date: "",
        time: "",
        message: "",
      });

      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div
      className="popup-overlay"
      onClick={onClose}
    >
      <div
        className="popup"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="close-btn"
          onClick={onClose}
          aria-label="Close booking form"
        >
          ×
        </button>

        <h2>Book Cleaning</h2>

        {success ? (
          <div className="booking-success">
            <div className="success-icon">✓</div>

            <h3>Booking Ready!</h3>

            <p>Redirecting you to WhatsApp...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
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

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="House Cleaning">
                House Cleaning
              </option>

              <option value="Office Cleaning">
                Office Cleaning
              </option>

              <option value="Deep Cleaning">
                Deep Cleaning
              </option>

              <option value="Move In / Out Cleaning">
                Move In / Out Cleaning
              </option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Time
              </option>

              <option value="08:00 AM">08:00 AM</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Additional Message"
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="book-btn"
            >
              Book via WhatsApp
            </button>

          </form>
        )}
      </div>
    </div>
  );
}

export default BookingPopup;