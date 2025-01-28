<<<<<<< HEAD
export default function RegistrationPage() {
  return (
    <>
      <h1>Registrazione</h1>
    </>
=======
import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    specialty: "",
    address: "",
    email: "",
    phone_number: "",
    description: "",
  });

  const specialties = [
    { id: 1, name: "Anestesiologia" },
    { id: 2, name: "Cardiologia" },
    { id: 3, name: "Dermatologia" },
    { id: 4, name: "Psichiatria" },
    { id: 5, name: "Endocrinologia" },
    { id: 6, name: "Medico di Famiglia" },
    { id: 7, name: "Gastroenterologia" },
    { id: 8, name: "Geriatria" },
    { id: 9, name: "Ematologia" },
    { id: 10, name: "Malattie Infettive" },
    { id: 11, name: "Polmonologia" },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella registrazione del medico");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Medico registrato con successo:", data);
        alert("Registrazione completata con successo!");
        setFormData({
          name: "",
          surname: "",
          specialty: "",
          address: "",
          email: "",
          phone_number: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Errore durante la registrazione:", error);

        alert("Si è verificato un errore. Riprova più tardi.");
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Registrazione Dottore</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          {/* Nome */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Cognome */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="surname" className="form-label">
              Cognome
            </label>
            <input
              type="text"
              className="form-control"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>

          {/* Descrizione */}
          <div className="col-12 mb-3">
            <label htmlFor="description" className="form-label">
              Descrizione
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>

          {/* Specializzazione */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="specialty" className="form-label">
              Specializzazione
            </label>
            <select
              className="form-control"
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              required
            >
              <option value="">Seleziona una specializzazione</option>
              {specialties.map((specialty) => (
                <option key={specialty.id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>

          {/* Indirizzo */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="address" className="form-label">
              Indirizzo
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Numero di telefono */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="phone_number" className="form-label">
              Numero di Telefono
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Bottone */}
        <button
          type="submit"
          className="btn btn-custom fw-semibold d-inline-block text-start px-3"
        >
          Registrazione
        </button>
      </form>
    </div>
>>>>>>> c387dead4a414eb7d27f4387e0f946863b9df8cf
  );
}
