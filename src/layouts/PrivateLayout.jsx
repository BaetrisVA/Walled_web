import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";

function PrivateLayout() {
  if (!localStorage.getItem("login")) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default PrivateLayout;
