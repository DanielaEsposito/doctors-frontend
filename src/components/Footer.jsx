import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer custom-bg pt-4">
      <div className="text-light pb-4">
        <div>
          <div className="row g-0">
            <div className="d-flex">
              <div className="col-3">
                <div className="text-center">
                  <h3 className="fw-bold">BDoctors</h3>
                  <div className="footer-quote">
                    "dalla ricerca alla cura: il dottore giusto ti aspetta"
                  </div>
                </div>
              </div>
              <div className="col-9">
                <ul className="ms-5 d-flex justify-content-end align-items-center h-100">
                  <li className="d-inline-block mx-5">Chi siamo</li>
                  <li className="d-inline-block me-5">F.A.Q.</li>
                  <li className="d-inline-block me-5">
                    Condizioni di servizio
                  </li>
                  <li className="d-inline-block me-4">Informativa Privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end copyright text-light pb-3 pe-4">
        Copyright BDoctors © 2025 All rights reserved. Powered by 4 Goblins
        S.r.l
      </div>
    </footer>
  );
}
