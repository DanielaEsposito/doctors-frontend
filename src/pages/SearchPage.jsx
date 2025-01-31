import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SearchPage() {
  const [specialties, setSpecialties] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Variabili di stato per i filtri che finiscono nell'url per il backend. sono i valori delle select
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);

  const { id } = useParams();

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Carica le specializzazioni
  useEffect(() => {
    fetch("http://localhost:3000/specialties")
      .then((res) => res.json())
      .then((data) => setSpecialties(data.results));
  }, []);

  // Carica le province
  useEffect(() => {
    fetch("http://localhost:3000/provinces")
      .then((res) => res.json())
      .then((data) => setProvinces(data.results));
  }, []);

  // Effettua la fetch se arriva un `id` dalla home
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
        .catch((error) => {
          console.error("Error fetching specialty:", error);
          setDoctors([]);
        });

      setFormSubmitted(true); // Indica che la ricerca è stata effettuata
    }
  }, [id]);

  // Gestisce il submit del form
  // Gestisce il submit del form
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Se è selezionata una specializzazione o id è presente
    if (selectedSpecialty || id || selectedProvince) {
      let url;
      if (selectedSpecialty && selectedProvince) {
        // Se è selezionata anche una provincia, cerca i medici per specializzazione e provincia
        url = `http://localhost:3000/specialties/${
          selectedSpecialty ? selectedSpecialty : id
        }/provinces/${selectedProvince}`;
      } else if (selectedProvince) {
        url = `http://localhost:3000/specialties/provinces/${selectedProvince}`;
      }

      //se è selezionata una provincia ma non una specializzazione
      else {
        // Se non è selezionata una provincia, cerca i medici solo per specializzazione
        url = `http://localhost:3000/specialties/${
          selectedSpecialty ? selectedSpecialty : id
        }`;
      }

      // Effettua la fetch
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok" && data.doctors && data.doctors.length > 0) {
            setDoctors(data.doctors); // Salva i medici nello stato
          } else {
            setDoctors([]); // Se non ci sono medici, imposta l'array vuoto
          }
        })
        .catch((error) => {
          console.error("Error fetching doctors:", error);
          setDoctors([]); // Imposta l'array vuoto in caso di errore
        });

      setFormSubmitted(true); // Indica che la ricerca è stata effettuata
    }
  };

  // Gestisce il cambio di specializzazione
  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  // Gestisce il cambio di provincia
  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
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
                  value={selectedSpecialty || ""}
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
                  value={selectedProvince || ""}
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
                <button className="btn btn-custom ">Cerca</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="specialties-doctor mt-5">
        <div className="container">
          <h4 className="text-center my-5 fw-semibold text-custom-dark">
            Scopri di più sui nostri dottori
          </h4>

          {/* Gestione caso in cui non ci sono medici */}
          {formSubmitted && doctors.length === 0 ? (
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
                      <span className="fw-semibold">
                        Numero di recensioni ricevute:
                      </span>
                      <span> {doctor.reviewCount}</span>
                      <p className="fw-semibold">Media recensioni :</p>
                      <p>
                        <i className="fa-solid fa-star ms-2 text-warning"></i>
                        {doctor.averageRating}{" "}
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
