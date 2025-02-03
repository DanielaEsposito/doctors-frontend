import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SearchPage() {
  const [specialties, setSpecialties] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const { id } = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/specialties")
      .then((res) => res.json())
      .then((data) => setSpecialties(data.results));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/provinces")
      .then((res) => res.json())
      .then((data) => setProvinces(data.results));
  }, []);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/${id}/specialties`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok" && data.specialty) {
            setDoctors(data.specialty);
          } else {
            setDoctors([]);
          }
        })
        .catch(() => setDoctors([]));

      setFormSubmitted(true);
    }
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedSpecialty || id || selectedProvince) {
      let url;
      if (selectedSpecialty && selectedProvince) {
        url = `http://localhost:3000/specialties/${
          selectedSpecialty ? selectedSpecialty : id
        }/provinces/${selectedProvince}`;
      } else if (selectedProvince) {
        url = `http://localhost:3000/specialties/provinces/${selectedProvince}`;
      } else {
        url = `http://localhost:3000/specialties/${
          selectedSpecialty ? selectedSpecialty : id
        }`;
      }

      fetch(url)
        .then((res) => res.json())
        .then((data) =>
          setDoctors(data.status === "ok" ? data.doctors || [] : [])
        )
        .catch(() => setDoctors([]));

      setFormSubmitted(true);
    }
  };

  return (
    <div className="wrapper">
      <section id="filter">
        <div className="container py-5">
          <h2 className="text-center text-custom-dark fw-bold mb-4">
            Cerca i tuoi medici preferiti
          </h2>
          <div className="container-filters">
            <form className="row mt-5" onSubmit={handleFormSubmit}>
              <div className="col-6">
                <select
                  className="form-select mb-3"
                  value={selectedSpecialty || ""}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  <option value="">Seleziona una specializzazione</option>
                  {specialties.map((specialty) => (
                    <option key={specialty.id} value={specialty.id}>
                      {specialty.specialty_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <select
                  className="form-select mb-3"
                  value={selectedProvince || ""}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  <option value="">Seleziona una provincia</option>
                  {provinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.province_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button className="btn btn-custom mt-2">Cerca</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="specialties-doctor" className="mt-5">
        <div className="container">
          <h4 className="text-center my-5 fw-semibold text-custom-dark">
            Scopri di più sui nostri dottori
          </h4>

          {formSubmitted && doctors.length === 0 ? (
            <p className="text-center">Nessun medico trovato.</p>
          ) : (
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-2 justify-content-center">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="col d-flex justify-content-center doctors-row mb-3"
                >
                  <div className="card card-sd">
                    <img
                      src={doctor.image}
                      className="card-img-top"
                      alt={`Dott. ${doctor.name}`}
                    />
                    <div className="card-body">
                      <h4 className="card-text">
                        {doctor.name} {doctor.surname}
                      </h4>
                      <p>{doctor.city}</p>
                      <p>
                        {doctor.reviewCount > 0
                          ? `${parseFloat(doctor.averageRating).toFixed(
                              1
                            )} ⭐ (${doctor.reviewCount})`
                          : "Nessuna recensione disponibile"}
                      </p>
                      <Link
                        to={`/${doctor.id}`}
                        className="tags ms-0 text-custom-light text-light fw-semibold"
                      >
                        Dettagli
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
