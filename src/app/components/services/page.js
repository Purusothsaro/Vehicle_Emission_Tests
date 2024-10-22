"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Services.module.css";

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
          className={`${styles["hero-section"]} mt-4 text-center text-white`}
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
          <Link
            href="/components/scheduleTest"
            className="btn btn-lg btn-primary cta-btn"
          >
            Schedule a Test
          </Link>
        </section>

        {/* How It Works Section */}
        <section className={`${["how-it-works"]} py-5`}>
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

        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className={`${styles["service-card"]} h-100`}>
              <div className={`${styles["service-content"]} text-center`}>
                Petrol Vehicle Emission Testing
              </div>
              <div className={`${styles["service-body"]} text-center`}>
                Standard testing for petrol engines, measuring key pollutants
                such as carbon monoxide (CO), hydrocarbons (HC), and nitrogen
                oxides (NOx) to ensure compliance with emission norms.
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={`${styles["service-card"]} h-100`}>
              <div className={`${styles["service-content"]}`}>
                Diesel Vehicle Emission Testing
              </div>
              <div className={`${styles["service-body"]}`}>
                Emission testing for diesel engines, focusing on pollutants like
                particulate matter (PM), smoke density, and nitrogen oxides
                (NOx), essential for regulatory compliance.
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={`${styles["service-card"]} h-100`}>
              <div className={`${styles["service-content"]}`}>
                Two-Wheeler Emission Testing
              </div>
              <div className={`${styles["service-body"]}`}>
                Specialized testing for motorcycles and scooters, ensuring that
                these smaller vehicles adhere to the appropriate emission
                standards for petrol engines.
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={`${styles["service-card"]} h-100`}>
              <div className={`${styles["service-content"]}`}>
                Commercial Vehicle Emission Testing
              </div>
              <div className={`${styles["service-body"]}`}>
                Comprehensive testing for commercial vehicles, including trucks,
                buses, and vans, to meet specific emission standards for
                heavy-duty transport.
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={`${styles["service-card"]} h-100`}>
              <div className={`${styles["service-content"]}`}>
                Fleet Emission Testing:
              </div>
              <div className={`${styles["service-body"]}`}>
                Tailored emission testing for fleets of vehicles, offering bulk
                testing services with scheduling flexibility to ensure all
                vehicles in a fleet meet compliance requirements.
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={`${styles["service-card"]} h-100`}>
              <div className={`${styles["service-content"]}`}>
                Hybrid Vehicle Emission Testing
              </div>
              <div className={`${styles["service-body"]}`}>
                Testing services for hybrid vehicles, measuring emissions from
                both internal combustion engines and assessing overall
                environmental performance.
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={`${styles["service-card"]} h-100`}>
              <div className={`${styles["service-content"]}`}>
                Electric Vehicle Compliance Check
              </div>
              <div className={`${styles["service-body"]}`}>
                Though electric vehicles produce no tailpipe emissions, we offer
                checks to ensure overall vehicle compliance with any applicable
                environmental regulations.
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={`${styles["service-card"]} h-100`}>
              <div className={`${styles["service-content"]}`}>
                Re-Testing for Failed Vehicles:
              </div>
              <div className={`${styles["service-body"]}`}>
                <p>
                  Follow-up testing for vehicles that fail to meet initial
                  emission standards, including guidance on corrective measures
                  and compliance assurance.
                </p>
                <p>
                  These services cover a wide range of vehicle types, ensuring
                  compliance with emission norms across the spectrum of
                  transportation modes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <section
          className="cta py-5 mt-5 mb-5 text-white text-center"
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
          <Link
            href="/components/scheduleTest"
            className="btn btn-lg btn-primary cta-btn"
          >
            Book an Appointment
          </Link>
        </section>
      </div>
    </div>
  );
};
export default Service;
