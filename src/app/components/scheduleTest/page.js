import styles from "./ScheduleTest.module.css";

const ScheduleTest = () => {
  return (
    <div>
      <div className={`container-fluid ${styles.bgPrimary} py-5`}>
        <div className="row d-flex align-items-center justify-content-center">
          {/* Left Column for Image */}
          <div className="col-md-5 d-none d-md-block">
            <img
              src="/assets/car1.png"
              alt="Doctor"
              className={styles.imgFluids}
            />
          </div>

          {/* Right Column for Form */}
          <div className="col-md-5">
            <div className={`card shadow p-4 rounded-lg ${styles.card}`}>
              <h2 className="text-center mb-4">
                Schedule Your <span className="text-danger">CAR</span>{" "}
                Appointment Online
              </h2>
              <form>
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className={`form-control ${styles.formControl}`}
                    name="name"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="tel"
                    className={`form-control ${styles.formControl}`}
                    name="mobile"
                    placeholder="Mobile Number*"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="email"
                    className={`form-control ${styles.formControl}`}
                    name="email"
                    placeholder="Email*"
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <textarea
                    className={`form-control ${styles.formControl}`}
                    name="message"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="text-center mb-4">
                  <button
                    type="submit"
                    className={`btn btn-primary btn-block btn-lg ${styles.btnPrimary}`}
                  >
                    Book Appointment
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
