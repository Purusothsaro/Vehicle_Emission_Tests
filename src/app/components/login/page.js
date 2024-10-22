"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { app } from "../../../../firebaseConfig";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Login = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login"); // State for active tab
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false); // New state to track if OTP was sent
  const [confirmationResult, setconfirmationResult] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [otpError, setOtpError] = useState(""); // For handling OTP error
  const [formErrors, setFormErrors] = useState({}); // For handling form errors
  const validOtp = "1234"; // Simulated valid OTP for demonstration
  const [defaultUserType, setDefaultUserType] = useState("individual");

  // const auth = getAuth(app);

  const [individuals, setindividuals] = useState({
    fullName: "",
    email: "",
    city: "",
  });

  const [business, setbusiness] = useState({
    businessName: "",
    businessDesc: "",
    businessEmail: "",
    accountHolder: "",
    designation: "",
  });

  const addDataTofirebaseindividual = async (
    userType,
    fullName,
    email,
    city
  ) => {
    try {
      const individuals = await addDoc(collection(db, "Individuals"), {
        userType: userType,
        fullName: fullName,
        email: email,
        city: city,
      });
      console.log("Document with ID", individuals.id);
      return true;
    } catch (error) {
      console.error("error adding documents", error);
    }
  };

  const addDataTofirebaseBusiness = async (
    userType,
    businessName,
    businessDesc,
    businessEmail,
    accountHolder,
    designation
  ) => {
    try {
      const individuals = await addDoc(collection(db, "Business"), {
        userType: userType,
        businessName: businessName,
        businessDesc: businessDesc,
        businessEmail: businessEmail,
        accountHolder: accountHolder,
        designation: designation,
      });
      console.log("Document with ID", individuals.id);
      return true;
    } catch (error) {
      console.error("error adding documents", error);
    }
  };

  const handleUserTypeChange = (e) => {
    setDefaultUserType(e.target.value);
  };

  const handleChange = (e) => {
    if (defaultUserType === "individual")
      setindividuals({ ...individuals, [e.target.id]: e.target.value });
    else setbusiness({ ...business, [e.target.id]: e.target.value });
  };

  // useEffect(() => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     auth,
  //     "recaputa-container",
  //     {
  //       size: "normal",
  //       callback: (response) => {},
  //       "expired-callback": () => {},
  //     }
  //   );
  // }, [auth]);

  // Handle Login Form Submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // await confirmationResult.confirm(otp);
      setOtp("");
    } catch (error) {
      console.error(error);
    }

    const errors = {};

    if (!otp || otp !== validOtp) {
      errors.otp = "Invalid OTP. Please try again.";
    }

    if (Object.keys(errors).length === 0) {
      setOtpError("");
      setActiveTab("register"); // Redirect to registration section
    } else {
      setOtpError(errors.otp);
    }
  };

  // Handle Send OTP
  const handleSendOtp = async () => {
    const errors = {};
    const mobileRegex = /^[0-9]{10}$/;
    try {
      // const confirmation = await signInWithPhoneNumber(
      //   auth,
      //   "+91" + mobile,
      //   window.recaptchaVerifier
      // );
      // setconfirmationResult(confirmation);
      setOtpSent(true);
      setMobile("");
      alert("OTP has been sent");
    } catch (error) {
      console.error(error);
    }

    if (!mobile) {
      errors.mobile = "Mobile number is required.";
    } else if (!mobileRegex.test(mobile)) {
      errors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    if (Object.keys(errors).length === 0) {
      setOtpSent(true); // Set otpSent to true after sending OTP
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  // Handle Registration Form Submit
  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    let add = false;
    if (defaultUserType == "individual") {
      add = await addDataTofirebaseindividual(
        defaultUserType,
        individuals.fullName,
        individuals.email,
        individuals.city
      );
    } else {
      add = await addDataTofirebaseBusiness(
        defaultUserType,
        business.businessName,
        business.businessDesc,
        business.businessEmail,
        business.accountHolder,
        business.designation
      );
    }

    if (add) {
      alert("Data add to firestore DB !!");
      // localStorage.setItem("isAuthenticated", true);
      // router.push("/components/dashboard");
    }

    const errors = {};

    if (defaultUserType === "individual") {
      const nameRegex = /^[A-Za-z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !document.getElementById("fullName").value.trim() ||
        !nameRegex.test(document.getElementById("fullName").value)
      ) {
        errors.fullName =
          "Full name must not contain numbers or special characters.";
      }

      if (!emailRegex.test(document.getElementById("email").value.trim())) {
        errors.email = "Please enter a valid email address.";
      }

      if (document.getElementById("city").value === "Select your city") {
        errors.city = "Please select a city.";
      }

      if (!document.getElementById("terms").checked) {
        errors.terms = "You must agree to the Terms of Service.";
      }
    } else if (defaultUserType === "business") {
      if (!document.getElementById("businessName").value.trim()) {
        errors.businessName = "Business name is required.";
      }

      if (!document.getElementById("businessDesc").value.trim()) {
        errors.businessDesc = "Business description is required.";
      }

      const businessEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !businessEmailRegex.test(
          document.getElementById("businessEmail").value.trim()
        )
      ) {
        errors.businessEmail = "Please enter a valid business email address.";
      }

      if (!document.getElementById("accountHolder").value.trim()) {
        errors.accountHolder = "Account holder name is required.";
      }

      if (!document.getElementById("designation").value.trim()) {
        errors.designation = "Designation is required.";
      }

      if (!document.getElementById("termsBusiness").checked) {
        errors.termsBusiness = "You must agree to the Terms of Service.";
      }
    }

    if (Object.keys(errors).length === 0) {
      console.log("Registration form submitted");

      setFormErrors({});
      //
    } else {
      setFormErrors(errors);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      city: "",
      businessName: "",
      businessDesc: "",
      businessEmail: "",
      accountHolder: "",
      designation: "",
    });
    setErrors({});
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <ul
              className="nav nav-pills mb-3 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              {/* Login Tab */}
            </ul>
            <div className="tab-content" id="pills-tabContent">
              {/* Login Tab */}
              <div
                className={`tab-pane fade ${
                  activeTab === "login" ? "show active" : ""
                }`}
              >
                <div className="login-section shadow p-5">
                  <div className="text-center mb-4">
                    <Image
                      src="/assets/login.png"
                      alt="Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h2 className="text-center">Login</h2>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          formErrors.mobile ? "is-invalid" : ""
                        }`}
                        id="mobile"
                        placeholder="Enter Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      {formErrors.mobile && (
                        <div className="invalid-feedback">
                          {formErrors.mobile}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <button
                        type="button"
                        className="btn btn-primary w-100"
                        onClick={handleSendOtp}
                      >
                        Send OTP
                      </button>
                    </div>
                    {!otpSent ? (
                      <div id="recaputa-container" className="mb-3"></div>
                    ) : null}
                    {/* OTP input box will appear after OTP is sent */}
                    {otpSent && (
                      <div className="mb-3">
                        <label htmlFor="otp" className="form-label">
                          Enter OTP
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            otpError ? "is-invalid" : ""
                          }`}
                          id="otp"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        {otpError && (
                          <div className="invalid-feedback">{otpError}</div>
                        )}
                      </div>
                    )}

                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember Me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                      Login
                    </button>
                  </form>
                </div>
              </div>

              {/* Registration Tab */}
              <div
                className={`tab-pane fade ${
                  activeTab === "register" ? "show active" : ""
                }`}
              >
                <div className="registration-section shadow p-5">
                  <h2 className="text-center">Register</h2>
                  <div className="mb-4">
                    <label htmlFor="userType" className="form-label">
                      Select User Type
                    </label>
                    <select
                      id="userType"
                      className="form-select"
                      value={defaultUserType}
                      onChange={handleUserTypeChange}
                    >
                      <option value="individual">Individual</option>
                      <option value="business">Business</option>
                    </select>
                  </div>
                  {defaultUserType === "individual" ? (
                    <form onSubmit={handleRegistrationSubmit}>
                      <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          className={`form-control ${
                            formErrors.fullName ? "is-invalid" : ""
                          }`}
                          placeholder="Enter your full name"
                          value={individuals.fullName}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.fullName && (
                          <div className="invalid-feedback">
                            {formErrors.fullName}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email ID
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`form-control ${
                            formErrors.email ? "is-invalid" : ""
                          }`}
                          placeholder="Enter your email"
                          value={individuals.email}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.email && (
                          <div className="invalid-feedback">
                            {formErrors.email}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="city" className="form-label">
                          Select City
                        </label>
                        <select
                          id="city"
                          className={`form-select ${
                            formErrors.city ? "is-invalid" : ""
                          }`}
                          value={individuals.city}
                          onChange={handleChange}
                          required
                        >
                          <option>Select your city</option>
                          <option value="Trichy">Trichy</option>
                          <option value="Madurai">Madurai</option>
                        </select>
                        {formErrors.city && (
                          <div className="invalid-feedback">
                            {formErrors.city}
                          </div>
                        )}
                      </div>
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          id="terms"
                          className={`form-check-input ${
                            formErrors.terms ? "is-invalid" : ""
                          }`}
                          required
                        />
                        <label htmlFor="terms" className="form-check-label">
                          Agree to Terms of Service
                        </label>
                        {formErrors.terms && (
                          <div className="invalid-feedback">
                            {formErrors.terms}
                          </div>
                        )}
                      </div>
                      <button type="submit" className="btn btn-success w-100">
                        Register
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleRegistrationSubmit}>
                      <div className="mb-3">
                        <label htmlFor="businessName" className="form-label">
                          Business Name
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          className={`form-control ${
                            formErrors.businessName ? "is-invalid" : ""
                          }`}
                          placeholder="Enter your business name"
                          value={business.businessName}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.businessName && (
                          <div className="invalid-feedback">
                            {formErrors.businessName}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="businessDesc" className="form-label">
                          Business Description
                        </label>
                        <textarea
                          id="businessDesc"
                          className={`form-control ${
                            formErrors.businessDesc ? "is-invalid" : ""
                          }`}
                          rows="3"
                          placeholder="Enter your business description"
                          value={business.businessDesc}
                          onChange={handleChange}
                          required
                        ></textarea>
                        {formErrors.businessDesc && (
                          <div className="invalid-feedback">
                            {formErrors.businessDesc}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="businessEmail" className="form-label">
                          Business Email ID
                        </label>
                        <input
                          type="email"
                          id="businessEmail"
                          className={`form-control ${
                            formErrors.businessEmail ? "is-invalid" : ""
                          }`}
                          placeholder="Enter your business email"
                          value={business.businessEmail}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.businessEmail && (
                          <div className="invalid-feedback">
                            {formErrors.businessEmail}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="accountHolder" className="form-label">
                          Account Holder Name
                        </label>
                        <input
                          type="text"
                          id="accountHolder"
                          className={`form-control ${
                            formErrors.accountHolder ? "is-invalid" : ""
                          }`}
                          placeholder="Enter the account holder's name"
                          value={business.accountHolder}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.accountHolder && (
                          <div className="invalid-feedback">
                            {formErrors.accountHolder}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="designation" className="form-label">
                          Designation
                        </label>
                        <input
                          type="text"
                          id="designation"
                          className={`form-control ${
                            formErrors.designation ? "is-invalid" : ""
                          }`}
                          placeholder="Enter the designation"
                          value={business.designation}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.designation && (
                          <div className="invalid-feedback">
                            {formErrors.designation}
                          </div>
                        )}
                      </div>
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          id="termsBusiness"
                          className={`form-check-input ${
                            formErrors.termsBusiness ? "is-invalid" : ""
                          }`}
                          required
                        />
                        <label
                          htmlFor="termsBusiness"
                          className="form-check-label"
                        >
                          Agree to Terms of Service
                        </label>
                        {formErrors.termsBusiness && (
                          <div className="invalid-feedback">
                            {formErrors.termsBusiness}
                          </div>
                        )}
                      </div>
                      <button type="submit" className="btn btn-success w-100">
                        Register Business
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="img-container">
              <Image
                src="/assets/logimage.jpg"
                alt="Vehicles being tested"
                width={636}
                height={490}
                style={{
                  objectFit: "cover",

                  borderRadius: "10px", //👈 and here you can select border radius
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
