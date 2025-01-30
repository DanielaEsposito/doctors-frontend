import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SearchPage() {
  // const [specialties, setSpecialties] = useState([]);
  const [doctor, setDoctors] = useState([]);
  const { id } = useParams();
  console.log(id);

  // useEffect(() => {
  //   fetch("http://localhost:3000/specialties")
  //     .then((res) => res.json())
  //     .then((data) => setSpecialties(data.results));
  // }, []);

  // console.log(specialties);

  // const showDoctors = (specialtyId) => {
  //   fetch(`http://localhost:3000/${specialtyId}/specialties`)
  //     .then((res) => res.json())
  //     .then((data) => setDoctors(data.specialty));
  // };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/${id}/specialties`)
        .then((res) => res.json())
        .then((data) => {
          setDoctors(data.specialty);
          console.log("data" + data);
        });
    }
  }, [id]);

  console.log("specialtyId" + id);

  console.log("doctor" + doctor);

  return (
    <div className="wrapper">
      {/* <section id="specialties-tags">
        <div className="container text-custom-dark">
          <h1 className="mb-3 text-center  fw-bold">Specializzazioni</h1>
          <h5 className="mb-5 text-center">
            Scegli una specializzazione e scopri i nostri specialisti
          </h5>
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
      </section> */}
      <section id="specialties-doctor">
        <div className="container">
          {doctor.length === 0 && (
            <h4 className="text-center my-5 fw-semibold text-custom-dark">
              Scopri di più sui nostri dottori
            </h4>
          )}
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-2 justify-content-center ">
            {doctor.map((doctor) => (
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
        </div>
      </section>
    </div>
  );
}
