import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./Index";
import { LoginRouter } from "./routes/login-route/LoginRouter";
import { lazy, Suspense } from "react";
import AdminConsole from "./Console";
import PrivateRoute from "./private/PrivateRouter";
import DashboardRouter from "./routes/dashboard-route/DashboardRouter";
const NotFoundRouter = lazy(
  () => import("./routes/not-found-route/NotFoundRouter")
);

const ForgotPasswordRouter = lazy(
  () => import("./routes/forgot-password-route/ForgotPasswordRouter")
);

const ResetPasswordRouter = lazy(
  () => import("./routes/reset-password-route/ResetPasswordRouter")
);
const RegisterRouter = lazy(
  () => import("./routes/register-route/RegisterRouter")
);
const UploadNewProject = lazy(
  () => import("./routes/projects-route/UploadNewProject")
);
const PostArticle = lazy(() => import("./routes/article-route/PostArticle"));
const ChangePassword = lazy(
  () => import("./routes/admin-route/ChangePassword")
);
const SendResponse = lazy(() => import("./routes/emails-route/SendResponse"));
const UploadResume = lazy(() => import("./routes/resume-route/UploadResume"));

const ManageProjects = lazy(
  () => import("./routes/projects-route/ManageProjects")
);
const UpdateProject = lazy(
  () => import("./routes/projects-route/UpdateProject")
);
const PreviewProject = lazy(
  () => import("./routes/projects-route/PreviewProject")
);
const DeleteProject = lazy(
  () => import("./routes/projects-route/DeleteProject")
);

const ManageArticle = lazy(
  () => import("./routes/article-route/ManageArticle")
);
const PreviewArticle = lazy(
  () => import("./routes/article-route/PreviewArticle")
);
const UpdateArticle = lazy(
  () => import("./routes/article-route/UpdateArticle")
);
const DeleteArticle = lazy(
  () => import("./routes/article-route/DeleteArticle")
);

const AllAdminAccount = lazy(
  () => import("./routes/admin-route/AllAdminAccount")
);
const DeactivateAccount = lazy(
  () => import("./routes/admin-route/DeactivateAccount")
);

const ManageAllFeedback = lazy(
  () => import("./routes/feedback-route/ManageAllFeedback")
);
const DeleteFeedback = lazy(
  () => import("./routes/feedback-route/DeleteFeedback")
);

const ManageAllEmails = lazy(
  () => import("./routes/emails-route/ManageAllEmails")
);
const DeleteEmail = lazy(() => import("./routes/emails-route/DeleteEmail"));

const ManageResume = lazy(() => import("./routes/resume-route/ManageResume"));
const UpdateResume = lazy(() => import("./routes/resume-route/UpdateResume"));
const DeleteResume = lazy(() => import("./routes/resume-route/DeleteResume"));

import LoadingSpinner from "./utils/non-functional/loading-spinner/LoadingSpinner";

function App() {
  const publicRoutes = [
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/sign-in",
      element: <LoginRouter />,
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <NotFoundRouter />
        </Suspense>
      ),
    },

    {
      path: "/sign-up",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <RegisterRouter />
        </Suspense>
      ),
    },

    {
      path: "/forgot-password",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <ForgotPasswordRouter />{" "}
        </Suspense>
      ),
    },
    {
      path: "/reset-password/:id/:token",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <ResetPasswordRouter />
        </Suspense>
      ),
    },
  ];
  const privateRoutes = [
    // Project route
    {
      path: "/upload-project",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <UploadNewProject />
        </Suspense>
      ),
    },
    {
      path: "/update-project/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <UpdateProject />
        </Suspense>
      ),
    },
    {
      path: "/preview-project/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <PreviewProject />
        </Suspense>
      ),
    },
    {
      path: "/delete-project/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <DeleteProject />
        </Suspense>
      ),
    },
    {
      path: "/manage-projects",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <ManageProjects />
        </Suspense>
      ),
    },

    // Resume route
    {
      path: "/upload-resume",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <UploadResume />
        </Suspense>
      ),
    },

    {
      path: "/manage-resume",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <ManageResume />
        </Suspense>
      ),
    },
    {
      path: "/update-resume/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <UpdateResume />
        </Suspense>
      ),
    },
    {
      path: "/delete-resume/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <DeleteResume />
        </Suspense>
      ),
    },

    // Blog article route
    {
      path: "/post-article",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <PostArticle />
        </Suspense>
      ),
    },
    {
      path: "/manage-articles",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <ManageArticle />
        </Suspense>
      ),
    },
    {
      path: "/preview-article/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <PreviewArticle />
        </Suspense>
      ),
    },
    {
      path: "/edit-article/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <UpdateArticle />
        </Suspense>
      ),
    },
    {
      path: "/remove-article/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <DeleteArticle />
        </Suspense>
      ),
    },

    // Admin Route
    {
      path: "/change-password",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <ChangePassword />
        </Suspense>
      ),
    },
    {
      path: "/all-registerd-users",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <AllAdminAccount />
        </Suspense>
      ),
    },
    {
      path: "/deactivate-account/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <DeactivateAccount />
        </Suspense>
      ),
    },

    // Feedbacks route
    {
      path: "/manage-feedbacks",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <ManageAllFeedback />
        </Suspense>
      ),
    },
    {
      path: "/remove-feedback/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <DeleteFeedback />
        </Suspense>
      ),
    },

    // Email Route
    {
      path: "/manage-all-emails",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <ManageAllEmails />
        </Suspense>
      ),
    },
    {
      path: "/compose-mail/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <SendResponse />
        </Suspense>
      ),
    },
    {
      path: "/delete-mail/:id",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <DeleteEmail />
        </Suspense>
      ),
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
