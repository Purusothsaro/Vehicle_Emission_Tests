"use client";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./components/TopBar/page";
import Script from "next/script";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Vehicle Emissions Testing</title>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="d-flex flex-column min-vh-100">
        {/* <TopBar /> */}
        <nav className="navbar navbar-expand-lg navbar-light sticky-navbar">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <div className="vid">
                <Image
                  src={"/assets/logo.png"}
                  alt="logo"
                  width={160}
                  height={80}
                />
              </div>
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link href="/components/about" className="nav-link ">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/components/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/components/faqs" className="nav-link">
                    FAQs
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/components/dashboard" className="nav-link">
                    My Profile
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/components/login" className="btn btn-cta ">
                    Login / Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="flex-grow-1">{children}</main>
        <footer className="footer text-center">
          <div className="container">
            <p>
              &copy; 2024 NTS Emission Testing Services Pvt Ltd.., All rights
              reserved.
            </p>
            <Link href="/components/contactUs">Contact Us</Link> |
            <Link href="/components/LegalAndCompliance">
              Legal and Compliance
            </Link>{" "}
            |<Link href="/components/BlogsAndArticles">Blogs and Articles</Link>{" "}
            |<Link href="/components/feedback">Feedback</Link>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
