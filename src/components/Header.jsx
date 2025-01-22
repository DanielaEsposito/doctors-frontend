import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1>B-CRM</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/allVoyages"
                >
                  Viaggi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#"></a>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#"></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"></a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#"></a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true"></a>
              </li>
            </ul>
            <form className="d-flex align-items-end mb-2" role="search">
              <Link to="/" className="logout float-end fw-semibold">
                Logout
              </Link>
              <Link className=" ms-2">
                <i className="fa-regular fa-user fs-4"></i>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
{
  /* <Link to="/" class="logout float-end">
              Logout
            </Link> */
}
