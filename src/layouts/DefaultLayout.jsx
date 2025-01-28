import { Outlet } from "react-router-dom";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {" "}
      <Header />
      <main className="flex-grow-1">
        {" "}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
