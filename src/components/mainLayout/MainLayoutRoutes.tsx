import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoutes from "../../protectedRoutes";
import MyServices from "../../screens/MyServices";
const MainLayoutRoutes = () => {


  return (
    <>

      <div id="page-wrapper" className="row">
      

        <div className="ps-0 col-md-10 col-12">
          <div>
            <Routes>
              <Route path="/" element={<ProtectedRoutes />}>
                <>
                  <Route path="/dashboard" element={<MyServices />} />
                 
                </>
              </Route>
              <Route
                path="*"
                element={<Navigate to="/page-not-found" replace />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayoutRoutes;
