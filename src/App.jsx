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
import EditResume from "./pages/resume/EditResume";
import DeleteResume from "./pages/resume/DeleteResume";
import EditProject from "./pages/projects/EditProject";
import DeleteProject from "./pages/projects/DeleteProject";

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
              <Route path="/dashboard/project-manage" element={<ManageProject />}/>
              <Route path="/dashboard/project-post" element={<PostProject />}/>
              <Route path="/dashboard/project-edit/:id" exact element={<EditProject />} />
              <Route path="/dashboard/project-delete/:id" exact element={<DeleteProject />} />


              <Route path="/dashboard/resume-manage" exact element={<ManageResume />} />
              <Route path="/dashboard/resume-post" exact element={<PostResume />} />
              <Route path="/dashboard/resume-edit/:id" exact element={<EditResume />} />
              <Route path="/dashboard/resume-delete/:id" exact element={<DeleteResume />} />



              <Route path="/dashboard/review-manage" exact element={< Reviews/>} />
            </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
