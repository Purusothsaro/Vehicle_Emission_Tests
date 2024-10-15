"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const dashboard = () => {
  const [userDetailsedit, setUserDetailsedit] = useState(false);
  const [vehicleDetailsedit, setVehicleDetailsedit] = useState(false);

  const [userDetails, setUserDetails] = useState({
    userId: "-",
    phoneNo: "-",
    email: "-",
    date: "-",
    address: "-",
    userTageSource: "-",
    noOfVehicles: "-",
  });

  const [vehicleDetails, setVehicleDetails] = useState({});

  const [dashBoard, setDashBoard] = useState({
    lastTestDate: "-",
    co2Emission: "-",
    fuelConsumed: "-",
    engineTemp: "-",
  });

  const [testResult, setTestResult] = useState([]);
  const [testResultFilter, setTestResultFilter] = useState("");
  const [vechileNo, setvechileNo] = useState("");

  useEffect(() => {
    setUserDetails({
      userId: "67hg#$54gbh&^34@#45",
      phoneNo: "9876543210",
      email: "purusothman@gmail.com",
      date: "01 Jan 2022",
      address: "123, south east street, some city, some state - 654321",
      userTageSource: "Individual",
      noOfVehicles: "2",
    });
    setDashBoard({
      lastTestDate: "01 Jan 2024",
      co2Emission: "0.8",
      fuelConsumed: "5.6",
      engineTemp: "90",
    });
    setTestResult([
      {
        testDate: "01 Jan 2022",
        totalCO2Emission: "0.8",
        totalFuelConsumed: "5.6/l",
        engineTemperature: "90°C",
        testResult: "Pass",
      },
      {
        testDate: "01 Jan 2023",
        totalCO2Emission: "1.8",
        totalFuelConsumed: "5.6/l",
        engineTemperature: "90°C",
        testResult: "Pass",
      },
      {
        testDate: "01 Jan 2024",
        totalCO2Emission: "2.6",
        totalFuelConsumed: "5.6/l",
        engineTemperature: "90°C",
        testResult: "Fail",
      },
    ]);
  }, []);

  const userDetailsOnChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.id]: e.target.value,
    });
  };

  const editDetails = (e) => {
    const id = e.currentTarget.id;
    if (id.toLowerCase().includes("userdetails"))
      setUserDetailsedit((prevState) => !prevState);
    else setVehicleDetailsedit((prevState) => !prevState);
  };

  const onSubmit = (e) => {
    const id = e.currentTarget.id;
    if (id.toLowerCase().includes("userdetails")) console.log(userDetails);
    else console.log(vehicleDetails);
    editDetails(e);
  };

  const debounce = (mainFunction, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        mainFunction(...args);
      }, delay);
    };
  };

  const testResultSearch = debounce((e) => {
    setTestResultFilter(e.target.value);
  }, 1000);

  const testResultData = () => {
    if (!testResultFilter) return testResult;
    const lowerCaseFilter = testResultFilter.trim().toLowerCase();
    return testResult.filter(
      (data) =>
        data.testDate.toLowerCase().includes(lowerCaseFilter) ||
        data.totalCO2Emission.toLowerCase().includes(lowerCaseFilter) ||
        data.totalFuelConsumed.toLowerCase().includes(lowerCaseFilter) ||
        data.engineTemperature.toLowerCase().includes(lowerCaseFilter) ||
        data.testResult.toLowerCase().includes(lowerCaseFilter)
    );
  };

  const vechileNumberChange = (e) => {
    setvechileNo(e.target.value);
  };

  const getVechileDetails = async () => {
    const url =
      "https://rto-vehicle-information-verification-india.p.rapidapi.com/api/v1/rc/vehicleinfo";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "ea349bf5bfmshb2fe3ae0e7c05eap190a46jsn0b2fce1b2ebb",
        "x-rapidapi-host":
          "rto-vehicle-information-verification-india.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reg_no: vechileNo,
        consent: "Y",
        consent_text:
          "I hear by declare my consent agreement for fetching my information via AITAN Labs API",
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setVehicleDetails(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container my-4">
      <div className="d-flex justify-content-between mb-2">
        <h2>Welcome Purusothman!</h2>
        <div>
          <button className="btn btn-primary">Schedule Test</button>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card p-3  shadow-sm">
            <div className="d-flex justify-content-between">
              <h5>Last Test Date</h5>
              <i className="bi bi-calendar fs-5"></i>
            </div>
            <span className="fs-3 fw-bold text-primary">
              {" "}
              {dashBoard.lastTestDate}
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3  shadow-sm">
            <div className="d-flex justify-content-between">
              <h5>Total CO2 Emission</h5>
              <i className="bi bi-fuel-pump fs-5"></i>
            </div>
            <span className="fs-3 fw-bold text-primary">
              {dashBoard.co2Emission}
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3  shadow-sm">
            <div className="d-flex justify-content-between">
              <h5>Total Fuel Consumed</h5>
              <i className="bi bi-fuel-pump fs-5"></i>
            </div>
            <span className="fs-3 fw-bold text-primary">
              {dashBoard.fuelConsumed}
              <span className="fs-6 fw-bold">/L</span>
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3  shadow-sm">
            <div className="d-flex justify-content-between">
              <h5>Engine Temperature</h5>
              <i className="bi bi-thermometer-half fs-5"></i>
            </div>
            <span className="fs-3 fw-bold text-primary">
              {dashBoard.engineTemp}
              <span className="fs-6 fw-bold">°C</span>
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card p-3 shadow-sm h-100">
            <div className="d-flex justify-content-between mx-3">
              <h4>User Details</h4>
              <div className="d-flex justify-content-between">
                {!userDetailsedit ? (
                  <div
                    className={`text-primary ${styles["cursor-pointer"]}`}
                    id="userDetails"
                    onClick={editDetails}
                  >
                    <i className="bi bi-pencil-square"></i>
                    <span className="ms-1">Edit</span>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between gap-2">
                    <div
                      className={`text-success ${styles["cursor-pointer"]}`}
                      id="submitUserDetails"
                      onClick={onSubmit}
                    >
                      <i className="bi bi-check-square fs-4"></i>
                    </div>
                    <div
                      className={`text-danger ${styles["cursor-pointer"]}`}
                      id="editUserDetails"
                      onClick={editDetails}
                    >
                      <i className="bi bi-x-square fs-4"></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <hr className="mx-3" />
            <div className="p-3">
              <div className="row g-2">
                <div className="col-md-6">
                  <label className="form-label">User ID:</label>
                  <div className="fw-bold h6">{userDetails.userId}</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone No:</label>
                  {!userDetailsedit ? (
                    <div className="fw-bold h6">{userDetails.phoneNo}</div>
                  ) : (
                    <input
                      type="number"
                      className="form-control w-75"
                      id="phoneNo"
                      value={userDetails.phoneNo}
                      onChange={userDetailsOnChange}
                      placeholder="User Name"
                    />
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email:</label>
                  {!userDetailsedit ? (
                    <div className="fw-bold h6">{userDetails.email}</div>
                  ) : (
                    <input
                      type="text"
                      className="form-control w-75"
                      id="email"
                      value={userDetails.email}
                      onChange={userDetailsOnChange}
                      placeholder="User Name"
                    />
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Registration Platform Date:
                  </label>
                  <div className="fw-bold h6">{userDetails.date}</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Address:</label>
                  {!userDetailsedit ? (
                    <div className="fw-bold h6">{userDetails.address}</div>
                  ) : (
                    <textarea
                      className="form-control w-75"
                      id="address"
                      value={userDetails.address}
                      onChange={userDetailsOnChange}
                      rows="3"
                    ></textarea>
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label">User Tag:</label>
                  <div className="fw-bold h6">{userDetails.userTageSource}</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">User Source:</label>
                  <div className="fw-bold h6">{userDetails.userTageSource}</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Number of Vehicles:</label>
                  <div className="fw-bold h6">{userDetails.noOfVehicles}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 mb-4 shadow-sm h-100">
            <div className="d-flex justify-content-between mx-3">
              <h4>Vehicle Detail</h4>
              <div className="input-group mb-3 w-50">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={vechileNumberChange}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={getVechileDetails}
                >
                  Search
                </button>
              </div>

              {/* <div className="d-flex justify-content-between">
                {!vehicleDetailsedit ? (
                  <div
                    className={`text-primary ${styles["cursor-pointer"]}`}
                    id="vehicleDetails"
                    onClick={editDetails}
                  >
                    <i className="bi bi-pencil-square"></i>
                    <span className="ms-1">Edit</span>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between gap-2">
                    <div
                      className={`text-success ${styles["cursor-pointer"]}`}
                      id="submitVehicleDetails"
                      onClick={onSubmit}
                    >
                      <i className="bi bi-check-square fs-4"></i>
                    </div>
                    <div
                      className={`text-danger ${styles["cursor-pointer"]}`}
                      id="editVehicleDetails"
                      onClick={editDetails}
                    >
                      <i className="bi bi-x-square fs-4"></i>
                    </div>
                  </div>
                )}
              </div> */}
            </div>
            <hr className="mx-3" />
            <div className="p-3">
              <div className="row g-2">
                <div className="col-md-6">
                  <label className="form-label">Vehicle Name:</label>
                  <div className="fw-bold h6">
                    {vehicleDetails?.result?.vehicle_class_desc}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Vehicle Number:</label>
                  <div className="fw-bold h6">
                    {vehicleDetails?.result?.reg_no}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Owner (User ID):</label>
                  <div className="fw-bold h6">
                    {vehicleDetails?.result?.owner_name}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Make and Model:</label>
                  <div className="fw-bold h6">
                    {vehicleDetails?.result?.vehicle_manufacturer_name +
                      "" +
                      vehicleDetails?.result?.model}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Year of Manufacture:</label>
                  <div className="fw-bold h6">
                    {vehicleDetails?.result?.manufacturing_yr}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Chassis No:</label>
                  <div className="fw-bold h6">
                    {vehicleDetails?.result?.chassis_no}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Engine number etc:</label>
                  <div className="fw-bold h6">
                    {vehicleDetails?.result?.engine_no}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Vehicle Type:</label>
                  <div className="fw-bold h6">
                    {vehicleDetails?.result?.vehicle_type}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">City of Registration:</label>
                  <div className="fw-bold h6">
                    {vehicleDetails?.result?.office_name}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Option to schedule emission test:
                  </label>
                  <div className="fw-bold h6">
                    {vehicleDetails.optionToScheduleEmissionTest}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card p-3 shadow-sm">
            <h4>Test Result</h4>
            <div className="mt-2 d-flex justify-content-between">
              <div className="input-group mb-3 w-25">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={testResultSearch}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div>
                <button className="btn btn-primary">
                  <i className="bi bi-file-earmark-arrow-down"></i>
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover table-striped border">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Test Date</th>
                    <th scope="col">Total CO2 Emission</th>
                    <th scope="col">Total Fuel Consumed</th>
                    <th scope="col">Engine Temperature</th>
                    <th scope="col">Test Result</th>
                  </tr>
                </thead>
                <tbody>
                  {testResultData().length > 0 ? (
                    testResultData().map((data, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{data.testDate}</td>
                          <td>{data.totalCO2Emission}</td>
                          <td>{data.totalFuelConsumed}</td>
                          <td>{data.engineTemperature}</td>
                          <td>
                            <span
                              className={`badge text-bg-${
                                data.testResult.toLowerCase() == "pass"
                                  ? "success"
                                  : "danger"
                              }`}
                            >
                              {data.testResult}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No Data Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card p-3 shadow-sm">
            <h4>Invoice History</h4>
            <div className="mt-2 d-flex justify-content-between">
              <div className="input-group mb-3 w-25">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div>
                <button className="btn btn-primary">
                  <i className="bi bi-file-earmark-arrow-down"></i>
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover table-striped border">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Invoice Date</th>
                    <th scope="col">Invoice Time</th>
                    <th scope="col">Payment Type</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>01 Jan 2022</td>
                    <td>10:34 PM</td>
                    <td>
                      <span className="badge text-bg-primary">Online</span>
                    </td>
                    <td>1500 rs</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>01 Jan 2023</td>
                    <td>2:24 PM</td>
                    <td>
                      <span className="badge text-bg-secondary">Cash</span>
                    </td>
                    <td>1500 rs</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>01 Jan 2024</td>
                    <td>11:46 PM</td>
                    <td>
                      <span className="badge text-bg-success">Bank</span>
                    </td>
                    <td>1500 rs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dashboard;