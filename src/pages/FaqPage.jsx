export default function FaqPage() {
  return (
    <div className="container">
      <div className="faq-page">
        <h1 className="text-center fw-bold mb-5">Frequently Asked Questions</h1>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="img-container m-3">
              <img src="hero-img.png" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="accordion my-3" id="faqAccordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How can I book an appointment?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                >
                  <div className="card-body">
                    You can book an appointment by visiting our website and
                    using the online booking system or by calling our office
                    directly.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What are your office hours?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                >
                  <div className="card-body">
                    Our office hours are Monday to Friday, 9 AM to 5 PM. We are
                    closed on weekends and public holidays.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Do you accept insurance?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                >
                  <div className="card-body">
                    Yes, we accept most major insurance plans. Please contact
                    our office for more details about your specific insurance
                    provider.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0">
                    <button
                      className="btn fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What should I bring to my first appointment?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                >
                  <div className="card-body">
                    Please bring your insurance card, a valid ID, and any
                    relevant medical records.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFive">
                  <h2 className="mb-0">
                    <button
                      className="btn fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How can I get my test results?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                >
                  <div className="card-body">
                    Test results are typically available within a few days. You
                    can access them through our patient portal or by contacting
                    our office.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
