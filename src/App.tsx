import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/customCss/style.css";
import "./assets/customCss/media.css";
import Login from "./screens/login";
import MainLayoutRoutes from "./components/mainLayout/MainLayoutRoutes";
import PageNotFound from "./screens/PageNotFound";
function App() {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="*" element={<MainLayoutRoutes />} />
          <Route path="/page-not-found" element={<PageNotFound />} />        
        </Routes>
      </div>
    </>
  );
}

export default App;
