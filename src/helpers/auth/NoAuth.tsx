import { Navigate, Outlet } from "react-router-dom"

const NoAuth = () => {
  const token = localStorage.getItem("pureBeautyToken");

  return !token ? <Outlet /> : <Navigate to={"/"} />;
};

export default NoAuth;
