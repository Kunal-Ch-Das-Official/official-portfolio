import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth-context/AuthContext";
import Dashboard from "./component/one-time/dashboard/Dashboard";
import PrivateRoute from "./private-route/PrivateRoute";
import LoginForm from "./component/one-time/admin-login-form/LoginForm";
import Reviews from "./pages/reviews/Reviews";
import DashboardBody from "./pages/dashboard-body/DashboardBody";
import PostProject from "./pages/projects/PostProject";
import ManageProject from "./pages/projects/ManageProject";
import ManageResume from "./pages/resume/ManageResume";
import PostResume from "./pages/resume/PostResume";

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
              <Route path="/dashboard/project-post" element={<PostProject />}/>
              <Route path="/dashboard/project-manage" element={<ManageProject />}/>
              <Route path="/dashboard/resume-post" exact element={<PostResume />} />
              <Route path="/dashboard/resume-manage" exact element={<ManageResume />} />
              <Route path="/dashboard/review-manage" exact element={< Reviews/>} />
            </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
