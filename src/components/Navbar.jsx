import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 px-6 py-4 flex items-center justify-between shadow">
      <Link to="/" className="text-lg font-semibold text-blue-700 dark:text-blue-300">MyApp</Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api-demo" className="hover:underline">API Demo</Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
