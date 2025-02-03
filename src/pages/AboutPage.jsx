export default function AboutPage() {
  return (
    <div className="wrapper bg-light py-5">
      <div className="container">
        <h1 className="text-center text-custom-dark fw-bold mb-4 tags-container ">
          Il progetto BDoctors
        </h1>

        <div>
          <p className="text-custom-dark text-center pb-3 tags-container ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dolorum voluptate eius distinctio quia. Enim, quod delectus quis
            optio ex facere quasi, odio placeat quo libero dignissimos provident
            aperiam rerum! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Qui illum labore rerum, nesciunt repellendus accusamus vero
            eligendi, architecto ab et aperiam tempora! Harum voluptatibus eum
            illo laboriosam obcaecati. Explicabo, quas! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Architecto, nam eum. Nemo,
            reiciendis debitis molestiae necessitatibus ipsam similique
            praesentium aliquid ea. Est iure praesentium earum saepe voluptates
            rerum, quaerat asperiores.
          </p>
        </div>

        <div className="row g-4 tags-container ">
          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <i className="fas fa-medkit fa-3x text-custom-dark mb-3"></i>
                <h2 className="card-title text-custom-dark">
                  Il nostro impegno
                </h2>
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
                <i className="fas fa-heart fa-3x text-custom-dark mb-3"></i>
                <h2 className="card-title text-custom-dark">
                  Perché sceglierci?
                </h2>
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
                <i className="fas fa-stethoscope fa-3x text-custom-dark mb-3"></i>
                <h2 className="card-title text-custom-dark">
                  La nostra missione
                </h2>
                <p className="card-text">
                  Mettiamo la salute al primo posto, offrendo diagnosi accurate
                  e soluzioni personalizzate per ogni esigenza.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 doctors-row-HOME">
          <h2 className="text-center text-custom-dark fw-semibold mb-4">
            Il nostro team
          </h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-2 border-0 shadow text-center">
                <img
                  src="http://localhost:3000/img/marco.jpeg"
                  className="card-img-top round-image-hp-about mx-auto mt-3 pedro"
                  alt="Dottore 1"
                />
                <div className="card-body my-2">
                  <h5 className="card-title">Dott. Marco Donati</h5>
                  <p className="card-text text-muted">
<<<<<<< HEAD
                    Salute e fiducia al primo posto.
=======
                    M - Il figlio del secolo
>>>>>>> a36188e06771c5dd52b399b32f8db58e7b691aed
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-2 border-0 shadow text-center">
                <img
                  src="http://localhost:3000/img/daniela.jpg"
                  className="card-img-top img-fluid round-image-hp-about mx-auto mt-3"
                  alt="Dottoressa 2"
                />
                <div className="card-body my-2">
                  <h5 className="card-title">Dott.ssa Daniela Esposito</h5>
                  <p className="card-text text-muted">
                    Benessere e professionalità garantiti.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-2 border-0 shadow text-center">
                <img
                  src="http://localhost:3000/img/me.jpg"
                  className="card-img-top img-fluid round-image-hp-about mx-auto mt-3"
                  alt="Dottore 3"
                />
                <div className="card-body my-2">
                  <h5 className="card-title">Dott. Antonio Ferrigno</h5>
                  <p className="card-text text-muted">
                    Eccellenza medica, attenzione costante.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 p-2 shadow text-center">
                <img
                  src="http://localhost:3000/img/pedro.jpg"
                  className="card-img-top img-fluid round-image-hp-about mx-auto mt-3"
                  alt="Dottore 4"
                />
                <div className="card-body my-2">
                  <h5 className="card-title">Dott.ssa Francesca Romagnoli</h5>
                  <p className="card-text text-muted">
                    Cura personalizzata per ogni paziente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-lg-4 col-sm-12 ms-3 text-center pb-3">
            <h3 className="text-custom-dark fw-semibold pb-3 pt-5">
              Contattaci
            </h3>
            <div>
              <ul>
                <li>Numero: 3347827182</li>
                <li>Orari assistenza: lun-ven 9:30-9:35</li>
                <li>Email:goblincorp@totallylegit.com</li>
                <li>Indirizzo: Via Fittizia 1</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <img src="hero-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
