import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

function FAQ() {

  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes, our team brings all professional cleaning equipment and eco-friendly cleaning products. If you prefer a specific product, we can use it upon request.",
    },
    {
      question: "How much does the cleaning service cost?",
      answer:
        "Our standard rate starts from AED 50 per cleaner per hour. The final price depends on the number of cleaners and hours selected during booking.",
    },
    {
      question: "Can I book cleaning services on weekends?",
      answer:
        "Yes. We provide cleaning services 7 days a week, including weekends and public holidays, depending on availability.",
    },
    {
      question: "Can I cancel or change my booking?",
      answer:
        "Yes. Simply contact us through WhatsApp before your scheduled appointment and we will help you reschedule or cancel your booking.",
    },
    {
      question: "Which areas do you provide services in?",
      answer:
        "We provide professional cleaning services across Dubai including Dubai Land, Al Barsha, Business Bay, Marina, Downtown, JVC and surrounding areas.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="faq"
      id="faq"
    >

      <div className="faq-title">

        <span>FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Everything you need to know about our cleaning services.
        </p>

      </div>

      <div className="faq-container">

        {faqData.map((item, index) => (

          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
          >

            <button
              type="button"
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{item.question}</span>

              <div className="faq-icon">

                {activeIndex === index
                  ? <FaMinus />
                  : <FaPlus />
                }

              </div>

            </button>

            <div className="faq-answer">

              <p>{item.answer}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );

}

export default FAQ;