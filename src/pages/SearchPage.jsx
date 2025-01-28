import { useEffect, useState } from "react";

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
          <div className="tags-container d-flex g-3">
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                className="badge bg-body-secondary m-3"
                onClick={() => showDoctors(specialty.id)}
              >
                {specialty.specialty_name}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section id="specialties-doctor">
        <div className="container">
          <div className="row row-cols-3 g-3">
            {doctor.map((doctor) => (
              <div key={doctor.id} className="col">
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
