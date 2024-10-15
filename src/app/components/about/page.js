"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <div className="container">
        <div
          id="heroCarousel"
          className="carousel mt-4 slide hero-banner"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                backgroundImage: 'url("/assets/emis1.jpeg")',
                height: "70vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-3">Welcome to Our Company</h1>
                <p>Your trusted partner in vehicle emissions testing.</p>
                <a href="#aboutUs" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: 'url("/assets/emis2.jpeg")',
                height: "70vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-3">Innovation & Technology</h1>
                <p>Delivering cutting-edge solutions for a cleaner future.</p>
                <a href="#aboutUs" className="btn btn-primary">
                  Discover More
                </a>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: 'url("/assets/emis4.jpg")',
                height: "70vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-3">Certified Professionals</h1>
                <p>Expert technicians to handle all your emission needs.</p>
                <a href="#aboutUs" className="btn btn-primary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* About Us Section */}
        <section id="aboutUs" className="about-us-section container">
          <div className="row">
            <div className="col-lg-6 about-us-text">
              <div>
                <h2>About Us</h2>
                <p>
                  At [Company Name], we specialize in providing top-notch
                  vehicle emission testing services. Our mission is to ensure
                  that every vehicle meets the necessary emission standards,
                  contributing to a cleaner environment. With a team of
                  certified professionals, state-of-the-art technology, and a
                  commitment to excellence, we have established ourselves as a
                  trusted name in the industry.
                </p>
                <p>
                  Our services include comprehensive emission testing, detailed
                  diagnostics, and repairs to help your vehicle run smoothly
                  while minimizing its environmental impact. We believe in
                  innovation, customer satisfaction, and sustainability as our
                  core values.
                </p>
              </div>
            </div>
            <div className="col-lg-6 about-image">
              <Image
                src="/assets/legal2.jpg"
                alt="About Us"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
