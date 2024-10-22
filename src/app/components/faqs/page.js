import React from "react";

const FAQ = () => {
  return (
    <section className="faq-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently asked questions</h2>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <h2>FAQs about Vehicle Emission Testing</h2>
            <div className="accordion" id="faqAccordionLeft">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    What is vehicle emission testing?
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq1"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Vehicle emission testing is a process that measures the
                    pollutants emitted by a vehicle’s exhaust system to ensure
                    compliance with environmental standards set by government
                    authorities.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Why is vehicle emission testing important?
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq2"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Emission testing helps to reduce air pollution, protect
                    public health, and ensure vehicles meet environmental
                    regulations. It is also mandatory in many regions to avoid
                    fines and ensure roadworthiness.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    How often do I need to have my vehicle tested?
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq3"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    The frequency of emission testing varies by region and
                    vehicle type, but typically, tests are required annually or
                    bi-annually. Fleet operators may need more frequent testing
                    depending on local regulations.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    Which pollutants are measured during the test?
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq4"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Key pollutants measured include carbon monoxide (CO),
                    hydrocarbons (HC), nitrogen oxides (NOx), particulate matter
                    (PM), and smoke density for diesel vehicles.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    What happens if my vehicle fails the emission test?
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq5"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    If your vehicle fails, you’ll need to address the issue
                    (such as fixing the engine or exhaust system) and then have
                    the vehicle retested to meet emission standards.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq6">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded="false"
                    aria-controls="collapse6"
                  >
                    Can I drive my vehicle if it fails the emission test?
                  </button>
                </h2>
                <div
                  id="collapse6"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq6"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Depending on the local laws, you may be restricted from
                    driving the vehicle until the necessary repairs are made and
                    the vehicle passes a retest.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq7">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse7"
                    aria-expanded="false"
                    aria-controls="collapse7"
                  >
                    What vehicles require emission testing?
                  </button>
                </h2>
                <div
                  id="collapse7"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq7"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Most vehicles with internal combustion engines, including
                    petrol and diesel cars, trucks, buses, motorcycles, and
                    commercial fleets, require emission testing. Electric
                    vehicles are typically exempt.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse8"
                    aria-expanded="false"
                    aria-controls="collapse8"
                  >
                    How long does the emission test take?
                  </button>
                </h2>
                <div
                  id="collapse8"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq8"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    A standard emission test typically takes between 15 to 30
                    minutes, depending on the type of vehicle and the complexity
                    of the testing process.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq9">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse9"
                    aria-expanded="false"
                    aria-controls="collapse9"
                  >
                    What can I do to prepare my vehicle for an emission test?
                  </button>
                </h2>
                <div
                  id="collapse9"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq9"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Regular maintenance, such as oil changes, replacing air
                    filters, and ensuring your engine is in good condition, can
                    help ensure your vehicle passes the test.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq10">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse10"
                    aria-expanded="false"
                    aria-controls="collapse10"
                  >
                    What is on-road or real-world emission testing?
                  </button>
                </h2>
                <div
                  id="collapse10"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq10"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    On-road testing measures vehicle emissions under actual
                    driving conditions, providing a more accurate reflection of
                    a vehicle’s environmental impact compared to standard
                    lab-based tests.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <h2>FAQs about Emission Testers</h2>
            <div className="accordion" id="faqAccordionRight">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq11">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse11"
                    aria-expanded="true"
                    aria-controls="collapse11"
                  >
                    How do I schedule an on-demand emission test?
                  </button>
                </h2>
                <div
                  id="collapse11"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq11"
                  data-bs-parent="#faqAccordionRight "
                >
                  <div className="accordion-body">
                    You can schedule a test through our website by selecting a
                    convenient time and location.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq12">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse12"
                    aria-expanded="false"
                    aria-controls="collapse12"
                  >
                    What types of vehicles do you service?
                  </button>
                </h2>
                <div
                  id="collapse12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq12"
                  data-bs-parent="#faqAccordionRight "
                >
                  <div className="accordion-body">
                    We provide emission testing for petrol, diesel, hybrid, and
                    fleet vehicles.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq13">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse13"
                    aria-expanded="false"
                    aria-controls="collapse13"
                  >
                    Which regions do you serve?
                  </button>
                </h2>
                <div
                  id="collapse13"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq13"
                  data-bs-parent="#faqAccordionRight "
                >
                  <div className="accordion-body">
                    We currently operate in selected cities. Visit our website
                    for up-to-date service areas.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq14">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse14"
                    aria-expanded="false"
                    aria-controls="collapse14"
                  >
                    How long does the test take?
                  </button>
                </h2>
                <div
                  id="collapse14"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq14"
                  data-bs-parent="#faqAccordionRight "
                >
                  <div className="accordion-body">
                    A typical emission test lasts about 15 to 30 minutes.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq15">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse15"
                    aria-expanded="false"
                    aria-controls="collapse15"
                  >
                    What happens if my vehicle fails the test?
                  </button>
                </h2>
                <div
                  id="collapse15"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq15"
                  data-bs-parent="#faqAccordionRight "
                >
                  <div className="accordion-body">
                    We offer retesting and provide guidance on the necessary
                    repairs to help meet compliance.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq16">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse16"
                    aria-expanded="false"
                    aria-controls="collapse16"
                  >
                    How do I get my emission certificate?
                  </button>
                </h2>
                <div
                  id="collapse16"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq16"
                  data-bs-parent="#faqAccordionRight"
                >
                  <div className="accordion-body">
                    Upon passing the test, you will receive a certificate and a
                    digital copy via our website.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq17">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse17"
                    aria-expanded="false"
                    aria-controls="collapse17"
                  >
                    What can I do in the Dashboard?
                  </button>
                </h2>
                <div
                  id="collapse17"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq17"
                  data-bs-parent="#faqAccordionRight"
                >
                  <div className="accordion-body">
                    The Dashboard allows you to view your test history, download
                    certificates, and track upcoming appointments.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq18">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse18"
                    aria-expanded="false"
                    aria-controls="collapse18"
                  >
                    How do I access the Dashboard?
                  </button>
                </h2>
                <div
                  id="collapse18"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq18"
                  data-bs-parent="#faqAccordionRight"
                >
                  <div className="accordion-body">
                    Log in to our website using your account credentials to
                    access the Dashboard.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq19">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse19"
                    aria-expanded="false"
                    aria-controls="collapse19"
                  >
                    Can I reschedule an appointment from the Dashboard?
                  </button>
                </h2>
                <div
                  id="collapse19"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq19"
                  data-bs-parent="#faqAccordionRight"
                >
                  <div className="accordion-body">
                    Yes, you can reschedule or cancel an existing appointment
                    directly from the Dashboard.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faq20">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse20"
                    aria-expanded="false"
                    aria-controls="collapse20"
                  >
                    Is there a feature to track my vehicle’s emission
                    compliance?
                  </button>
                </h2>
                <div
                  id="collapse20"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq20"
                  data-bs-parent="#faqAccordionRight"
                >
                  <div className="accordion-body">
                    Yes, the Dashboard provides real-time tracking of your
                    vehicle’s compliance status and reminders for future tests.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
