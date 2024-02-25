import { NavLink } from "react-router-dom";
import MV from "../assets/images/MV_icon.png";

import { socialLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={
          "w-20 h-20 p-0.5 bg-pink-100 rounded-full items-center flex justify-center font-bold shadow-md"
        }
      >
        <div>
          <img src={MV} alt="MV in donut letters" />
        </div>
      </NavLink>

      <nav className="flex flex-col gap-3 justify-end items-end">
        <div className="flex flex-col sm:flex-row sm:gap-3 sm:text-2xl md:text-4xl md:gap-7  lg:text-6xl backdrop:font-medium">
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
            Projects
          </NavLink>
        </div>

        <div className="flex flex-row gap-2 mt-2 sm:mt-0 justify-center items-center">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className={`lg:w-10 lg:h-10  sm:w-6 sm:h-6 ${
                  link.name === "GitHub" || link.name === "LinkedIn"
                    ? "text-rose-500"
                    : ""
                }`}
              />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
