import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CaseStudyPage from "./pages/CaseStudyPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/work/uxlens-ai"
        element={<CaseStudyPage slug="uxlens-ai" />}
      />
      <Route path="/work/legible" element={<CaseStudyPage slug="legible" />} />
    </Routes>
  );
}
