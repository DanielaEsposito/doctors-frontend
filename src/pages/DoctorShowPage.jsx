import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewsForm from "../../reviews/ReviewsForm.jsx";

export default function DoctorShowPage() {
  const { id: doctorId } = useParams();
  const [doctor, setDoctor] = useState({ doctor: {} });
  const [reviews, setReviews] = useState([]);

  const updateReviews = (newReviews) => {
    setReviews(newReviews);
  };

  useEffect(() => {
    const url = `http://localhost:3000/${doctorId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDoctor(data);
        setReviews(data.doctor.reviews);
      });
  }, []);
  return (
    <>
      <div className="container py-5">
        <div className="card doctor-card mb-5 shadow-lg border-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img
                src={doctor.doctor.image}
                className="img-fluid rounded-start doctor-show-img w-100"
                alt="Doctor"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="d-flex flex-column align-items-start">
                  <h1 className="display-5 text-custom-dark fw-semibold mb-3 ms-3">
                    {doctor.doctor.name} {doctor.doctor.surname}
                  </h1>
                </div>
                <div className="d-flex flex-column">
                  <p className="card-text text-custom-muted ms-3">
                    {doctor.doctor.description}
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Email:</strong> {doctor.doctor.email}
                    </li>
                    <li className="list-group-item">
                      <strong>Città:</strong> {doctor.doctor.city}
                    </li>
                    <li className="list-group-item">
                      <strong>Provincia:</strong> {doctor.doctor.province_name}
                    </li>
                    <li className="list-group-item">
                      <strong>Telefono:</strong> {doctor.doctor.phone_number}
                    </li>
                    <li className="list-group-item">
                      <strong>Indirizzo:</strong> {doctor.doctor.address}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-custom-dark text-center fw-semibold pb-3">
          Aggiungi una recensione
        </h3>

        <div className="mb-3">
          <ReviewsForm updateReviews={updateReviews} doctorId={doctorId} />
        </div>

        <div className="text-center mb-4 pt-2">
          <h3 className="text-custom-dark fw-semibold">Media Recensioni</h3>
          <h1 className="text-warning pt-2">
            {reviews.length > 0
              ? (
                  reviews.reduce((acc, review) => acc + review.rating, 0) /
                  reviews.length
                ).toFixed(1)
              : "Nessuna recensione"}
            <i class="fa-solid fa-star"></i>
          </h1>
        </div>

        <h2 className="text-custom-dark text-center mb-4 fw-semibold">
          Recensioni
        </h2>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
          {reviews.map((review) => (
            <div className="mb-4" key={review.id}>
              <div className="card border-0 shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="text-custom-dark">Voto:</span>{" "}
                    {review.rating}{" "}
                    <i class="fa-solid fa-star text-warning"></i>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-custom-muted">
                    Recensito da: {review.username}
                  </h6>
                  <p className="card-text">"{review.review_text}"</p>
                </div>
                <div className="card-footer bg-light">
                  <small className="text-custom-muted">
                    Recensito il:{" "}
                    {new Date(review.created_at).toLocaleDateString()}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
