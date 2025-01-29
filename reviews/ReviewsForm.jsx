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
      className="row g-3 align-items-end flex-nowrap mb-3"
      onSubmit={handleReviewSubmit}
    >
      <div className="col-md-3">
        <label htmlFor="username" className="form-label">
          Nome
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

      <div className="col-md-3">
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

      <div className="col-md-2">
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

      <div className="col-md-3">
        <label htmlFor="text" className="form-label">
          Testo
        </label>
        <textarea
          className="form-control"
          id="text"
          name="text"
          value={reviewForm.text}
          required
          onChange={handleFormChange}
        ></textarea>
      </div>

      <div className="col-md-1 d-flex align-items-end">
        <button className="btn btn-primary w-100" type="submit">
          Invia
        </button>
      </div>
    </form>
  );
}
