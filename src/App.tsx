import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./Index";
import { LoginRouter } from "./routes/login-route/LoginRouter";
import NotFoundRouter from "./routes/not-found-route/NotFoundRouter";
import ForgotPasswordRouter from "./routes/forgot-password-route/ForgotPasswordRouter";
import ResetPasswordRouter from "./routes/reset-password-route/ResetPasswordRouter";
import PrivateRoute from "./private/PrivateRouter";
import RegisterRouter from "./routes/register-route/RegisterRouter";
import AdminConsole from "./Console";
import DashboardRouter from "./routes/dashboard-route/DashboardRouter";
import UploadNewProject from "./routes/projects-route/UploadNewProject";
import ManageProjects from "./routes/projects-route/ManageProjects";
import UpdateProject from "./routes/projects-route/UpdateProject";
import PreviewProject from "./routes/projects-route/PreviewProject";
import DeleteProject from "./routes/projects-route/DeleteProject";
import PostArticle from "./routes/article-route/PostArticle";
import ManageArticle from "./routes/article-route/ManageArticle";
import PreviewArticle from "./routes/article-route/PreviewArticle";
import UpdateArticle from "./routes/article-route/UpdateArticle";
import DeleteArticle from "./routes/article-route/DeleteArticle";
import ChangePassword from "./routes/admin-route/ChangePassword";
import AllAdminAccount from "./routes/admin-route/AllAdminAccount";
import ManageAllFeedback from "./routes/feedback-route/ManageAllFeedback";
import DeleteFeedback from "./routes/feedback-route/DeleteFeedback";

function App() {
  const publicRoutes = [
    {
      path: "*",
      element: <NotFoundRouter />,
    },
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/sign-up",
      element: <RegisterRouter />,
    },
    {
      path: "/sign-in",
      element: <LoginRouter />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordRouter />,
    },
    {
      path: "/reset-password/:id/:token",
      element: <ResetPasswordRouter />,
    },
  ];
  const privateRoutes = [
    // Project route
    {
      path: "/upload-project",
      element: <UploadNewProject />,
    },
    {
      path: "/update-project/:id",
      element: <UpdateProject />,
    },
    {
      path: "/preview-project/:id",
      element: <PreviewProject />,
    },
    {
      path: "/delete-project/:id",
      element: <DeleteProject />,
    },
    {
      path: "/manage-projects",
      element: <ManageProjects />,
    },

    // Blog article route
    {
      path: "/post-article",
      element: <PostArticle />,
    },
    {
      path: "/manage-articles",
      element: <ManageArticle />,
    },
    {
      path: "/preview-article/:id",
      element: <PreviewArticle />,
    },
    {
      path: "/edit-article/:id",
      element: <UpdateArticle />,
    },
    {
      path: "/remove-article/:id",
      element: <DeleteArticle />,
    },

    // Admin Route
    {
      path: "/change-password",
      element: <ChangePassword />,
    },
    {
      path: "all-registerd-users",
      element: <AllAdminAccount />,
    },

    // Feedbacks route
    {
      path: "/manage-feedbacks",
      element: <ManageAllFeedback />,
    },
    {
      path: "/remove-feedback/:id",
      element: <DeleteFeedback />,
    },
  ];
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes  */}
          {publicRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}

          <Route
            path="/admin-console"
            element={
              <PrivateRoute>
                <AdminConsole />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardRouter />} />
            {privateRoutes.map((item, index) => (
              <Route
                key={index}
                path={`/admin-console/${item.path}`}
                element={item.element}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
