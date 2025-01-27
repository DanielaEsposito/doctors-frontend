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
    const url = import.meta.env.VITE_BACKEND_URL + "/" + doctorId;
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
        <div className="mb-4 text-center">
          <h1 className="display-4 text-primary">
            {doctor.doctor.name} {doctor.doctor.surname}
          </h1>
          <p className="text-secondary">{doctor.doctor.description}</p>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Email:</strong> {doctor.doctor.email}
              </li>
              <li className="list-group-item">
                <strong>Città:</strong> {doctor.doctor.city}
              </li>
              <li className="list-group-item">
                <strong>Provincia:</strong> {doctor.doctor.province}
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

        <h3 className="text-primary text-center">Aggiungi una recensione</h3>

        <div className="mb-5">
          <ReviewsForm updateReviews={updateReviews} doctorId={doctorId} />
        </div>

        <div className="text-center mb-4">
          <h3 className="text-primary">Media Recensioni</h3>
          <h1 className="text-warning">
            {reviews.length > 0
              ? (
                  reviews.reduce((acc, review) => acc + review.rating, 0) /
                  reviews.length
                ).toFixed(1) + "⭐"
              : "Nessuna recensione"}
          </h1>
        </div>

        <h2 className="text-primary text-center mb-4">Recensioni</h2>
        <div className="row">
          {reviews.map((review) => (
            <div className="col-md-4 mb-4" key={review.id}>
              <div className="card border-0 shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="text-warning">Voto:</span> {review.rating}{" "}
                    ⭐
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Recensito da: {review.username}
                  </h6>
                  <p className="card-text">"{review.review_text}"</p>
                </div>
                <div className="card-footer bg-light">
                  <small className="text-muted">
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
