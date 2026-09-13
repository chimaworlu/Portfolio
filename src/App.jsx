import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import CaseStudyPage from "./pages/CaseStudyPage.jsx";

export default function App() {
  return (
    <ThemeProvider>
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
      </Routes>
    </ThemeProvider>
  );
}
