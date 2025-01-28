import { useState } from "react";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    description: "",
    specialty: "",
    address: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Registrazione Dottore</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="cognome" className="form-label">
              Cognome
            </label>
            <input
              type="text"
              className="form-control"
              id="cognome"
              name="cognome"
              value={formData.cognome}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="descrizione" className="form-label">
            Descrizione
          </label>
          <textarea
            className="form-control"
            id="descrizione"
            name="descrizione"
            rows="3"
            value={formData.descrizione}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="specializzazione" className="form-label">
            Specializzazione
          </label>
          <input
            type="text"
            className="form-control"
            id="specializzazione"
            name="specializzazione"
            value={formData.specializzazione}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="indirizzo" className="form-label">
            Indirizzo
          </label>
          <input
            type="text"
            className="form-control"
            id="indirizzo"
            name="indirizzo"
            value={formData.indirizzo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
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

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Numero di Telefono
          </label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-custom fw-semibold d-inline-block text-start px-3"
        >
          Registrati
        </button>
      </form>
    </div>
  );
}
