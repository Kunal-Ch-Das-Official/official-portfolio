import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./Index";
import Landing from "./pages/landing/Landing"; // Example child component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Landing />} />
          {/* Add other child routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
