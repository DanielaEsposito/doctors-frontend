import { useEffect, useState } from "react";
import {
  Link,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";

export default function SearchPage() {
  const [provinces, setProvinces] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [doctors, setDoctors] = useState([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("specialtyId");

    if (id) {
      console.log("id from url: " + id);
      setSelectedSpecialty(id);
      fetchDoctors(id, "");
    }
  }, [searchParams]);

  // # fetch doctors

  const fetchDoctors = (selectedSpecialty, selectedProvince) => {
    let url = `http://localhost:3000/search`;

    let queryParams = [];

    if (selectedProvince) {
      queryParams.push(`provinceId=${selectedProvince}`);
      // console.log("selectedProvince:" + selectedProvince);
    }
    if (selectedSpecialty) {
      queryParams.push(`specialtyId=${selectedSpecialty}`);
      // console.log("selectedSpecialty:" + selectedSpecialty);
    }
    if (queryParams.length > 0) {
      url += "?" + queryParams.join("&");
      // console.log("queryParamas:" + queryParams);
    }

    console.log("fetch url: " + url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetched doctors: " + data.resultsDoctor);
        setDoctors(data.resultsDoctor);
        console.log(data);
      });
  };

  // # fetch provinces and specialties

  useEffect(() => {
    fetch("http://localhost:3000/provinces")
      .then((res) => res.json())
      .then((data) => setProvinces(data.results));

    fetch("http://localhost:3000/specialties")
      .then((res) => res.json())
      .then((data) => setSpecialties(data.results));
  }, []);

  // # search doctors

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetchDoctors(selectedSpecialty, selectedProvince);
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
                  className="form-select mb-3"
                  value={selectedSpecialty}
                  onChange={handleSpecialtyChange}
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
                  className="form-select mb-3"
                  value={selectedProvince}
                  onChange={handleProvinceChange}
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

          {/* Gestione caso in cui non ci sono medici */}
          {doctors.length === 0 ? (
            <p className="text-center">
              Nessun medico trovato per questa combinazione di specializzazione
              e provincia.
            </p>
          ) : (
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-3 justify-content-center pb-5">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="col d-flex justify-content-center doctors-row"
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
                        {doctor.review_count !== 0 ? (
                          <>
                            {doctor.average_rating}{" "}
                            <i className="fa-solid fa-star text-warning"></i> (
                            {doctor.review_count} recensioni)
                          </>
                        ) : (
                          "Nessuna recensione disponibile"
                        )}
                      </p>
                      <Link
                        to={`/${doctor.id}`}
                        className="btn btn-sm btn-custom text-light "
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
