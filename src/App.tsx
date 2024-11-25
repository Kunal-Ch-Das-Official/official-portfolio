import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Index from "./Index";
import Landing from "./pages/landing/Landing"; // Example child component

const AllProject = lazy(() => import("./pages/projects/AllProject"));
const RequestedProject = lazy(
  () => import("./pages/projects/RequestedProject")
);
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));

const BlogArticle = lazy(() => import("./pages/blog-article/BlogArticle"));
const PreviewResume = lazy(() => import("./pages/resume/PreviewResume"));
const RequestedBlog = lazy(() => import("./pages/blog-article/RequestedBlog"));
import NotFound from "./pages/not-found/NotFound";

import PageLoader from "./utils/page-loader/PageLoader";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Index />}>
          <Route index element={<Landing />} />
          {/* Projects route  */}

          <Route
            path="/projects"
            element={
              <Suspense fallback={<PageLoader />}>
                <AllProject />{" "}
              </Suspense>
            }
          />

          <Route
            path="/project/:id"
            element={
              <Suspense fallback={<PageLoader />}>
                <RequestedProject />
              </Suspense>
            }
          />
          {/* About Route  */}
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            }
          />
          {/* Contact Route  */}
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            }
          />
          {/* Tech Blog Article Route  */}
          <Route
            path="/tech-article"
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogArticle />
              </Suspense>
            }
          />
          <Route
            path="/tech-article/:id"
            element={
              <Suspense fallback={<PageLoader />}>
                <RequestedBlog />
              </Suspense>
            }
          />
          {/* Preview Resume  */}
          <Route
            path="/kunal-chandra-das-resume"
            element={
              <Suspense fallback={<PageLoader />}>
                <PreviewResume />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
