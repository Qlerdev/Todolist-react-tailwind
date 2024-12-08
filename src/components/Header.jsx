import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(true);
  return (
    <header className=" bg-cyan-400	w-full min-h-[80px] shadow-lg font-bold flex justify-between items-center px-[50px]">
      <div className="logo">
        <span className="text-[20px]">
          <span className="text-white">Task</span> Management
        </span>
      </div>
      <div className="theme-container">
        <button onClick={() => setShow(!show)}>{show ? <FaSun className="text-[30px]" /> : <FaMoon className="text-[30px]" />}</button>
      </div>
    </header>
  );
}

export default Header;
