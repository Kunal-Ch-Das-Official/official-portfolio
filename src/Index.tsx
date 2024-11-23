import React from "react";
import { Outlet } from "react-router-dom";
import Pageheader from "./components/multiple-use/header/Pageheader";
import Footer from "./components/multiple-use/footer/Footer";
import ScrollToTop from "./reuseable-functions/scroll-top/ScrollTop";

const Index: React.FC = () => {
  return (
    <>
      <Pageheader />
      <main className="min-h-screen">
        <Outlet />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default Index;
