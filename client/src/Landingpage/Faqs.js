import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What courses do you offer?", answer: "We offer a variety of courses in web development, data science, AI, and more." },
    { question: "Are the courses beginner-friendly?", answer: "Yes! Our courses range from beginner to advanced levels to suit all learners." },
    { question: "Do I get a certificate after completing a course?", answer: "Yes, upon successful completion, you will receive a certification for the course." },
    { question: "What is the duration of each course?", answer: "Course durations vary from 4 weeks to 6 months, depending on the course complexity." },
    { question: "Are there any discounts for students?", answer: "Yes! We offer special discounts for students and early registrations." },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="card mb-2">
            <div 
              className="card-header d-flex justify-content-between align-items-center" 
              style={{ cursor: "pointer", background: "#f8d7da" }}
              onClick={() => toggleFaq(index)}
            >
              <h5 className="mb-0">{faq.question}</h5>
              <i className={`bi ${openIndex === index ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
            </div>
            {openIndex === index && (
              <div className="card-body">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;