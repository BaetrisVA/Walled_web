import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function DashboardLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default DashboardLayout;
