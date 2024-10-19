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
                <h1 className="display-3">Welcome to Emission Testers</h1>
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
            <div className="col-lg-6 about-us-text ">
              <div>
                <h2>About Us</h2>
                <p>
                  Emission Testers is a cutting-edge service provider
                  specializing in on-demand vehicle emission testing. We offer
                  convenient, reliable, and environmentally conscious emission
                  testing by bringing our services directly to your doorstep.
                </p>
                <p>
                  Our team of certified technicians uses state-of-the-art
                  equipment to ensure that your vehicle meets all regulatory
                  emission standards, helping you save time and reduce your
                  carbon footprint.
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

            <div className="col-lg-6 about-image mt-5">
              <Image
                src="/assets/legal2.jpg"
                alt="About Us"
                width={600}
                height={400}
              />
            </div>
            <div className="col-lg-6 about-us-text">
              <div>
                <p>
                  At Emission Testers, we understand the challenges of
                  maintaining compliance with ever-evolving environmental
                  regulations. Our mission is to make this process hassle-free
                  by offering flexible, on-site emission testing at a time that
                  suits you. Whether you are managing a large fleet of
                  commercial vehicles or simply ensuring your personal car meets
                  emission standards, our expert team ensures quick and accurate
                  results without disrupting your schedule.
                </p>
                <p>
                  By choosing Emission Testers, you're not only staying
                  compliant but also contributing to a cleaner, greener
                  environment. We are dedicated to promoting sustainability by
                  ensuring that all vehicles on the road meet the necessary
                  emission norms, helping to reduce air pollution and safeguard
                  public health. Jo
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
