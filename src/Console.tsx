import { Outlet } from "react-router-dom";
import SideBar from "./components/re-use/side-bar/SideBar";
import Footer from "./components/re-use/footer/Footer";

const AdminConsole = () => {
  return (
    <main className="w-full h-screen">
      <SideBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AdminConsole;
