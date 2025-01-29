import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg transparent-bg">
      <div className="container-fluid">
        <NavLink className="navbar-brand me-0 pe-0" to="/">
          <img
            src="logo-placeholder-image.png"
            alt="Logo"
            id="navbar-logo"
            className="d-inline-block"
          />
        </NavLink>
        <NavLink to="/">
          <h1 className="text-light fw-bold fs-2 me-3">BDoctors</h1>
        </NavLink>
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
              <NavLink className="nav-link text-light" to="about">
                Chi siamo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/search">
                Specializzazioni
              </NavLink>
            </li>
          </ul>
          <NavLink to="/registration" className="btn btn-custom fw-semibold">
            Registrati
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
