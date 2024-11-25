import React from "react";
import { Outlet } from "react-router-dom";
import Pageheader from "./components/multiple-use/header/Pageheader";
import Footer from "./components/multiple-use/footer/Footer";
import ScrollToTop from "./reuseable-functions/scroll-top/ScrollTop";
import { Helmet } from "react-helmet";
const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Kunal Chandra Das</title>
        <meta
          name="description"
          content="Welcome to the personal website of Kunal Chandra Das. Learn more about my work, projects, and skills in full-stack development, MERN stack, and system design."
        />
        <meta
          name="keywords"
          content="Kunal Chandra Das, Backoffice employee, software engineer, web developer, MERN-stack, full-stack developer, React, JavaScript, TypeScript, MongoDB, Node.js, Express.js, UX/UI design, system design, back office, Magicmind Technology, Kolkata, India"
        />
        <meta property="og:title" content="Kunal Chandra Das" />
      </Helmet>
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
