import { useState } from "react";

export default function ReviewsForm({ doctorId, updateReviews }) {
  const formInitialData = {
    username: "",
    email: "",
    rating: "",
    text: "",
  };

  const [reviewForm, setReviewForm] = useState(formInitialData);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (validateForm(reviewForm)) {
      const storeReviewUrl = `http://localhost:3000/${doctorId}/review`;

      const payload = {
        doctor_id: doctorId,
        username: reviewForm.username,
        email: reviewForm.email,
        rating: parseInt(reviewForm.rating),
        review_text: reviewForm.text,
      };

      fetch(storeReviewUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Errore API: ${res.status}`);
          }
          return res.json();
        })
        .then(() => {
          const getReviewsUrl = `http://localhost:3000/${doctorId}`;
          fetch(getReviewsUrl)
            .then((res) => res.json())
            .then((data) => {
              updateReviews(data.doctor.reviews);
            });
          setReviewForm(formInitialData);
        })
        .catch((err) => {
          console.error("Errore:", err);
        });
    } else {
      alert("Il form non è valido");
    }
  };

  const validateForm = ({ username, email, text, rating }) => {
    if (!username || !email || !text) return false;
    const voteInt = parseInt(rating);
    if (isNaN(voteInt) || voteInt < 1 || voteInt > 5) return false;
    return true;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setReviewForm({
      ...reviewForm,
      [name]: value,
    });
  };

  return (
    <form
      className="row g-3 align-items-end mb-3"
      onSubmit={handleReviewSubmit}
    >
      <div className="col-12 col-md-6 col-lg-4 fw-semibold">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          required
          className="form-control"
          id="username"
          name="username"
          value={reviewForm.username}
          onChange={handleFormChange}
        />
      </div>

      <div className="col-12 col-md-6 col-lg-4 fw-semibold">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          required
          className="form-control"
          id="email"
          name="email"
          value={reviewForm.email}
          onChange={handleFormChange}
        />
      </div>

      <div className="col-12 col-md-6 col-lg-4 fw-semibold d-flex flex-column justify-content-start">
        <label htmlFor="rating" className="form-label">
          Voto (1-5)
        </label>
        <input
          type="number"
          required
          className="form-control"
          id="rating"
          name="rating"
          min="1"
          max="5"
          value={reviewForm.rating}
          onChange={handleFormChange}
        />
      </div>

      <div className="col-12 col-md-6 col-lg-6 fw-semibold">
        <label htmlFor="text" className="form-label">
          Vuoi aggiungere qualcosa?
        </label>
        <textarea
          className="form-control h-100"
          id="text"
          name="text"
          value={reviewForm.text}
          required
          onChange={handleFormChange}
          placeholder="La tua opinione e' importante"
          rows="5"
        ></textarea>
      </div>
      <div className="col-lg-6"></div>

      <div className="col-12 col-md-12 col-lg-1 d-flex align-items-end justify-content-center">
        <button className="btn btn-custom" type="submit">
          Invia
        </button>
      </div>
    </form>
  );
}
