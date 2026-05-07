import { Navigate, Outlet } from "react-router-dom";
import { decryptData } from "../utilities/utils";



const useAuth = () => {
  const _token = decryptData("trackHireToken");
  const admin = decryptData("trackhHireAdmin");
  if (_token ||admin ) {
    return {
      auth: true,
    };
  } else {
    return {
      auth: true,
    };
  }
};

const ProtectedRoutes = () => {
  const { auth } = useAuth();

  return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoutes;
