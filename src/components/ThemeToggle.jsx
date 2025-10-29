import React from "react";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
