import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./Index";
import Landing from "./pages/landing/Landing"; // Example child component
import AllProject from "./pages/projects/AllProject";
import RequestedProject from "./pages/projects/RequestedProject";
import NotFound from "./pages/not-found/NotFound";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import BlogArticle from "./pages/blog-article/BlogArticle";
import PreviewResume from "./pages/resume/PreviewResume";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Index />}>
          <Route index element={<Landing />} />
          {/* Projects route  */}
          <Route path="/projects" element={<AllProject />} />
          <Route path="/project/:id" element={<RequestedProject />} />
          {/* About Route  */}
          <Route path="/about" element={<About />} />
          {/* Contact Route  */}
          <Route path="/contact" element={<Contact />} />
          {/* Tech Blog Article Route  */}
          <Route path="/tech-article" element={<BlogArticle />} />
          {/* Preview Resume  */}
          <Route path="/kunal-chandra-das-resume" element={<PreviewResume />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
