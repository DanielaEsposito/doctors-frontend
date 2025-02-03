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
          setDoctors(data.status === "ok" ? data.specialty || [] : []);
        })
        .catch(() => setDoctors([]));

      setFormSubmitted(true);
    }
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedSpecialty || id || selectedProvince) {
      let url =
        selectedSpecialty && selectedProvince
          ? `http://localhost:3000/specialties/${
              selectedSpecialty || id
            }/provinces/${selectedProvince}`
          : selectedProvince
          ? `http://localhost:3000/specialties/provinces/${selectedProvince}`
          : `http://localhost:3000/specialties/${selectedSpecialty || id}`;

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
          <h1 className="text-center text-custom-dark fw-bold mb-4">
            Cerca i tuoi medici preferiti
          </h1>
          <div className="container-filters">
            <form className="row mt-4 g-3" onSubmit={handleFormSubmit}>
              <div className="col-md-6 col-12">
                <select
                  className="form-select"
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
              <div className="col-md-6 col-12">
                <select
                  className="form-select"
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

      <section id="specialties-doctor" className="mt-4">
        <div className="container">
          <h4 className="text-center my-4 fw-semibold text-custom-dark">
            Scopri di più sui nostri dottori
          </h4>

          {formSubmitted && doctors.length === 0 ? (
            <p className="text-center">Nessun medico trovato.</p>
          ) : (
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-3 justify-content-center">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="col d-flex justify-content-center"
                >
                  <div className="card card-sd">
                    <img
                      src={doctor.image}
                      className="card-img-top"
                      alt={`Dott. ${doctor.name}`}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">
                        {doctor.name} {doctor.surname}
                      </h5>
                      <p className="mb-1">{doctor.city}</p>
                      <p className="text-muted small">
                        {doctor.reviewCount > 0
                          ? `${parseFloat(doctor.averageRating).toFixed(
                              1
                            )} ⭐ (${doctor.reviewCount} recensioni)`
                          : "Nessuna recensione disponibile"}
                      </p>
                      <Link
                        to={`/${doctor.id}`}
                        className="btn btn-sm btn-outline-primary"
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
