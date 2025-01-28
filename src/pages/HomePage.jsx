import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="wrapper">
      {/* hero section */}
      <section className="pb-5">
        <div className="container">
          <div className="text-light">
            <h1 className="fw-bold">BDoctors</h1>
            <h2 className="fs-4 fw-semibold">
              Dalla ricerca alla cura: il dottore giusto ti aspetta
            </h2>
          </div>
          {/* select container */}
          <div className="row">
            {/* select specialties */}
            <div className="col-4">
              <select className="form-select" aria-label="specialies select">
                <option defaultValue={""}>
                  Seleziona una specializzazione
                </option>
                <option value="cardiology">Cardiologia</option>
                <option value="dermatology">Dermatologia</option>
                <option value="psychiatry">Psichiatria</option>
                <option value="endocrinology">Endocrinologia</option>
                <option value="family-medicine">Medicina di base</option>
                <option value="gastroenterology">Gastroenterologia</option>
                <option value="geriatrics">Geriatria</option>
                <option value="hematology">Ematologia</option>
                <option value="infectious Disease">Malattie infettive</option>
                <option value="pulmonology">Pneumologia</option>
                <option value="anesthesiology">Anestesiologia</option>
              </select>
            </div>
            {/* select province */}
            {/* <div className="col-4">
              <select class="form-select" aria-label="specialies select">
                <option selected>Provincia</option>
                <option value="cardiology">Cardiologia</option>
                <option value="dermatology">Dermatologia</option>
                <option value="psychiatry">Psichiatria</option>
                <option value="endocrinology">Endocrinologia</option>
                <option value="family-medicine">Medicina di base</option>
                <option value="gastroenterology">Gastroenterologia</option>
                <option value="geriatrics">Geriatria</option>
                <option value="hematology">Ematologia</option>
                <option value="infectious Disease">Malattie infettive</option>
                <option value="pulmonology">Pneumologia</option>
                <option value="anesthesiology">Anestesiologia</option>
              </select>
            </div> */}
            <div className="col-1">
              <button className="btn btn-custom fw-semibold">cerca</button>
            </div>
          </div>
        </div>
      </section>
      {/* featured doctors section */}
      <section>
        <div className="container">
          <h3 className="text-center fw-semibold">I nostri medici</h3>
          <div className="row row-cols-5">
            <div className="col d-flex align-items-center flex-column">
              <img
                src="https://picsum.photos/2500/3500"
                alt=""
                className="d-inline-block round-image-hp text-center"
              />
              <div>
                <p className="text-center fs-5">Nome Cognome</p>
                <p className="text-center">specializzazione</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* reviews section */}
      <section>
        <div className="container mt-5">
          <h3 className="text-center fw-semibold text-light">
            Cosa dicono altri utenti
          </h3>
          <div className="row">
            {/* single card col */}
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Username</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    medico per cui e' la recensione
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* single card col */}
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Username</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    medico per cui e' la recensione
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* single card col */}
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Username</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    medico per cui e' la recensione
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action section */}
      <section>
        <div className="container mt-5 mb-4">
          <div className="row justify-content-center">
            <div className="col-4">
              <h3 className="text-center fw-semibold mt-3">
                Lavori nel campo della medicina?
              </h3>
              <p className="text-center mt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                placeat sed aperiam rerum soluta porro, ipsum dolores delectus
                consectetur commodi atque eum impedit eos facilis natus
                voluptate ad expedita deserunt! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Id, vel nesciunt! Adipisci
                nesciunt at necessitatibus ratione commodi a veniam minima iste
                enim. Necessitatibus aliquid veniam obcaecati rerum minima
                sapiente at?
              </p>
            </div>
            <div className="col-5 d-flex flex-column align-items-center">
              <img src="/hero-img.png" alt="" className="cta-img img-fluid" />
              <Link
                to="/registration"
                className="btn btn-custom fw-semibold mt-3"
              >
                Registrati ora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
