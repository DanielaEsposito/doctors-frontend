import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import { useState } from "react";

export default function VoyageList() {
  const { dataList, setDataList } = useGlobalContext();

  const [inputValue, setInputValue] = useState({
    id: 0,
    destination: "",
    dateStart: "",
    dateFinish: "",
    people: [],
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newList = [...dataList, inputValue];
    setDataList(newList);
    console.log(newList);
    setInputValue({
      id: 0,
      destination: "",
      dateStart: "",
      dateFinish: "",
      people: [],
    });
  };
  const handleFormChange = (e) => {
    setInputValue({
      ...inputValue,
      id: dataList.length,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <div className="container-white">
        <div className="container-img">
          <div className="container my-5 homepage">
            <Link className="btn btn-warning" to="/allVoyages">
              Torna a tutti i Viaggi
            </Link>
            <h2 className="page-title">Viaggi in corso</h2>
            <div className="table-container">
              <table id="table" className="table table-striped ">
                <thead>
                  <tr>
                    <th className="table-title" scope="col">
                      Destinazione
                    </th>
                    <th className="table-title" scope="col">
                      Data di partenza
                    </th>
                    <th className="table-title" scope="col">
                      Data di arrivo
                    </th>
                    <th className="table-title" scope="col">
                      Partecipanti
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataList &&
                    dataList.map((data) => (
                      <tr key={data.id}>
                        <th scope="row">{data.destination}</th>
                        <td>{data.dateStart}</td>
                        <td>{data.dateFinish}</td>
                        <td>
                          <Link className="btn btn-primary" to={`/${data.id}`}>
                            Vedi partecipanti
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <section id="form-viaggi">
              <h2 className="page-title">Programma il prossimo viaggio</h2>
              <div className="form-container">
                <form
                  className="row align-items-end g-3 "
                  onSubmit={handleFormSubmit}
                >
                  <div className="col-3 mb-3">
                    <label htmlFor="destination" className="form-label">
                      Destinazione
                    </label>
                    <input
                      value={inputValue.destination}
                      name="destination"
                      onChange={handleFormChange}
                      type="text"
                      className="form-control"
                      id="destination"
                      aria-describedby="destinazione"
                    />
                  </div>
                  <div className="col-3 mb-3">
                    <label for="date-start" className="form-label">
                      Data di partenza
                    </label>
                    <input
                      value={inputValue.dateStart}
                      name="dateStart"
                      type="text"
                      className="form-control"
                      id="date-start"
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="col-3 mb-3">
                    <label for="date-finish" className="form-label">
                      Data di Ritorno
                    </label>
                    <input
                      value={inputValue.dateFinish}
                      name="dateFinish"
                      type="text"
                      className="form-control"
                      id="date-finish"
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="col-3 mb-3">
                    <button type="submit" className="btn btn-primary">
                      Crea
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
