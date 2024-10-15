"use client";

import Image from "next/image";
import { useState } from "react";

const LegalAndCompliance = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel Handlers
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="legal-compliance-carousel">
      {/* Legal and Compliance Section */}
      <section className="container py-4">
        <h2 className="section-heading text-center mb-4">
          Legal and Compliance
        </h2>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-3 text-center">
              <h5 className="mb-2">Privacy Policy</h5>
              <p className="text-muted">
                Details on how customer data is handled.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-3 text-center">
              <h5 className="mb-2">Terms of Service</h5>
              <p className="text-muted">
                Information on the terms and conditions of using the website and
                services.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-3 text-center">
              <h5 className="mb-2">Environmental Policy</h5>
              <p className="text-muted">
                Statement of the company's commitment to environmental
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="container my-5">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}
            >
              <Image
                src="/assets/legal2.jpg"
                alt="First Slide"
                layout="responsive"
                width={400}
                height={200}
                className="d-block w-75 rounded shadow-sm"
              />
            </div>
            <div
              className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}
            >
              <Image
                src="/assets/legal1.jpeg"
                alt="Second Slide"
                layout="responsive"
                width={400}
                height={200}
                className="d-block w-75 rounded shadow-sm"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
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
            onClick={handleNext}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <style jsx>{`
        .section-heading {
          font-size: 1.75rem;
          font-weight: 600;
        }
        .card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
        }
        .carousel-item img {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default LegalAndCompliance;
