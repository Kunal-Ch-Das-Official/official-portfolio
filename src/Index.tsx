import React from "react";
import { Outlet } from "react-router-dom";
import Pageheader from "./components/multiple-use/header/Pageheader";
import Footer from "./components/multiple-use/footer/Footer";

const Index: React.FC = () => {
  return (
    <>
      <Pageheader />
      <main className="min-h-screen">
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Index;
