import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <Navbar></Navbar>
      </div>
    </header>
  );
}
