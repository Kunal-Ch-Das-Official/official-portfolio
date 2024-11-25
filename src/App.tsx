import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Index from "./Index";

// Lazy load pages
const Landing = lazy(() => import("./pages/landing/Landing"));
const AllProject = lazy(() => import("./pages/projects/AllProject"));
const RequestedProject = lazy(
  () => import("./pages/projects/RequestedProject")
);
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const BlogArticle = lazy(() => import("./pages/blog-article/BlogArticle"));
const PreviewResume = lazy(() => import("./pages/resume/PreviewResume"));
const RequestedBlog = lazy(() => import("./pages/blog-article/RequestedBlog"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

import PageLoader from "./utils/page-loader/PageLoader";
import { Helmet } from "react-helmet";

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Kunal Chandra Das</title>
        <meta
          name="description"
          content="Welcome to the personal website of Kunal Chandra Das. Learn more about my work, projects, and skills in full-stack development, MERN stack, and system design."
        />
        <meta
          name="keywords"
          content="Kunal Chandra Das, Backoffice employee, software engineer, web developer, MERN-stack, full-stack developer, React, JavaScript, TypeScript, MongoDB, Node.js, Express.js, UX/UI design, system design, back office, Magicmind Technology, Kolkata, India"
        />
        <meta property="og:title" content="Kunal Chandra Das" />
      </Helmet>
      <Router>
        <Routes>
          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />

          {/* Main route (Index page) */}
          <Route path="/" element={<Index />}>
            <Route
              index
              element={
                <Suspense fallback={<PageLoader />}>
                  <Landing />
                </Suspense>
              }
            />

            {/* Projects route */}
            <Route
              path="projects"
              element={
                <Suspense fallback={<PageLoader />}>
                  <AllProject />
                </Suspense>
              }
            />

            {/* Specific project route */}
            <Route
              path="project/:id"
              element={
                <Suspense fallback={<PageLoader />}>
                  <RequestedProject />
                </Suspense>
              }
            />

            {/* About route */}
            <Route
              path="about"
              element={
                <Suspense fallback={<PageLoader />}>
                  <About />
                </Suspense>
              }
            />

            {/* Contact route */}
            <Route
              path="contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Contact />
                </Suspense>
              }
            />

            {/* Tech Blog Article route */}
            <Route
              path="tech-article"
              element={
                <Suspense fallback={<PageLoader />}>
                  <BlogArticle />
                </Suspense>
              }
            />
            <Route
              path="tech-article/:id"
              element={
                <Suspense fallback={<PageLoader />}>
                  <RequestedBlog />
                </Suspense>
              }
            />

            {/* Preview Resume route */}
            <Route
              path="kunal-chandra-das-resume"
              element={
                <Suspense fallback={<PageLoader />}>
                  <PreviewResume />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>{" "}
    </>
  );
};

export default App;
