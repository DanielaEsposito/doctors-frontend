import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [specialties, setSpecialties] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/specialties")
      .then((res) => res.json())
      .then((data) => setSpecialties(data.results));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.results.slice(0, 3)));
  }, []);
  console.log(reviews + "recensioni");

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

  useEffect(() => {
    console.log(featuredDoctors);
  }, [featuredDoctors]);

  // # fetch specialties

  return (
    <div className="wrapper">
      {/* hero section */}
      <div className="background-hero"></div>
      <section id="hero-section">
        <div className="container pb-5 pt-5">
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
                {specialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.specialty_name}>
                    {specialty.specialty_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-1">
              <button className="btn btn-custom fw-semibold">cerca</button>
            </div>
          </div>
        </div>
      </section>

      {/* featured doctors section */}
      <section id="featured-section">
        <div className="container pt-5">
          <h3 className="text-center fw-semibold">I nostri medici</h3>
          <div className="row row-cols-5">
            {featuredDoctors.map((doctor) => (
              <Link to={`${doctor.id}`}>
                <div
                  key={doctor.id}
                  className="col d-flex align-items-center flex-column"
                >
                  <img
                    src={doctor.image}
                    alt="doctor"
                    className="d-inline-block round-image-hp text-center"
                  />
                  <div>
                    <p className="text-center fs-5">
                      {doctor.name} {doctor.surname}
                    </p>
                    <p className="text-center">{doctor.specialty_id}</p>
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
          <h3 className="text-center fw-semibold text-light">
            Cosa dicono altri utenti
          </h3>
          <div className="row">
            {reviews.map((review) => (
              <div key={review.id} className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{review.username}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
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
