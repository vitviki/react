import { useState } from "react";
import { headerLogo3 } from "../assets/images";
import { hamburger, cross } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(hamburger);

  const handleClick = () => {
    setToggleIcon(toggleIcon === hamburger ? cross : hamburger);
  };

  return (
    <header className="padding-x py-8 sticky top-0 z-20 w-full bg-white">
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
        <Button label="Sign up / Sign in" />
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
