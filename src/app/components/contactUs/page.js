"use client";
import Image from "next/image";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const contactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qly4d3m", "template_c1rcxvl", form.current, {
        publicKey: "DOk2RUu9GVd738lVI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header text-center">
          <p>Contact us</p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-form">
              <h3 className="form-heading">Get in Touch</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
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
  );
};

export default contactUs;
