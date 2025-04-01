import React, { useState } from 'react';
import { FaFilePdf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const CourseDetails = ({ goBack }) => {
    const course = {
        name: "Full Stack Web Development",
        tagline: "Master Frontend and Backend Development",
        description: "Learn how to build full-stack applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
        image: "https://png.pngtree.com/png-vector/20190613/ourmid/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496223.jpg",
        moduleImage: "https://png.pngitem.com/pimgs/s/127-1272138_best-web-app-development-company-in-uk-india.png",
        modules: [
            { "title": "Module 1: HTML & CSS", "description": "Learn the fundamentals of HTML & CSS.", "pdf": "#" },
            { "title": "Module 2: Bootstrap", "description": "Explore Bootstrap for responsive design.", "pdf": "#" },
            { "title": "Module 3: JavaScript", "description": "Understand JavaScript for dynamic content.", "pdf": "#" },
            { "title": "Module 4: React.js", "description": "Develop dynamic UI using React.js.", "pdf": "#" },
            { "title": "Module 5: Node.js & Express", "description": "Build backend applications using Node.js.", "pdf": "#" },
            { "title": "Module 6: MongoDB", "description": "Work with NoSQL databases and CRUD operations.", "pdf": "#" },
            { "title": "Module 7: REST APIs", "description": "Learn how to design and develop RESTful APIs.", "pdf": "#" },
            { "title": "Module 8: Authentication", "description": "Implement secure authentication using JWT & OAuth.", "pdf": "#" },
            { "title": "Module 9: Deployment", "description": "Deploy applications on cloud platforms.", "pdf": "#" }
        ],
        feedback: [
            {
                "id": 1,
                "name": "John Doe",
                "feedback": "This course was very informative and well-structured. The instructor explained concepts clearly.",
                "rating": 5
            },
            {
                "id": 2,
                "name": "Jane Smith",
                "feedback": "I learned a lot from this course. The hands-on projects were very helpful.",
                "rating": 4
            },
            {
                "id": 3,
                "name": "Michael Johnson",
                "feedback": "Good content but could use more real-world examples. Overall, a great learning experience!",
                "rating": 4
            }
        ]
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const navigate = useNavigate();

    const handleViewCourse = (course) => {
      navigate(`/courses/detailed` );
    };

    return (
        <div className="container py-5">
            <button className="btn btn-secondary mb-3" onClick={() => handleViewCourse(course)}>
                ← Back to Courses
            </button>
            <div className="row align-items-center">
                <div className="col-lg-5 text-center">
                    <img
                        src={course.image}
                        alt="Course Illustration"
                        className="img-fluid w-100"
                    />
                </div>
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="text-primary fw-bold">{course.name}</h1>
                    <h3 className="fw-semibold text-dark">{course.tagline}</h3>
                    <p className="text-muted">{course.description}</p>
                    <button className="btn btn-primary mt-3">Download Brochure</button>
                </div>
            </div>

            <div className="container py-5">
                <h1 className="text-center text-primary fw-bold mb-4">Course Modules</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="accordion" id="courseAccordion">
                            {course.modules.map((module, index) => (
                                <div className="accordion-item border rounded shadow-sm mb-2" key={index}>
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button fw-bold ${activeIndex === index ? '' : 'collapsed'}`}
                                            type="button"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            {module.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${index}`}
                                        className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            <p>{module.description}</p>
                                            <a href={module.pdf} className="btn btn-danger btn-sm" target="_blank" rel="noopener noreferrer">
                                                <FaFilePdf className="me-1" /> Download PDF
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <img
                            src={course.moduleImage}
                            alt="Course Modules"
                            className="img-fluid rounded shadow-lg w-100"
                        />
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <h2 className="text-center mb-4">Student Feedback</h2>
                <div className="card-group">
                    {course.feedback.map((feedback) => (
                        <div key={feedback.id} className="card p-3 mx-2 shadow">
                            <div className="card-body">
                                <h5 className="card-title">{feedback.name}</h5>
                                <p className="card-text">{feedback.feedback}</p>
                                <div className="rating text-warning">
                                    {'★'.repeat(feedback.rating)}
                                    {'☆'.repeat(5 - feedback.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
