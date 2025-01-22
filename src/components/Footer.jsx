import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="left-footer">
          <Link to={"/about"}>
            <span className="fs-5">Viaggi</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
