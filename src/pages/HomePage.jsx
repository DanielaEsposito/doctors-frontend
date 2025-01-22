import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="wrapper">
      <div className="container-img">
        <img
          className="img-homepage"
          src="img\bg.jpg"
          alt="homepageBackground"
        />
        <div className="homepage">
          <div className="container-data">
            <h1 className="homepage-title">BOOLEAN CRM</h1>
            <h2 className="homepage-subtitle">
              Gestire le inerazioni con i tuoi clienti non è mai stato così
              facile
            </h2>
            <div className="login-container">
              <a
                className="link-to-login"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Fai il login per entrare
              </a>
              <div
                className="collapse input-login-container"
                id="collapseExample"
              >
                <div className="my-4">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Nome o Indirizzo E-mail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>

                    <Link type="submit" className="login-btn" to="/allVoyages">
                      Login
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
