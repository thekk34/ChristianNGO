import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track open question

  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer a variety of courses in web development, data science, AI, and more.",
    },
    {
      question: "Are the courses beginner-friendly?",
      answer: "Yes! Our courses range from beginner to advanced levels to suit all learners.",
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer: "Yes, upon successful completion, you will receive a certification for the course.",
    },
    {
      question: "What is the duration of each course?",
      answer: "Course durations vary from 4 weeks to 6 months, depending on the course complexity.",
    },
    {
      question: "Are there any discounts for students?",
      answer: "Yes! We offer special discounts for students and early registrations.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Frequently Asked Questions</h2>
      
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="card mb-2 border-0 shadow">
            <div 
              className={`card-header d-flex justify-content-between align-items-center bg-light p-3`} 
              style={{ cursor: "pointer" }}
              onClick={() => toggleFaq(index)}
            >
              <h5 className="mb-0">{faq.question}</h5>
              <span className="fw-bold">{openIndex === index ? "⬆" : "⬇"}</span>
            </div>
            {openIndex === index && (
              <div className="card-body bg-white p-3">
                <p className="m-0">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;