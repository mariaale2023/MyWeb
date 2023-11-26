import { NavLink } from "react-router-dom";
import MV from "../assets/images/MV_icon.png";
const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={
          "w-20 h-20 p-0.5 bg-pink-100 rounded-full items-center flex justify-center font-bold shadow-md"
        }
      >
        {/* <p className="pink-gradient_text">MV</p> */}
        <div>
          <img src={MV} alt="MV in donut letters" />
        </div>
      </NavLink>
      <nav className="flex gap-7   sm:text-2xl md:text-4xl lg:text-6xl backdrop:font-medium ">
        {/* <nav className="flex flex-col sm:flex-row gap-7 text-5xl sm:text-xl font-medium"> */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-rose-500" : "text-pink-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-rose-500" : "text-pink-400"
          }
        >
          Proyects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
