import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [specialties, setSpecialties] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [provinces, setProvinces] = useState([]);

  // # fetch provinces
  useEffect(() => {
    fetch("http://localhost:3000/provinces")
      .then((res) => res.json())
      .then((data) => setProvinces(data.results));
  }, []);

  // # fetch specialties
  useEffect(() => {
    fetch("http://localhost:3000/specialties")
      .then((res) => res.json())
      .then((data) => setSpecialties(data.results));
  }, []);

  // # fetch reviews
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.results.slice(0, 3)));
  }, []);
  // console.log(reviews + "recensioni");

  // # fetch feature doctors
  const [featuredDoctors, setFeaturedDoctors] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3000/`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedDoctors(data.resultsDoctor.slice(0, 5));
      });
  }, []);

  // useEffect(() => {
  //   console.log(featuredDoctors);
  // }, [featuredDoctors]);

  // # fetch search doctors

  const [selectedProvince, setSelectedProvince] = useState("");
  const [isProvinceSelected, setIsProvinceSelected] = useState(false);
  const [selectedDoctors, setSelectedDoctors] = useState([]);

  const selectDoctors = (provinceId) => {
    if (!selectedProvince) return;

    setIsProvinceSelected(true);
    fetch(`http://localhost:3000/${provinceId}/provinces`)
      .then((res) => res.json())
      .then((data) => setSelectedDoctors(data.doctors));
  };

  // useEffect(() => {
  //   console.log(selectedDoctors);
  // }, [selectedDoctors]);

  return (
    <div className="wrapper">
      {/* hero section */}
      <div className="background-hero"></div>
      <section id="hero-section">
        <div className="container pb-5 pt-5 text-custom-light">
          <div className="text-light">
            <h1 className="fw-bold">BDoctors</h1>
            <h2 className="fs-4 fw-semibold">
              Dalla ricerca alla cura: il dottore giusto ti aspetta
            </h2>
          </div>
          {/* select container */}
          <div className="row">
            {/* select specialties */}
            <div className="col-lg-4 col-sm-12">
              <select
                className="form-select"
                aria-label="specialies select"
                onChange={(e) => {
                  setSelectedProvince(e.target.value);
                  setIsProvinceSelected(true);
                }}
              >
                <option defaultValue={""}>Seleziona una provincia</option>
                {provinces.map((province) => (
                  <option
                    key={province.id}
                    value={province.province_name}
                    onClick={() => selectDoctors(province.id)}
                  >
                    {province.province_name}
                  </option>
                ))}
              </select>
            </div>

            {/* <div className="col-1">
              <button
                className="btn btn-custom fw-semibold"
                data-bs-toggle="collapse"
                href="#homepage-collapse"
              >
                Cerca
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* search section */}
      {isProvinceSelected && (
        <section>
          <div className="container pt-5">
            <h3 className="text-custom-dark fw-semibold text-center">
              Medici di {selectedProvince}
            </h3>
            <div
              className="row justify-content-center row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 g-3 mt-5"
              id="homepage-collapse"
            >
              {selectedDoctors.length === 0 ? (
                <p className="text-custom-small text-center">
                  Non ci sono medici per la provincia selezionata.
                </p>
              ) : (
                selectedDoctors.map((doctor) => (
                  <Link to={`${doctor.id}`} key={doctor.id}>
                    <div className="col d-flex align-items-center flex-column text-custom-dark">
                      <img
                        src={doctor.image}
                        alt="doctor"
                        className="d-inline-block round-image-hp text-center"
                      />
                      <div className="pt-3">
                        <ul>
                          <li className="text-center fw-semibold fs-5">
                            {doctor.name} {doctor.surname}
                          </li>
                          <li className="text-center text-custom-small">
                            {doctor.specialty_name}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
          <div className="text-center pt-3">
            <Link to="/search">
              <button className="btn btn-custom fw-semibold">Vedi tutti</button>
            </Link>
          </div>
        </section>
      )}

      {/* featured doctors section */}
      <section id="featured-section">
        <div className="container pt-5 text-custom-dark">
          <h3 className="text-center fw-semibold">I nostri medici</h3>
          <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 g-3 mt-5">
            {featuredDoctors.map((doctor) => (
              <Link to={`${doctor.id}`} key={doctor.id}>
                <div className="col d-flex align-items-center flex-column">
                  <img
                    src={doctor.image}
                    alt="doctor"
                    className="d-inline-block round-image-hp text-center"
                  />
                  <div className="pt-3">
                    <ul>
                      <li className="text-center fw-semibold fs-5">
                        {doctor.name} {doctor.surname}
                      </li>
                      <li className="text-center text-custom-small">
                        {doctor.specialty_name}
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* reviews section */}
      <section id="reviews-section">
        <div className="container mt-5 pb-5 pt-5">
          <h3 className="text-center fw-semibold text-custom-light">
            Le esperienze di chi si è affidato a noi
          </h3>
          <div className="row g-3 mt-5">
            {reviews.map((review) => (
              <div key={review.id} className="col-lg-4 col-md-12 col-sm-12">
                <div className="card h-100 text-custom-dark bg-custom-light">
                  <div className="card-body">
                    <h5 className="card-title">{review.username}</h5>
                    <h6 className="card-subtitle mb-2 text-custom-muted">
                      Dott. M. Donati
                    </h6>
                    <p className="card-text">{review.review_text}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* single card col */}
          </div>
        </div>
      </section>

      {/* call to action section */}
      <section id="cta-section">
        <div className="container mt-5 mb-4">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <h3 className="text-center fw-semibold mt-3 text-custom-dark">
                Lavori nel campo della medicina?
              </h3>
              <p className="text-center mt-5 text-custom-dark">
                Unisciti alla nostra piattaforma e connettiti con pazienti che
                cercano professionisti come te! Registrandoti, avrai accesso a
                strumenti avanzati per gestire il tuo profilo, ricevere
                recensioni e ampliare la tua visibilità. Offriamo un ambiente
                sicuro e affidabile per crescere professionalmente e aiutare chi
                ha bisogno delle tue competenze. Non perdere l'opportunità di
                far parte di una comunità dedicata alla salute e al benessere.
                Iscriviti ora e inizia a fare la differenza!
              </p>
            </div>
            <div className="col-lg-5 d-flex flex-column align-items-center">
              <img src="/hero-img.png" alt="" className="cta-img img-fluid" />
              <Link
                to="/registration"
                className="btn btn-custom fw-semibold mt-3 text-light"
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
