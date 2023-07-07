import { Navigate, Outlet } from "react-router-dom"

const RequireAuth = () => {
    
  const token = localStorage.getItem("pureBeautyToken");

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default RequireAuth;
