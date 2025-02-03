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
        // console.log(data);
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
        <div className="container">
          <h2 className="text-center mt-4">Titolo</h2>
          <div className="container-filters">
            <form className="row  mt-5" onSubmit={handleFormSubmit}>
              <div className="col-5">
                {/* Select per la specializzazione */}
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
              <div className="col-5">
                {/* Select per la provincia */}
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
              <div className="col-2">
                <button className="btn btn-custom">Cerca</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="specialties-doctor">
        <div className="container">
          <h4 className="text-center my-5 fw-semibold text-custom-dark">
            Scopri di più sui nostri dottori
          </h4>

          {/* Gestione caso in cui non ci sono medici */}
          {doctors.length === 0 ? (
            <p className="text-center">
              Nessun medico trovato per questa combinazione di specializzazione
              e provincia.
            </p>
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
                      alt={`nome del dottor ${doctor.name}`}
                    />
                    <div className="card-body">
                      <h4 className="card-text">
                        {doctor.name} {doctor.surname}
                      </h4>
                      <p>{doctor.city}</p>
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
