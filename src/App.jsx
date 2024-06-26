import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth-context/AuthContext";
import Dashboard from "./component/one-time/dashboard/Dashboard";
import PrivateRoute from "./private-route/PrivateRoute";
import LoginForm from "./component/one-time/admin-login-form/LoginForm";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import Reviews from "./pages/reviews/Reviews";
import DashboardBody from "./pages/dashboard-body/DashboardBody";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }>
              <Route index element={<DashboardBody />} />
              <Route path="/dashboard/project" element={<Projects />} />
              <Route path="/dashboard/resume" exact element={<Resume />} />
              <Route path="/dashboard/review" exact element={< Reviews/>} />
            </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
