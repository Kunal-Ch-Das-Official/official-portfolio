import { Outlet } from "react-router-dom";
import SideBar from "./components/re-use/side-bar/SideBar";
import Footer from "./components/re-use/footer/Footer";

const AdminPanel = () => {
  return (
    <main className="min-w-full">
      <SideBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AdminPanel;
