import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import { useState } from "react";

export default function People() {
  const { dataList, setDataList } = useGlobalContext();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [people, setPeople] = useState(dataList[id].people);
  console.log(people);

  const [person, setPerson] = useState({
    id: 0,
    name: "",
    email: "",
    age: 0,
    cf: "",
    cellNumber: 0,
  });
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setPeople(dataList[id].people);
    } else {
      const filteredList = dataList[id].people.filter((person) =>
        person.name.toLowerCase().includes(name.toLocaleLowerCase())
      );
      console.log(filteredList);
      setPeople(filteredList);
    }
  };
  const handleFormSearchChange = (e) => {
    setName(e.target.value);
  };
  const handleFormPersonSubmit = (e) => {
    e.preventDefault();
    const newPerson = [...people, person];
    setPeople(newPerson);
    console.log(newPerson);
    setPerson({
      id: 0,
      name: "",
      email: "",
      age: 0,
      cf: "",
      cellNumber: 0,
    });
    const newDataList = [...dataList];
    newDataList[id].people = [...newPerson];
    console.log(newDataList);

    setDataList(newDataList);
  };

  const handleFormPersonChange = (e) => {
    setPerson({
      ...person,
      id: people.length,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="container my-2">
        <div className="container-white">
          <section id="info-people" className="me-2">
            <div className="container">
              <h2 className="page-title">Lista dei partecipanti al viaggio</h2>
              <div className="row">
                <div className="col-8">
                  <div className="table-container">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="table-title" scope="col">
                            Nome
                          </th>
                          <th className="table-title" scope="col">
                            Stato
                          </th>
                          <th className="table-title" scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {people &&
                          people.map((person) => (
                            <tr key={person.id}>
                              <th scope="row">{person.name}</th>
                              <th className="">
                                <span className="badge badge-status">
                                  In viaggio
                                </span>
                              </th>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#${person.id}`}
                                >
                                  Dettagli Utente
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-4 table-container">
                  <h3 className="information fw-semibold">
                    Informazioni generali
                  </h3>
                  <p>
                    <strong>Numero di partecipanti:</strong> {people.length}
                  </p>
                  <p>
                    <strong>Destinazione:</strong>{" "}
                    {dataList && dataList[id].destination}
                  </p>
                  <p>
                    <strong>Accompagnatore: </strong>
                    {dataList && dataList[id].tutor}
                  </p>
                  <form
                    className="my-5 d-flex align-items-end g-3"
                    onSubmit={handleSearchSubmit}
                  >
                    <div className="form-search">
                      <label className="form-label " htmlFor="search">
                        Cerca il singolo partecipante:
                      </label>
                      <input
                        name="name"
                        id="search"
                        type="text"
                        className="form-control"
                        onChange={handleFormSearchChange}
                      />
                    </div>
                    <button className="btn btn-primary ms-2">Cerca</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section id="form-partecipanti ">
            <div className="container pb-5">
              <h2 className="page-title">Aggiungi un nuovo partecipante </h2>
              <div className="form-container">
                <form
                  className="row align-items-end g-3 "
                  onSubmit={handleFormPersonSubmit}
                >
                  <div className="col-3 mb-3">
                    <label htmlFor="name" className="form-label">
                      Nome e Cognome
                    </label>
                    <input
                      name="name"
                      onChange={handleFormPersonChange}
                      value={person.name}
                      type="text"
                      className="form-control"
                      id="name"
                      aria-describedby="destinazione"
                    />
                  </div>
                  <div className="col-3 mb-3">
                    <label htmlFor="email" className="form-label">
                      email
                    </label>
                    <input
                      name="email"
                      onChange={handleFormPersonChange}
                      value={person.email}
                      type="text"
                      className="form-control"
                      id="email"
                    />
                  </div>
                  <div className="col-3 mb-3">
                    <label htmlFor="age" className="form-label">
                      age
                    </label>
                    <input
                      name="age"
                      onChange={handleFormPersonChange}
                      type="text"
                      className="form-control"
                      id="age"
                      value={person.age}
                    />
                  </div>
                  <div className="col-3 mb-3">
                    <label htmlFor="cf" className="form-label">
                      Codice Fiscale
                    </label>
                    <input
                      name="cf"
                      onChange={handleFormPersonChange}
                      type="text"
                      className="form-control"
                      id="cf"
                      value={person.cf}
                    />
                  </div>
                  <div className="col-3 mb-3">
                    <label htmlFor="cellNumber" className="form-label">
                      Numero di telefono
                    </label>
                    <input
                      name="cellNumber"
                      onChange={handleFormPersonChange}
                      type="text"
                      className="form-control"
                      id="cellNumber"
                      value={person.cellNumber}
                    />
                  </div>
                  <div className="col-3 mb-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      {people &&
        people.map((person, index) => (
          <>
            <div
              key={`p${index}`}
              className="modal fade "
              id={`${person.id}`}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      {person.name}
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h3 className="subtitle-modal">Dettagli Partecipante</h3>
                    <h4>Nome e Cognome:</h4>
                    <p>{person.name}</p>
                    <h4>Età:</h4>
                    <p>{person.age}</p>
                    <h4>Codice fiscale :</h4>
                    <p>{person.cf}</p>
                    <h4>Numero di telefono :</h4>
                    <p>{person.cellNumber}</p>
                    <h4>E-mail :</h4>
                    <p>{person.email}</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </>
  );
}
