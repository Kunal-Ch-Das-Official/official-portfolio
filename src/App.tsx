import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./Index";
import Landing from "./pages/landing/Landing"; // Example child component
import AllProject from "./pages/projects/AllProject";
import RequestedProject from "./pages/projects/RequestedProject";
import NotFound from "./pages/not-found/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Index />}>
          <Route index element={<Landing />} />
          {/* Add other child routes here as needed */}
        </Route>
        {/* Project page routes  */}
        <Route path="/projects" element={<AllProject />} />
        <Route path="/project/:id" element={<RequestedProject />} />
      </Routes>
    </Router>
  );
};

export default App;
