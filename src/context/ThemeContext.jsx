import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // First-ever visit (no manual choice saved yet): keep following the
  // system preference live until the user makes an explicit choice.
  useEffect(() => {
    if (localStorage.getItem("theme")) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    function handleChange(event) {
      setTheme(event.matches ? "dark" : "light");
    }

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  function setThemeAndPersist(nextTheme) {
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  function toggleTheme() {
    setThemeAndPersist(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
