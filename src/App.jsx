import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import HomePage from "./pages/HomePage.jsx";

const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage.jsx"));
const ServiceHubCaseStudy = lazy(() =>
  import("./pages/ServiceHubCaseStudy.jsx")
);

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="min-h-screen bg-white dark:bg-ink" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/work/uxlens-ai"
            element={<CaseStudyPage slug="uxlens-ai" />}
          />
          <Route
            path="/work/legible"
            element={<CaseStudyPage slug="legible" />}
          />
          <Route path="/work/servicehub" element={<ServiceHubCaseStudy />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
