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
    {
      path: "/upload-project",
      element: <UploadNewProject />,
    },
    {
      path: "/manage-projects",
      element: <ManageProjects />,
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
