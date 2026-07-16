import { useState } from "react";
import "./BookingPopup.css";

function BookingPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "House Cleaning",
    date: "",
    message: "",
  });

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

Message:
${formData.message || "No additional message"}
    `;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        bookingMessage
      )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "House Cleaning",
      date: "",
      message: "",
    });

    onClose();
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
          >
            <option>House Cleaning</option>
            <option>Office Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move In / Out Cleaning</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

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
      </div>
    </div>
  );
}

export default BookingPopup;