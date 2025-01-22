import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "./context/globalContext";
// //LAYOUTS
import DefaultLayout from "./layouts/defaultLayout";
//PAGES
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import VoyageList from "./pages/VoyageList";
import AllVoyages from "./pages/allVayages";
function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index Component={HomePage} />
          <Route Component={DefaultLayout}>
            <Route path="/about" Component={AboutPage} />
            <Route path="/allVoyages" Component={AllVoyages} />
            <Route path="/voyage" Component={VoyageList} />
            <Route path="/:id" Component={People} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
