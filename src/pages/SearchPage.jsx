import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function SearchPage() {
  const [specialties, setSpecialties] = useState([]);
  const [doctor, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/specialties")
      .then((res) => res.json())
      .then((data) => setSpecialties(data.results));
  }, []);
  console.log(specialties);

  const showDoctors = (specialtyId) => {
    fetch(`http://localhost:3000/${specialtyId}/specialties`)
      .then((res) => res.json())
      .then((data) => setDoctors(data.specialty));
  };
  console.log(doctor);

  return (
    <div className="wrapper">
      <section id="specialties-tags">
        <div className="container">
          <h2 className="mb-3">Specialties</h2>
          <h4 className="mb-5">
            Choose the specialization you are interested in and browse through
            the various doctors.
          </h4>
          <div className="tags-container d-flex g-3">
            {specialties.map((specialty) => (
              <span
                key={specialty.id}
                className="tags"
                onClick={() => showDoctors(specialty.id)}
              >
                {specialty.specialty_name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="specialties-doctor">
        <div className="container">
          <div className="row row-cols-3 g-3">
            {doctor.map((doctor) => (
              <div key={doctor.id} className="col  doctors-row">
                <div className="card">
                  <img
                    src={doctor.image}
                    className="card-img-top"
                    alt={`nome del dottor ${doctor.name}`}
                  />
                  <div className="card-body">
                    <h5 className="card-text">
                      {doctor.name} {doctor.surname}
                    </h5>
                    <h5>{doctor.city}</h5>
                    <Link to={`/${doctor.id}`} className="tags">
                      Show detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
