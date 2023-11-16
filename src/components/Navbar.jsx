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
        <p className="blue-gradient_text">MV</p>
      </NavLink>
      <nav className="">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
