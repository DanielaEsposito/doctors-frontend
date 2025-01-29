import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    specialty_id: "",
    email: "",
    phone_number: "",
    address: "",
    description: "",
    city: "",
    province: "",
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

    console.log("Dati inviati al backend:", formData);

    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log("HTTP Status Code:", response.status);
        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Risposta del backend:", data);
        alert("Registrazione completata con successo!");

        setFormData({
          name: "",
          surname: "",
          specialty_id: "",
          email: "",
          phone_number: "",
          address: "",
          description: "",
          city: "",
          province: "",
        });
      })
      .catch((error) => {
        console.error("Errore durante la registrazione:", error);
        alert(
          "Si è verificato un errore durante la registrazione. Riprova più tardi."
        );
      });
  };

  return (
    <div className="container mt-5 text-custom-dark">
      <h1 className="text-center fw-bold mb-5">Unisciti al team</h1>
      <div className="row">
        {/* Colonna di sinistra */}
        <div className="col-12 col-lg-6">
          <form
            onSubmit={handleSubmit}
            className="bg-light p-4 rounded shadow-lg"
          >
            <div className="row mb-3">
              {/* Nome */}
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Cognome */}
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="surname" className="form-label fw-bold">
                  Cognome
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Descrizione */}
              <div className="col-12 mb-3">
                <label htmlFor="description" className="form-label fw-bold">
                  Descrizione
                </label>
                <textarea
                  className="form-control rounded-3"
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
                <label htmlFor="specialty_id" className="form-label fw-bold">
                  Specializzazione
                </label>
                <select
                  className="form-control rounded-pill"
                  id="specialty"
                  name="specialty_id"
                  value={formData.specialty_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleziona una specializzazione</option>
                  {specialties.map((specialty) => (
                    <option key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Indirizzo */}
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="address" className="form-label fw-bold">
                  Indirizzo
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Città */}
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="city" className="form-label fw-bold">
                  Città
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Provincia */}
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="province" className="form-label fw-bold">
                  Provincia
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Numero di telefono */}
              <div className="col-12 col-md-6 mb-4">
                <label htmlFor="phone_number" className="form-label fw-bold">
                  Numero Di Telefono
                </label>
                <input
                  type="tel"
                  className="form-control rounded-pill"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Bottone */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-custom fw-semibold d-inline-block mb-2 px-4 py-2 transition-all hover-shadow"
              >
                REGISTRATI
              </button>
            </div>
          </form>
        </div>

        {/* Colonna di destra */}
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
          <div className="container">
            <ul className="list-unstyled">
              <li className="d-flex fs-5 align-items-center mb-3">
                <i className="fa-solid fa-star text-warning me-2"></i>
                Entra a far parte di una vasta comunità di professionisti della
                salute.
              </li>
              <li className="d-flex fs-5 align-items-center mb-3">
                <i className="fa-solid fa-star text-warning me-2"></i>
                Registra gratuitamente il tuo profilo e scopri soluzioni
                innovative per gestire il tuo studio in modo più efficiente.
              </li>
              <li className="d-flex fs-5 align-items-center mb-3">
                <i className="fa-solid fa-star text-warning me-2"></i>
                Connettiti con un numero sempre maggiore di pazienti.
              </li>
              <li className="d-flex fs-5 align-items-center mb-3">
                <i className="fa-solid fa-star text-warning me-2"></i>
                Crea un profilo distintivo e fai emergere le tue competenze tra
                i medici della tua zona.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
