"use client";
import React from "react";

const BlogsAndArticles = () => {
  return (
    <div className="container py-5">
      <div className="card ">
        <div className="card-body">
          <h1 className=" card-title ">My Blogs</h1>
          <p className="card-text">Here you view recent post!</p>
        </div>
      </div>
      {/* Bottom Section (Three Columns) */}
      <div className="row text-center py-5">
        {/* First Column */}
        <div className="col-md-4">
          <h3>Aenean Elementum Facilisis</h3>
          <div className="image-container">
            <img
              src="/blogAssets/bt1.webp"
              alt="Image 1"
              className="img-fluid rounded"
            />
          </div>
          <p className="mt-3">
            Nullam non wisi a sem semper eleifend. Donec mattis libero eget
            urna.
          </p>
          <button className="btn btn-orange">More Details</button>
        </div>

        {/* Second Column */}
        <div className="col-md-4">
          <h3>Fusce Ultrices Fringilla</h3>
          <div className="image-container">
            <img
              src="/blogAssets/bt2.webp"
              alt="Image 2"
              className="img-fluid rounded"
            />
          </div>
          <p className="mt-3">
            Nullam non wisi a sem semper eleifend. Donec mattis libero eget
            urna.
          </p>
          <button className="btn btn-orange">More Details</button>
        </div>

        {/* Third Column */}
        <div className="col-md-4">
          <h3>Etiam Rhoncus Volutpat Erat</h3>
          <div className="image-container">
            <img
              src="/blogAssets/bt3.webp"
              alt="Image 3"
              className="img-fluid rounded"
            />
          </div>
          <p className="mt-3">
            Nullam non wisi a sem semper eleifend. Donec mattis libero eget
            urna.
          </p>
          <button className="btn btn-orange">More Details</button>
        </div>

        <div className="row text-center py-5">
          {/* First Column */}
          <div className="col-md-4">
            <h3>Aenean Elementum Facilisis</h3>
            <div className="image-container">
              <img
                src="/blogAssets/bt1.webp"
                alt="Image 1"
                className="img-fluid rounded"
              />
            </div>
            <p className="mt-3">
              Nullam non wisi a sem semper eleifend. Donec mattis libero eget
              urna.
            </p>
            <button className="btn btn-orange">More Details</button>
          </div>

          {/* Second Column */}
          <div className="col-md-4">
            <h3>Fusce Ultrices Fringilla</h3>
            <div className="image-container">
              <img
                src="/blogAssets/bt2.webp"
                alt="Image 2"
                className="img-fluid rounded"
              />
            </div>
            <p className="mt-3">
              Nullam non wisi a sem semper eleifend. Donec mattis libero eget
              urna.
            </p>
            <button className="btn btn-orange">More Details</button>
          </div>

          {/* Third Column */}
          <div className="col-md-4">
            <h3>Etiam Rhoncus Volutpat Erat</h3>
            <div className="image-container">
              <img
                src="/blogAssets/bt3.webp"
                alt="Image 3"
                className="img-fluid rounded"
              />
            </div>
            <p className="mt-3">
              Nullam non wisi a sem semper eleifend. Donec mattis libero eget
              urna.
            </p>
            <button className="btn btn-orange">More Details</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* styles/styles.css */

        /* General Styling */
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }

        h2.section-title,
        h3.section-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        p.subtitle {
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 20px;
        }

        img.img-fluid {
          border-radius: 5px;
        }

        .media img {
          border-radius: 5px;
        }

        /* Bottom Section (Three Columns) */
        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        p {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }

        .image-container img {
          width: 100%;
          height: auto;
          border-radius: 5px;
        }

        .btn-orange {
          background-color: #ff5722;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
        }

        .btn-orange:hover {
          background-color: #e64a19;
        }
      `}</style>
    </div>
  );
};

export default BlogsAndArticles;
