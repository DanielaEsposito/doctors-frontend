import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "./context/globalContext";
//LAYOUTS
import DefaultLayout from "./layouts/defaultLayout";
import HomepageLayout from "./layouts/HomepageLayout";
//PAGES
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import DoctorShowPage from "./pages/DoctorShowPage";
import RegistrationPage from "./pages/RegistrationPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={HomepageLayout}>
            <Route index Component={HomePage} />
          </Route>
          <Route Component={DefaultLayout}>
            <Route path="/about" Component={AboutPage} />
            <Route path="*" Component={NotFound} />
            <Route path=":id" element={<DoctorShowPage />} />
            <Route path="/registration" Component={RegistrationPage} />
            <Route path="/search" Component={SearchPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
