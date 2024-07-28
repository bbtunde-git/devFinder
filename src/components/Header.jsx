import { IoMoonSharp } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className=" w-full md:w-[80%] lg:w-[70%] flex justify-between">
      <h1
        className={` text-lg font-bold text-${
          theme === "light" ? "d-dark" : "c-white"
        } `}
      >
        devfinder
      </h1>
      <div onClick={toggleTheme} className=" cursor-pointer ">
        {theme === "light" ? (
          <span className="flex items-center gap-2 text-c-light-gray ">
            {" "}
            <span> Dark</span> <IoMoonSharp />{" "}
          </span>
        ) : (
          <span className="flex items-center gap-2 text-c-white ">
            {" "}
            <span>Light</span> <MdSunny />{" "}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
