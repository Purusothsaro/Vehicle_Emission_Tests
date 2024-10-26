"use client";

import { useState } from "react";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import styles from "./ScheduleTest.module.css";

const ScheduleTest = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    vehicleNumber: "",
    stateCity: "",
    message: "",
  });
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isNewUser, setIsNewUser] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.email ||
      !formData.vehicleNumber ||
      !formData.stateCity
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      // Check if user exists
      const userQuery = query(
        collection(db, "users"),
        where("mobile", "==", formData.mobile)
      );
      const userSnapshot = await getDocs(userQuery);

      if (userSnapshot.empty) {
        // New user: Show OTP field
        setIsNewUser(true);
        setShowOtp(true);
        // In a real application, you would send an OTP to the user's mobile number here
        console.log("Sending OTP to", formData.mobile);
      } else {
        // Existing user: Schedule test directly without storing data
        setIsNewUser(false);
        await scheduleTest();
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    // In a real application, you would verify the OTP here
    console.log("Verifying OTP:", otp);
    await scheduleTest();
  };

  const scheduleTest = async () => {
    try {
      if (isNewUser) {
        // Add new user data to Firebase
        await addDoc(collection(db, "users"), formData);
        // Schedule the test
        await addDoc(collection(db, "appointments"), {
          ...formData,
          timestamp: new Date(),
        });
      } else {
        // For existing users, just show success message without storing data
        console.log("Existing user, not storing data");
      }
      setSuccess("Your test has been successfully scheduled!");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        vehicleNumber: "",
        stateCity: "",
        message: "",
      });
      setShowOtp(false);
    } catch (error) {
      console.error("Error scheduling test:", error);
      setError(
        "An error occurred while scheduling your test. Please try again."
      );
    }
  };

  return (
    <div>
      <div className={`container-fluid ${styles.bgPrimary} py-5`}>
        <div className="row d-flex align-items-center justify-content-center">
          {/* Left Column for Image */}
          <div className="col-md-5 d-none d-md-block">
            <img
              src="/assets/ScheduleTest1.jpeg"
              alt="Doctor"
              className={styles.imgFluids}
            />
          </div>

          {/* Right Column for Form */}
          <div className="col-md-5">
            <div className={`card shadow p-4 rounded-lg ${styles.card}`}>
              <h2 className="text-center mb-4">
                Schedule <span className="text-danger">Emission Testing</span>{" "}
                Appointment Online
              </h2>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <form onSubmit={showOtp ? handleOtpSubmit : handleSubmit}>
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className={`form-control ${styles.formControl}`}
                    name="name"
                    placeholder="Enter Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="tel"
                    className={`form-control ${styles.formControl}`}
                    name="mobile"
                    placeholder="Mobile Number*"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="email"
                    className={`form-control ${styles.formControl}`}
                    name="email"
                    placeholder="Email*"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group mb-4">
                  <input
                    type="text"
                    className={`form-control ${styles.formControl}`}
                    name="vehicleNumber"
                    placeholder="Vehicle Number*"
                    required
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group mb-4">
                  <input
                    type="text"
                    className={`form-control ${styles.formControl}`}
                    name="stateCity"
                    placeholder="State / City*"
                    required
                    value={formData.stateCity}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group mb-4">
                  <textarea
                    className={`form-control ${styles.formControl}`}
                    name="message"
                    rows="3"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                {showOtp && (
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className={`form-control ${styles.formControl}`}
                      name="otp"
                      placeholder="Enter OTP"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                )}
                <div className="text-center mb-4">
                  <button
                    type="submit"
                    className={`btn btn-primary btn-block btn-lg ${styles.btnPrimary}`}
                  >
                    {showOtp ? "Verify OTP" : "Book Appointment"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTest;
