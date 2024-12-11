import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

function Header({ theme, setTheme }) {
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <header className=" w-full min-h-[80px] shadow-lg font-bold flex justify-between items-center px-[50px]">
      <div className="logo">
        <span className="text-[20px]">
          <span>Task Management</span>
        </span>
      </div>
      <div className="theme-container">
        <button onClick={toggleTheme} className="text-white text-2xl">
          {theme === "light" ? <FaMoon className="text-black" /> : <FaSun className="text-yellow-300" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
