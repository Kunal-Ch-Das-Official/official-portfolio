import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth-context/AuthContext";
import Dashboard from "./component/one-time/dashboard/Dashboard";
import PrivateRoute from "./private-route/PrivateRoute";
import LoginForm from "./component/one-time/admin-login-form/LoginForm";
import DashboardBody from "./pages/dashboard-body/DashboardBody";
import PostProject from "./pages/projects/PostProject";
import ManageProject from "./pages/projects/ManageProject";
import ManageResume from "./pages/resume/ManageResume";
import PostResume from "./pages/resume/PostResume";
import EditResume from "./pages/resume/EditResume";
import DeleteResume from "./pages/resume/DeleteResume";
import EditProject from "./pages/projects/EditProject";
import DeleteProject from "./pages/projects/DeleteProject";
import ManageReviews from "./pages/reviews/ManageReviews";
import EditReview from "./pages/reviews/EditReview";
import DeleteReview from "./pages/reviews/DeleteReview";
import SingleReview from "./pages/reviews/SingleReview";
import ManageEmails from "./pages/emails/ManageEmails";
import DedicatedEmail from "./pages/emails/DedicatedEmail";
import ManageBlogs from "./pages/blogs/ManageBlogs";
import UploadBlogs from "./pages/blogs/UploadBlogs";
import EditBlogs from "./pages/blogs/EditBlogs";
import DeleteBlogs from "./pages/blogs/DeleteBlogs";
import BlogOverView from "./pages/blogs/BlogOverView";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="*" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardBody />} />
            <Route
              path="/dashboard/project-manage"
              element={<ManageProject />}
            />
            <Route path="/dashboard/project-post" element={<PostProject />} />
            <Route
              path="/dashboard/project-edit/:id"
              exact
              element={<EditProject />}
            />
            <Route
              path="/dashboard/project-delete/:id"
              exact
              element={<DeleteProject />}
            />

            <Route
              path="/dashboard/resume-manage"
              exact
              element={<ManageResume />}
            />
            <Route
              path="/dashboard/resume-post"
              exact
              element={<PostResume />}
            />
            <Route
              path="/dashboard/resume-edit/:id"
              exact
              element={<EditResume />}
            />
            <Route
              path="/dashboard/resume-delete/:id"
              exact
              element={<DeleteResume />}
            />

            <Route
              path="/dashboard/blog-manage"
              exact
              element={<ManageBlogs />}
            />
            <Route
              path="/dashboard/blog-post"
              exact
              element={<UploadBlogs />}
            />
            <Route
              path="/dashboard/blog-overview/:id"
              exact
              element={<BlogOverView />}
            />
            <Route
              path="/dashboard/blog-edit/:id"
              exact
              element={<EditBlogs />}
            />
            <Route
              path="/dashboard/blog-delete/:id"
              exact
              element={<DeleteBlogs />}
            />

            <Route
              path="/dashboard/review-manage"
              exact
              element={<ManageReviews />}
            />
            <Route
              path="/dashboard/review/:id"
              exact
              element={<SingleReview />}
            />
            <Route
              path="/dashboard/review-edit/:id"
              exact
              element={<EditReview />}
            />
            <Route
              path="/dashboard/review-delete/:id"
              exact
              element={<DeleteReview />}
            />

            <Route
              path="/dashboard/emails-manage"
              exact
              element={<ManageEmails />}
            />
            <Route
              path="/dashboard/email/:id"
              exact
              element={<DedicatedEmail />}
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
