import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="h-screen w-screen flex flex-row bg-neutral-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
