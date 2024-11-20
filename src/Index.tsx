import React from "react";
import { Outlet } from "react-router-dom";
import Pageheader from "./components/multiple-use/header/Pageheader";

const Index: React.FC = () => {
  return (
    <>
      <Pageheader />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default Index;
