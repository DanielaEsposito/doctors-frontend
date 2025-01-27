import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewsForm from "../../reviews/ReviewsForm.jsx";

export default function MovieShowPage() {
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
      <div className="container py-4">
        {/* stampa nome dottore */}
        <h1>{doctor.doctor.name}</h1>
        <h1>{doctor.doctor.surname}</h1>
        <h1>{doctor.doctor.email}</h1>
        <h1>{doctor.doctor.city}</h1>
        <h1>{doctor.doctor.province}</h1>
        <h1>{doctor.doctor.phone_number}</h1>
        <h1>{doctor.doctor.address}</h1>
        <h1>{doctor.doctor.description}</h1>

        {/* calcola media recensioni */}

        <div className="mt-5">
          <ReviewsForm updateReviews={updateReviews} doctorId={doctorId} />
          <h3>Media recensioni</h3>
          <h1>
            {reviews.length > 0
              ? (
                  reviews.reduce((acc, review) => acc + review.rating, 0) /
                  reviews.length
                ).toFixed(1) + "⭐"
              : "Nessuna recensione"}
          </h1>
          <h2>Recensioni</h2>

          <div className="row">
            {reviews.map((review) => (
              <div className="col-md-4 mb-4" key={review.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Voto: {review.rating} ⭐</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Recensito da: {review.username}
                    </h6>
                    <p className="card-text">"{review.review_text}"</p>
                  </div>
                  <div className="card-footer">
                    <p className="text-muted">
                      Recensito il:{" "}
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
