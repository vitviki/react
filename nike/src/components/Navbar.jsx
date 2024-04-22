import { useState } from "react";
import { headerLogo3 } from "../assets/images";
import { hamburger, cross } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(hamburger);

  const handleClick = () => {
    setToggleIcon(toggleIcon === hamburger ? cross : hamburger);
  };

  return (
    <header className="padding-x py-8 absolute w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo3} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-600 hover:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign up</a> <span>/</span> <a href="/">Sign in</a>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={toggleIcon}
            alt="Toggle Icon"
            width={25}
            height={25}
            className="hover:cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
