import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="flex bg-gray-300 h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full h-screen overflow-y-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
