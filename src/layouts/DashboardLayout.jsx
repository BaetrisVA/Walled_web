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

//buat ngecek udh login belom disini
