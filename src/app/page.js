"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const HeroSection = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    const observerOptions = {
      threshold: 0.1, // 10% of the element is visible
    };

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    fadeInElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeInElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="container">
      {/* Hero Banner Section */}
      <section className="hero-banner mt-4">
        <video src={"/videos/emission.mp4"} autoPlay muted loop />
        {/* <div className="overlay"></div> */}
        <div className="content text-center">
          <h1 style={{ fontSize: "5rem", color: "white" }}>
            Vehicle Emissions Testing
          </h1>
          <p>Your reliable partner in ensuring a cleaner environment</p>
          <Link
            href="/components/scheduleTest"
            className="btn btn-lg btn-primary cta-btn"
          >
            Schedule a Test
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        id="introduction"
        className="intro-section d-flex align-items-center"
      >
        <div className="container">
          <div className="section-header text-center">
            <p>Introduction</p>
            <h2>Premium Vehicle Emissions Testing</h2>
          </div>
          <div className="row">
            <div className="col-md-6 mt-4 text-left pe-4">
              <h1 className="display-4 fade-in">
                Driving Toward a Cleaner Future
              </h1>
              <p className="lead fade-in">
                At EmissionCheck, we provide cutting-edge vehicle emissions
                testing to ensure your vehicle meets environmental standards,
                protecting the air we breathe and the planet we share.
              </p>
              <Link href="#learn-more">
                <button className="btn btn-primary btn-lg fade-in">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-md-6 mt-4 fade-in">
              <div className="img-container">
                <Image
                  src="/assets/pollution test.webp"
                  alt="Car Emissions Testing"
                  layout="responsive"
                  className="img-fluid"
                  width={400}
                  height={200}
                  style={{ borderRadius: 20 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <div className="container mt-5">
        <div className="services-header text-center">
          <h2>Our Vehicle Emission Services</h2>
          <p>
            We offer a range of services designed to help you reduce your
            vehicle's emissions and ensure compliance with environmental
            regulations.
          </p>
        </div>

        <div className="row text-center g-4 mt-5">
          <div className="col-md-4">
            <div className="service-card p-4 rounded shadow-lg h-100 fade-in">
              <div className="icon mb-3 fs-1">🔍</div>
              <h3>Emission Testing</h3>
              <p className="text-muted">
                Our comprehensive emission testing evaluates your vehicle's
                emissions against regulatory standards.
              </p>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card p-4 rounded shadow-lg h-100 fade-in">
              <div className="icon mb-3 fs-1">🛠️</div>
              <h3>Repair Services</h3>
              <p className="text-muted">
                We specialize in repairing and tuning vehicles to meet emission
                standards.
              </p>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card p-4 rounded shadow-lg h-100 fade-in">
              <div className="icon mb-3 fs-1">💬</div>
              <h3>Consultation</h3>
              <p className="text-muted">
                Our consultation services help vehicle owners understand how to
                reduce emissions effectively.
              </p>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card p-4 rounded shadow-lg h-100 fade-in">
              <div className="icon mb-3 fs-1">📊</div>
              <h3>Diagnostic Services</h3>
              <p className="text-muted">
                We analyze your vehicle's emission system to identify any
                inefficiencies.
              </p>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card p-4 rounded shadow-lg h-100 fade-in">
              <div className="icon mb-3 fs-1">🌍</div>
              <h3>Eco-Friendly Upgrades</h3>
              <p className="text-muted">
                We offer eco-friendly upgrades to reduce your vehicle's carbon
                footprint.
              </p>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card p-4 rounded shadow-lg h-100 fade-in">
              <div className="icon mb-3 fs-1">📞</div>
              <h3>Customer Support</h3>
              <p className="text-muted">
                Our support team is here to answer your questions regarding
                emissions regulations and services.
              </p>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-5">
          <h2>Ready to Improve Your Vehicle's Emissions?</h2>
          <p>
            Contact us today to schedule an appointment or learn more about our
            services!
          </p>
          <button className="btn cta-button">Contact Us</button>
        </div>
      </div>

      <section className="testimonials bg-light py-5 mt-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Emission Testing?</h2>
          <div className="row">
            <div className="col-md-4 text-center" data-aos="fade-up">
              <blockquote className="blockquote">
                <p className="mb-4">
                  "Fast and efficient service! I was in and out in no time, and
                  my car passed without any issues."
                </p>
              </blockquote>
            </div>
            <div
              className="col-md-4 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <blockquote className="blockquote">
                <p className="mb-4">
                  "Very professional team. They explained the whole process and
                  ensured my car met the emission standards."
                </p>
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
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/*Customers Review */}
      <section className="container testimonials-section text-center py-5">
        <div className="section-header text-center">
          <p>Customers Review</p>
          <h2>What Our Customers Say</h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-1.jpg"}
                alt="Customer 1"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-content">
                "Amazing service! My car's emissions were quickly tested, and
                the team was professional."
              </div>
              <div className="customer-name">John Doe</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-2.jpg"}
                alt="Customer 2"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★☆</div>
              <div className="testimonial-content">
                "Great experience. The team explained the emission test process
                in detail."
              </div>
              <div className="customer-name">Jane Smith</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-3.jpg"}
                alt="Customer 3"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-content">
                "Quick and efficient! Highly recommend their emission testing
                services."
              </div>
              <div className="customer-name">David Brown</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-4.jpg"}
                alt="Customer 4"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-content">
                "Very friendly staff and professional service. Will definitely
                come back!"
              </div>
              <div className="customer-name">Sarah Lee</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-5.jpg"}
                alt="Customer 5"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★☆</div>
              <div className="testimonial-content">
                "The emission test was done quickly, and the results were
                explained well."
              </div>
              <div className="customer-name">Michael Johnson</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-6.jpg"}
                alt="Customer 6"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-content">
                "Excellent service! I'll definitely recommend them to friends
                and family."
              </div>
              <div className="customer-name">Emily Davis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications
      <section className="py-5" id="certifications">
        <div className="container text-center">
          <h2 className="mb-4">Accreditations & Certifications</h2>
          <p className="mb-5 text-muted">
            We are recognized for our excellence in emission services.
          </p>

          <div className="row row-cols-1 row-cols-md-3 g-4"> */}
      {/* Card 1 */}
      {/* <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="icon mb-3">
                    <i className="bi bi-award fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">Certified Emission Specialist</h5>
                  <p className="card-text text-muted">
                    Awarded for outstanding performance in vehicle emission
                    inspection and maintenance.
                  </p>
                </div>
                <div className="card-footer text-muted">
                  <small>Certified Since: 2021</small>
                </div>
              </div>
            </div> */}

      {/* Card 2
            <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="icon mb-3">
                    <i className="bi bi-patch-check fs-1 text-success"></i>
                  </div>
                  <h5 className="card-title">ISO 9001:2015</h5>
                  <p className="card-text text-muted">
                    International standards of quality management, ensuring
                    reliable emission services.
                  </p>
                </div>
                <div className="card-footer text-muted">
                  <small>Accredited Since: 2019</small>
                </div>
              </div>
            </div> */}

      {/* Card 3 */}
      {/* <div className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="icon mb-3">
                    <i className="bi bi-shield-lock fs-1 text-warning"></i>
                  </div>
                  <h5 className="card-title">Environmental Compliance</h5>
                  <p className="card-text text-muted">
                    Adhering to the latest environmental regulations and
                    standards for emissions.
                  </p>
                </div>
                <div className="card-footer text-muted">
                  <small>Certified Since: 2020</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="contact-section">
        <div className="container">
          <div className="section-header text-center">
            <p>Contact us</p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-form">
                <h3 className="form-heading">Get in Touch</h3>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-submit">
                    Send Message
                  </button>
                </form>

                <div className="social-icons mt-4 text-center">
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 contact-image">
              <Image
                src={"/assets/emis4.jpg"}
                alt="Contact Us Image"
                width={540}
                height={490}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;