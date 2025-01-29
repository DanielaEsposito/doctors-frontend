export default function AboutPage() {
  return (
    <div className="wrapper bg-light py-5">
      <div className="container">
        <h1 className="text-center text-primary mb-4">Chi siamo</h1>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <i className="fas fa-medkit fa-3x text-primary mb-3"></i>
                <h2 className="card-title text-primary">Il nostro impegno</h2>
                <p className="card-text">
                  Offriamo assistenza medica con passione e competenza,
                  garantendo trattamenti efficaci e una relazione di fiducia con
                  i pazienti.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <i className="fas fa-heart fa-3x text-primary mb-3"></i>
                <h2 className="card-title text-primary">Perché sceglierci?</h2>
                <p className="card-text">
                  Medici qualificati, tecnologie all’avanguardia e un approccio
                  umano per garantire il massimo della cura e dell’attenzione.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <i className="fas fa-stethoscope fa-3x text-primary mb-3"></i>
                <h2 className="card-title text-primary">La nostra missione</h2>
                <p className="card-text">
                  Mettiamo la salute al primo posto, offrendo diagnosi accurate
                  e soluzioni personalizzate per ogni esigenza.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <h2 className="text-center text-primary mb-4">Il nostro team</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card h-100 p-2 border-0 shadow text-center">
                <img
                  src="https://placehold.co/100x100"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Dottore 1"
                />
                <div className="card-body my-2">
                  <h5 className="card-title">Dott. Marco Donati</h5>
                  <p className="card-text text-muted">M - L'uomo del secolo</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 p-2 border-0 shadow text-center">
                <img
                  src="https://placehold.co/100x100"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Dottoressa 2"
                />
                <div className="card-body my-2">
                  <h5 className="card-title">Dott.ssa Daniela Esposito</h5>
                  <p className="card-text text-muted">Scegli la tua tagline</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 p-2 border-0 shadow text-center">
                <img
                  src="https://placehold.co/100x100"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Dottore 3"
                />
                <div className="card-body my-2">
                  <h5 className="card-title">Dott. Antonio Ferrigno</h5>
                  <p className="card-text text-muted">Scegli la tua tagline</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 border-0 p-2 shadow text-center">
                <img
                  src="https://placehold.co/100x100"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Dottore 4"
                />
                <div className="card-body my-2">
                  <h5 className="card-title">Dott.ssa Francesca Romagnoli</h5>
                  <p className="card-text text-muted">Scegli la tua tagline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
