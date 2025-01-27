export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg transparent-bg">
      <div className="container-fluid">
        <a className="navbar-brand me-0 pe-0" href="#">
          <img
            src="logo-placeholder-image.png"
            alt="Logo"
            id="navbar-logo"
            className="d-inline-block"
          />
        </a>
        <a href="#">
          <h1 className="text-light fw-bold fs-2 me-3">BDoctors</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Chi siamo
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Specializzazioni
              </a>
              <ul className="dropdown-menu alt-bg opacity-75">
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Medicina di base
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Cardiologia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Geriatria
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Psichiatria
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light border-top border-secondary"
                    href="#"
                  >
                    Vedi tutte
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <a href="/registration" className="btn btn-custom fw-semibold">
            Registrati
          </a>
        </div>
      </div>
    </nav>
  );
}
