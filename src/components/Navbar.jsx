import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={
          "w-10 h-10 bg-white rounded-lg items-center flex justify-center font-bold shadow-md"
        }
      >
        <p className="pink-gradient_text">MV</p>
      </NavLink>
      <nav className="flex gap-7 text-xl font-medium ">
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
