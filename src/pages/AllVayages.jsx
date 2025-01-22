import { Link } from "react-router-dom";

export default function AllVoyages() {
  return (
    <>
      <div className="container">
        <div className="container-white">
          <h2 className="page-title">Tutti i viaggi</h2>
          <div className="container-button my-3">
            <h4>Visualizza i viaggi che ti interessa contollare</h4>
            <Link className="btn btn-success me-2" to="/voyage">
              In Viaggio
            </Link>
            <Link className="btn btn-warning me-2">In partenza</Link>
            <Link className="btn btn-danger me-2">Casa</Link>
          </div>
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
                    Stato
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Malesia</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge  rounded-pill text-bg-success">
                      In Viaggio{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Portogallo</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge  rounded-pill text-bg-success">
                      In Viaggio{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Madrid</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge rounded-pill text-bg-warning">
                      In Partenza{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Grecia</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge  rounded-pill text-bg-success">
                      In Viaggio{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Austria</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge rounded-pill text-bg-warning">
                      in Partenza{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Congo</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge rounded-pill text-bg-danger">
                      Casa{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Malesia</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge  rounded-pill text-bg-success">
                      In Viaggio{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Portogallo</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge  rounded-pill text-bg-success">
                      In Viaggio{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Madrid</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge rounded-pill text-bg-warning">
                      In Partenza{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Grecia</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge  rounded-pill text-bg-success">
                      In Viaggio{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Malesia</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge  rounded-pill text-bg-success">
                      In Viaggio{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Portogallo</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge  rounded-pill text-bg-success">
                      In Viaggio{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Madrid</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge rounded-pill text-bg-warning">
                      In Partenza{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Grecia</th>
                  <td>21-01-25</td>
                  <td>21-02-25</td>
                  <td>
                    <span className="badge  rounded-pill text-bg-success">
                      In Viaggio{" "}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
