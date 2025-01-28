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
    { id: 4, name: "Psischiatria" },
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
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">REGISTRAZIONE MEDICO</h1>
      <div className="row">
        {/* Colonna di sinistra */}
        <div className="col-12 col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              {/* Nome */}
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="name" className="form-label fw-bold">
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
                <label htmlFor="surname" className="form-label fw-bold">
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
                <label htmlFor="description" className="form-label fw-bold">
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
                <label htmlFor="specialty" className="form-label fw-bold">
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
                <label htmlFor="email" className="form-label fw-bold">
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
              <div className="col-12 col-md-6 mb-4">
                <label htmlFor="phone_number" className="form-label fw-bold">
                  Numero Di Telefono
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
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-custom fw-semibold d-inline-block mb-2 px-3"
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
