import React from "react";

const FAQ = () => {
  return (
    <section className="faq-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently asked questions</h2>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
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
                    How do I upgrade / downgrade my workspace plan?
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq1"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Answer to workspace plan question.
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
                    Can I add other information to an invoice?
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq2"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Answer to invoice question.
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
                    When should I use a new table vs. a view?
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq3"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Answer to table vs. view question.
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
                    How can I transfer data from one base to another?
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq4"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Answer to data transfer question.
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
                    How do I change my account email address?
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq5"
                  data-bs-parent="#faqAccordionLeft"
                >
                  <div className="accordion-body">
                    Answer to email change question.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="accordion" id="faqAccordionRight">
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
                    How does billing work?
                  </button>
                </h2>
                <div
                  id="collapse6"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq6"
                  data-bs-parent="#faqAccordionRight"
                >
                  <div className="accordion-body">
                    Answer to billing question.
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
                    Can I share an individual app?
                  </button>
                </h2>
                <div
                  id="collapse7"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq7"
                  data-bs-parent="#faqAccordionRight"
                >
                  <div className="accordion-body">
                    Answer to app sharing question.
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
                    Can I export a list of all collaborators?
                  </button>
                </h2>
                <div
                  id="collapse8"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq8"
                  data-bs-parent="#faqAccordionRight"
                >
                  <div className="accordion-body">
                    Answer to collaborators export question.
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
                    Can invoices be sent to other collaborators?
                  </button>
                </h2>
                <div
                  id="collapse9"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq9"
                  data-bs-parent="#faqAccordionRight"
                >
                  <div className="accordion-body">
                    Answer to invoice collaboration question.
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
                    How do I contact support?
                  </button>
                </h2>
                <div
                  id="collapse10"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq10"
                  data-bs-parent="#faqAccordionRight"
                >
                  <div className="accordion-body">
                    Answer to support contact question.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional footer information */}
        <div className="row mt-4">
          <div className="col-md-6">
            <p>Emission Testing</p>
          </div>
          <div className="col-md-6">
            <p>
              We offer support over email, and the best way to contact us is
              through the in-app help menu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
