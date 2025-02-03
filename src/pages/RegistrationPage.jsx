import React, { useState, useEffect } from "react";

const RegistrationForm = () => {
  const [provinces, setProvinces] = useState([]);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    specialty_id: "",
    email: "",
    phone_number: "",
    address: "",
    description: "",
    city: "",
    province_id: "",
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

  useEffect(() => {
    fetch("http://localhost:3000/provinces")
      .then((res) => res.json())
      .then((data) => setProvinces(data.results));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]*$/;

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Il nome deve essere di almeno 3 lettere.";
    }
    if (!formData.surname || formData.surname.length < 3) {
      newErrors.surname = "Il cognome deve essere di almeno 3 lettere.";
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Email non valida.";
    }
    if (!formData.phone_number || !phoneRegex.test(formData.phone_number)) {
      newErrors.phone_number = "Numero di telefono non valido.";
    }
    if (
      formData.phone_number &&
      formData.phone_number.includes("+") &&
      formData.phone_number.indexOf("+") !== 0
    ) {
      newErrors.phone_number = "Il simbolo '+' deve essere all'inizio.";
    }
    if (!formData.address || formData.address.length < 5) {
      newErrors.address = "L'indirizzo deve essere di almeno 5 lettere.";
    }
    if (!formData.description) {
      newErrors.description = "La descrizione è obbligatoria.";
    }
    if (!formData.city) {
      newErrors.city = "La città è obbligatoria.";
    }
    if (!formData.province_id) {
      newErrors.province_id = "La provincia è obbligatoria.";
    }
    if (!formData.specialty_id) {
      newErrors.specialty_id = "La specializzazione è obbligatoria.";
    }
    //check if email already exists

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validazione del form
    if (!validateForm()) {
      return;
    }

    // Invia i dati al backend
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.message || "Errore durante la registrazione");
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Risposta del backend:", data);
        alert("Registrazione completata con successo!");

        // Resetta il form
        setFormData({
          name: "",
          surname: "",
          specialty_id: "",
          email: "",
          phone_number: "",
          address: "",
          description: "",
          city: "",
          province_id: "",
        });
      })
      .catch((error) => {
        console.error("Errore durante la registrazione:", error);

        // Mostra l'errore all'utente
        if (error.message === "L'email è già presente nel sistema") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: error.message,
          }));
        } else {
          alert(
            "Si è verificato un errore durante la registrazione. Riprova più tardi."
          );
        }
      });
  };

  const handleProvinceChange = (e) => {
    const selectedValue = e.target.value;

    setFormData({
      ...formData,
      province_id: selectedValue,
    });
  };

  return (
    <div className="container mt-5 text-custom-dark ">
      <h1 className="text-center fw-bold mb-5 tags-container">
        Unisciti al team
      </h1>
      <div className="row doctors-row-HOME ">
        {/* Colonna di sinistra */}
        <div className="col-12 col-lg-6 ">
          <form
            onSubmit={handleSubmit}
            className="bg-light p-4 rounded shadow-lg mb-3"
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
                />
                {errors.name && (
                  <div className="text-danger">{errors.name}</div>
                )}
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
                />
                {errors.surname && (
                  <div className="text-danger">{errors.surname}</div>
                )}
              </div>

              {/* Descrizione */}
              <div className="col-12 mb-3">
                <label htmlFor="description" className="form-label fw-bold">
                  Descrizione
                </label>
                <textarea
                  className="form-control h-100 rounded-4"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
                {errors.description && (
                  <div className="text-danger">{errors.description}</div>
                )}
              </div>

              {/* Specializzazione */}
              <div className="col-12 col-md-6 mb-3 mt-4">
                <label htmlFor="specialty_id" className="form-label fw-bold">
                  Specializzazione
                </label>
                <select
                  className="form-select rounded-pill"
                  id="specialty"
                  name="specialty_id"
                  value={formData.specialty_id}
                  onChange={handleChange}
                >
                  <option value="">Seleziona una specializzazione</option>
                  {specialties.map((specialty) => (
                    <option key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </option>
                  ))}
                </select>
                {errors.specialty_id && (
                  <div className="text-danger">{errors.specialty_id}</div>
                )}
              </div>

              {/* Indirizzo */}
              <div className="col-12 col-md-6 mb-3 mt-4">
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
                />
                {errors.address && (
                  <div className="text-danger">{errors.address}</div>
                )}
              </div>

              {/* Città */}
              <div className="col-12 col-md-6 mb-2">
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
                />
                {errors.city && (
                  <div className="text-danger">{errors.city}</div>
                )}
              </div>

              {/* Provincia */}
              <div className="col-12 col-md-6 mb-2">
                <label htmlFor="province_id" className="form-label fw-bold">
                  Provincia
                </label>
                <select
                  className="form-select rounded-pill mb-3"
                  name="province_id"
                  value={formData.province_id}
                  onChange={handleProvinceChange}
                >
                  <option value="">Seleziona una provincia</option>
                  {provinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.province_name}
                    </option>
                  ))}
                </select>
                {errors.province_id && (
                  <div className="text-danger">{errors.province_id}</div>
                )}
              </div>

              {/* Email */}
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>

              {/* Numero di telefono */}
              <div className="col-12 col-md-6 mb-3">
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
                />
                {errors.phone_number && (
                  <div className="text-danger">{errors.phone_number}</div>
                )}
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
