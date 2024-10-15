"use client";
import Image from "next/image";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    typeof document !== "undefined"
      ? require("bootstrap/dist/js/bootstrap.bundle.min.js")
      : null;
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="container">
        <section
          className="hero-section mt-4 text-center text-white"
          style={{
            backgroundImage: "url(/assets/emis2.jpeg)",
            backgroundSize: "cover",
            height: "70vh",
            backgroundPosition: "center",
            padding: "100px 0",
          }}
        >
          <h1 className="display-4">Professional Vehicle Emission Testing</h1>
          <p className="lead">
            Ensure your vehicle meets all emissions standards quickly and
            efficiently.
          </p>
          <a href="/schedule" className="btn btn-primary btn-lg mt-4">
            Schedule Your Test
          </a>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works py-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4" data-aos="fade-up">
                <Image
                  src="/assets/care.jpeg"
                  alt="Step 1"
                  width={300}
                  height={150}
                  className="img-fluid mb-4"
                />
                <h3>Step 1: Initial Inspection</h3>
                <p>
                  We begin with a comprehensive visual inspection of your
                  vehicle's exhaust system to ensure compliance with emission
                  regulations.
                </p>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <Image
                  src="/assets/care.jpeg"
                  alt="Step 2"
                  width={300}
                  height={150}
                  className="img-fluid mb-4"
                />
                <h3>Step 2: Emission Test</h3>
                <p>
                  Using advanced testing equipment, we measure the emission
                  levels of your vehicle to confirm they meet the required
                  standards.
                </p>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <Image
                  src="/assets/care.jpeg"
                  alt="Step 3"
                  width={300}
                  height={150}
                  className="img-fluid mb-4"
                />
                <h3>Step 3: Certification</h3>
                <p>
                  Upon passing the test, you receive an official emission
                  certification, ensuring your vehicle is road-legal and
                  eco-friendly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials bg-light py-5">
          <div className="container">
            <h2 className="text-center mb-5">What Our Clients Say</h2>
            <div className="row">
              <div className="col-md-4 text-center" data-aos="fade-up">
                <blockquote className="blockquote">
                  <p className="mb-4">
                    "Fast and efficient service! I was in and out in no time,
                    and my car passed without any issues."
                  </p>
                  <footer className="blockquote-footer">
                    John Doe, Honda Civic Owner
                  </footer>
                </blockquote>
              </div>
              <div
                className="col-md-4 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <blockquote className="blockquote">
                  <p className="mb-4">
                    "Very professional team. They explained the whole process
                    and ensured my car met the emission standards."
                  </p>
                  <footer className="blockquote-footer">
                    Jane Smith, Toyota Prius Owner
                  </footer>
                </blockquote>
              </div>
              <div
                className="col-md-4 text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <blockquote className="blockquote">
                  <p className="mb-4">
                    "Highly recommended! The team was thorough, and now I feel
                    confident my car is eco-friendly."
                  </p>
                  <footer className="blockquote-footer">
                    Mark Wilson, Ford Focus Owner
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section
          className="cta py-5 text-white text-center"
          style={{
            backgroundImage: "url(/assets/nature.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="display-5">Get Your Emission Test Today</h2>
          <p className="lead">
            Schedule your vehicle emission test now to ensure your car meets all
            necessary standards.
          </p>
          <a href="/schedule" className="btn btn-primary btn-lg">
            Book an Appointment
          </a>
        </section>
      </div>
      <style jsx>{`
        .hero-section {
          background: url("/assets/care.jpeg") no-repeat center center;
          background-size: cover;
          height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }
        .how-it-works img {
          transition: transform 0.3s ease;
        }
        .how-it-works img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};
export default Service;
