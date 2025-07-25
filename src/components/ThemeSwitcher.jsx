import { useTheme } from "../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="ml-4 px-2 py-1 rounded border bg-gray-200 dark:bg-gray-700"
      onClick={toggleTheme}
      title="Switch theme"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default ThemeSwitcher;
