export default function FaqPage() {
  return (
    <div className="container">
      <div className="faq-page">
        <h1 className="text-center fw-bold mb-5">Domande Frequenti</h1>
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
                      Come posso prenotare un appuntamento?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                >
                  <div className="card-body">
                    Puoi prenotare un appuntamento visitando il nostro sito web
                    e utilizzando il sistema di prenotazione online.
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
                      Quali sono i vostri orari di ufficio?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                >
                  <div className="card-body">
                    I nostri orari d'ufficio sono dal lunedì al venerdì, dalle
                    9:00 alle 17:00. Noi siamo chiuso nei fine settimana e nei
                    giorni festivi.
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
                      In caso di emergenze si può otterenere un appuntamento con
                      poco preavviso?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                >
                  <div className="card-body">
                    In caso di emergenza, faremo del nostro meglio per offrirti
                    un appuntamento il prima possibile. Ti consigliamo di
                    contattare telefonicamente il tuo medico per discutere la
                    tua situazione e trovare una soluzione rapida.
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
                      Cosa devo portare al mio primo appuntamento?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                >
                  <div className="card-body">
                    Si prega di portare con sé la tessera sanitaria, un
                    documento d'identità valido.
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
                      Come posso ottenere i risultati della mia visita?{" "}
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                >
                  <div className="card-body">
                    I risultati dei test e delle visite sono generalmente
                    disponibili entro pochi giorni.Il vostro medico si
                    preoccuperà di mandarvi tramite e-mail tutto il materiale .
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
